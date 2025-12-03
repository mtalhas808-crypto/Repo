# Setting Up hasanirfan.com Domain

## Step 1: Purchase the Domain

### Option A: Purchase Through Netlify (Easiest)
1. Go to: https://app.netlify.com/sites/hasan-irfan-perfumes/domain-management
2. Click **"Add a domain"**
3. Click **"Buy a new domain"**
4. Search for: `hasanirfan.com`
5. If available, purchase directly through Netlify
6. Netlify will automatically configure it for you!

**Cost**: ~$10-15/year (varies by registrar)

### Option B: Purchase from Domain Registrar
**Recommended Registrars:**
- **Namecheap**: https://www.namecheap.com
- **GoDaddy**: https://www.godaddy.com
- **Google Domains**: https://domains.google
- **Pakistani Registrars**: 
  - PKNIC (if .pk domain)
  - Local Pakistani registrars

**Steps:**
1. Visit registrar website
2. Search for `hasanirfan.com`
3. Add to cart and checkout
4. Complete purchase
5. You'll receive domain management access

---

## Step 2: Connect Domain to Netlify

### If You Purchased Through Netlify:
✅ **Already done!** Netlify configures it automatically.

### If You Purchased Elsewhere:

#### Method 1: Using Netlify DNS (Recommended)

1. **Go to Netlify Dashboard**
   - Visit: https://app.netlify.com/sites/hasan-irfan-perfumes/domain-management
   - Click **"Add a domain"**
   - Enter: `hasanirfan.com`
   - Click **"Verify"**

2. **Get Netlify DNS Nameservers**
   - Netlify will show you nameservers like:
     - `dns1.p01.nsone.net`
     - `dns2.p01.nsone.net`
     - `dns3.p01.nsone.net`
     - `dns4.p01.nsone.net`

3. **Update Nameservers at Your Registrar**
   - Log into your domain registrar account
   - Find "DNS Settings" or "Nameservers"
   - Replace existing nameservers with Netlify's nameservers
   - Save changes

4. **Wait for Propagation**
   - Usually takes 24-48 hours
   - Can be as fast as a few minutes
   - Netlify will notify you when it's active

#### Method 2: Using DNS Records (If You Want to Keep Your Registrar's DNS)

1. **Get DNS Records from Netlify**
   - Go to domain management
   - Netlify will show you DNS records to add:
     - Type: `A` or `CNAME`
     - Value: Netlify's IP or domain

2. **Add DNS Records at Your Registrar**
   - Log into your registrar
   - Go to DNS Management
   - Add the records Netlify provided
   - Save changes

---

## Step 3: Configure SSL Certificate

✅ **Automatic!** Netlify automatically provides free SSL certificates for custom domains.

- Once domain is connected, SSL is automatically enabled
- Your site will be accessible via `https://hasanirfan.com`
- Certificate renews automatically

---

## Step 4: Update Website Configuration

After domain is connected, update these:

### Update in `index.html`:
- Change canonical URL
- Update Open Graph URL
- Update any hardcoded URLs

### Update in `netlify.toml`:
- Add domain redirects if needed

---

## Step 5: Test Your Domain

Once connected (24-48 hours):

1. Visit: `https://hasanirfan.com`
2. Check SSL certificate (should show green lock)
3. Test all pages work correctly
4. Verify forms still work

---

## Troubleshooting

### Domain Not Working After 48 Hours?

1. **Check Nameservers**
   - Verify nameservers are correct at registrar
   - Use: https://www.whatsmydns.net to check propagation

2. **Check Netlify Dashboard**
   - Go to domain management
   - Look for any error messages
   - Check domain status

3. **Contact Support**
   - Netlify Support: https://www.netlify.com/support
   - Your domain registrar support

### Common Issues:

**Issue**: Domain shows "Pending" in Netlify
**Solution**: Wait 24-48 hours for DNS propagation

**Issue**: SSL certificate not issued
**Solution**: Wait a few hours after domain is verified

**Issue**: Site not loading
**Solution**: Clear browser cache, try incognito mode

---

## Cost Breakdown

- **Domain Purchase**: ~$10-15/year
- **Netlify Hosting**: FREE (already included)
- **SSL Certificate**: FREE (automatic)
- **DNS Management**: FREE (included)

**Total Additional Cost**: ~$10-15/year (just the domain)

---

## Quick Checklist

- [ ] Purchase domain `hasanirfan.com`
- [ ] Add domain to Netlify
- [ ] Update nameservers at registrar
- [ ] Wait 24-48 hours for propagation
- [ ] Verify domain works at https://hasanirfan.com
- [ ] Update website URLs if needed
- [ ] Test all functionality

---

## Need Help?

If you need assistance:
1. Check Netlify documentation: https://docs.netlify.com/domains-https/custom-domains/
2. Contact Netlify support
3. Contact your domain registrar support

---

**Once set up, your website will be accessible at https://hasanirfan.com!** 🎉

