# Coffee Bliss - Static HTML Website

Welcome to the HTML version of the Coffee Bliss website! This is a complete conversion from React to pure HTML, CSS, and vanilla JavaScript.

## 📁 Project Structure

```
html-version/
├── index.html          # Home page
├── menu.html           # Menu page with filtering
├── about.html          # About Us page
├── register.html       # Registration page
├── cart.html           # Shopping cart page
├── checkout.html       # Checkout & payment page
├── styles.css          # Complete CSS styling
├── data.js             # Menu items data
├── cart.js             # Cart management with localStorage
├── toast.js            # Toast notification system
└── README.md           # This file
```

## 🚀 Features

### ✅ All Original Features Implemented

1. **Navigation System**
   - Sticky navigation bar with active page highlighting
   - Cart icon with real-time item count
   - Responsive mobile-friendly menu

2. **Home Page**
   - Hero section with call-to-action buttons
   - Features showcase
   - Featured products grid with add-to-cart
   - Coffee quiz popup
   - Loyalty rewards CTA

3. **Menu Page**
   - Interactive category filtering (All, Hot, Cold, Bakery)
   - Product cards with hover effects
   - "Popular" badges on featured items
   - Add to cart with toast notifications
   - Loyalty program information

4. **About Us Page**
   - Hero section
   - Company story with images
   - Mission & values cards
   - Team member showcase
   - Interactive Google Maps integration
   - Contact information with clickable links

5. **Registration Page**
   - Complete form validation
   - Real-time error messages
   - Favorite drink selection
   - Newsletter opt-in
   - Success modal with personalized message
   - Benefits showcase

6. **Shopping Cart**
   - Full cart management
   - Quantity controls (+/-)
   - Remove items
   - Clear entire cart
   - Order summary with tax calculation
   - Loyalty points display
   - Empty cart state

7. **Checkout Page**
   - Delivery information form
   - Multiple payment methods:
     * Credit/Debit Card
     * Digital Wallet (Apple Pay, Google Pay, Samsung Pay)
     * Cash on Delivery
   - Card details validation
   - Order summary
   - Success confirmation modal
   - Auto-redirect after order

8. **Interactive Features**
   - Toast notifications for cart actions
   - Coffee quiz with random results
   - Modal dialogs
   - Social media integration (Facebook, Instagram, Twitter)
   - Interactive contact links (opens email client, Google Maps)
   - LocalStorage for cart persistence

## 🎨 Design System

**Color Palette:**
- Brown: `#3E2723`
- Beige: `#D7CCC8`
- Cream: `#FFF8E1`
- Dark Brown: `#5D4037`

**Typography:**
- Headings: Playfair Display
- Body: Poppins

## 💾 Data Persistence

The shopping cart uses **localStorage** to persist cart data across page refreshes and browser sessions. Cart data is automatically saved and restored.

## 🌐 How to Use

### Local Development

1. Simply open `index.html` in your web browser
2. No server or build process required!
3. All pages work with relative links

### Web Hosting

Upload all files to any web hosting service:
- GitHub Pages
- Netlify
- Vercel
- Any traditional web host

## 🔧 Customization

### Update Menu Items

Edit `data.js` to modify the menu:

```javascript
{
    id: 1,
    name: 'Your Coffee Name',
    description: 'Description here',
    price: '4.99 BD',
    priceNumber: 4.99,
    category: 'hot', // 'hot', 'cold', or 'bakery'
    image: 'image-url-here',
    popular: true // Shows "Popular" badge
}
```

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --brown: #3E2723;
    --beige: #D7CCC8;
    --cream: #FFF8E1;
    --dark-brown: #5D4037;
}
```

### Modify Contact Information

Update contact details in the footer section of each HTML file.

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## ✨ Interactive Elements

### Coffee Quiz
- Click "Take Coffee Quiz" on home page
- Random coffee recommendation based on time
- Modal popup with results

### Shopping Cart
- Add items from home page or menu
- View cart count in navigation
- Manage quantities in cart page
- Persistent across sessions

### Payment System
- Three payment options
- Form validation
- Simulated payment processing
- Success confirmation

### Social Media
- Attempts to open native apps first
- Falls back to web version if app not installed

## 🔒 Security Note

This is a frontend-only demonstration. For production use:
- Implement backend payment processing
- Add proper form validation server-side
- Secure sensitive data
- Add authentication for user accounts

## 📝 License

This project is created for Coffee Bliss - The Art of Brewing Happiness.

## 🙏 Credits

- Images: Unsplash
- Fonts: Google Fonts (Playfair Display, Poppins)
- Icons: Inline SVG (Lucide icon style)
- Maps: Google Maps

---

**Enjoy your coffee! ☕**
