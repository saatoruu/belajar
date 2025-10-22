// Data Produk
let products = [
    { id: 1, name: "Processor Intel i9", price: 5500000, category: "hardware", image: "https://via.placeholder.com/300x200?text=Intel+i9" },
    { id: 2, name: "Motherboard ASUS", price: 3200000, category: "hardware", image: "https://via.placeholder.com/300x200?text=ASUS+Motherboard" },
    { id: 3, name: "RAM 32GB DDR4", price: 1800000, category: "hardware", image: "https://via.placeholder.com/300x200?text=32GB+RAM" },
    { id: 4, name: "SSD NVMe 1TB", price: 1500000, category: "hardware", image: "https://via.placeholder.com/300x200?text=1TB+SSD" },
    { id: 5, name: "GPU RTX 4080", price: 18500000, category: "hardware", image: "https://via.placeholder.com/300x200?text=RTX+4080" },
    { id: 6, name: "PSU 850W Gold", price: 2200000, category: "hardware", image: "https://via.placeholder.com/300x200?text=850W+PSU" },
    { id: 7, name: "Cooler Master Case", price: 1200000, category: "hardware", image: "https://via.placeholder.com/300x200?text=PC+Case" },
    { id: 8, name: "Monitor 27\" 4K", price: 4500000, category: "hardware", image: "https://via.placeholder.com/300x200?text=4K+Monitor" },
    { id: 9, name: "Router Wi-Fi 6", price: 1500000, category: "network", image: "https://via.placeholder.com/300x200?text=Wi-Fi+6+Router" },
    { id: 10, name: "Switch 8 Port", price: 800000, category: "network", image: "https://via.placeholder.com/300x200?text=8+Port+Switch" },
    { id: 11, name: "Access Point", price: 1200000, category: "network", image: "https://via.placeholder.com/300x200?text=Access+Point" },
    { id: 12, name: "Network Cable 10m", price: 150000, category: "network", image: "https://via.placeholder.com/300x200?text=Network+Cable" },
    { id: 13, name: "Mechanical Keyboard", price: 1200000, category: "accessories", image: "https://via.placeholder.com/300x200?text=Mechanical+Keyboard" },
    { id: 14, name: "Gaming Mouse", price: 800000, category: "accessories", image: "https://via.placeholder.com/300x200?text=Gaming+Mouse" },
    { id: 15, name: "Webcam 1080p", price: 900000, category: "accessories", image: "https://via.placeholder.com/300x200?text=1080p+Webcam" },
    { id: 16, name: "Headset Gaming", price: 1500000, category: "accessories", image: "https://via.placeholder.com/300x200?text=Gaming+Headset" },
    { id: 17, name: "Mouse Pad XL", price: 250000, category: "accessories", image: "https://via.placeholder.com/300x200?text=XL+Mouse+Pad" },
    { id: 18, name: "Laptop Stand", price: 400000, category: "accessories", image: "https://via.placeholder.com/300x200?text=Laptop+Stand" },
    { id: 19, name: "External HDD 2TB", price: 1200000, category: "accessories", image: "https://via.placeholder.com/300x200?text=2TB+HDD" },
    { id: 20, name: "USB-C Hub", price: 500000, category: "accessories", image: "https://via.placeholder.com/300x200?text=USB-C+Hub" },
    { id: 21, name: "CPU Cooler", price: 800000, category: "hardware", image: "https://via.placeholder.com/300x200?text=CPU+Cooler" },
    { id: 22, name: "Thermal Paste", price: 150000, category: "hardware", image: "https://via.placeholder.com/300x200?text=Thermal+Paste" },
    { id: 23, name: "Ethernet Adapter", price: 300000, category: "network", image: "https://via.placeholder.com/300x200?text=Ethernet+Adapter" },
    { id: 24, name: "Network Card", price: 600000, category: "network", image: "https://via.placeholder.com/300x200?text=Network+Card" },
    { id: 25, name: "Cable Manager", price: 100000, category: "accessories", image: "https://via.placeholder.com/300x200?text=Cable+Manager" }
];

