# WhatsApp Verification Code Setup Guide

This guide explains how to set up WhatsApp verification codes for user signup.

## Overview

The signup process sends a 6-digit verification code to the user's WhatsApp number to confirm their phone number before creating an account.

## Setup Options

### Option 1: Twilio WhatsApp API (Recommended for Production)

Twilio provides a reliable WhatsApp messaging service.

#### Step 1: Create Twilio Account
1. Go to [Twilio.com](https://www.twilio.com) and sign up
2. Verify your email and phone number
3. Get your Account SID and Auth Token from the dashboard

#### Step 2: Enable WhatsApp Sandbox (For Testing)
1. Go to Twilio Console → Messaging → Try it out → Send a WhatsApp message
2. Follow instructions to join the sandbox (send "join [code]" to the Twilio number)
3. Note the WhatsApp number (usually `whatsapp:+14155238886`)

#### Step 3: Request Production Access (For Live Site)
1. Go to Twilio Console → Messaging → Settings → WhatsApp
2. Request production access (requires business verification)
3. Once approved, you'll get a dedicated WhatsApp Business number

#### Step 4: Configure Netlify Environment Variables
1. Go to your Netlify Dashboard
2. Navigate to: Site settings → Environment variables
3. Add the following variables:
   ```
   TWILIO_ACCOUNT_SID=your_account_sid_here
   TWILIO_AUTH_TOKEN=your_auth_token_here
   TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
   ```
   (For production, use your approved WhatsApp Business number)

#### Step 5: Deploy
The functions will automatically use these environment variables when deployed.

**Cost**: ~$0.005 per message (very affordable)

---

### Option 2: WhatsApp Business API (Meta)

For businesses with Meta Business account.

#### Requirements:
- Meta Business Account
- WhatsApp Business API access
- Business verification

#### Setup:
1. Create a Meta Business account
2. Apply for WhatsApp Business API access
3. Configure webhook endpoints
4. Update the `send-whatsapp-code.js` function to use Meta's API

**Note**: This requires more setup but is free for verified businesses.

---

### Option 3: Alternative Services

You can also use:
- **MessageBird**: WhatsApp Business API provider
- **Vonage (Nexmo)**: WhatsApp messaging service
- **360dialog**: WhatsApp Business API provider

Update the `send-whatsapp-code.js` function to use your chosen service's API.

---

## Development Mode

If no WhatsApp service is configured, the system will:
- Log verification codes to the console
- Return codes in the response (dev mode only)
- Show codes in alerts for testing

**⚠️ IMPORTANT**: Remove dev mode code returns before going to production!

---

## Testing

### Test the Signup Flow:
1. Open the website
2. Click "Account" → "Sign Up"
3. Fill in the form:
   - Name
   - Email
   - Phone (Pakistani format: 03XXXXXXXXX)
   - Password (min 6 characters)
4. Click "Send Verification Code"
5. Check WhatsApp for the code (or console in dev mode)
6. Enter the 6-digit code
7. Click "Verify Code"

### Test Resend:
- Click "Resend Code" if you didn't receive it
- A new code will be generated and sent

---

## Code Expiration

- Verification codes expire after **10 minutes**
- Maximum **5 failed attempts** before requiring a new code
- Codes are single-use only

---

## Security Notes

1. **Never expose codes in production**: Remove dev mode code returns
2. **Use HTTPS**: Always use HTTPS for production
3. **Rate limiting**: Consider adding rate limiting to prevent abuse
4. **Database storage**: In production, store codes in a secure database (not in tokens)
5. **Password hashing**: Passwords should be hashed before storing (use bcrypt)

---

## Troubleshooting

### Code not received?
1. Check Twilio logs in Netlify Functions dashboard
2. Verify phone number format (must be Pakistani: 03XXXXXXXXX)
3. Check Twilio account balance
4. Verify environment variables are set correctly

### Function errors?
1. Check Netlify Function logs: `netlify functions:log`
2. Verify Twilio credentials are correct
3. Check that `twilio` package is installed (already in package.json)

### Testing locally?
1. Run `netlify dev` to test functions locally
2. Set environment variables in `.env` file (don't commit this!)
3. Codes will be logged to console in dev mode

---

## Production Checklist

- [ ] Twilio account created and verified
- [ ] Production WhatsApp number obtained
- [ ] Environment variables set in Netlify
- [ ] Dev mode code returns removed
- [ ] Tested signup flow end-to-end
- [ ] Error handling tested
- [ ] Rate limiting implemented (optional)
- [ ] Database integration for user storage (optional)

---

## Support

For issues:
- Check Netlify Function logs
- Review Twilio dashboard for message status
- Verify environment variables are set correctly
- Test with a known working phone number

---

**Last Updated**: December 2024
