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

### Option A: Get a US Number (Recommended for Free Trial)
1. In Twilio Console, go to **Phone Numbers** → **Manage** → **Buy a number**
2. **Change country to United States** (US numbers are often free/cheaper)
3. **Make sure "SMS" capability is checked** in filters
4. Search for numbers
5. Look for numbers that show **SMS capability** (not just Voice)
6. Choose a number (many US numbers are free on trial)
7. Copy the phone number (format: `+1234567890`)

**Note**: You can use a US number to send SMS to ANY country, including Philippines!

### Option B: Get a Philippines Number
1. In Twilio Console, go to **Phone Numbers** → **Manage** → **Buy a number**
2. Select **Philippines** as country
3. **IMPORTANT**: Make sure "SMS" capability is checked in the filters
4. Search for numbers
5. Look for numbers that show **SMS** in the Capabilities column (not just Voice)
6. Choose a number (may cost $15/month for Philippines)
7. Copy the phone number (format: `+639123456789`)

**Note**: Philippines numbers with SMS capability typically cost $15/month. US numbers are often free on trial.

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

## Step 4: Verify Phone Numbers (Trial Account Requirement)

**IMPORTANT**: Twilio trial accounts can only send SMS to **verified phone numbers**.

### How to Verify Phone Numbers:

1. **Go to Twilio Verified Numbers**: https://console.twilio.com/us1/develop/phone-numbers/manage/verified
2. **Click "Add a new number"**
3. **Select country** (e.g., Philippines: +63)
4. **Enter phone number** you want to test with (e.g., `+639171234567`)
5. **Click "Verify"**
6. **Enter verification code** sent to that number
7. **Repeat** for any other test numbers

**Note**: After upgrading to a paid account, you can send SMS to any number without verification.

## Step 5: Test It!

1. Wait for deployment to complete (1-2 minutes)
2. **Make sure your test phone number is verified** in Twilio Console
3. Go to your signup page
4. Enter the **verified** phone number
5. Click "Send OTP"
6. **You should receive a real SMS** on that phone number! 📱

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

2. **Common Error: "Unverified Number"**:
   - **Error**: `The number +63XXXXX is unverified. Trial accounts cannot send messages to unverified numbers`
   - **Solution**: Verify the phone number at https://console.twilio.com/us1/develop/phone-numbers/manage/verified
   - **Note**: Trial accounts can only send to verified numbers

3. **Verify environment variables**:
   - Make sure all 3 variables are set correctly
   - No extra spaces or quotes
   - Phone number includes `+` sign

4. **Check Twilio Console**:
   - Go to https://console.twilio.com/
   - Check "Monitor" → "Logs" → "Messaging"
   - See if messages are being sent

5. **Verify phone number format**:
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

