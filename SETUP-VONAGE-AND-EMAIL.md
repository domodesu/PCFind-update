# 🚀 Quick Setup: Vonage SMS + Brevo Email

## Overview

This guide will help you set up:
1. **Vonage SMS** - Send OTP to any phone number (no verification needed!)
2. **Brevo Email** - Send OTP via email (free 300 emails/day)

---

## Part 1: Set Up Vonage SMS

### Step 1: Create Vonage Account

1. **Sign up**: https://dashboard.nexmo.com/sign-up
   - Free account with €2 credit
   - No credit card required
   - Enough for ~100 SMS

2. **Get API credentials**:
   - Go to: https://dashboard.nexmo.com/getting-started-guide
   - **API Key**: Copy from dashboard
   - **API Secret**: Click "Show" to reveal

### Step 2: Add to Render

1. Go to: https://dashboard.render.com
2. Open your `pcfind-auth` service
3. Go to **Environment** tab
4. Add these variables:

   ```
   VONAGE_API_KEY=your_api_key_here
   VONAGE_API_SECRET=your_api_secret_here
   VONAGE_BRAND_NAME=PCFind
   ```

5. **Save** and **redeploy**

### Step 3: Update Backend Code

Since `auth-backend` is a submodule, you need to update it:

**Option A: Update in Render directly**
1. In Render, go to your service
2. Open the code editor or SSH into the instance
3. Update `server.js` and `package.json` with the Vonage code

**Option B: Update locally and redeploy**
1. Go to your `auth-backend` folder
2. Update the files (already done in this repo)
3. Push to your backend repository
4. Render will auto-deploy

**Required changes:**
- Add `@vonage/server-sdk` to `package.json`
- Update `server.js` with Vonage SMS function (code is already updated in this repo)

---

## Part 2: Set Up Brevo Email

### Step 1: Create Brevo Account

1. **Sign up**: https://www.brevo.com/
   - Free 300 emails/day
   - No credit card required

2. **Get SMTP credentials**:
   - Go to: https://app.brevo.com/settings/keys/smtp
   - Click "Create a new SMTP key"
   - Name it: `PCFind-Auth`
   - **Copy the key** (you'll only see it once!)

3. **Verify sender email**:
   - Go to: https://app.brevo.com/settings/senders
   - Click "Add a new sender"
   - Enter your email and name: `PCFind Support`
   - Verify the email (check your inbox)

### Step 2: Add to Render

1. In Render, go to your service → **Environment**
2. Add these variables:

   ```
   BREVO_SMTP_HOST=smtp-relay.brevo.com
   BREVO_SMTP_USER=your_brevo_email@example.com
   BREVO_SMTP_PASS=xkeysib-abc123... (your SMTP key)
   BREVO_FROM_EMAIL=your_brevo_email@example.com
   BREVO_FROM_NAME=PCFind Support
   ```

3. **Save** and **redeploy**

---

## Part 3: Install Vonage Package

The backend needs the Vonage package installed:

1. **If using Render**:
   - Render will auto-install when you push the updated `package.json`
   - Or manually run: `npm install @vonage/server-sdk` in Render shell

2. **If updating locally**:
   ```bash
   cd auth-backend
   npm install
   git add package.json
   git commit -m "Add Vonage SDK"
   git push
   ```

---

## Testing

### Test Email OTP:
1. Go to signup page
2. Select **"📧 Email"**
3. Enter your email
4. Click "Send OTP"
5. Check your inbox!

### Test SMS OTP:
1. Go to signup page
2. Select **"📱 Mobile Number"**
3. Enter any phone number (no verification needed!)
4. Click "Send OTP"
5. Check your phone!

---

## Environment Variables Summary

Add these to Render:

**Vonage SMS:**
```
VONAGE_API_KEY=...
VONAGE_API_SECRET=...
VONAGE_BRAND_NAME=PCFind
```

**Brevo Email:**
```
BREVO_SMTP_HOST=smtp-relay.brevo.com
BREVO_SMTP_USER=...
BREVO_SMTP_PASS=...
BREVO_FROM_EMAIL=...
BREVO_FROM_NAME=PCFind Support
```

---

## Troubleshooting

**SMS not working?**
- Check Vonage API key and secret are correct
- Check Render logs for errors
- Make sure `@vonage/server-sdk` is installed

**Email not working?**
- Verify sender email in Brevo
- Check SMTP credentials are correct
- Check spam folder

**Need help?**
- See `VONAGE-SMS-SETUP.md` for detailed Vonage guide
- See `BREVO-SETUP-NOW.md` for detailed email guide

