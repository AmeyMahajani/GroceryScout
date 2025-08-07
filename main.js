document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('products-grid');
    const productsHeading = document.getElementById('products-heading');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const categoryNav = document.querySelector('.category-nav');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const cartIcon = document.getElementById('cart-icon');
    const closeCartBtn = document.getElementById('close-cart');
    const overlay = document.getElementById('overlay');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function init() {
        displayProducts('all');
        updateCartUI();
        setupEventListeners();
    }

    function setupEventListeners() {
        categoryNav.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                const category = e.target.getAttribute('data-category');
                document.querySelectorAll('.category-nav li').forEach(item => item.classList.remove('active'));
                e.target.classList.add('active');
                displayProducts(category);
            }
        });

        searchBtn.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim().toLowerCase();
            if (searchTerm) searchProducts(searchTerm);
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = searchInput.value.trim().toLowerCase();
                if (searchTerm) searchProducts(searchTerm);
            }
        });

        cartIcon.addEventListener('click', showCart);
        closeCartBtn.addEventListener('click', hideCart);
        overlay.addEventListener('click', hideCart);

        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                alert('Thank you for your order!');
                cart = [];
                saveCart();
                updateCartUI();
                hideCart();
            } else {
                alert('Your cart is empty.');
            }
        });
    }

    function showCart() {
        const cartSidebar = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('overlay');
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
    }

    function hideCart() {
        const cartSidebar = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('overlay');
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    function displayProducts(category) {
        productsGrid.innerHTML = '';
        const products = window.productDatabase || [];
        const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

        productsHeading.textContent = category === 'all' ? 'All Products' : `${category.charAt(0).toUpperCase() + category.slice(1)} Products`;

        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = '<p>No products found.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }

    function searchProducts(term) {
        productsGrid.innerHTML = '';
        const products = window.productDatabase || [];
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term)
        );

        productsHeading.textContent = `Search Results for "${term}"`;

        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = '<p>No products found.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }

    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.unit}</p>
                <p class="product-price">₹${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" data-id="${product.id}">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        `;
        card.querySelector('.add-to-cart-btn').addEventListener('click', () => addToCart(product.id, 1));
        return card;
    }

    function addToCart(productId, quantity = 1) {
        const product = (window.productDatabase || []).find(p => String(p.id) === String(productId));
        if (!product) return;

        const existingItem = cart.find(item => String(item.id) === String(productId));
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                unit: product.unit,
                quantity
            });
        }

        saveCart();
        updateCartUI();
    }

    function updateCartUI() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartItems.innerHTML = '';

        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            cartTotal.textContent = '₹0.00';
            return;
        }

        let total = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.unit}</p>
                    <p class="cart-item-price">₹${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="item-decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="item-increase" data-id="${item.id}">+</button>
                    <button class="item-remove" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });

        document.querySelectorAll('.item-decrease').forEach(btn => {
            btn.addEventListener('click', (e) => updateCartItemQuantity(e.target.getAttribute('data-id'), -1));
        });

        document.querySelectorAll('.item-increase').forEach(btn => {
            btn.addEventListener('click', (e) => updateCartItemQuantity(e.target.getAttribute('data-id'), 1));
        });

        document.querySelectorAll('.item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => removeCartItem(e.target.closest('.item-remove').getAttribute('data-id')));
        });

        cartTotal.textContent = `₹${total.toFixed(2)}`;
    }

    function updateCartItemQuantity(id, change) {
        const item = cart.find(item => String(item.id) === String(id));
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeCartItem(id);
            } else {
                saveCart();
                updateCartUI();
            }
        }
    }

    function removeCartItem(id) {
        cart = cart.filter(item => String(item.id) !== String(id));
        saveCart();
        updateCartUI();
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    window.addToCart = addToCart;
    window.updateCartUI = updateCartUI;
    window.showCart = showCart;
    window.productDatabase = window.productDatabase || [];

    init();
});