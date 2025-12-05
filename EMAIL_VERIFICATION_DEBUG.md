# 🔧 Email Verification Debug Guide

## ✅ What I Fixed

1. **Better Error Handling**: Added detailed error messages and console logging
2. **Always Return Code**: Code is now always returned when email service isn't configured
3. **Improved Popup Logic**: Better detection of email sent vs dev mode
4. **Debug Logging**: Console logs to help identify issues

---

## 🧪 How to Test

1. **Open Browser Console** (F12 or Cmd+Option+I)
2. **Go to**: https://lucky-pika-f00e5b.netlify.app/
3. **Click**: Account → Sign Up
4. **Fill form** and click "Send Verification Code"
5. **Check Console** for:
   - `Response data:` - Shows the full API response
   - `DEV MODE - Verification code:` - Shows the code if in dev mode
   - Any error messages

---

## 🔍 What to Look For

### If it works:
- You'll see an alert with the verification code (dev mode)
- OR an alert saying "Verification code sent to your email!" (if email service configured)
- Console will show: `Response data: { success: true, code: "123456", ... }`

### If it doesn't work:
- Check console for error messages
- Look for `Response error:` messages
- Check if the function endpoint is accessible

---

## 🐛 Common Issues

### Issue 1: Function Not Found
**Error**: `404 Not Found` or `Failed to fetch`
**Solution**: Check that `netlify/functions/send-email-code.js` exists and is deployed

### Issue 2: CORS Error
**Error**: `CORS policy` error
**Solution**: Already fixed - function includes CORS headers

### Issue 3: No Code Returned
**Error**: Alert shows but no code
**Solution**: Check console - code should be in `data.code` field

### Issue 4: Email Service Error
**Error**: Email not sent but no code shown
**Solution**: Code should always be returned when email isn't sent (now fixed)

---

## 📋 Expected Behavior

### Without Email Service (Dev Mode):
```
Alert: "🔧 DEV MODE: Your verification code is 123456.
       In production, this will be sent to your email."
Console: "DEV MODE - Verification code: 123456"
```

### With Email Service:
```
Alert: "✅ Verification code sent to your email! 
       Please check your inbox (and spam folder)."
Console: "Response data: { success: true, emailSent: true, ... }"
```

---

## 🔧 Next Steps if Still Not Working

1. **Check Browser Console** for specific error
2. **Check Network Tab** - see the actual API request/response
3. **Verify Function Deployed** - check Netlify Functions logs
4. **Test Function Directly** - use curl or Postman to test the endpoint

---

## 📞 Need More Help?

Share the console error message and I'll help fix it!

