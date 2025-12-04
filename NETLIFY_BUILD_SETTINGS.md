# 📋 Netlify Build Settings Configuration

## Build Settings for Hasan Irfan Perfumes Website

### ✅ Required Settings

#### 1. **Project name**
- **Value**: `lucky-pika-f00e5b` (already set by Netlify)
- **Note**: This is auto-generated, you don't need to change it

#### 2. **Branch to deploy**
- **Value**: `main`
- **Note**: This is your default GitHub branch

#### 3. **Base directory**
- **Value**: Leave **EMPTY** (blank)
- **Note**: Your files are in the root of the repository

#### 4. **Build command**
- **Value**: Leave **EMPTY** (blank)
- **Note**: No build needed - this is a static HTML/CSS/JS site

#### 5. **Publish directory**
- **Value**: `.` (just a dot/period)
- **OR**: Leave **EMPTY** (blank)
- **Note**: Both work the same - means "root directory"

---

## 🔧 Environment Variables (Optional - for Email Verification)

If you want email verification to work, add these:

### Option 1: Using SendGrid
1. Go to **Environment variables** section
2. Click **"Add variable"**
3. Add these:
   - **Key**: `SENDGRID_API_KEY`
   - **Value**: Your SendGrid API key
   - **Key**: `SENDER_EMAIL`
   - **Value**: Your verified sender email (e.g., `noreply@yourdomain.com`)

### Option 2: Using Resend
1. Go to **Environment variables** section
2. Click **"Add variable"**
3. Add these:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key
   - **Key**: `SENDER_EMAIL`
   - **Value**: Your verified sender email

### Note on Environment Variables
- **For now**: You can skip these if email verification isn't critical
- **Later**: Add them when you set up SendGrid or Resend
- **Without them**: Email verification will show a dev mode code in console

---

## 📝 Summary - Quick Copy/Paste

```
Branch to deploy:        main
Base directory:          (leave empty)
Build command:           (leave empty)
Publish directory:       . (or leave empty)
Environment variables:   (optional - add later)
```

---

## ✅ After Configuration

1. Click **"Save"** or **"Deploy site"**
2. Netlify will automatically:
   - Pull code from GitHub
   - Deploy your site
   - Set up continuous deployment

---

## 🚀 Future Deployments

After setup, just push to GitHub:

```bash
git add .
git commit -m "Update website"
git push
```

Netlify will automatically deploy! 🎉

