// Netlify Function to verify WhatsApp code and complete signup
// In production, this should verify against stored codes and create user account

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const { email, code, name, password, codeToken } = JSON.parse(event.body);
        
        // Validate inputs
        if (!email || !code || !name || !password || !codeToken) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'All fields are required' })
            };
        }

        // Decode and verify code token
        let codeData;
        try {
            codeData = JSON.parse(Buffer.from(codeToken, 'base64').toString());
        } catch (e) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid verification session. Please request a new code.' })
            };
        }
        
        // Check if code matches
        if (codeData.code !== code) {
            codeData.attempts = (codeData.attempts || 0) + 1;
            if (codeData.attempts >= 5) {
                return {
                    statusCode: 400,
                    body: JSON.stringify({ error: 'Too many failed attempts. Please request a new code.' })
                };
            }
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid verification code. Please try again.' })
            };
        }
        
        // Check if code has expired
        if (Date.now() > codeData.expiresAt) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Verification code has expired. Please request a new code.' })
            };
        }
        
        // Check if email matches
        if (codeData.email.toLowerCase() !== email.toLowerCase()) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Email mismatch.' })
            };
        }
        
        // TODO: In production, implement:
        // 1. Hash password using bcrypt
        // 2. Check if email/phone already exists in database
        // 3. Create user in database
        // 4. Generate JWT token
        // 5. Store user session
        // 6. Send welcome email
        
        // For now, simulate successful verification
        // In production, replace this with actual database operations
        const userData = {
            id: Date.now().toString(), // Temporary ID
            name: name,
            email: email.toLowerCase(),
            createdAt: new Date().toISOString()
        };
        
        return {
            statusCode: 200,
            body: JSON.stringify({ 
                success: true,
                message: 'Account created successfully!',
                user: userData
                // In production, include JWT token here
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        
    } catch (error) {
        console.error('Error verifying code:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: 'Failed to verify code. Please try again.',
                details: process.env.NETLIFY_DEV ? error.message : undefined
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
    }
};

