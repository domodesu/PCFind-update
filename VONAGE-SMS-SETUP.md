# 📱 Vonage SMS Setup Guide

## Why Vonage?

- ✅ **No number verification needed** - Can send to any number on trial
- ✅ **Free trial** - €2 free credit (enough for ~100 SMS)
- ✅ **Easy setup** - Simple API integration
- ✅ **Works globally** - Send SMS to any country

---

## Step 1: Create Vonage Account

1. **Sign up**: https://dashboard.nexmo.com/sign-up
   - Free account with €2 credit
   - No credit card required for trial
   - Enough for ~100 SMS messages

2. **Get your API credentials**:
   - Go to: https://dashboard.nexmo.com/getting-started-guide
   - **API Key**: Found on dashboard (starts with letters/numbers)
   - **API Secret**: Click "Show" to reveal (keep this secret!)

---

## Step 2: Get a Vonage Virtual Number (Optional but Recommended)

1. **Go to Numbers**: https://dashboard.nexmo.com/your-numbers
2. **Click "Buy Numbers"**
3. **Select country** (e.g., United States for cheapest option)
4. **Choose a number** with SMS capability
5. **Buy the number** (many are free or very cheap)

**Note**: You can also use a "Brand Name" instead of a number (see Step 3)

---

## Step 3: Set Up Brand Name (Alternative to Phone Number)

Vonage allows you to send SMS from a "Brand Name" instead of a phone number:

1. **Go to**: https://dashboard.nexmo.com/settings
2. **Look for "Brand Name" or "Sender ID"**
3. **Set your brand name**: `PCFind` (or your preferred name)
4. **Note**: Brand names work in many countries, but not all

**For Philippines**: You may need to use a virtual number instead of brand name.

---

## Step 4: Add Environment Variables to Render

1. **Go to Render Dashboard**: https://dashboard.render.com
2. **Select your service**: `pcfind-auth` (or your backend service name)
3. **Click "Environment"** in the left sidebar
4. **Add these environment variables**:

   ```
   VONAGE_API_KEY=your_api_key_here
   VONAGE_API_SECRET=your_api_secret_here
   VONAGE_BRAND_NAME=PCFind
   ```

   **OR if using a virtual number**:
   ```
   VONAGE_API_KEY=your_api_key_here
   VONAGE_API_SECRET=your_api_secret_here
   VONAGE_PHONE_NUMBER=+1234567890
   ```

   **Important**: 
   - Replace `your_api_key_here` with your actual API Key
   - Replace `your_api_secret_here` with your actual API Secret
   - Use `VONAGE_BRAND_NAME` for brand name OR `VONAGE_PHONE_NUMBER` for virtual number

5. **Click "Save Changes"**
6. **Redeploy** your service (Render will auto-redeploy, or click "Manual Deploy")

---

## Step 5: Install Vonage Package

The backend code already includes Vonage support, but you need to install the package:

1. **In your local auth-backend folder**:
   ```bash
   cd auth-backend
   npm install
   ```

2. **Commit and push** the updated `package.json`:
   ```bash
   git add auth-backend/package.json
   git commit -m "Add Vonage SMS support"
   git push
   ```

3. **Render will automatically install** the package on next deploy

---

## Step 6: Test It!

1. Wait for deployment to complete (1-2 minutes)
2. Go to your signup page
3. Enter a phone number (any number - no verification needed!)
4. Click "Send OTP"
5. **You should receive a real SMS** on that phone number! 📱

---

## Cost Information

### Vonage Pricing:
- **Trial**: €2 free credit (enough for ~100 SMS)
- **After trial**: ~€0.01-0.05 per SMS (depending on country)
- **Philippines**: ~€0.02 per SMS
- **USA**: ~€0.01 per SMS

### Example Costs:
- 100 SMS = ~€2-5 (depending on country)
- 1,000 SMS = ~€20-50 (depending on country)

---

## Troubleshooting

### SMS Not Sending?

1. **Check Render logs**:
   - Go to Render dashboard → Your service → Logs
   - Look for Vonage errors

2. **Verify environment variables**:
   - Make sure all 3 variables are set correctly
   - No extra spaces or quotes
   - Use either `VONAGE_BRAND_NAME` OR `VONAGE_PHONE_NUMBER` (not both)

3. **Check Vonage Dashboard**:
   - Go to https://dashboard.nexmo.com/
   - Check "Analytics" → "SMS" to see message status
   - Look for any errors or blocked messages

4. **Verify phone number format**:
   - Must include country code: `+639171234567`
   - No spaces or dashes
   - E.164 format required

5. **Brand Name vs Phone Number**:
   - Some countries don't support brand names
   - If brand name doesn't work, use a virtual number instead
   - Philippines may require a virtual number

### Still Not Working?

- Check if you have enough credit in Vonage account
- Verify API credentials are correct
- Make sure the package is installed: `npm install @vonage/server-sdk`

---

## Advantages Over Twilio

✅ **No number verification needed** - Send to any number on trial  
✅ **Brand name support** - Send from "PCFind" instead of a number  
✅ **Simple setup** - Just API key and secret  
✅ **Works immediately** - No need to verify recipient numbers  

---

## Next Steps

Once Vonage is configured:
- ✅ Real SMS will be sent to all phone numbers
- ✅ Works for all countries (no verification needed)
- ✅ No more dev mode OTPs
- ✅ Production-ready SMS verification

**Your backend URL**: `https://pcfind-auth.onrender.com`

---

## Support

- **Vonage Docs**: https://developer.vonage.com/en/sms/overview
- **Vonage Dashboard**: https://dashboard.nexmo.com/
- **Vonage Support**: https://help.nexmo.com/

