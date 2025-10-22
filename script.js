// Data Produk
let products = [
    { id: 1, name: "Processor Intel i9", price: 5500000, category: "hardware", image: "intel-core-i9-12900k-52-ghz-16c24t-lga-1700-al.jpg" },
    { id: 2, name: "Motherboard ASUS", price: 3200000, category: "hardware", image: "ROG-Strix-B760-F-Gaming.png" },
    { id: 3, name: "RAM 32GB DDR4", price: 1800000, category: "hardware", image: "images (1) (1).jpg" },
    { id: 4, name: "SSD NVMe 1TB", price: 1500000, category: "hardware", image: "SSD-m.2-NVMe-1TB-AGi-2280-Gen-4-2.png" },
    { id: 5, name: "GPU RTX 4080", price: 18500000, category: "hardware", image: "images (1) (2).jpg" },
    { id: 6, name: "PSU 850W Gold", price: 2200000, category: "hardware", image: "images (1) (3).jpg" },
    { id: 7, name: "Cooler Master Case", price: 1200000, category: "hardware", image: " images (1) (14).jpg" },
    { id: 8, name: "Monitor 27\" 4K", price: 4500000, category: "hardware", image: "msi-modern-md271ul-kv-mobile.jpg" },
    { id: 9, name: "Router Wi-Fi 6", price: 1500000, category: "network", image: "images (1) (7).jpg" },
    { id: 10, name: "Switch 8 Port", price: 800000, category: "network", image: "images (1) (6).jpg" },
    { id: 11, name: "Access Point", price: 1200000, category: "network", image: "images (1) (5).jpg" },
    { id: 12, name: "Network Cable 10m", price: 150000, category: "network", image: "images (1) (8).jpg" },
    { id: 13, name: "Mechanical Keyboard", price: 1200000, category: "accessories", image: "images (1) (9).jpg" },
    { id: 14, name: "Gaming Mouse", price: 800000, category: "accessories", image: "fantech_x9_macro_gaming_mouse_full04_nlqx68s8.jpg" },
    { id: 15, name: "Webcam 1080p", price: 900000, category: "accessories", image: "images (1) (10).jpg" },
    { id: 16, name: "Headset Gaming", price: 1500000, category: "accessories", image: "images (1) (11).jpg" },
    { id: 17, name: "Mouse Pad XL", price: 250000, category: "accessories", image: "images (1) (12).jpg" },
    { id: 18, name: "Laptop Stand", price: 400000, category: "accessories", image: "images (1) (13).jpg" },
    { id: 19, name: "External HDD 2TB", price: 1200000, category: "accessories", image: "402d15df-f619-4ca6-bf91-3b8649857dfd.jpg" },
    { id: 20, name: "USB-C Hub", price: 500000, category: "accessories", image: "1-39.jpg" },
    { id: 21, name: "CPU Cooler", price: 800000, category: "hardware", image: "images (1) (14).jpg" },
    { id: 22, name: "Thermal Paste", price: 150000, category: "hardware", image: "images (1) (15).jpg" },
    { id: 23, name: "Ethernet Adapter", price: 300000, category: "network", image: "images (1) (16).jpg" },
    { id: 24, name: "Network Card", price: 600000, category: "network", image: "Network_card.jpg" },
    { id: 25, name: "Cable Manager", price: 100000, category: "accessories", image: "images (1) (17).jpg" }
];

