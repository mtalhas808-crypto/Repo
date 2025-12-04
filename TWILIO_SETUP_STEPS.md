# Twilio WhatsApp Setup - Step by Step Guide

Follow these steps to configure Twilio for WhatsApp verification codes.

## Step 1: Create Twilio Account

1. Go to **https://www.twilio.com/try-twilio**
2. Click **"Sign up"** or **"Start Free Trial"**
3. Fill in your details:
   - Full Name
   - Email Address
   - Password
   - Phone Number (for verification)
4. Verify your email and phone number
5. Complete the account setup

## Step 2: Get Your Twilio Credentials

1. After logging in, you'll see the **Twilio Console Dashboard**
2. On the dashboard, you'll see:
   - **Account SID** (starts with `AC...`)
   - **Auth Token** (click "show" to reveal it)
3. **Copy both** - you'll need them for Netlify

## Step 3: Set Up WhatsApp Sandbox (For Testing)

1. In Twilio Console, go to: **Messaging** → **Try it out** → **Send a WhatsApp message**
2. You'll see a WhatsApp number (usually `+1 415 523 8886`)
3. You'll also see a **join code** (like `join example-code`)
4. **Send a WhatsApp message** to that number with the join code
   - Example: Send `join example-code` to `+1 415 523 8886`
5. You'll receive a confirmation message
6. **Note the WhatsApp number** - it will be like `whatsapp:+14155238886`

## Step 4: Configure Netlify Environment Variables

### Option A: Via Netlify Dashboard (Recommended)

1. Go to **https://app.netlify.com**
2. Select your site: **hasan-irfan-perfumes**
3. Go to: **Site settings** → **Environment variables**
4. Click **"Add a variable"**
5. Add these three variables:

   **Variable 1:**
   - Key: `TWILIO_ACCOUNT_SID`
   - Value: `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` (your Account SID)
   - Scope: All scopes
   - Click **"Save"**

   **Variable 2:**
   - Key: `TWILIO_AUTH_TOKEN`
   - Value: `your_auth_token_here` (your Auth Token)
   - Scope: All scopes
   - Click **"Save"**

   **Variable 3:**
   - Key: `TWILIO_WHATSAPP_FROM`
   - Value: `whatsapp:+14155238886` (your sandbox number from Step 3)
   - Scope: All scopes
   - Click **"Save"**

### Option B: Via Netlify CLI

Run these commands (replace with your actual values):

```bash
netlify env:set TWILIO_ACCOUNT_SID "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
netlify env:set TWILIO_WHATSAPP_FROM "whatsapp:+14155238886"
netlify env:set TWILIO_AUTH_TOKEN "your_auth_token_here"
```

## Step 5: Redeploy Your Site

After setting environment variables, redeploy:

```bash
netlify deploy --prod --dir .
```

Or trigger a new deployment from Netlify Dashboard.

## Step 6: Test the Setup

1. Go to your website: **https://hasan-irfan-perfumes.netlify.app**
2. Click **"Account"** → **"Sign Up"**
3. Fill in the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: Your WhatsApp number (must be in sandbox)
   - Password: test123
4. Click **"Send Verification Code"**
5. Check your WhatsApp - you should receive a code!
6. Enter the code and complete signup

## Important Notes

### Sandbox Limitations:
- **Only works with numbers you've added to the sandbox**
- To add a number: Send `join [code]` to the Twilio WhatsApp number
- Sandbox is for testing only

### For Production:
1. Request production access in Twilio Console
2. Get a dedicated WhatsApp Business number
3. Update `TWILIO_WHATSAPP_FROM` with your production number
4. Complete business verification (if required)

### Cost:
- **Sandbox**: Free for testing
- **Production**: ~$0.005 per message (very affordable)

## Troubleshooting

### Code not received?
1. Check if your number is in the sandbox (send join code)
2. Verify environment variables are set correctly
3. Check Twilio Console → Monitor → Logs for errors
4. Check Netlify Function logs

### Function errors?
1. Go to Netlify Dashboard → Functions → Logs
2. Check for error messages
3. Verify Twilio credentials are correct
4. Make sure `twilio` package is installed (already in package.json)

### Still having issues?
1. Check Twilio account balance (free trial has credits)
2. Verify phone number format (Pakistani: 03XXXXXXXXX)
3. Check Netlify deployment status
4. Review function logs in Netlify dashboard

## Security Reminder

- **Never commit** your Auth Token to Git
- Keep credentials secure
- Use environment variables only
- Rotate tokens if compromised

---

**Ready to start?** Follow the steps above and let me know if you need help with any step!

