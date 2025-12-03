# Payment Setup Guide

Your website now supports **Cash on Delivery** and **Debit/Credit Card on Delivery** payment options.

## How It Works

1. **Customer adds items to cart** and clicks "Checkout"
2. **Checkout modal opens** with order summary
3. **Customer fills in their details**:
   - Full Name
   - Email Address
   - Phone Number
   - Delivery Address
   - City
   - ZIP/Postal Code
4. **Customer selects payment method**:
   - **Cash on Delivery**: Pay with cash when order arrives
   - **Debit/Credit Card**: Pay with card when order arrives (card reader available)
5. **Order is submitted** via Netlify Forms
6. **You receive the order** in your Netlify dashboard

## Viewing Orders

1. Go to your Netlify Dashboard: https://app.netlify.com
2. Select your site: **hasan-irfan-perfumes**
3. Go to **Forms** section
4. You'll see all order submissions with:
   - Customer information
   - Order items
   - Order total
   - Payment method selected

## Setting Up Email Notifications

To receive email notifications when orders are placed:

1. Go to Netlify Dashboard → **Site settings** → **Forms**
2. Scroll to **Form notifications**
3. Click **Add notification**
4. Choose **Email notification**
5. Enter your email address
6. Save

Now you'll receive an email every time someone places an order!

## Order Processing Workflow

1. **Receive order notification** (email or check dashboard)
2. **Review order details** in Netlify Forms
3. **Contact customer** to confirm order (optional)
4. **Prepare order** for shipping/delivery
5. **Deliver order** to customer address
6. **Collect payment**:
   - If Cash on Delivery: Collect cash
   - If Card on Delivery: Use card reader to process payment

## Tips

- **Check orders daily** to ensure timely delivery
- **Save customer information** for repeat orders
- **Track order status** (you can add this feature later)
- **Set delivery timeframes** and communicate with customers

## Customization

You can customize the checkout form by editing:
- `index.html` - Form fields and structure
- `styles.css` - Styling and appearance
- `script.js` - Form validation and behavior

## Future Enhancements (Optional)

- Add order tracking system
- Integrate with shipping providers
- Add SMS notifications
- Create admin dashboard for order management
- Add order status updates

---

**Your payment system is ready to use!** 🎉

Orders will be automatically collected and you can process them manually. This is perfect for local businesses and gives you full control over the delivery and payment process.

