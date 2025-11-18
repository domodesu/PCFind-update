	# 📧 Brevo Email Setup - Quick Guide

Follow these steps to receive **REAL OTPs via email**!

---

## ✅ Step 1: Create Brevo Account

**Tab 1: https://www.brevo.com/**

1. Click **"Sign up free"**
2. Enter:
   - Email: Your real email
   - Password: Create strong password
   - Company: `PCFind`
3. Click **"Create my account"**
4. **Check your email** and click verification link
5. Complete quick onboarding (choose "Transactional emails")

✅ **Done? Continue to Step 2**

---

## ✅ Step 2: Get SMTP Credentials

**Tab 2: https://app.brevo.com/settings/keys/smtp**

After logging in to Brevo:

1. You'll see:
   ```
   SMTP Server: smtp-relay.brevo.com
   Port: 587
   Login: your-email@example.com
   ```

2. **Click "Create a new SMTP key"**
   - Name it: `PCFind-Auth`
   - Click "Generate"

3. **COPY THE KEY** - looks like: `xkeysib-abc123...`
   - ⚠️ **IMPORTANT**: Save it somewhere - you can only see it once!

4. **Write down these 4 values**:
   ```
   SMTP Host: smtp-relay.brevo.com
   SMTP Port: 587
   SMTP User: _____________________ (your Brevo login email)
   SMTP Key:  _____________________ (the key you just copied)
   ```

✅ **Got all 4 values? Continue to Step 3**

---

## ✅ Step 3: Verify Sender Email

**Still in Brevo:**

1. Go to: **"Senders, Domains & Dedicated IPs"** (left sidebar)
2. Click **"Senders"** tab
3. Click **"Add a new sender"**
4. Fill in:
   - **From Email**: Your email (same as login)
   - **From Name**: `PCFind Support`
5. Click **"Add"**
6. **Check your email** and verify it (click the link)
7. Wait for **green checkmark** ✓ next to your email

✅ **Email verified? Continue to Step 4**

---

## ✅ Step 4: Add to Render

**Tab 3: https://dashboard.render.com/**

1. Find your service: `pcfind-auth-backend` (or similar name)
2. Click on it
3. Click **"Environment"** in left sidebar
4. Click **"Add Environment Variable"** and add these **6 variables**:

| Key | Value |
|-----|-------|
| `BREVO_SMTP_HOST` | `smtp-relay.brevo.com` |
| `BREVO_SMTP_PORT` | `587` |
| `BREVO_SMTP_USER` | Your Brevo email (from Step 2) |
| `BREVO_SMTP_PASS` | Your SMTP key (from Step 2) |
| `BREVO_FROM_EMAIL` | Your verified email (from Step 3) |
| `BREVO_FROM_NAME` | `PCFind Support` |

5. Click **"Save Changes"**
6. ⏳ **Wait 2-3 minutes** for Render to redeploy

✅ **All 6 variables added? Wait for redeployment!**

---

## ✅ Step 5: Test Real Email!

After Render finishes redeploying (2-3 min):

1. Go to: https://domodesu.github.io/
2. Hard refresh: `Ctrl + Shift + R`
3. Click **"Sign up"**
4. Select **"📧 Email"**
5. Enter **YOUR REAL EMAIL**
6. Click **"Send OTP"**
7. **Check your email inbox** (and spam folder!)

**You should receive:**
```
Subject: 🔐 Your PCFind Verification Code
From: PCFind Support

Welcome to PCFind! 👋

Your verification code is: 123456
```

---

## 🎉 Success!

If you received the email:
- ✅ Email OTP is working!
- ✅ You can now register with email
- ✅ Users will receive professional verification emails

---

## 🚨 Troubleshooting

**No email received?**
1. Check spam folder
2. Verify sender email has green ✓ in Brevo
3. Check all 6 environment variables in Render
4. Check Render logs for errors

**"Backend is waking up" error?**
- Wait 30-50 seconds and try again (free tier sleeps)

**Still showing "Dev Mode - OTP"?**
- Hard refresh browser: `Ctrl + Shift + R`
- Render may still be deploying (wait 2-3 min)

---

## 📱 Optional: SMS Setup (Later)

Want SMS too? Set up Twilio:
- See: `EMAIL-SETUP-GUIDE.md` (SMS section)
- Free $15 credit
- Same process: get credentials, add to Render

---

**Current Progress:**
- ✅ UI redesigned with toggle buttons
- ✅ Phone number input ready
- ⏳ Setting up email delivery (you're here!)
- ⏳ SMS delivery (optional, later)

**Next:** Follow steps 1-5 above! 🚀

