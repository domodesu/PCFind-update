# 📱 Twilio SMS Setup Guide

## Quick Setup for Real SMS OTP

To enable real SMS sending to phone numbers, you need to configure Twilio on your Render backend.

---

## Step 1: Get Twilio Account (Free Trial)

1. **Sign up**: https://www.twilio.com/try-twilio
   - Free trial includes **$15 credit**
   - No credit card required for trial
   - Enough for ~1,500 SMS messages

2. **Get your credentials** from Twilio Console:
   - Go to: https://console.twilio.com/
   - **Account SID**: Found on dashboard (starts with `AC...`)
   - **Auth Token**: Click "Show" next to Auth Token (starts with `...`)
   - **Phone Number**: Get a Twilio phone number (free trial number available)

---

## Step 2: Get a Twilio Phone Number

1. In Twilio Console, go to **Phone Numbers** → **Manage** → **Buy a number**
2. Select your country (or use trial number)
3. Choose a number (trial numbers are free)
4. Copy the phone number (format: `+1234567890`)

---

## Step 3: Add Environment Variables to Render

1. **Go to Render Dashboard**: https://dashboard.render.com
2. **Select your service**: `pcfind-auth` (or your backend service name)
3. **Click "Environment"** in the left sidebar
4. **Add these 3 environment variables**:

   ```
   TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   TWILIO_AUTH_TOKEN=your_auth_token_here
   TWILIO_PHONE_NUMBER=+1234567890
   ```

   **Important**: 
   - Replace `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` with your actual Account SID
   - Replace `your_auth_token_here` with your actual Auth Token
   - Replace `+1234567890` with your Twilio phone number (include the `+`)

5. **Click "Save Changes"**
6. **Redeploy** your service (Render will auto-redeploy, or click "Manual Deploy")

---

## Step 4: Test It!

1. Wait for deployment to complete (1-2 minutes)
2. Go to your signup page
3. Enter a phone number
4. Click "Send OTP"
5. **You should receive a real SMS** on that phone number! 📱

---

## Cost Information

### Twilio Pricing:
- **Trial**: $15 free credit (enough for ~1,500 SMS)
- **After trial**: ~$0.0075 per SMS (less than 1 cent)
- **Philippines**: ~$0.02 per SMS
- **USA**: ~$0.0075 per SMS

### Example Costs:
- 100 SMS = ~$0.75 (USA) or ~$2.00 (Philippines)
- 1,000 SMS = ~$7.50 (USA) or ~$20.00 (Philippines)

---

## Troubleshooting

### SMS Not Sending?

1. **Check Render logs**:
   - Go to Render dashboard → Your service → Logs
   - Look for Twilio errors

2. **Verify environment variables**:
   - Make sure all 3 variables are set correctly
   - No extra spaces or quotes
   - Phone number includes `+` sign

3. **Check Twilio Console**:
   - Go to https://console.twilio.com/
   - Check "Monitor" → "Logs" → "Messaging"
   - See if messages are being sent

4. **Verify phone number format**:
   - Must include country code: `+639171234567`
   - No spaces or dashes
   - E.164 format required

### Still in Dev Mode?

- If you see OTP in console/toast, Twilio is not configured
- Double-check environment variables in Render
- Make sure service was redeployed after adding variables

---

## Alternative: Use Email Instead

If you don't want to set up SMS right now:
- Users can select **"📧 Email"** mode
- Configure Brevo email (see `BREVO-SETUP-NOW.md`)
- Email OTP works without SMS setup

---

## Security Notes

- ✅ **Never commit** Twilio credentials to Git
- ✅ **Use environment variables** (already set up)
- ✅ **Keep Auth Token secret** (like a password)
- ✅ **Monitor usage** in Twilio Console

---

## Next Steps

Once Twilio is configured:
- ✅ Real SMS will be sent to all phone numbers
- ✅ Works for all countries (20+ supported)
- ✅ No more dev mode OTPs
- ✅ Production-ready SMS verification

**Your backend URL**: `https://pcfind-auth.onrender.com`

---

## Support

- **Twilio Docs**: https://www.twilio.com/docs/sms
- **Twilio Support**: https://support.twilio.com/
- **Render Docs**: https://render.com/docs/environment-variables

