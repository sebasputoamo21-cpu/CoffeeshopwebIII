// Cart Management System using LocalStorage
const cart = {
    // Get cart from localStorage
    getCart() {
        const cartData = localStorage.getItem('coffeeBlissCart');
        return cartData ? JSON.parse(cartData) : [];
    },

    // Save cart to localStorage
    saveCart(cartData) {
        localStorage.setItem('coffeeBlissCart', JSON.stringify(cartData));
        this.notifyCartUpdate();
    },

    // Add item to cart
    addToCart(item) {
        const cartData = this.getCart();
        const existingItem = cartData.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartData.push({ ...item, quantity: 1 });
        }

        this.saveCart(cartData);
    },

    // Remove item from cart
    removeFromCart(itemId) {
        const cartData = this.getCart();
        const filteredCart = cartData.filter(item => item.id !== itemId);
        this.saveCart(filteredCart);
    },

    // Update item quantity
    updateQuantity(itemId, quantity) {
        if (quantity <= 0) {
            this.removeFromCart(itemId);
            return;
        }

        const cartData = this.getCart();
        const item = cartData.find(cartItem => cartItem.id === itemId);
        
        if (item) {
            item.quantity = quantity;
            this.saveCart(cartData);
        }
    },

    // Clear entire cart
    clearCart() {
        localStorage.removeItem('coffeeBlissCart');
        this.notifyCartUpdate();
    },

    // Get cart total
    getCartTotal() {
        const cartData = this.getCart();
        return cartData.reduce((total, item) => total + (item.priceNumber * item.quantity), 0);
    },

    // Get total number of items
    getCartCount() {
        const cartData = this.getCart();
        return cartData.reduce((count, item) => count + item.quantity, 0);
    },

    // Notify cart update (for updating UI)
    notifyCartUpdate() {
        window.dispatchEvent(new Event('cartUpdated'));
    }
};

// Update cart count in navbar
function updateCartCount() {
    const count = cart.getCartCount();
    const cartCountElements = document.querySelectorAll('#cartCount');
    
    cartCountElements.forEach(element => {
        element.textContent = count;
        element.style.display = count > 0 ? 'flex' : 'none';
    });
}

// Listen for cart updates
window.addEventListener('cartUpdated', updateCartCount);
