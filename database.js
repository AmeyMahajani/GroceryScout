// Products database with proper image links
const productDatabase = [
    {
        id: 1,
        name: "Fresh Tomatoes",
        category: "fruits",
        price: 40,
        unit: "kg",
        image: "https://tse3.mm.bing.net/th?id=OIP.JMRIOYp2jmlICSlEma_3gQHaE7&pid=Api&P=0&h=180",
        stock: 50
    },
    {
        id: 2,
        name: "Onions",
        category: "fruits",
        price: 30,
        unit: "kg",
        image: "https://wallpaperaccess.com/full/1912934.jpg",
        stock: 100
    },
    {
        id: 3,
        name: "Potatoes",
        category: "fruits",
        price: 25,
        unit: "kg",
        image: "https://tse2.mm.bing.net/th?id=OIP.F0aQXnmCDGEadfNivihUAQHaF8&pid=Api&P=0&h=180",
        stock: 80
    },
    {
        id: 4,
        name: "Amul Butter",
        category: "dairy",
        price: 55,
        unit: "100g",
        image: "http://www.dudhsagardairy.coop/wp-content/uploads/2014/04/3-Amul-Butter-4.jpg",
        stock: 40
    },
    {
        id: 5,
        name: "Paneer",
        category: "dairy",
        price: 80,
        unit: "200g",
        image: "https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/E5THX0/bowl-of-indian-paneer-cheese-E5THX0.jpg",
        stock: 30
    },
    {
        id: 6,
        name: "Amul Milk",
        category: "dairy",
        price: 60,
        unit: "1L",
        image: "https://tse2.mm.bing.net/th?id=OIP.TvEOKEpwH2tfHJi8vigbxQHaHa&pid=Api&P=0&h=180",
        stock: 120
    },
    {
        id: 7,
        name: "Organic Turmeric Powder",
        category: "spices",
        price: 45,
        unit: "100g",
        image: "https://m.media-amazon.com/images/I/71zzXln1+RL._SL1500_.jpg",
        stock: 60
    },
    {
        id: 8,
        name: "Red Chilli Powder",
        category: "spices",
        price: 50,
        unit: "100g",
        image: "https://www.btmint.com/wp-content/uploads/products/Red-Chilli-Powder-1050x1536.png",
        stock: 55
    },
    {
        id: 9,
        name: "Garam Masala",
        category: "spices",
        price: 65,
        unit: "100g",
        image: "https://tse3.mm.bing.net/th?id=OIP.QmsRdPiwLFEceEsU7p8RWAHaHa&pid=Api&P=0&h=180",
        stock: 45
    },
    {
        id: 10,
        name: "Basmati Rice Packet",
        category: "grains",
        price: 120,
        unit: "kg",
        image: "https://tse1.mm.bing.net/th?id=OIP.1wMW14MlzX-9NV32RTFhqgHaJT&pid=Api&P=0&h=180",
        stock: 70
    },
    {
        id: 11,
        name: "Toor Dal",
        category: "grains",
        price: 110,
        unit: "kg",
        image: "https://tse1.mm.bing.net/th?id=OIP.syYOJ8mHFpb32aYZlB4UPgHaJs&pid=Api&P=0&h=180",
        stock: 65
    },
    {
        id: 12,
        name: "Wheat Flour Packet",
        category: "grains",
        price: 45,
        unit: "kg",
        image: "https://spicetown.fi/wp-content/uploads/Aashirvaad-Whole-Wheat-Flour-2-kg.jpg",
        stock: 90
    },
    {
        id: 13,
        name: "Lays Chips",
        category: "snacks",
        price: 30,
        unit: "pack",
        image: "https://tse2.mm.bing.net/th?id=OIP.-GbIDCev1OaVYbtwSBhUDQHaHa&pid=Api&P=0&h=180",
        stock: 150
    },
    {
        id: 14,
        name: "Hide & Seek",
        category: "snacks",
        price: 25,
        unit: "pack",
        image: "https://tse2.mm.bing.net/th?id=OIP.Um3GrvZd48kt1wR61lS1LAHaE8&pid=Api&P=0&h=180",
        stock: 200
    },
    {
        id: 15,
        name: "Aloo Bhujia",
        category: "snacks",
        price: 55,
        unit: "200g",
        image: "https://evegro.com/wp-content/uploads/2020/10/Haldirams-Aloo-Bhujia-Zipper-Packet.jpg",
        stock: 80
    },
    {
        id: 16, 
        name: "Cream",
        category: "dairy",
        price: 70, 
        unit: "200ml",
        image: "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/12529008_XL1_20221021.jpg?w=1200&q=70",
        stock:70
    }
];

