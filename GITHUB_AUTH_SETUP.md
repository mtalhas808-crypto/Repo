# GitHub Authentication Setup

## 🔐 Authentication Required

GitHub requires authentication to push code. Here are your options:

---

## Option 1: Personal Access Token (Recommended - Easiest)

### Step 1: Create Personal Access Token

1. Go to: **https://github.com/settings/tokens**
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `Netlify Deployment`
4. Select expiration: **90 days** (or your preference)
5. **Check the `repo` scope** (this gives full repository access)
6. Click **"Generate token"**
7. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Use Token to Push

When you run `git push`, use:
- **Username**: `mtalhas808-crypto`
- **Password**: `YOUR_PERSONAL_ACCESS_TOKEN` (paste the token you copied)

Or run this command (replace YOUR_TOKEN with your actual token):

```bash
cd "/Users/tal1/Hasan Irfan"
git push -u origin main
# When prompted:
# Username: mtalhas808-crypto
# Password: [paste your token]
```

---

## Option 2: Use SSH (More Secure, One-Time Setup)

### Step 1: Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter to accept default location
# Press Enter twice for no passphrase (or set one)
```

### Step 2: Add SSH Key to GitHub

1. Copy your public key:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   # Copy the entire output
   ```

2. Go to: **https://github.com/settings/keys**
3. Click **"New SSH key"**
4. Title: `MacBook Air`
5. Key: Paste your public key
6. Click **"Add SSH key"**

### Step 3: Change Remote to SSH

```bash
cd "/Users/tal1/Hasan Irfan"
git remote set-url origin git@github.com:mtalhas808-crypto/repo.git
git push -u origin main
```

---

## Option 3: GitHub CLI (gh)

If you have GitHub CLI installed:

```bash
gh auth login
# Follow the prompts
git push -u origin main
```

---

## ✅ Quick Push (Using Personal Access Token)

**Easiest method** - Just create a token and use it:

1. **Create token**: https://github.com/settings/tokens
2. **Copy token**
3. **Run push**:
   ```bash
   cd "/Users/tal1/Hasan Irfan"
   git push -u origin main
   ```
4. **When prompted**:
   - Username: `mtalhas808-crypto`
   - Password: `[paste your token]`

---

## 🎯 After Successful Push

Once the code is pushed, we'll connect Netlify to GitHub for automatic deployments!

---

**Which method would you like to use?** I recommend Option 1 (Personal Access Token) as it's the quickest! 🚀

