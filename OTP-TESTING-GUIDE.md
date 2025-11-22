# OTP Testing Guide

## Test 1: Frontend OTP Flow (Dev Mode)

1. **Open your site**: https://domodesu.github.io/
   - Wait 2-3 min if GitHub Actions is still deploying: https://github.com/domodesu/domodesu.github.io/actions

2. **Test Registration with OTP (Email)**:
   - Click burger menu → "Sign In"
   - Click "Sign up" link
   - Enter:
     - Username: `TestUser123`
     - Country Code: Select **"📧 Email"**
     - Contact: `test@example.com` (any email works in dev mode)
   - Click **"Send OTP"**
   - **Look for toast notification** showing "Dev Mode - OTP: 123456"
   - Enter the OTP code (6 digits)
   - Watch for "✓ Verified!" message
   - Create password and confirm
   - Click "Create Account"

3. **Test Registration with OTP (Phone - Philippines)**:
   - Click "Sign up" again (or use different username)
   - Enter:
     - Username: `TestUser456`
     - Country Code: **"🇵🇭 +63"** (default)
     - Contact: `09123456789` (no need to type +63!)
   - Click **"Send OTP"**
   - System automatically combines to: `+639123456789`
   - Enter the OTP from toast
   - Complete registration

4. **Test Other Countries**:
   - Try different country codes:
     - 🇺🇸 +1 (USA)
     - 🇯🇵 +81 (Japan)
     - 🇸🇬 +65 (Singapore)
   - Just enter your local phone number without country code!

5. **Expected Result**:
   - ✅ Toast shows "Account created!"
   - ✅ Burger menu shows username instead of "Sign In"
   - ✅ You're logged in!
   - ✅ Works for both email and phone numbers!

## Test 2: Backend OTP Verification (Render Logs)

1. **Open Render Dashboard**: https://dashboard.render.com/
2. **Go to your backend service**: `pcfind-auth`
3. **Click "Logs"** tab
4. **Trigger OTP from frontend** (Step 1)
5. **Look for log**:
   ```
   🔐 DEV MODE - OTP for test@example.com: 123456
   ```

## Test 3: API Testing (Optional - Advanced)

Test endpoints directly using PowerShell:

```powershell
# Test Send OTP
$body = @{ contact = "test@example.com" } | ConvertTo-Json
Invoke-RestMethod -Uri "https://pcfind-auth.onrender.com/send-otp" -Method POST -Body $body -ContentType "application/json"

# Test Verify OTP (use the OTP from previous response or logs)
$body = @{ contact = "test@example.com"; code = "123456" } | ConvertTo-Json
Invoke-RestMethod -Uri "https://pcfind-auth.onrender.com/verify-otp" -Method POST -Body $body -ContentType "application/json"
```

---

## 🚨 Troubleshooting

**Issue**: "Network error" toast appears
- **Fix**: Backend might be sleeping (Render free tier). Wait 30 seconds and try again.

**Issue**: No OTP shown in toast
- **Fix**: Check Render logs for the OTP code, or try refreshing the page.

**Issue**: "Invalid OTP" error
- **Fix**: OTPs expire after 5 minutes. Click "Resend" and use the new code.

**Issue**: "Create Account" button stays disabled
- **Fix**: Make sure you entered the full 6-digit OTP. It auto-verifies.

---

✅ **After successful testing, proceed to email setup below!**