// Ingredients database
const ingredientsDatabase = [
    { id: 101, name: "Tomatoes", price: 40, unit: "kg", category: "fruits" },
    { id: 102, name: "Onions", price: 30, unit: "kg", category: "fruits" },
    { id: 103, name: "Potatoes", price: 25, unit: "kg", category: "fruits" },
    { id: 104, name: "Paneer", price: 80, unit: "200g", category: "dairy" },
    { id: 105, name: "Butter", price: 55, unit: "100g", category: "dairy" },
    { id: 106, name: "Milk", price: 60, unit: "1L", category: "dairy" },
    { id: 107, name: "Cream", price: 70, unit: "200ml", category: "dairy" },
    { id: 108, name: "Turmeric Powder", price: 45, unit: "100g", category: "spices" },
    { id: 109, name: "Red Chilli Powder", price: 50, unit: "100g", category: "spices" },
    { id: 110, name: "Garam Masala", price: 65, unit: "100g", category: "spices" },
    { id: 111, name: "Cumin Seeds", price: 40, unit: "100g", category: "spices" },
    { id: 112, name: "Coriander Powder", price: 35, unit: "100g", category: "spices" },
    { id: 113, name: "Basmati Rice", price: 120, unit: "kg", category: "grains" },
    { id: 114, name: "Cashews", price: 200, unit: "100g", category: "nuts" },
    { id: 115, name: "Green Chillies", price: 20, unit: "100g", category: "fruits" },
    { id: 116, name: "Ginger", price: 30, unit: "100g", category: "fruits" },
    { id: 117, name: "Garlic", price: 40, unit: "100g", category: "fruits" },
    { id: 118, name: "Coriander Leaves", price: 15, unit: "bunch", category: "herbs" },
    { id: 119, name: "Lemon", price: 10, unit: "piece", category: "fruits" },
    { id: 120, name: "Cooking Oil", price: 110, unit: "1L", category: "oils" }
];

// Recipes database
let recipesDatabase = [];

// Cart management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

// Function to update cart total
function updateCartTotal() {
    const cartTotal = document.getElementById('cart-total');
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `₹${total.toFixed(2)}`;
    }
}

// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartTotal();
}

