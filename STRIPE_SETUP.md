# Stripe Payment Setup Guide

This guide will help you set up Stripe payments for your Hasan Irfan Perfumes website.

## Step 1: Create a Stripe Account

1. Go to https://stripe.com and sign up for a free account
2. Complete the account setup process
3. Verify your email and business information

## Step 2: Get Your API Keys

1. Log in to your Stripe Dashboard: https://dashboard.stripe.com
2. Go to **Developers** → **API keys**
3. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` for test mode or `pk_live_` for live mode)
   - **Secret key** (starts with `sk_test_` for test mode or `sk_live_` for live mode)

## Step 3: Configure Your Website

### A. Add Publishable Key to Your Website

1. Open `script.js` in your project
2. Find this line (around line 5):
   ```javascript
   const STRIPE_PUBLISHABLE_KEY = 'YOUR_STRIPE_PUBLISHABLE_KEY';
   ```
3. Replace `'YOUR_STRIPE_PUBLISHABLE_KEY'` with your actual publishable key:
   ```javascript
   const STRIPE_PUBLISHABLE_KEY = 'pk_test_51AbCdEf...'; // Your actual key
   ```

### B. Add Secret Key to Netlify Environment Variables

1. Go to your Netlify Dashboard: https://app.netlify.com
2. Select your site: **hasan-irfan-perfumes**
3. Go to **Site settings** → **Environment variables**
4. Click **Add variable**
5. Add:
   - **Key**: `STRIPE_SECRET_KEY`
   - **Value**: Your Stripe secret key (starts with `sk_test_` or `sk_live_`)
6. Click **Save**

## Step 4: Install Dependencies

The Stripe package is already listed in `package.json`. Netlify will automatically install it during deployment.

If you want to test locally:

```bash
cd "/Users/tal1/Hasan Irfan"
npm install
```

## Step 5: Deploy Your Changes

After adding your API keys:

```bash
cd "/Users/tal1/Hasan Irfan"
netlify deploy --prod --dir .
```

## Step 6: Test Your Integration

### Test Mode (Recommended First)

1. Use test API keys (starting with `pk_test_` and `sk_test_`)
2. Use Stripe's test card numbers:
   - **Card**: `4242 4242 4242 4242`
   - **Expiry**: Any future date (e.g., `12/34`)
   - **CVC**: Any 3 digits (e.g., `123`)
   - **ZIP**: Any 5 digits (e.g., `12345`)

3. Test the checkout flow on your website
4. Check your Stripe Dashboard → **Payments** to see test transactions

### Live Mode

1. Once testing is complete, switch to live keys:
   - Replace test publishable key with live key in `script.js`
   - Update `STRIPE_SECRET_KEY` environment variable in Netlify with live secret key
2. Redeploy your site
3. Your website will now accept real payments!

## How It Works

1. Customer adds items to cart and clicks "Checkout"
2. Website creates a Stripe Checkout session via Netlify function
3. Customer is redirected to Stripe's secure payment page
4. After payment, customer is redirected back to your site
5. Success message is shown

## Viewing Payments

- Go to Stripe Dashboard: https://dashboard.stripe.com/payments
- You'll see all successful payments
- You can issue refunds, view customer details, etc.

## Security Notes

- ✅ Secret key is stored securely in Netlify (never exposed to frontend)
- ✅ Publishable key is safe to use in frontend code
- ✅ All payments are processed securely by Stripe
- ✅ PCI compliance is handled by Stripe

## Stripe Fees

- **Online payments**: 2.9% + $0.30 per transaction
- **No monthly fees**
- **No setup fees**
- **No hidden costs**

## Support

- Stripe Documentation: https://stripe.com/docs
- Stripe Support: https://support.stripe.com
- Test your integration: https://stripe.com/docs/testing

## Alternative: PayPal Integration

If you prefer PayPal, you can integrate PayPal instead:
1. Sign up at https://paypal.com
2. Get PayPal API credentials
3. Replace Stripe code with PayPal SDK

---

**Your website is ready for payments once you complete these steps!** 🎉

