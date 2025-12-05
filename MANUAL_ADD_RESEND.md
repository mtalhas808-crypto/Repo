# 🔑 Manual Steps: Add Resend API Key

## ✅ Your Resend API Key

**API Key**: `re_hyxaYrNW_9HqsneVtsEhY5Sw5i6EqYdV6`

---

## 📋 Step-by-Step Instructions

### Step 1: On Environment Variables Page

You're already on: https://app.netlify.com/sites/lucky-pika-f00e5b/configuration/env

1. Look for the button: **"Add a variable"** (top right of the page)
2. Click it - a dropdown menu should appear
3. Click: **"Add a single variable"**

### Step 2: Add First Variable (RESEND_API_KEY)

A form will appear with two fields:

**Field 1 - Key:**
- Type: `RESEND_API_KEY`

**Field 2 - Value:**
- Type: `re_hyxaYrNW_9HqsneVtsEhY5Sw5i6EqYdV6`

Click **"Save"** or **"Add variable"**

### Step 3: Add Second Variable (RESEND_FROM_EMAIL)

1. Click **"Add a variable"** again
2. Click **"Add a single variable"**

**Field 1 - Key:**
- Type: `RESEND_FROM_EMAIL`

**Field 2 - Value:**
- Type: `onboarding@resend.dev`

Click **"Save"** or **"Add variable"**

### Step 4: Redeploy Site

1. Go to: https://app.netlify.com/sites/lucky-pika-f00e5b/deploys
2. Click **"Trigger deploy"** (top right)
3. Select **"Deploy site"**
4. Wait 1-2 minutes for deployment

---

## ✅ After Deployment

Once deployed, test it:

1. Go to: https://lucky-pika-f00e5b.netlify.app/
2. Click **"Account"** → **"Sign Up"**
3. Fill in:
   - Name: Test User
   - Email: **Your real email** (where you want to receive code)
   - Password: test123
   - Confirm Password: test123
4. Click **"Send Verification Code"**
5. **Check your email inbox!** 📧
6. You should receive an email with the 6-digit code
7. Enter the code to complete signup

---

## 🎉 Expected Result

After setup:
- ✅ **Codes sent to user's email** (not popup)
- ✅ Professional email templates
- ✅ No "dev mode" messages
- ✅ FREE (3,000 emails/month)

---

## 📧 Email Will Look Like:

```
Subject: Your Verification Code - Hasan Irfan Perfumes

Hello [Name]!

Your verification code for Hasan Irfan Perfumes is:

[6-digit code]

This code will expire in 10 minutes.
```

---

**Once you've added both variables and redeployed, let me know and I'll test the signup!** 🚀

