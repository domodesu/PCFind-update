# 🤖 AI Chat Setup Guide

This guide explains how to set up the AI-powered chat assistant for PCFind.

## Overview

The AI chat feature uses OpenAI's GPT API to provide intelligent PC building assistance. Users can ask questions about:
- PC component recommendations
- Compatibility checking
- Budget build suggestions
- Performance comparisons
- Upgrade advice

## Features

✅ **Conversational AI** - Natural language understanding
✅ **Context-aware** - Remembers last 10 messages
✅ **Philippines-focused** - Prices in ₱, local retailers
✅ **Shareable API** - Other websites can use the same backend
✅ **Fallback mode** - Works without API key (limited functionality)

---

## Setup Instructions

### 1. Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in
3. Navigate to **API keys** section
4. Click **"Create new secret key"**
5. Copy the key (starts with `sk-...`)
6. **Important**: Save it securely - you can't see it again!

### 2. Add API Key to Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Select your **pcfind-auth** backend service
3. Go to **Environment** tab
4. Click **"Add Environment Variable"**
5. Add these variables:

```
Key: OPENAI_API_KEY
Value: sk-your-actual-key-here

Key: OPENAI_MODEL (optional)
Value: gpt-3.5-turbo (or gpt-4 for better quality)
```

6. Click **"Save Changes"**
7. The service will automatically redeploy

### 3. Test the Chat

1. Visit your site: `https://domodesu.github.io/`
2. Open the burger menu (☰)
3. Click **"💬 AI Chat"**
4. Type a question like: *"What CPU should I pair with RTX 4070?"*
5. Wait for the AI response!

---

## How It Works

### Frontend (`site/index.html`)

```javascript
// User types a message
// Frontend sends to: https://pcfind-auth.onrender.com/chat
{
  "message": "What CPU should I pair with RTX 4070?",
  "history": [...last 10 messages]
}

// Backend responds with:
{
  "success": true,
  "reply": "For the RTX 4070, I recommend..."
}
```

### Backend (`auth-backend/server.js`)

```javascript
// POST /chat endpoint
// - Receives user message + history
// - Calls OpenAI API with Philippines-focused system prompt
// - Returns AI response
```

---

## Fallback Mode (No API Key)

If `OPENAI_API_KEY` is not set, the system works in fallback mode:
- Shows a friendly message explaining AI capabilities
- Tells users to configure the API key
- Doesn't crash or error

---

## Cost Management

OpenAI pricing (as of 2024):
- **GPT-3.5-turbo**: ~$0.001/1K tokens (~1,500 words)
- **GPT-4**: ~$0.03/1K tokens (higher quality, more expensive)

### Estimated Costs:
- **100 chat messages/day** with GPT-3.5-turbo ≈ $1-3/month
- **1,000 chat messages/day** with GPT-3.5-turbo ≈ $10-30/month

### Tips to Save Money:
1. Use `gpt-3.5-turbo` instead of `gpt-4`
2. Limit `max_tokens` to 500 (already configured)
3. Set monthly spending limits in OpenAI dashboard
4. Monitor usage in OpenAI dashboard

---

## Making It Shareable

The AI backend is designed to be used by other websites:

### For Other Sites to Use PCFind AI:

```javascript
// From any website:
fetch('https://pcfind-auth.onrender.com/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: "What GPU is best for 1440p gaming?",
    history: []
  })
})
.then(r => r.json())
.then(data => console.log(data.reply));
```

### CORS is Enabled
The backend has CORS enabled, so any website can call the API.

---

## Customization

### Change AI Personality

Edit the `systemPrompt` in `auth-backend/server.js`:

```javascript
const systemPrompt = `You are a helpful PC building assistant for PCFind...`;
```

### Adjust Response Length

Change `max_tokens` in `auth-backend/server.js`:

```javascript
max_tokens: 500  // Increase for longer responses
```

### Change Model

Set environment variable on Render:
```
OPENAI_MODEL=gpt-4
```

---

## Troubleshooting

### "Backend is waking up"
- First request takes 30 seconds (Render free tier cold start)
- Subsequent requests are fast
- **Solution**: Upgrade to paid Render plan for always-on hosting

### "OpenAI API error"
- Check API key is correct in Render environment variables
- Verify you have credits in OpenAI account
- Check OpenAI status: https://status.openai.com/

### Chat page is blank
- Hard refresh: `Ctrl + Shift + R`
- Clear browser cache
- Check browser console (F12) for errors

---

## Next Steps

1. **Set up the API key** on Render
2. **Test the chat** thoroughly
3. **Monitor costs** in OpenAI dashboard
4. **Gather user feedback** and improve prompts
5. **Consider upgrading** to GPT-4 for better quality

---

## Support

Need help? Check:
- [OpenAI Documentation](https://platform.openai.com/docs)
- [Render Documentation](https://render.com/docs)
- Open an issue on GitHub

Happy building! 🚀