// Function to add item to cart
function addToCart(productId, quantity = 1) {
    // Check if we received a product object or just an ID
    const productIdValue = typeof productId === 'object' ? productId.id : productId;
    console.log(`Product ID: ${productIdValue}`);
    // Find the product in the database
    const product = productDatabase.find(p => p.id === productIdValue);
    
    if (!product) {
        console.error(`Product with ID ${productIdValue} not found`);
        return false;
    }
    
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    saveCart();
    renderCart();
    return true;
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

// Function to update item quantity in cart
function updateCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

// Function to render cart items
// Function to render cart items
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
                <button id="start-shopping-btn" class="btn-primary">Start Shopping</button>
            </div>`;
            
        document.getElementById('start-shopping-btn')?.addEventListener('click', () => {
            document.getElementById('cart-sidebar').classList.remove('active');
            document.getElementById('overlay').classList.remove('active');
        });
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-meta">
                    <span class="cart-item-unit">${item.unit || 'item'}</span>
                    <span class="cart-item-price">₹${item.price.toFixed(2)}</span>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-quantity-selector">
                        <button class="cart-quantity-btn minus" data-id="${item.id}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" class="cart-quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                        <button class="cart-quantity-btn plus" data-id="${item.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="remove-item-btn" data-id="${item.id}" title="Remove item">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div class="cart-item-subtotal">
                    Subtotal: <span>₹${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Add event listeners to cart item buttons
    // [Rest of the event listener code stays the same]
    
    // Add a "Continue Shopping" button at the bottom
    const continueShoppingBtn = document.createElement('button');
    continueShoppingBtn.className = 'continue-shopping-btn';
    continueShoppingBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Continue Shopping';
    continueShoppingBtn.addEventListener('click', () => {
        document.getElementById('cart-sidebar').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    });
    cartItems.appendChild(continueShoppingBtn);
    
    updateCartTotal();
}

// Function to find ingredient by name
function findIngredientByName(name) {
    return ingredientsDatabase.find(ingredient => 
        ingredient.name.toLowerCase() === name.toLowerCase()
    );
}

// Function to add ingredient to database if it doesn't exist
function addIngredientIfNotExists(name, estimatedPrice, unit, category) {
    let ingredient = findIngredientByName(name);
    
    if (!ingredient) {
        const newId = ingredientsDatabase.length > 0 
            ? Math.max(...ingredientsDatabase.map(i => i.id)) + 1 
            : 1;
        
        ingredient = {
            id: newId,
            name: name,
            category: category || "other",
            price: estimatedPrice,
            unit: unit || "unit",
            image:"",
            stock: estimatedStock
        };
        
        ingredientsDatabase.push(ingredient);
    }
    
    return ingredient;
}

// Function to save recipe to database
function saveRecipe(recipe) {
    const existingRecipeIndex = recipesDatabase.findIndex(r => r.name === recipe.name);
    
    if (existingRecipeIndex !== -1) {
        recipesDatabase[existingRecipeIndex] = recipe;
    } else {
        const newId = recipesDatabase.length > 0 
            ? Math.max(...recipesDatabase.map(r => r.id)) + 1 
            : 1;
        recipe.id = newId;
        recipesDatabase.push(recipe);
    }
    
    // Save to localStorage
    localStorage.setItem('recipes', JSON.stringify(recipesDatabase));
}

// Load recipes from localStorage if available
if (localStorage.getItem('recipes')) {
    recipesDatabase = JSON.parse(localStorage.getItem('recipes'));
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

// // Product database
// const productDatabase = [
//     // Dairy & Eggs
//     {
//         id: "paneer",
//         name: "Fresh Paneer",
//         price: 120,
//         category: "dairy",
//         image: "images/products/paneer.jpg",
//         unit: "250g",
//         description: "Fresh homemade paneer, perfect for curries and snacks."
//     },
//     {
//         id: "butter",
//         name: "Amul Butter",
//         price: 55,
//         category: "dairy",
//         image: "images/products/butter.jpg",
//         unit: "100g",
//         description: "Smooth and creamy butter, perfect for cooking and spreading."
//     },
//     {
//         id: "heavy-cream",
//         name: "Fresh Cream",
//         price: 85,
//         category: "dairy",
//         image: "images/products/cream.jpg",
//         unit: "200ml",
//         description: "Rich and thick fresh cream for desserts and curries."
//     },
    
//     // Meat
//     {
//         id: "chicken-breast",
//         name: "Chicken Breast",
//         price: 180,
//         category: "meat",
//         image: "images/products/chicken-breast.jpg",
//         unit: "500g",
//         description: "Boneless, skinless chicken breast, fresh and ready to cook."
//     },
    
//     // Fruits & Vegetables
//     {
//         id: "tomato",
//         name: "Fresh Tomatoes",
//         price: 40,
//         category: "fruits",
//         image: "images/products/tomato.jpg",
//         unit: "500g",
//         description: "Ripe red tomatoes, perfect for curries and salads."
//     },
//     {
//         id: "onion",
//         name: "Onions",
//         price: 30,
//         category: "fruits",
//         image: "images/products/onion.jpg",
//         unit: "1kg",
//         description: "Fresh red onions for your daily cooking needs."
//     },
//     {
//         id: "spinach",
//         name: "Fresh Spinach",
//         price: 30,
//         category: "fruits",
//         image: "images/products/spinach.jpg",
//         unit: "250g",
//         description: "Freshly picked spinach leaves, perfect for palak dishes."
//     },
//     {
//         id: "green-chili",
//         name: "Green Chilies",
//         price: 20,
//         category: "fruits",
//         image: "images/products/green-chili.jpg",
//         unit: "100g",
//         description: "Spicy green chilies to add heat to your dishes."
//     },
    
//     // Spices & Masalas
//     {
//         id: "garam-masala",
//         name: "Garam Masala",
//         price: 65,
//         category: "spices",
//         image: "images/products/garam-masala.jpg",
//         unit: "100g",
//         description: "A blend of ground spices common in Indian cuisine."
//     },
//     {
//         id: "cumin-seeds",
//         name: "Cumin Seeds",
//         price: 45,
//         category: "spices",
//         image: "images/products/cumin-seeds.jpg",
//         unit: "100g",
//         description: "Aromatic cumin seeds, essential for Indian cooking."
//     },
//     {
//         id: "ginger-paste",
//         name: "Ginger Paste",
//         price: 40,
//         category: "spices",
//         image: "images/products/ginger-paste.jpg",
//         unit: "100g",
//         description: "Ready-to-use ginger paste for quick and easy cooking."
//     },
//     {
//         id: "garlic-paste",
//         name: "Garlic Paste",
//         price: 40,
//         category: "spices",
//         image: "images/products/garlic-paste.jpg",
//         unit: "100g",
//         description: "Ready-to-use garlic paste for quick and easy cooking."
//     },
//     {
//         id: "tomato-puree",
//         name: "Tomato Puree",
//         price: 75,
//         category: "spices",
//         image: "images/products/tomato-puree.jpg",
//         unit: "200g",
//         description: "Concentrated tomato puree for curries and sauces."
//     },

//     // Add more products as needed
// ];

// Make database available globally
window.productDatabase = productDatabase;