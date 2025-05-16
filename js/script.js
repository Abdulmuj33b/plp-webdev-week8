document.addEventListener('DOMContentLoaded', () => {
    // Product Data
    const products = [
        {
            id: '1',
            name: 'Smart Watch Pro',
            price: 199.99,
            category: 'gadget',
            image: 'images/products/smart-watch.jpg',
            featured: true
        },
        {
            id: '2',
            name: 'Wireless Earbuds',
            price: 149.99,
            category: 'accessory',
            image: 'images/products/earbuds.jpg',
            featured: true
        },
        // Add more products
    ];

    // Cart System
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // DOM Elements
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total-price');
    const cartSidebar = document.getElementById('cart-sidebar');
    const mobileMenu = document.getElementById('mobile-menu');

    // Update Cart Display
    function updateCartDisplay() {
        cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Add to Cart
    function addToCart(product, quantity = 1) {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({ ...product, quantity });
        }
        updateCartDisplay();
        renderCart();
    }

    // Remove from Cart
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartDisplay();
        renderCart();
    }

    // Render Cart
    function renderCart() {
        cartItems.innerHTML = cart.length ? cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `).join('') : '<p>Your cart is empty</p>';
        
        cartTotal.textContent = `$${cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}`;
    }

    // Event Listeners
    document.addEventListener('click', e => {
        if (e.target.closest('#cart-toggle')) {
            cartSidebar.classList.add('active');
        }
        if (e.target.closest('#close-cart')) {
            cartSidebar.classList.remove('active');
        }
        if (e.target.closest('#menu-toggle')) {
            mobileMenu.classList.add('active');
        }
        if (e.target.closest('#close-menu')) {
            mobileMenu.classList.remove('active');
        }
        if (e.target.closest('.add-to-cart')) {
            const productId = e.target.closest('button').dataset.id;
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
        if (e.target.closest('.remove-item')) {
            const productId = e.target.closest('button').dataset.id;
            removeFromCart(productId);
        }
    });

    // Initial Setup
    updateCartDisplay();
    renderCart();
});

// Cart Page Functionality
function renderFullCart() {
    const cartContainer = document.getElementById('cart-items-full');
    const cartTotal = document.getElementById('full-cart-total');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart">Your cart is currently empty</p>';
        cartTotal.textContent = '$0.00';
        return;
    }

    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                </div>
            </div>
            <button class="remove-item" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    cartTotal.textContent = `$${calculateCartTotal().toFixed(2)}`;
}

// Account Page Functionality
function handleAuthForms() {
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(`${tabId}-form`).classList.add('active');
        });
    });
}

// Initialize Page Specific Code
function initPage() {
    const path = window.location.pathname;
    
    if (path.includes('cart.html')) {
        renderFullCart();
    }
    
    if (path.includes('account.html')) {
        handleAuthForms();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Existing code...
    initPage();
});