// Data Pengguna
let userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    loginEmail: "user@hydrotech.com",
    phone: "+62 812-3456-7890",
    joinDate: "Januari 2023",
    status: "Aktif"
};

// Data Developer
const developers = [
    { username: "fatkul.dev", password: "dev123" },
    { username: "weza.dev", password: "dev456" }
];

// Data Keranjang dan Penjualan
let cart = [];
let soldProducts = [];
let totalRevenue = 0;
let recentActivities = [];

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const categoryBtns = document.querySelectorAll('.category-btn');
const productsGrid = document.getElementById('products-grid');
const recommendedProducts = document.getElementById('recommended-products');
const devLoginModal = document.getElementById('devLoginModal');
const devPanel = document.getElementById('devPanel');
const devAccessBtn = document.getElementById('devAccess');
const closeDevPanelBtn = document.getElementById('closeDevPanel');
const devLoginForm = document.getElementById('devLoginForm');
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
});

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
    
    // Category filter
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active category button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            if (category === 'all') {
                displayProducts(products, productsGrid);
            } else {
                const filteredProducts = products.filter(product => product.category === category);
                displayProducts(filteredProducts, productsGrid);
            }
        });
    });
    
    // Developer access
    devAccessBtn.addEventListener('click', function() {
        devLoginModal.classList.add('active');
    });
    
    // Close modal
    document.querySelector('.close').addEventListener('click', function() {
        devLoginModal.classList.remove('active');
    });
    
    // Close payment modal
    closePaymentBtn.addEventListener('click', function() {
        paymentModal.classList.remove('active');
    });
    
    // Close dev panel
    closeDevPanelBtn.addEventListener('click', function() {
        devPanel.classList.remove('active');
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
            showPaymentModal();
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

// Display Products
function displayProducts(productsArray, container) {
    container.innerHTML = '';
    
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
    
    // Add event listeners to product buttons
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    const buyNowBtns = document.querySelectorAll('.buy-now');
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    buyNowBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            buyNow(productId);
        });
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

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        showNotification(`${product.name} ditambahkan ke keranjang`);
        addRecentActivity('cart', `${product.name} ditambahkan ke keranjang`);
    }
}

// Buy Now
function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        soldProducts.push(product);
        totalRevenue += product.price;
        updateDashboard();
        showNotification(`Terima kasih telah membeli ${product.name}`);
        addRecentActivity('sale', `${product.name} terjual seharga Rp ${product.price.toLocaleString('id-ID')}`);
        updateChart();
    }
}

// Show Payment Modal
function showPaymentModal() {
    const paymentItems = document.getElementById('payment-items');
    const paymentTotalAmount = document.getElementById('payment-total-amount');
    
    paymentItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const paymentItem = document.createElement('div');
        paymentItem.className = 'payment-item';
        paymentItem.innerHTML = `
            <span>${item.name}</span>
            <span>Rp ${item.price.toLocaleString('id-ID')}</span>
        `;
        paymentItems.appendChild(paymentItem);
        total += item.price;
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
    cart.forEach(item => {
        soldProducts.push(item);
        total += item.price;
        addRecentActivity('sale', `${item.name} terjual seharga Rp ${item.price.toLocaleString('id-ID')}`);
    });
    
    totalRevenue += total;
    cart = [];
    updateCartCount();
    updateDashboard();
    paymentModal.classList.remove('active');
    showNotification(`Pembayaran berhasil! Total: Rp ${total.toLocaleString('id-ID')}`);
    updateChart();
}

// Update Cart Count
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Update Dashboard
function updateDashboard() {
    document.getElementById('total-products').textContent = products.length;
    document.getElementById('sold-items').textContent = soldProducts.length;
    document.getElementById('revenue').textContent = `Rp ${totalRevenue.toLocaleString('id-ID')}`;
    
    // Update recent activities
    updateRecentActivities();
}

