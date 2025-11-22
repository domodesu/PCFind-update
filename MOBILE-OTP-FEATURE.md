# 📱 Mobile OTP with Country Code Selector

## ✨ What's New

You can now register with **phone numbers** using an easy country code selector!

---

## 🇵🇭 Philippines Users (Default)

The country code is **pre-set to +63** for convenience!

**Just type your number normally:**
```
09123456789  →  System converts to: +639123456789
```

**No need to:**
- ❌ Type the +63 prefix
- ❌ Remove the leading 0
- ❌ Format anything

**Just enter:** `09123456789` and click "Send OTP"! ✅

---

## 🌏 International Users

We support **20+ countries**!

### How to Use:

1. **Select your country** from the dropdown:
   - 🇵🇭 +63 (Philippines) - Default
   - 🇺🇸 +1 (USA)
   - 🇬🇧 +44 (UK)
   - 🇯🇵 +81 (Japan)
   - 🇰🇷 +82 (South Korea)
   - 🇨🇳 +86 (China)
   - 🇮🇳 +91 (India)
   - 🇸🇬 +65 (Singapore)
   - 🇲🇾 +60 (Malaysia)
   - 🇹🇭 +66 (Thailand)
   - 🇦🇺 +61 (Australia)
   - 🇳🇿 +64 (New Zealand)
   - 🇩🇪 +49 (Germany)
   - 🇫🇷 +33 (France)
   - 🇮🇹 +39 (Italy)
   - 🇪🇸 +34 (Spain)
   - 🇷🇺 +7 (Russia)
   - 🇧🇷 +55 (Brazil)
   - 🇲🇽 +52 (Mexico)
   - 🇿🇦 +27 (South Africa)

2. **Enter your local number** (without country code)

3. **System automatically combines** country code + your number

### Examples:

**USA** 🇺🇸:
```
Select: +1
Enter: 2025551234
Result: +12025551234
```

**Japan** 🇯🇵:
```
Select: +81
Enter: 9012345678
Result: +819012345678
```

**Singapore** 🇸🇬:
```
Select: +65
Enter: 91234567
Result: +6591234567
```

---

## 📧 Still Want Email?

No problem! Just select **"📧 Email"** from the dropdown.

The input will change to email mode:
```
Select: 📧 Email
Enter: your-email@example.com
```

---

## 🎯 UI Features

### Smart Placeholder
The placeholder text **changes automatically** based on your selection:

- **Phone mode**: Shows `09#########`
- **Email mode**: Shows `your-email@example.com`

### Input Validation
- ✅ **Phone**: Validates length (8-15 digits)
- ✅ **Email**: Validates email format
- ✅ **Auto-format**: Removes leading zeros from phone numbers

### Visual Feedback
- 🌐 Country flags for easy recognition
- 💬 Helpful hint text below input
- ⚠️ Clear error messages if invalid

---

## 🧪 Testing Examples

### Test 1: Philippines Mobile
```
1. Sign up
2. Country: 🇵🇭 +63 (already selected!)
3. Enter: 09171234567
4. Send OTP
5. Backend receives: +639171234567
```

### Test 2: USA Mobile
```
1. Sign up
2. Select: 🇺🇸 +1
3. Enter: 5551234567
4. Send OTP
5. Backend receives: +15551234567
```

### Test 3: Email
```
1. Sign up
2. Select: 📧 Email
3. Enter: test@gmail.com
4. Send OTP
5. Backend receives: test@gmail.com
```

---

## 💡 Tips for Users

### Philippines Users:
- ✅ **Keep it simple**: Just type `09...` as usual
- ✅ **All networks work**: Globe, Smart, TM, TNT, Sun, etc.
- ✅ **No special formatting needed**

### International Users:
- ✅ **Select your country first**
- ✅ **Enter local format** (what you normally dial in your country)
- ✅ **System handles the rest**

### Email Users:
- ✅ **Choose "📧 Email"** from dropdown
- ✅ **Works with any email provider**
- ✅ **Check spam folder** for OTP emails

---

## 🔧 Technical Details

### Phone Number Processing:
1. User enters: `09123456789`
2. System removes leading zeros: `9123456789`
3. System prepends country code: `+639123456789`
4. Sent to backend for OTP

### Supported Formats:
- ✅ `09123456789` → `+639123456789`
- ✅ `9123456789` → `+639123456789`
- ✅ `639123456789` → `+639123456789`
- ✅ `0123456789` → `+63123456789` (landline)

### Validation Rules:
- Phone: 8-15 digits (after country code)
- Email: Standard email regex
- Country code: Required for phone numbers

---

## 🎨 UI Preview

```
┌─────────────────────────────────────┐
│  Sign up                            │
├─────────────────────────────────────┤
│  Username                           │
│  [TestUser123_____________]         │
│                                     │
│  Email or Phone Number              │
│  [🇵🇭 +63 ▼]  [09#########_____]   │
│  For phone: 09######### | For email:│
│  select 📧 and enter email          │
│                                     │
│  [Send OTP________________]         │
│                                     │
└─────────────────────────────────────┘
```

---

## 🚀 What's Next?

After Brevo email is set up:
- 📧 **Email users**: Get OTP via email
- 📱 **Phone users**: Ready for SMS (when Twilio is added)
- 🌐 **International**: Works globally!

---

## ❓ FAQ

**Q: Do I need to type +63 for Philippines?**  
A: No! Just type `09123456789` - it's automatic!

**Q: Can I use landline numbers?**  
A: Yes, but they won't receive SMS. Use email instead.

**Q: What if my country isn't listed?**  
A: Use email mode (📧) for now, or contact support to add your country.

**Q: Will I get SMS codes?**  
A: Currently in dev mode (codes in toasts). After Twilio setup, yes!

**Q: Does this work in all countries?**  
A: Yes! 20+ countries supported. More can be added easily.

---

## 🎉 Summary

✅ **Philippines users**: Just type `09...` - easiest registration ever!  
✅ **International users**: Select country, enter local number  
✅ **Email users**: Still works perfectly  
✅ **Smart validation**: Catches errors before sending  
✅ **Auto-formatting**: System handles all the technical stuff  

**Try it now**: https://domodesu.github.io/ 🚀

