# 📧 Setup Email Service for Verification (No Dev Mode)

## 🎯 Goal: Real Email Sending (Not Dev Mode)

You want actual emails sent, not dev mode codes. Let's set up SendGrid (FREE, 100 emails/day).

---

## ⚡ Quick Setup (5 Minutes)

### Step 1: Sign Up for SendGrid (FREE)

1. Go to: https://signup.sendgrid.com/
2. Click "Start for Free"
3. Fill in:
   - Email: Your email
   - Password: Create password
   - Company: Hasan Irfan Perfumes
4. Verify your email (check inbox)

### Step 2: Get API Key

1. After login, go to: **Settings** → **API Keys**
2. Click **"Create API Key"**
3. Name it: `Hasan Irfan Verification`
4. Select: **"Full Access"** (or "Restricted Access" with Mail Send permission)
5. Click **"Create & View"**
6. **COPY THE KEY** (you'll only see it once!)
   - It looks like: `SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 3: Verify Sender Email

1. Go to: **Settings** → **Sender Authentication**
2. Click **"Verify a Single Sender"**
3. Fill in your email details
4. Check your email and click verification link
5. **Note the verified email** (e.g., `noreply@yourdomain.com` or your personal email)

### Step 4: Add to Netlify

1. Go to: https://app.netlify.com/sites/lucky-pika-f00e5b/configuration/env
2. Click **"Add variable"**
3. Add these **TWO** variables:

   **Variable 1:**
   - Key: `SENDGRID_API_KEY`
   - Value: `SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` (your API key)
   - Click **"Save"**

   **Variable 2:**
   - Key: `SENDGRID_FROM_EMAIL`
   - Value: `your_verified_email@example.com` (the email you verified in Step 3)
   - Click **"Save"**

### Step 5: Redeploy

1. Go to: https://app.netlify.com/sites/lucky-pika-f00e5b/deploys
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Wait 1-2 minutes for deployment

---

## ✅ Test It!

1. Go to: https://lucky-pika-f00e5b.netlify.app/
2. Click **"Account"** → **"Sign Up"**
3. Fill in:
   - Name: Test User
   - Email: **Your real email** (where you want to receive the code)
   - Password: test123
   - Confirm Password: test123
4. Click **"Send Verification Code"**
5. **Check your email inbox** (and spam folder)
6. You should receive an email with the 6-digit code!
7. Enter the code and complete signup

---

## 🎉 That's It!

Once configured:
- ✅ Real emails will be sent
- ✅ No more dev mode
- ✅ Professional verification emails
- ✅ FREE (100 emails/day)

---

## 🔧 Alternative: Resend (3,000 emails/month)

If you prefer Resend:
1. Sign up: https://resend.com/signup
2. Get API key from dashboard
3. Add to Netlify:
   - `RESEND_API_KEY` = your_resend_key
   - `RESEND_FROM_EMAIL` = onboarding@resend.dev

---

## 📞 Need Help?

If you get stuck:
1. Share the error message
2. Check Netlify Function logs
3. Verify environment variables are set correctly

