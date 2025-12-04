// Netlify Function to send WhatsApp verification code
// Requires Twilio WhatsApp API or similar service

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const { phone, name } = JSON.parse(event.body);
        
        // Validate phone number (Pakistani format)
        if (!phone || !phone.match(/^03[0-9]{9}$/)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid phone number format. Please use format: 03XXXXXXXXX' })
            };
        }

        // Generate 6-digit verification code
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        
        // Format phone number for WhatsApp (add country code for Pakistan: +92)
        const whatsappNumber = `+92${phone.substring(1)}`; // Remove leading 0 and add +92
        
        // Store verification code (in production, use a database or Redis)
        // For now, we'll return it (in production, store it securely)
        // You can use Netlify's KV store or a database
        
        // Send WhatsApp message using Twilio
        // You'll need to set these environment variables in Netlify:
        // TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM
        const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
        const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
        const twilioWhatsAppFrom = process.env.TWILIO_WHATSAPP_FROM || 'whatsapp:+14155238886'; // Twilio sandbox
        
        let messageSent = false;
        
        if (twilioAccountSid && twilioAuthToken) {
            try {
                // Use Twilio API to send WhatsApp message
                const twilio = require('twilio');
                const client = twilio(twilioAccountSid, twilioAuthToken);
                
                const message = await client.messages.create({
                    from: twilioWhatsAppFrom,
                    to: `whatsapp:${whatsappNumber}`,
                    body: `Hello ${name || 'there'}! Your verification code for Hasan Irfan Perfumes is: ${verificationCode}. This code will expire in 10 minutes.`
                });
                
                messageSent = true;
            } catch (twilioError) {
                console.error('Twilio error:', twilioError);
                // Fall through to alternative method
            }
        }
        
        // Alternative: If Twilio is not configured, use WhatsApp Business API or other services
        // Option 1: WhatsApp Business API (requires Meta Business account)
        // Option 2: Use a service like MessageBird, Vonage, or similar
        // Option 3: For development/testing, log the code
        if (!messageSent) {
            console.log(`[DEV MODE] Verification code for ${phone}: ${verificationCode}`);
            // In development mode, return code for testing
            // In production, you MUST configure a WhatsApp service
        }
        
        // Store code temporarily with expiration (10 minutes)
        // In production, use Netlify KV, Redis, or a database
        const codeData = {
            code: verificationCode,
            phone: phone,
            expiresAt: Date.now() + (10 * 60 * 1000), // 10 minutes
            attempts: 0
        };
        
        // Store in Netlify KV if available, otherwise use a simple approach
        // For now, we'll encode it in the response (in production, use secure storage)
        const codeToken = Buffer.from(JSON.stringify(codeData)).toString('base64');
        
        return {
            statusCode: 200,
            body: JSON.stringify({ 
                success: true,
                message: messageSent 
                    ? 'Verification code sent to your WhatsApp!' 
                    : 'Verification code generated (check console in dev mode)',
                codeToken: codeToken, // Temporary token to verify code
                // In development only - remove in production
                ...(process.env.NETLIFY_DEV && { code: verificationCode })
            }),
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

