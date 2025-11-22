# 🔒 Authentication Gates - Usage Guide

This guide shows how to implement sign-in requirements for features in your PCFind website.

---

## ✅ What's Implemented

### 1. **AI Chat Limit** (✅ DONE)
- **Guest users**: 2 messages limit
- **Signed-in users**: Unlimited messages
- Automatically shows sign-in modal after 2 messages

### 2. **Global Helper Functions** (✅ DONE)
Two functions are globally available:

```javascript
// Check if user is logged in
window.isUserLoggedIn()  // Returns: true or false

// Show sign-in required modal
window.showSignInRequired('Your custom message here')
```

---

## 📋 How to Use in Your Pages

### **Browse Parts - "Add to Build" Button**

✅ **Guests CAN add items to build** (no sign-in required)
🔒 **Sign-in required only when SAVING the build**

```javascript
// Example: On "Add to Build" button click
document.querySelector('.add-to-build-btn').addEventListener('click', function(e){
  // Allow guests to add items (stored in sessionStorage temporarily)
  addItemToBuild(itemId);
  showToast('✅ Added to build!');
  
  // Optional: Show reminder for guests
  if(!window.isUserLoggedIn()){
    showToast('💡 Sign in to save your build permanently!', 'info');
  }
});
```

---

### **PC Builder Page - Save Build**

✅ **Guests CAN use the PC Builder freely**
🔒 **Sign-in required only when clicking "Save Build"**

```javascript
// On "Save Build" button click
document.querySelector('.save-build-btn').addEventListener('click', function(e){
  e.preventDefault();
  
  // Check if user is logged in ONLY when saving
  if(!window.isUserLoggedIn()){
    window.showSignInRequired('Sign in to save your build and access it anytime from any device!');
    return;
  }
  
  // User is logged in - proceed with saving
  saveBuildToAccount(buildData);
  showToast('✅ Build saved successfully!');
});
```

**Better UX Flow:**
```
Guest User:
1. Browse Parts ✅ (Free)
2. Add to Build ✅ (Free, temporary)
3. Use PC Builder ✅ (Free, temporary)
4. Click "Save Build" → 🔒 Sign-in modal appears!
5. After sign-in → Build is saved permanently ✅
```

---

### **Saved Builds Page**

Show sign-in prompt if not logged in:

```javascript
// On Saved Builds page load
if(!window.isUserLoggedIn()){
  // Show empty state with sign-in prompt
  const container = document.getElementById('saved-builds-container');
  container.innerHTML = `
    <div style="text-align:center; padding:40px;">
      <div style="font-size:3rem;">💾</div>
      <h2>No Saved Builds Yet</h2>
      <p>Sign in to save and manage your custom PC builds!</p>
      <button onclick="window.showSignInRequired('Sign in to view and save your builds!')">
        Sign In
      </button>
    </div>
  `;
}
```

---

## 🎨 Customize Messages

You can customize the message shown to users:

```javascript
// Specific to the feature
window.showSignInRequired('Sign in to add items to your build!');
window.showSignInRequired('Create an account to save your builds!');
window.showSignInRequired('Sign in to continue chatting with the AI!');

// Or use default message
window.showSignInRequired(); // Shows generic "sign in to access" message
```

---

## 🔧 Modal Features

The sign-in required modal includes:

- 🔒 Lock icon
- Clear title: "Sign In Required"
- Custom message
- Two buttons:
  - **"Maybe Later"** - Closes the modal
  - **"Sign In"** - Opens the login form automatically
- Click outside to close
- Smooth animations
- Works in both light & dark mode

---

## ✨ Example: Complete Implementation

Here's a complete example for a "Add to Cart" feature:

```javascript
function addToCart(productId){
  // 1. Check authentication
  if(!window.isUserLoggedIn()){
    window.showSignInRequired('Sign in to add items to your cart and save them for later!');
    return false;
  }
  
  // 2. User is logged in - proceed
  const cart = getCart(); // Your cart logic
  cart.push(productId);
  saveCart(cart);
  
  // 3. Show success message
  showToast('✅ Added to cart!');
  
  return true;
}
```

---

## 🧪 Testing

### Test as Guest:
1. Open incognito/private window
2. Try using protected features
3. Should see sign-in modal

### Test as Signed-in User:
1. Log in with demo account (Domo / Furi123)
2. Try using protected features
3. Should work without prompts

---

## 📊 Summary

| Feature | Guest Access | Signed-in Access |
|---------|--------------|------------------|
| **AI Chat** | 2 messages | Unlimited ✅ |
| **Browse Parts** | View + Add to Build ✅ | View + Add to Build ✅ |
| **PC Builder** | Use builder (temp) ✅ | Use builder + Save ✅ |
| **Save Build** | 🔒 Blocked | Save permanently ✅ |
| **Saved Builds** | 🔒 Blocked | View all builds ✅ |
| **Community** | Read only | Post & Comment ✅ |

---

## 💡 Tips

1. **Always check auth BEFORE the action**, not after
2. **Provide clear context** in your custom messages
3. **Disable UI elements** visually when not logged in
4. **Use consistent messaging** across your site
5. **Test both logged-in and guest flows**

---

## 🎯 Next Steps

When building new features:

1. Decide if it requires sign-in
2. Add `if(!window.isUserLoggedIn())` check
3. Call `window.showSignInRequired()` with appropriate message
4. Test with both guest and logged-in users

---

Happy coding! 🚀

