# How to Continue Working on Hasan Irfan Website

## Quick Start Guide

### 1. Opening the Project in Cursor
- Open Cursor
- Click **File → Open Folder** (or `Cmd+O` on Mac)
- Navigate to: `/Users/tal1/Hasan Irfan`
- Select the folder and click "Open"

### 2. Viewing the Live Website
- **Production URL**: https://hasan-irfan-perfumes.netlify.app
- The website is automatically deployed to Netlify
- Any changes you make need to be deployed (see below)

---

## Key Files to Know

### Main Website Files
- **`index.html`** - Main HTML structure (header, navigation, product display, footer)
- **`styles.css`** - All styling (colors, fonts, layouts, responsive design)
- **`script.js`** - All functionality (products, cart, checkout, filters, search)

### Product Data
- **`script.js`** (lines 1-490) - Contains all 490 products with prices and sizes
- Products are stored in the `products` array at the top of `script.js`

### Configuration
- **`netlify.toml`** - Netlify deployment configuration
- **`package.json`** - Project dependencies

---

## Making Changes & Deploying

### Step 1: Make Your Changes
Edit any of the files (`index.html`, `styles.css`, `script.js`) in Cursor

### Step 2: Deploy to Netlify
Open Terminal in Cursor (`Terminal → New Terminal`) and run:

```bash
cd "/Users/tal1/Hasan Irfan"
netlify deploy --prod --dir .
```

This will:
- Upload your changes
- Deploy to production
- Give you the updated website URL

### Step 3: Save to Git (Optional but Recommended)
After making changes, save them to git:

```bash
git add .
git commit -m "Description of your changes"
```

---

## Common Tasks

### Adding a New Product
1. Open `script.js`
2. Find the `products` array (starts around line 4)
3. Add a new product object following this format:
```javascript
{ 
    id: 491,  // Next available ID
    name: "PRODUCT NAME", 
    category: "men",  // or "women" or "unisex"
    type: "ARABIC",  // or "FRENCH", "ORIENTAL", "UNIQUE", "FLORAL"
    price: 1000,  // Lowest price
    image: "💧",  // 💧 for oil, 🌸 for niche spray, 🌹 for impressions
    format: "oil",  // or "spray"
    productType: "oil",  // or "niche-spray" or "impressions"
    brand: "BRAND NAME",
    sizes: { 
        "3ML": 1000, 
        "5ML": 2000, 
        "10ML": 3000 
    } 
}
```
4. Deploy: `netlify deploy --prod --dir .`

### Changing Colors/Styles
1. Open `styles.css`
2. Find the CSS variables at the top (around line 7):
```css
:root {
    --primary-color: #1a1a1a;  /* Black */
    --secondary-color: #d4af37;  /* Gold */
    --accent-color: #f5f5f5;  /* Light gray */
}
```
3. Change these values to update colors site-wide
4. Deploy: `netlify deploy --prod --dir .`

### Updating Product Prices
1. Open `script.js`
2. Find the product in the `products` array
3. Update the `price` value and/or `sizes` object
4. Deploy: `netlify deploy --prod --dir .`

---

## Important Commands

### Check Git Status
```bash
git status
```

### View Recent Changes
```bash
git log --oneline
```

### Deploy to Netlify
```bash
netlify deploy --prod --dir .
```

### Check Netlify Login Status
```bash
netlify status
```

### Login to Netlify (if needed)
```bash
netlify login
```

---

## Project Structure

```
Hasan Irfan/
├── index.html          # Main website page
├── styles.css          # All styling
├── script.js           # All functionality + product data
├── netlify.toml        # Deployment config
├── package.json        # Dependencies
├── .git/               # Git repository (hidden)
└── [other files]       # Documentation, proposals, etc.
```

---

## Current Features

✅ **490 Products** - All from 3 price lists (Oils, Niche Spray, Impressions)
✅ **Shopping Cart** - Add products, adjust quantities in cart
✅ **Size Selection** - Select different sizes with dynamic pricing
✅ **Search & Filters** - Search products, filter by category, type, etc.
✅ **Responsive Design** - Works on desktop, tablet, mobile
✅ **Payment Options** - Cash on Delivery, JazzCash, Easypaisa, Debit/Credit Card
✅ **Sign Up/Sign In** - Account modal (UI ready, backend needed)
✅ **Pagination** - 40 products per page

---

## Troubleshooting

### Website Not Updating?
- Make sure you ran `netlify deploy --prod --dir .`
- Wait a few seconds for deployment to complete
- Clear browser cache (Cmd+Shift+R on Mac)

### Can't Deploy?
- Check if logged in: `netlify status`
- Login if needed: `netlify login`
- Make sure you're in the correct directory

### Git Issues?
- Check status: `git status`
- View changes: `git diff`
- Undo changes: `git checkout -- filename`

---

## Next Steps (Optional Enhancements)

1. **Backend Integration** - Connect sign up/sign in to a database
2. **Payment Gateway** - Integrate actual payment processing
3. **Product Images** - Replace emoji placeholders with real product photos
4. **Admin Panel** - Add/edit products without coding
5. **Order Management** - Track and manage orders
6. **Email Notifications** - Send order confirmations

---

## Support

- **Netlify Dashboard**: https://app.netlify.com
- **Website URL**: https://hasan-irfan-perfumes.netlify.app
- **Git Repository**: Local (in `/Users/tal1/Hasan Irfan/.git`)

---

**Last Updated**: December 2024
**Project Status**: ✅ Fully Functional Website Deployed

