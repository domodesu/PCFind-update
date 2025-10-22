# Email OTP Setup Guide (Brevo)

## 📧 Why Brevo?
- ✅ **FREE**: 300 emails per day (perfect for testing & small projects)
- ✅ **No credit card required** for free tier
- ✅ **Easy setup**: 5-10 minutes
- ✅ **Reliable**: Used by thousands of developers

---

## Step 1: Create Brevo Account (2 minutes)

1. **Go to**: https://www.brevo.com/
2. Click **"Sign up free"**
3. Fill in:
   - Email: Your real email (you'll verify it)
   - Password: Create a strong password
   - Company name: `PCFind` (or your preferred name)
4. **Verify your email** (check inbox/spam)
5. Complete the brief onboarding questions (choose "Transactional emails")

---

## Step 2: Get SMTP Credentials (3 minutes)

1. **Log in to Brevo**: https://app.brevo.com/
2. **Click your name** (top-right) → **"SMTP & API"**
3. Click **"SMTP"** tab
4. You'll see:
   ```
   SMTP Server: smtp-relay.brevo.com
   Port: 587
   Login: your-email@example.com
   SMTP Key: Click "Create a new SMTP key"
   ```
5. **Click "Create a new SMTP key"**:
   - Name it: `PCFind-Auth`
   - Copy the key (looks like: `xkeysib-abc123...`)
   - ⚠️ **Save this key** - you can't see it again!

---

## Step 3: Verify Sender Email (2 minutes)

1. In Brevo, go to **"Senders, Domains & Dedicated IPs"**
2. Click **"Senders"** tab
3. Click **"Add a new sender"**
4. Fill in:
   - **From Email**: Your verified email (e.g., `your-email@gmail.com`)
   - **From Name**: `PCFind Support`
5. **Verify the email** (check inbox for verification link)

**Alternative (Advanced - For custom domain)**:
- If you have a custom domain, you can add it in the "Domains" tab
- This allows emails from `noreply@yourdomain.com`
- Skip for now if testing!

---

## Step 4: Configure Render Backend (3 minutes)

1. **Go to Render**: https://dashboard.render.com/
2. **Find your service**: `pcfind-auth-backend` (or similar)
3. Click **"Environment"** in left sidebar
4. Click **"Add Environment Variable"** and add these:

   | Key | Value (use YOUR values) |
   |-----|---------|
   | `BREVO_SMTP_HOST` | `smtp-relay.brevo.com` |
   | `BREVO_SMTP_PORT` | `587` |
   | `BREVO_SMTP_USER` | Your Brevo login email |
   | `BREVO_SMTP_PASS` | Your SMTP key from Step 2 |
   | `BREVO_FROM_EMAIL` | Your verified sender email |
   | `BREVO_FROM_NAME` | `PCFind Support` |

5. Click **"Save Changes"**
6. ⏳ **Wait 2-3 minutes** for Render to redeploy

---

## Step 5: Test Real Email Delivery 🎉

1. **Go to your site**: https://domodesu.github.io/
2. Click **"Sign up"**
3. Enter:
   - Username: `RealTest`
   - **Email**: YOUR REAL EMAIL ADDRESS
4. Click **"Send OTP"**
5. 📧 **Check your email inbox** (and spam folder!)
6. You should receive an email titled **"Your PCFind Verification Code"**
7. Enter the OTP and complete registration

---

## 🎊 Success Checklist

After setup, you should see:
- ✅ Email arrives within 10-30 seconds
- ✅ No "Dev Mode - OTP" toast (means real email is working!)
- ✅ Backend logs show: "✉️ OTP sent to email: user@example.com"
- ✅ Registration completes successfully

---

## 🚨 Troubleshooting

### Email Not Arriving
1. **Check Render logs**: https://dashboard.render.com/ → Your service → Logs
   - Look for errors like "Invalid credentials" or "SMTP error"
2. **Check Brevo sender**: Make sure sender email is verified (green checkmark)
3. **Check spam folder**: Sometimes first email goes to spam
4. **Verify environment variables**: All 6 variables must be set correctly

### "SMTP Authentication Failed"
- **Fix**: Double-check `BREVO_SMTP_USER` and `BREVO_SMTP_PASS` in Render
- Make sure you copied the SMTP key correctly (no extra spaces)

### Backend Still Shows "DEV MODE"
- **Fix**: Environment variables not loaded. Go to Render → Manual Deploy → Deploy

### Email Goes to Spam
- **Fix**: Add custom sender domain (advanced) or continue testing
- Gmail/Outlook may mark transactional emails as spam initially
- As more emails are sent successfully, spam rate decreases

---

## 📱 Optional: SMS Setup (Twilio)

If you also want SMS OTP (for phone numbers like +639123456789):

1. **Sign up**: https://www.twilio.com/try-twilio (Free $15 credit)
2. **Verify your phone** during registration
3. **Get a Twilio phone number** (Console → Phone Numbers)
4. **Add to Render environment**:
   - `TWILIO_ACCOUNT_SID`: From Twilio Console
   - `TWILIO_AUTH_TOKEN`: From Twilio Console
   - `TWILIO_PHONE_NUMBER`: Your Twilio number (e.g., `+12345678901`)

**Note**: Free tier can only send to verified numbers. For production, upgrade ($1/mo minimum).

---

## 💰 Cost Breakdown

| Service | Free Tier | Cost After Free |
|---------|-----------|----------------|
| **Brevo Email** | 300/day | $25/mo for 20K emails |
| **Twilio SMS** | $15 credit | ~$0.0075 per SMS (US) |
| **Render Backend** | 750 hours/mo | Free (sufficient for hobby) |
| **GitHub Pages** | Unlimited | Free |

**Total for testing**: $0.00 🎉

---

## 🎯 What's Next?

After email is working:
1. ✅ Test with different email providers (Gmail, Outlook, Yahoo)
2. ✅ Customize the email template (edit `auth-backend/server.js`)
3. ✅ Add your logo to emails
4. ✅ Set up SMS if needed
5. ✅ Monitor usage in Brevo dashboard

Need help? Check Render logs first, then ask me! 🚀

