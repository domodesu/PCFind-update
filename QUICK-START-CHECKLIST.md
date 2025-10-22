# 🚀 OTP Verification - Quick Start Checklist

Use this checklist to test and deploy OTP verification for your PCFind website.

---

## ✅ Part 1: Test OTP Flow (5 minutes)

⏳ **Wait for deployments** (2-3 min):
- [ ] Frontend: https://github.com/domodesu/domodesu.github.io/actions ✓
- [ ] Backend: https://dashboard.render.com/ → Check "pcfind-auth-backend" status ✓

🧪 **Test registration** (choose Email OR Phone):

**Option A - Email**:
1. [ ] Open: https://domodesu.github.io/
2. [ ] Click burger → "Sign In" → "Sign up"
3. [ ] Enter test username
4. [ ] Select country: **"📧 Email"**
5. [ ] Enter: `test@example.com`
6. [ ] Click "Send OTP"
7. [ ] Look for toast: "Dev Mode - OTP: 123456"
8. [ ] Enter OTP → Watch for "✓ Verified!"
9. [ ] Complete registration

**Option B - Phone (Philippines)**:
1. [ ] Click "Sign up"
2. [ ] Enter test username
3. [ ] Country: **"🇵🇭 +63"** (default - already selected!)
4. [ ] Enter: `09123456789` (just the number, no +63)
5. [ ] Click "Send OTP" → System uses `+639123456789`
6. [ ] Enter OTP from toast
7. [ ] Complete registration

**Expected**: Account created, username shows in burger menu ✓

**Troubleshooting**: If "Network error", wait 30s (backend waking up) and retry.

---

## 📧 Part 2: Set Up Brevo Email (10 minutes)

### Step 1: Create Brevo Account
- [ ] Go to: https://www.brevo.com/
- [ ] Sign up free (no credit card needed)
- [ ] Verify your email

### Step 2: Get SMTP Credentials
- [ ] Login: https://app.brevo.com/
- [ ] Click your name → "SMTP & API"
- [ ] Click "SMTP" tab
- [ ] Click "Create a new SMTP key" → Name it "PCFind"
- [ ] **Copy the key** (save it somewhere safe!)

**Your credentials**:
```
SMTP Server: smtp-relay.brevo.com
SMTP Port: 587
Login: _________________ (your Brevo email)
SMTP Key: _________________ (from above, starts with xkeysib-)
```

### Step 3: Verify Sender Email
- [ ] In Brevo: "Senders, Domains & Dedicated IPs"
- [ ] Click "Senders" → "Add a new sender"
- [ ] Enter your real email (e.g., your Gmail)
- [ ] From Name: `PCFind Support`
- [ ] Verify the email (check inbox)

### Step 4: Configure Render
- [ ] Go to: https://dashboard.render.com/
- [ ] Find service: `pcfind-auth-backend`
- [ ] Click "Environment" (left sidebar)
- [ ] Add these 6 variables:

| Variable | Value |
|----------|-------|
| `BREVO_SMTP_HOST` | `smtp-relay.brevo.com` |
| `BREVO_SMTP_PORT` | `587` |
| `BREVO_SMTP_USER` | Your Brevo login email |
| `BREVO_SMTP_PASS` | Your SMTP key |
| `BREVO_FROM_EMAIL` | Your verified sender email |
| `BREVO_FROM_NAME` | `PCFind Support` |

- [ ] Click "Save Changes"
- [ ] Wait 2-3 minutes for Render to redeploy

### Step 5: Test Real Email
- [ ] Go to: https://domodesu.github.io/
- [ ] Click "Sign up"
- [ ] Enter YOUR REAL EMAIL
- [ ] Click "Send OTP"
- [ ] Check your inbox (and spam folder!)
- [ ] You should see a professional email with your OTP
- [ ] Complete registration

**Success**: Email arrives within 30 seconds! 🎉

---

## 🎊 What You Get

After setup:
- ✅ **Beautiful OTP emails** with purple gradient header
- ✅ **6-digit verification codes** that expire in 10 minutes
- ✅ **300 free emails/day** from Brevo
- ✅ **Secure registration** preventing fake accounts
- ✅ **Mobile-responsive** email design

---

## 📱 Optional: Add SMS (Later)

Want phone number verification too?
- [ ] Sign up: https://www.twilio.com/try-twilio
- [ ] Get free $15 credit
- [ ] Follow SMS section in `EMAIL-SETUP-GUIDE.md`

---

## 🚨 Common Issues & Fixes

### "Network error" on Send OTP
**Fix**: Backend is sleeping (Render free tier). Wait 30 seconds, try again.

### No email received
**Fix**: 
1. Check spam folder
2. Verify sender email in Brevo (must have green checkmark)
3. Check Render logs for errors
4. Make sure all 6 environment variables are set

### Still showing "Dev Mode - OTP" toast
**Fix**: Environment variables not loaded. Go to Render → Manual Deploy.

### "Create Account" button stays disabled
**Fix**: Enter the full 6-digit OTP. It auto-verifies.

---

## 📊 What's Next?

After OTP is working:
- [ ] Test with Gmail, Outlook, Yahoo emails
- [ ] Invite friends to test registration
- [ ] Monitor Brevo dashboard for usage stats
- [ ] Customize email design (optional)
- [ ] Add SMS verification (optional)

---

## 📚 Detailed Guides

Need more help?
- **Testing**: See `OTP-TESTING-GUIDE.md`
- **Email Setup**: See `EMAIL-SETUP-GUIDE.md`
- **Backend README**: See `auth-backend/README.md`

---

## 🎯 Status Check

Current status:
- ✅ Backend deployed with OTP support
- ✅ Frontend deployed with OTP UI
- ✅ Professional email template ready
- ⏳ Waiting for Brevo setup (you do this!)

**Your task**: Follow Part 2 checklist above to enable real emails!

---

**Questions?** Check the guides or test in dev mode first! 🚀

