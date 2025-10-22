// ==============================
// LOGIN SYSTEM (USER & ADMIN)
// ==============================
const loginForm = document.querySelector('#loginForm');
const adminPanel = document.querySelector('#adminPanel');
const userPanel = document.querySelector('#userPanel');
const welcomeText = document.querySelector('#welcomeText');
const logoutButton = document.querySelector('#logoutButton');

const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
];

let currentUser = null;

if (loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const username = e.target.username.value.trim();
        const password = e.target.password.value.trim();

        const foundUser = users.find(u => u.username === username && u.password === password);
        if (foundUser) {
            currentUser = foundUser;
            showPanel(foundUser.role);
        } else {
            alert('Username atau password salah!');
        }
    });
}

function showPanel(role) {
    if (role === 'admin') {
        adminPanel.style.display = 'block';
        userPanel.style.display = 'none';
        welcomeText.textContent = `Selamat datang, Admin!`;
    } else {
        adminPanel.style.display = 'none';
        userPanel.style.display = 'block';
        welcomeText.textContent = `Selamat datang, ${currentUser.username}!`;
    }
    document.querySelector('.login-container').style.display = 'none';
    logoutButton.style.display = 'inline-block';
}

logoutButton.addEventListener('click', () => {
    currentUser = null;
    adminPanel.style.display = 'none';
    userPanel.style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
    logoutButton.style.display = 'none';
    welcomeText.textContent = '';
});

// ==============================
// PRODUK & FILTER
// ==============================
const products = [
    { id: 1, name: 'Smartwatch Hydro', category: 'Wearable', price: 750000, image: 'img/smartwatch.jpg' },
    { id: 2, name: 'Headset Aqua', category: 'Audio', price: 650000, image: 'img/headset.jpg' },
    { id: 3, name: 'Drone HydroFly', category: 'Drone', price: 1500000, image: 'img/drone.jpg' },
    { id: 4, name: 'Speaker HydroSound', category: 'Audio', price: 850000, image: 'img/speaker.jpg' },
    { id: 5, name: 'Kamera HydroCam', category: 'Camera', price: 2200000, image: 'img/camera.jpg' }
];

const productContainer = document.querySelector('#productList');
const categorySelect = document.querySelector('#categoryFilter');

function displayProducts(list) {
    productContainer.innerHTML = '';
    list.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card fade-in';
        card.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>Kategori: ${p.category}</p>
            <p>Harga: Rp ${p.price.toLocaleString('id-ID')}</p>
            <button class="add-to-cart" data-id="${p.id}">Tambah ke Keranjang</button>
        `;
        productContainer.appendChild(card);
    });

    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = parseInt(e.target.getAttribute('data-id'));
            addToCart(id);
        });
    });
}

if (categorySelect) {
    categorySelect.addEventListener('change', e => {
        const value = e.target.value;
        if (value === 'all') displayProducts(products);
        else displayProducts(products.filter(p => p.category === value));
    });
}

displayProducts(products);

// ==============================
// CART SYSTEM
// ==============================
let cart = [];
const cartItemsContainer = document.querySelector('#cartItems');
const cartTotalAmount = document.querySelector('#cartTotalAmount');

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartDisplay();
        showNotification(`${product.name} ditambahkan ke keranjang`);
    }
}

function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    const cartItems = {};

    cart.forEach(item => {
        if (cartItems[item.id]) {
            cartItems[item.id].quantity += 1;
        } else {
            cartItems[item.id] = { ...item, quantity: 1 };
        }
    });

    Object.values(cartItems).forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item fade-in';
        itemDiv.innerHTML = `
            <div class="cart-item-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="cart-item-info">
                <h4>${product.name}</h4>
                <p>Rp ${product.price.toLocaleString('id-ID')}</p>
                <div class="cart-item-quantity">
                    <button class="qty-btn decrease" data-id="${product.id}">-</button>
                    <span class="quantity">${product.quantity}</span>
                    <button class="qty-btn increase" data-id="${product.id}">+</button>
                </div>
            </div>
            <button class="remove-item" data-id="${product.id}">✕</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    cartItemsContainer.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            if (e.target.classList.contains('increase')) {
                addToCart(productId);
            } else if (e.target.classList.contains('decrease')) {
                decreaseCartItem(productId);
            }
        });
    });

    cartItemsContainer.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', e => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeCartItem(productId);
        });
    });

    updateCartTotal();
}

function decreaseCartItem(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCartDisplay();
        showNotification('Jumlah item dikurangi');
    }
}

function removeCartItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    showNotification('Produk dihapus dari keranjang');
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalAmount.textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

// ==============================
// NOTIFIKASI & ANIMASI
// ==============================
function showNotification(text) {
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = text;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2000);
}

// ==============================
// SCROLL EFFECT & PARALLAX
// ==============================
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelectorAll('.parallax').forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.3}px)`;
    });
});
