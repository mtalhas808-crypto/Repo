// Netlify Function to send email verification code
// Uses SendGrid (free tier: 100 emails/day) or can be configured for other services

// Import email services (optional - only if API keys are configured)
let sgMail, Resend;
try {
    sgMail = require('@sendgrid/mail');
} catch (e) {
    // SendGrid not available
}
try {
    const resendModule = require('resend');
    Resend = resendModule.Resend || resendModule.default || resendModule;
} catch (e) {
    // Resend not available
}

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const { email, name } = JSON.parse(event.body);
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid email address format' })
            };
        }

        // Generate 6-digit verification code
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        
        // Store verification code (in production, use a database or Redis)
        const codeData = {
            code: verificationCode,
            email: email.toLowerCase(),
            expiresAt: Date.now() + (10 * 60 * 1000), // 10 minutes
            attempts: 0
        };
        
        // Store in token for verification
        const codeToken = Buffer.from(JSON.stringify(codeData)).toString('base64');
        
        // Email content
        const emailSubject = 'Your Verification Code - Hasan Irfan Perfumes';
        const emailBody = `
Hello ${name || 'there'}!

Your verification code for Hasan Irfan Perfumes is:

${verificationCode}

This code will expire in 10 minutes.

If you didn't request this code, please ignore this email.

Best regards,
Hasan Irfan Perfumes Team
        `.trim();

        const emailHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a1a1a; color: #d4af37; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; }
        .code { font-size: 32px; font-weight: bold; text-align: center; color: #1a1a1a; 
                background: #fff; padding: 20px; margin: 20px 0; border: 2px solid #d4af37; 
                letter-spacing: 5px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Hasan Irfan Perfumes</h1>
        </div>
        <div class="content">
            <p>Hello ${name || 'there'}!</p>
            <p>Your verification code for Hasan Irfan Perfumes is:</p>
            <div class="code">${verificationCode}</div>
            <p>This code will expire in 10 minutes.</p>
            <p>If you didn't request this code, please ignore this email.</p>
        </div>
        <div class="footer">
            <p>Best regards,<br>Hasan Irfan Perfumes Team</p>
        </div>
    </div>
</body>
</html>
        `;

        let messageSent = false;
        
        // Option 1: SendGrid (Recommended - Free tier: 100 emails/day)
        const sendGridApiKey = process.env.SENDGRID_API_KEY;
        if (sendGridApiKey && sgMail) {
            try {
                sgMail.setApiKey(sendGridApiKey);
                
                const msg = {
                    to: email,
                    from: process.env.SENDGRID_FROM_EMAIL || 'noreply@hasan-irfan-perfumes.netlify.app',
                    subject: emailSubject,
                    text: emailBody,
                    html: emailHtml,
                };
                
                await sgMail.send(msg);
                messageSent = true;
            } catch (sendGridError) {
                console.error('SendGrid error:', sendGridError);
                // Fall through to alternative method
            }
        }
        
        // Option 2: Resend (Alternative - Free tier: 3,000 emails/month)
        const resendApiKey = process.env.RESEND_API_KEY;
        let resendError = null;
        
        if (!messageSent && Resend && resendApiKey) {
            try {
                const resendClient = new Resend(resendApiKey);
                
                const emailResult = await resendClient.emails.send({
                    from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
                    to: email,
                    subject: emailSubject,
                    html: emailHtml,
                });
                
                console.log('Resend email result:', JSON.stringify(emailResult));
                
                // Check if email was actually sent (Resend returns { id: '...' } on success)
                if (emailResult && (emailResult.id || emailResult.data)) {
                    messageSent = true;
                    console.log('Email sent successfully with ID:', emailResult.id || emailResult.data?.id);
                } else {
                    console.error('Resend returned unexpected result:', emailResult);
                    resendError = {
                        message: 'Resend returned unexpected result',
                        result: emailResult
                    };
                }
            } catch (error) {
                resendError = {
                    message: error.message || 'Unknown error',
                    statusCode: error.statusCode,
                    name: error.name
                };
                console.error('Resend error:', resendError);
            }
        }
        
        // Option 3: Development mode - log code
        if (!messageSent) {
            console.log(`[DEV MODE] Verification code for ${email}: ${verificationCode}`);
            // In development, return code for testing
        }
        
        // Always return code if email wasn't sent (dev mode or no email service configured)
        const isDevMode = process.env.NETLIFY_DEV || !messageSent;
        
        // Build response object
        const responseData = {
            success: true,
            message: messageSent 
                ? 'Verification code sent to your email!' 
                : 'Verification code generated (check console in dev mode)',
            codeToken: codeToken,
            emailSent: messageSent, // Flag to indicate if email was actually sent
            debug: {
                resendError: resendError
            }
        };
        
        // Always include code if email wasn't sent (for dev/testing)
        if (!messageSent) {
            responseData.code = verificationCode;
        }
        
        console.log('Sending response:', { ...responseData, codeToken: '[REDACTED]' }); // Log without exposing token
        
        return {
            statusCode: 200,
            body: JSON.stringify(responseData),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        
    } catch (error) {
        console.error('Error sending verification code:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: 'Failed to send verification code. Please try again.',
                details: process.env.NETLIFY_DEV ? error.message : undefined
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
    }
};