// Data Pengguna
let users = [
    { id: 1, name: "John Doe", email: "john@example.com", password: "password123", phone: "+62 812-3456-7890", joinDate: "Januari 2023" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", password: "password123", phone: "+62 813-4567-8901", joinDate: "Februari 2023" }
];

// Data Admin
const admins = [
    { username: "fatkul.dev", password: "dev123", name: "Fatkul Developer" },
    { username: "weza.dev", password: "dev456", name: "Weza Developer" }
];

// State aplikasi
let currentUser = null;
let currentAdmin = null;
let cart = [];
let soldProducts = [];
let totalRevenue = 0;
let recentActivities = [];

// DOM Elements untuk login
const userLoginModal = document.getElementById('userLoginModal');
const userRegisterModal = document.getElementById('userRegisterModal');
const userLoginBtn = document.getElementById('userLoginBtn');
const heroLoginBtn = document.getElementById('heroLoginBtn');
const adminAccessBtn = document.getElementById('adminAccess');
const userInfo = document.getElementById('user-info');
const userGreeting = document.getElementById('user-greeting');
const userLogoutBtn = document.getElementById('user-logout');
const logoutAdminBtn = document.getElementById('logoutAdmin');
const loginToShopBtn = document.getElementById('loginToShop');

// Login Tabs
const loginTabs = document.querySelectorAll('.login-tab');
const loginContents = document.querySelectorAll('.login-content');

// Forms
const customerLoginForm = document.getElementById('customerLoginForm');
const adminLoginForm = document.getElementById('adminLoginForm');
const registerForm = document.getElementById('registerForm');

// Google Login Buttons
const customerGoogleLogin = document.getElementById('customerGoogleLogin');
const adminGoogleLogin = document.getElementById('adminGoogleLogin');

// Navigation between login/register
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

// Close buttons
const closeUserLogin = document.querySelector('.close-user-login');
const closeRegister = document.querySelector('.close-register');

// DOM Elements lainnya
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const categoryBtns = document.querySelectorAll('.category-btn');
const productsGrid = document.getElementById('products-grid');
const recommendedProducts = document.getElementById('recommended-products');
const devPanel = document.getElementById('devPanel');
const closeDevPanelBtn = document.getElementById('closeDevPanel');
const productSelect = document.getElementById('productSelect');
const updatePriceBtn = document.getElementById('updatePrice');
const newPriceInput = document.getElementById('newPrice');
const addProductForm = document.getElementById('addProductForm');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const quotesSlider = document.querySelector('.quotes-slider');
const cartCount = document.querySelector('.cart-count');
const cartBtn = document.getElementById('cartBtn');
const editProfileBtn = document.getElementById('edit-profile');
const messageForm = document.getElementById('messageForm');
const paymentModal = document.getElementById('paymentModal');
const paymentForm = document.getElementById('paymentForm');
const closePaymentBtn = document.querySelector('.close-payment');
const header = document.querySelector('header');
const parallaxLayers = document.querySelectorAll('.parallax-layer');

// DOM Elements tambahan untuk keranjang
const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.querySelector('.close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartEmpty = document.getElementById('cart-empty');
const cartSummary = document.getElementById('cart-summary');
const cartTotalAmount = document.getElementById('cart-total-amount');
const checkoutBtn = document.getElementById('checkout-btn');

// Inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    // Setup login system
    setupLoginSystem();
    
    // Setup cart event listeners
    setupCartEventListeners();

    // Update cart display
    updateCartDisplay();
  
    // Load produk
    displayProducts(products, productsGrid);
    
    // Load produk rekomendasi (5 produk pertama)
    displayProducts(products.slice(0, 5), recommendedProducts);
    
    // Update profil pengguna
    updateUserProfile();
    
    // Setup quotes slider
    startQuotesSlider();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup developer panel
    setupDeveloperPanel();
    
    // Update dashboard
    updateDashboard();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Initialize chart
    initializeChart();
    
    // Setup parallax
    setupParallax();
    
    // Setup improved category filter
    setupCategoryFilter();
    
    // Check if user is already logged in
    checkExistingLogin();
});