// Update User Profile
function updateUserProfile() {
    document.getElementById('profile-name').textContent = userProfile.name;
    document.getElementById('profile-email').textContent = userProfile.email;
    document.getElementById('profile-login-email').textContent = userProfile.loginEmail;
    document.getElementById('profile-phone').textContent = userProfile.phone;
    document.getElementById('profile-join-date').textContent = userProfile.joinDate;
    document.getElementById('profile-status').textContent = userProfile.status;
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
    // Developer login
    devLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('devUsername').value;
        const password = document.getElementById('devPassword').value;
        
        // Check developer credentials
        const developer = developers.find(dev => 
            dev.username === username && dev.password === password
        );
        
        if (developer) {
            devLoginModal.classList.remove('active');
            devPanel.classList.add('active');
            populateProductSelect();
            showNotification(`Berhasil login sebagai ${developer.username}`);
            addRecentActivity('system', `${developer.username} login berhasil`);
        } else {
            alert('Username atau password salah!');
        }
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

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === devLoginModal) {
        devLoginModal.classList.remove('active');
    }
    if (e.target === paymentModal) {
        paymentModal.classList.remove('active');
    }
});


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
    
    // Close cart modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
}

// Update Cart Display
function updateCartDisplay() {
    updateCartCount();
    
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartSummary.style.display = 'none';
        cartItemsContainer.innerHTML = '';
    } else {
        cartEmpty.style.display = 'none';
        cartSummary.style.display = 'block';
        renderCartItems();
        updateCartTotal();
    }
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
    
    // Add event listeners to cart item buttons
    setupCartItemEventListeners();
}

// Setup Cart Item Event Listeners
function setupCartItemEventListeners() {
    // Increase quantity
    document.querySelectorAll('.increase-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    // Decrease quantity
    document.querySelectorAll('.decrease-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            decreaseCartQuantity(productId);
        });
    });
    
    // Remove item
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// Add to Cart (updated)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartDisplay();
        showNotification(`${product.name} ditambahkan ke keranjang`);
        addRecentActivity('cart', `${product.name} ditambahkan ke keranjang`);
    }
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

// Show Cart Modal (updated)
function showCartModal() {
    updateCartDisplay();
    cartModal.classList.add('active');
}

// Update Cart Count (updated)
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Buy Now (updated)
function buyNow(productId) {
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

// Show Payment Modal (updated)
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

// Process Payment (updated)
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

// Update Event Listeners untuk tombol keranjang (di setupEventListeners)
function setupEventListeners() {
    // ... (event listeners sebelumnya tetap sama) ...
    
    // Cart button - updated to show cart modal
    cartBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Keranjang belanja kosong');
        } else {
            showCartModal();
        }
    });
    
    // ... (event listeners lainnya tetap sama) ...
}
// Dapatkan elemen link logo yang baru dibuat
const logoLink = document.querySelector('.logo-link');

// Fungsi untuk menangani scroll
function scrollToHome(event) {
    // Mencegah perilaku default link (yang biasanya langsung melompat tanpa animasi)
    event.preventDefault();

    // Dapatkan elemen target (section #home)
    const targetSection = document.getElementById('home');

    if (targetSection) {
        // Menggunakan smooth scroll. Ini adalah cara modern dan lebih disukai.
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Posisikan di bagian atas view
        });
        
        // Opsional: Perbarui URL hash tanpa memicu navigasi penuh
        window.history.pushState(null, null, '#home');
    }
}

// Tambahkan event listener pada link logo
if (logoLink) {
    logoLink.addEventListener('click', scrollToHome);
}

// Tambahkan smooth scroll ke semua link navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
             target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            window.history.pushState(null, null, this.getAttribute('href'));
        }
    });
});