// Setup Login System
function setupLoginSystem() {
    // Login tabs
    loginTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Update active tab
            loginTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding content
            loginContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabName}-login`) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Customer login form
    customerLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('customerEmail').value;
        const password = document.getElementById('customerPassword').value;
        
        loginCustomer(email, password);
    });
    
    // Admin login form
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('adminUsername').value;
        const password = document.getElementById('adminPassword').value;
        
        loginAdmin(username, password);
    });
    
    // Register form
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        registerCustomer();
    });
    
    // Google login buttons
    customerGoogleLogin.addEventListener('click', function() {
        simulateGoogleLogin('customer');
    });
    
    adminGoogleLogin.addEventListener('click', function() {
        simulateGoogleLogin('admin');
    });
    
    // Navigation between login/register
    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        userLoginModal.classList.remove('active');
        userRegisterModal.classList.add('active');
    });
    
    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        userRegisterModal.classList.remove('active');
        userLoginModal.classList.add('active');
    });
    
    // Login buttons
    userLoginBtn.addEventListener('click', function() {
        userLoginModal.classList.add('active');
    });
    
    heroLoginBtn.addEventListener('click', function() {
        userLoginModal.classList.add('active');
    });
    
    loginToShopBtn.addEventListener('click', function() {
        userLoginModal.classList.add('active');
    });
    
    // Admin access button
    adminAccessBtn.addEventListener('click', function() {
        devPanel.classList.add('active');
    });
    
    // Logout buttons
    userLogoutBtn.addEventListener('click', logoutCustomer);
    logoutAdminBtn.addEventListener('click', logoutAdmin);
    
    // Close modals
    closeUserLogin.addEventListener('click', function() {
        userLoginModal.classList.remove('active');
    });
    
    closeRegister.addEventListener('click', function() {
        userRegisterModal.classList.remove('active');
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === userLoginModal) {
            userLoginModal.classList.remove('active');
        }
        if (e.target === userRegisterModal) {
            userRegisterModal.classList.remove('active');
        }
        if (e.target === devPanel) {
            devPanel.classList.remove('active');
        }
        if (e.target === paymentModal) {
            paymentModal.classList.remove('active');
        }
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
}

// Login Customer
function loginCustomer(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        userLoginModal.classList.remove('active');
        updateUIAfterLogin();
        showNotification(`Selamat datang, ${user.name}!`);
        addRecentActivity('user', `${user.name} login sebagai pembeli`);
        
        // Save to localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
        alert('Email atau password salah!');
    }
}

// Login Admin
function loginAdmin(username, password) {
    const admin = admins.find(a => a.username === username && a.password === password);
    
    if (admin) {
        currentAdmin = admin;
        userLoginModal.classList.remove('active');
        devPanel.classList.add('active');
        populateProductSelect();
        updateAdminWelcome(admin.name);
        showNotification(`Selamat datang, ${admin.name}!`);
        addRecentActivity('system', `${admin.name} login sebagai admin`);
        
        // Show admin access button
        adminAccessBtn.style.display = 'block';
        
        // Save to localStorage
        localStorage.setItem('currentAdmin', JSON.stringify(admin));
    } else {
        alert('Username atau password admin salah!');
    }
}

// Register Customer
function registerCustomer() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Password dan konfirmasi password tidak cocok!');
        return;
    }
    
    if (users.find(u => u.email === email)) {
        alert('Email sudah terdaftar!');
        return;
    }
    
    const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
        phone,
        joinDate: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })
    };
    
    users.push(newUser);
    userRegisterModal.classList.remove('active');
    userLoginModal.classList.add('active');
    showNotification('Pendaftaran berhasil! Silakan login.');
}

// Simulate Google Login
function simulateGoogleLogin(type) {
    const fakeUsers = [
        { name: "Google User", email: "google.user@example.com" },
        { name: "Test User", email: "test.user@example.com" },
        { name: "Demo User", email: "demo.user@example.com" }
    ];
    
    const fakeAdmins = [
        { name: "Google Admin", email: "admin@hydrotech.com" },
        { name: "System Admin", email: "system@hydrotech.com" }
    ];
    
    const randomUser = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
    const randomAdmin = fakeAdmins[Math.floor(Math.random() * fakeAdmins.length)];
    
    if (type === 'customer') {
        // Check if user exists, if not create new one
        let user = users.find(u => u.email === randomUser.email);
        if (!user) {
            user = {
                id: users.length + 1,
                name: randomUser.name,
                email: randomUser.email,
                password: 'google123',
                phone: '+62 812-3456-7890',
                joinDate: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })
            };
            users.push(user);
        }
        
        currentUser = user;
        userLoginModal.classList.remove('active');
        updateUIAfterLogin();
        showNotification(`Selamat datang, ${user.name}!`);
        addRecentActivity('user', `${user.name} login dengan Google`);
        
        // Save to localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
        // Admin login
        currentAdmin = { username: 'google.admin', name: randomAdmin.name };
        userLoginModal.classList.remove('active');
        devPanel.classList.add('active');
        populateProductSelect();
        updateAdminWelcome(randomAdmin.name);
        showNotification(`Selamat datang, ${randomAdmin.name}!`);
        addRecentActivity('system', `${randomAdmin.name} login dengan Google`);
        
        // Show admin access button
        adminAccessBtn.style.display = 'block';
        
        // Save to localStorage
        localStorage.setItem('currentAdmin', JSON.stringify({ username: 'google.admin', name: randomAdmin.name }));
    }
}

// Update UI After Login
function updateUIAfterLogin() {
    if (currentUser) {
        userLoginBtn.style.display = 'none';
        userInfo.style.display = 'flex';
        userGreeting.textContent = `Halo, ${currentUser.name.split(' ')[0]}!`;
        
        // Update user profile
        updateUserProfile();
    }
}

// Update Admin Welcome
function updateAdminWelcome(name) {
    document.getElementById('adminWelcome').textContent = `Selamat Datang, ${name}!`;
}

// Logout Customer
function logoutCustomer() {
    currentUser = null;
    userInfo.style.display = 'none';
    userLoginBtn.style.display = 'block';
    cart = [];
    updateCartDisplay();
    showNotification('Anda telah logout');
    
    // Remove from localStorage
    localStorage.removeItem('currentUser');
}

// Logout Admin
function logoutAdmin() {
    currentAdmin = null;
    devPanel.classList.remove('active');
    adminAccessBtn.style.display = 'none';
    showNotification('Admin telah logout');
    
    // Remove from localStorage
    localStorage.removeItem('currentAdmin');
}

// Check Existing Login
function checkExistingLogin() {
    const savedUser = localStorage.getItem('currentUser');
    const savedAdmin = localStorage.getItem('currentAdmin');
    
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIAfterLogin();
    }
    
    if (savedAdmin) {
        currentAdmin = JSON.parse(savedAdmin);
        adminAccessBtn.style.display = 'block';
        updateAdminWelcome(currentAdmin.name);
    }
}

// Setup Parallax Effect
function setupParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        parallaxLayers.forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const yPos = -(scrolled * speed);
            layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    });
}

// Fixed Category Filter Function
function setupCategoryFilter() {
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            console.log('Filter kategori diklik:', category);
            
            // Update active category button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            filterProductsByCategory(category);
        });
    });
}

// Improved Product Filtering
function filterProductsByCategory(category) {
    console.log('Memfilter produk dengan kategori:', category);
    
    let filteredProducts;
    
    if (category === 'all') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => {
            console.log('Product:', product.name, 'Category:', product.category, 'Match:', product.category === category);
            return product.category === category;
        });
    }
    
    console.log('Produk yang difilter:', filteredProducts.length);
    displayProducts(filteredProducts, productsGrid);
}

// Setup Event Listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active nav link
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to target section
            document.getElementById(targetId).scrollIntoView({ 
                behavior: 'smooth' 
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Cart button
    cartBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Keranjang belanja kosong');
        } else {
            showCartModal();
        }
    });
    
    // Edit profile
    editProfileBtn.addEventListener('click', function() {
        showNotification('Fitur edit profil akan segera tersedia');
    });
    
    // Message form
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Pesan berhasil dikirim!');
        messageForm.reset();
    });
    
    // Payment form
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        processPayment();
    });
    
    // Scroll event for header
    window.addEventListener('scroll', handleScroll);
    
    // Touch events for mobile
    setupTouchEvents();
}

// Handle Scroll
function handleScroll() {
    // Header scroll effect
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Section animations on scroll
    animateOnScroll();
}

// Setup Scroll Animations
function setupScrollAnimations() {
    // Add initial fade-in class to sections
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('fade-in');
        }
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
}

// Animate Elements on Scroll
function animateOnScroll() {
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('fade-in');
        }
    });
    
    // Animate product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        if (isElementInViewport(card)) {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 100);
        }
    });
    
    // Animate stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        if (isElementInViewport(card)) {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 150);
        }
    });
    
    // Animate contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        if (isElementInViewport(item)) {
            setTimeout(() => {
                item.classList.add('fade-in');
            }, index * 100);
        }
    });
    
    // Animate developer cards
    const developerCards = document.querySelectorAll('.developer-card');
    developerCards.forEach((card, index) => {
        if (isElementInViewport(card)) {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 200);
        }
    });
    
    // Animate profile card and contact form
    const profileCard = document.querySelector('.profile-card');
    const contactForm = document.querySelector('.contact-form');
    
    if (profileCard && isElementInViewport(profileCard)) {
        profileCard.classList.add('fade-in');
    }
    
    if (contactForm && isElementInViewport(contactForm)) {
        contactForm.classList.add('fade-in');
    }
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Setup Touch Events
function setupTouchEvents() {
    // Add touch feedback to buttons
    const buttons = document.querySelectorAll('button, .nav-link, .product-card');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        });
        
        button.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        });
    });
}

// Display Products - PERBAIKAN: Event delegation untuk tombol
function displayProducts(productsArray, container) {
    container.innerHTML = '';
    
    if (productsArray.length === 0) {
        container.innerHTML = '<p class="no-products">Tidak ada produk dalam kategori ini</p>';
        return;
    }
    
    productsArray.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1}s`;
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">Rp ${product.price.toLocaleString('id-ID')}</div>
                <div class="product-actions">
                    <button class="btn-secondary add-to-cart" data-id="${product.id}">Tambah ke Keranjang</button>
                    <button class="btn-primary buy-now" data-id="${product.id}">Beli Sekarang</button>
                </div>
            </div>
        `;
        
        container.appendChild(productCard);
    });
    
    // Trigger animation after a short delay
    setTimeout(() => {
        const productCards = container.querySelectorAll('.product-card');
        productCards.forEach(card => {
            if (isElementInViewport(card)) {
                card.classList.add('fade-in');
            }
        });
    }, 100);
}

// PERBAIKAN: Gunakan event delegation untuk tombol produk
document.addEventListener('click', function(e) {
    // Handle Add to Cart buttons
    if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
        const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
        const productId = parseInt(button.getAttribute('data-id'));
        addToCart(productId);
    }
    
    // Handle Buy Now buttons
    if (e.target.classList.contains('buy-now') || e.target.closest('.buy-now')) {
        const button = e.target.classList.contains('buy-now') ? e.target : e.target.closest('.buy-now');
        const productId = parseInt(button.getAttribute('data-id'));
        buyNow(productId);
    }
});

// Add to Cart dengan require login
function addToCart(productId) {
    if (!currentUser) {
        showNotification('Silakan login terlebih dahulu untuk menambahkan ke keranjang');
        userLoginModal.classList.add('active');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartDisplay();
        showNotification(`${product.name} ditambahkan ke keranjang`);
        addRecentActivity('cart', `${product.name} ditambahkan ke keranjang`);
    }
}

// Buy Now dengan require login
function buyNow(productId) {
    if (!currentUser) {
        showNotification('Silakan login terlebih dahulu untuk membeli produk');
        userLoginModal.classList.add('active');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (product) {
        // Add to cart first
        cart.push(product);
        updateCartDisplay();
        
        // Then show payment modal
        showPaymentModal();
        
        showNotification(`Lanjutkan pembayaran untuk ${product.name}`);
        addRecentActivity('sale', `${product.name} akan dibeli seharga Rp ${product.price.toLocaleString('id-ID')}`);
    }
}

// ... (fungsi-fungsi lainnya seperti showPaymentModal, processPayment, updateCartDisplay, dll. tetap sama)

// Setup Cart Event Listeners
function setupCartEventListeners() {
    // Close cart modal
    closeCartBtn.addEventListener('click', function() {
        cartModal.classList.remove('active');
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', function() {
        if (cart.length > 0) {
            cartModal.classList.remove('active');
            showPaymentModal();
        }
    });
}

// Update cart display to show login prompt when empty and not logged in
function updateCartDisplay() {
    updateCartCount();
    
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartSummary.style.display = 'none';
        cartItemsContainer.innerHTML = '';
        
        if (!currentUser) {
            document.getElementById('loginToShop').style.display = 'block';
        } else {
            document.getElementById('loginToShop').style.display = 'none';
        }
    } else {
        cartEmpty.style.display = 'none';
        cartSummary.style.display = 'block';
        renderCartItems();
        updateCartTotal();
    }
}

// Update Cart Count
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Render Cart Items
function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    
    // Group items by product id to handle quantities
    const cartItems = {};
    
    cart.forEach(item => {
        if (cartItems[item.id]) {
            cartItems[item.id].quantity += 1;
        } else {
            cartItems[item.id] = {
                ...item,
                quantity: 1
            };
        }
    });
    
    // Render each cart item
    Object.values(cartItems).forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button class="quantity-btn decrease-btn" data-id="${item.id}">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn increase-btn" data-id="${item.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="remove-btn" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItemElement);
    });
    
    // Add event listeners to cart item buttons menggunakan event delegation
    setupCartItemEventListeners();
}

// Setup Cart Item Event Listeners dengan event delegation
function setupCartItemEventListeners() {
    cartItemsContainer.addEventListener('click', function(e) {
        // Increase quantity
        if (e.target.classList.contains('increase-btn') || e.target.closest('.increase-btn')) {
            const button = e.target.classList.contains('increase-btn') ? e.target : e.target.closest('.increase-btn');
            const productId = parseInt(button.getAttribute('data-id'));
            addToCart(productId);
        }
        
        // Decrease quantity
        if (e.target.classList.contains('decrease-btn') || e.target.closest('.decrease-btn')) {
            const button = e.target.classList.contains('decrease-btn') ? e.target : e.target.closest('.decrease-btn');
            const productId = parseInt(button.getAttribute('data-id'));
            decreaseCartQuantity(productId);
        }
        
        // Remove item
        if (e.target.classList.contains('remove-btn') || e.target.closest('.remove-btn')) {
            const button = e.target.classList.contains('remove-btn') ? e.target : e.target.closest('.remove-btn');
            const productId = parseInt(button.getAttribute('data-id'));
            removeFromCart(productId);
        }
    });
}

// Decrease Cart Quantity
function decreaseCartQuantity(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        updateCartDisplay();
        showNotification('Jumlah produk dikurangi');
    }
}

// Remove From Cart
function removeFromCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Remove all instances of this product from cart
        cart = cart.filter(item => item.id !== productId);
        updateCartDisplay();
        showNotification(`${product.name} dihapus dari keranjang`);
    }
}

// Update Cart Total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalAmount.textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

// Show Cart Modal
function showCartModal() {
    updateCartDisplay();
    cartModal.classList.add('active');
}

// Show Payment Modal
function showPaymentModal() {
    const paymentItems = document.getElementById('payment-items');
    const paymentTotalAmount = document.getElementById('payment-total-amount');
    
    paymentItems.innerHTML = '';
    let total = 0;
    
    // Group items for payment summary
    const paymentItemsGrouped = {};
    
    cart.forEach(item => {
        if (paymentItemsGrouped[item.id]) {
            paymentItemsGrouped[item.id].quantity += 1;
        } else {
            paymentItemsGrouped[item.id] = {
                ...item,
                quantity: 1
            };
        }
    });
    
    Object.values(paymentItemsGrouped).forEach(item => {
        const itemTotal = item.price * item.quantity;
        const paymentItem = document.createElement('div');
        paymentItem.className = 'payment-item';
        paymentItem.innerHTML = `
            <div>
                <span>${item.name}</span>
                ${item.quantity > 1 ? `<small>${item.quantity} x Rp ${item.price.toLocaleString('id-ID')}</small>` : ''}
            </div>
            <span>Rp ${itemTotal.toLocaleString('id-ID')}</span>
        `;
        paymentItems.appendChild(paymentItem);
        total += itemTotal;
    });
    
    paymentTotalAmount.textContent = `Rp ${total.toLocaleString('id-ID')}`;
    paymentModal.classList.add('active');
}

// Process Payment
function processPayment() {
    if (cart.length === 0) {
        showNotification('Keranjang belanja kosong');
        return;
    }
    
    let total = 0;
    const purchasedItems = [];
    
    cart.forEach(item => {
        soldProducts.push(item);
        total += item.price;
        purchasedItems.push(item.name);
        addRecentActivity('sale', `${item.name} terjual seharga Rp ${item.price.toLocaleString('id-ID')}`);
    });
    
    totalRevenue += total;
    cart = [];
    updateCartDisplay();
    updateDashboard();
    paymentModal.classList.remove('active');
    
    const itemsList = purchasedItems.slice(0, 3).join(', ');
    const moreItems = purchasedItems.length > 3 ? ` dan ${purchasedItems.length - 3} produk lainnya` : '';
    
    showNotification(`Pembayaran berhasil! Total: Rp ${total.toLocaleString('id-ID')}`);
    updateChart();
}

// Update User Profile
function updateUserProfile() {
    if (currentUser) {
        document.getElementById('profile-name').textContent = currentUser.name;
        document.getElementById('profile-email').textContent = currentUser.email;
        document.getElementById('profile-login-email').textContent = currentUser.email;
        document.getElementById('profile-phone').textContent = currentUser.phone;
        document.getElementById('profile-join-date').textContent = currentUser.joinDate;
        document.getElementById('profile-status').textContent = "Aktif";
    }
}

// Add Recent Activity
function addRecentActivity(type, message) {
    const activities = {
        'cart': { icon: 'fas fa-shopping-cart', color: '#3498db' },
        'sale': { icon: 'fas fa-dollar-sign', color: '#2ecc71' },
        'user': { icon: 'fas fa-user', color: '#9b59b6' },
        'system': { icon: 'fas fa-cog', color: '#f39c12' }
    };
    
    const activity = {
        type,
        message,
        icon: activities[type]?.icon || 'fas fa-info-circle',
        color: activities[type]?.color || '#7f8c8d',
        timestamp: new Date().toLocaleTimeString('id-ID')
    };
    
    recentActivities.unshift(activity);
    
    // Keep only last 5 activities
    if (recentActivities.length > 5) {
        recentActivities.pop();
    }
    
    updateRecentActivities();
}

// Update Recent Activities
function updateRecentActivities() {
    const activitiesContainer = document.getElementById('recent-activities');
    activitiesContainer.innerHTML = '';
    
    recentActivities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        activityItem.innerHTML = `
            <div class="activity-icon" style="background-color: ${activity.color}20; color: ${activity.color}">
                <i class="${activity.icon}"></i>
            </div>
            <div class="activity-details">
                <h4>${activity.message}</h4>
                <p>${activity.timestamp}</p>
            </div>
        `;
        activitiesContainer.appendChild(activityItem);
    });
}

// Update Dashboard
function updateDashboard() {
    document.getElementById('total-products').textContent = products.length;
    document.getElementById('sold-items').textContent = soldProducts.length;
    document.getElementById('revenue').textContent = `Rp ${totalRevenue.toLocaleString('id-ID')}`;
    
    // Update recent activities
    updateRecentActivities();
}

// Initialize Chart
function initializeChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    window.salesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
            datasets: [{
                label: 'Penjualan (dalam juta)',
                data: [12, 19, 8, 15, 12, 17],
                borderColor: '#1e6ea7',
                backgroundColor: 'rgba(30, 110, 167, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Update Chart
function updateChart() {
    if (window.salesChart) {
        // Simulate sales data update
        const newData = window.salesChart.data.datasets[0].data.map(value => 
            value + Math.floor(Math.random() * 5)
        );
        window.salesChart.data.datasets[0].data = newData;
        window.salesChart.update();
    }
}

// Quotes Slider
function startQuotesSlider() {
    const quotes = document.querySelectorAll('.quote');
    let currentQuote = 0;
    
    setInterval(() => {
        quotes[currentQuote].classList.remove('active');
        currentQuote = (currentQuote + 1) % quotes.length;
        quotes[currentQuote].classList.add('active');
    }, 5000);
}

// Setup Developer Panel
function setupDeveloperPanel() {
    // Close dev panel
    closeDevPanelBtn.addEventListener('click', function() {
        devPanel.classList.remove('active');
    });
    
    // Update price
    updatePriceBtn.addEventListener('click', function() {
        const selectedProductId = parseInt(productSelect.value);
        const newPrice = parseInt(newPriceInput.value);
        
        if (selectedProductId && newPrice) {
            const productIndex = products.findIndex(p => p.id === selectedProductId);
            if (productIndex !== -1) {
                products[productIndex].price = newPrice;
                displayProducts(products, productsGrid);
                displayProducts(products.slice(0, 5), recommendedProducts);
                showNotification(`Harga produk berhasil diupdate`);
                addRecentActivity('system', `Harga produk ${products[productIndex].name} diupdate`);
                newPriceInput.value = '';
            }
        }
    });
    
    // Add new product
    addProductForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('newProductName').value;
        const price = parseInt(document.getElementById('newProductPrice').value);
        const category = document.getElementById('newProductCategory').value;
        const image = document.getElementById('newProductImage').value;
        
        if (name && price && category && image) {
            const newProduct = {
                id: products.length + 1,
                name,
                price,
                category,
                image
            };
            
            products.push(newProduct);
            displayProducts(products, productsGrid);
            populateProductSelect();
            addProductForm.reset();
            showNotification(`Produk ${name} berhasil ditambahkan`);
            addRecentActivity('system', `Produk baru ${name} ditambahkan`);
            updateDashboard();
        }
    });
}

// Populate Product Select in Developer Panel
function populateProductSelect() {
    productSelect.innerHTML = '';
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = `${product.name} - Rp ${product.price.toLocaleString('id-ID')}`;
        productSelect.appendChild(option);
    });
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}


// HydroTech logo click - mbalek nek menu utama
const logo = document.querySelector('.logo');
if (logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', function(e) {
        // Stop event bubbling
        e.stopPropagation();
        e.preventDefault();
        
        // Update active nav link
        navLinks.forEach(nav => nav.classList.remove('active'));
        const homeLink = document.querySelector('a[href="#home"]');
        if (homeLink) homeLink.classList.add('active');
        
        // Scroll to home section
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    });
}
