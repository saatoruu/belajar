// ============ MENU RESPONSIF ============
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// ============ EFEK STICKY HEADER ============
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(0, 102, 255, 0.9)";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
        header.style.backdropFilter = "blur(10px)";
    } else {
        header.style.background = "linear-gradient(90deg, #0066ff, #00bfff)";
        header.style.boxShadow = "none";
        header.style.backdropFilter = "none";
    }
});

// ============ SMOOTH SCROLL NAV ============
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            navMenu.classList.remove('active');
        }
    });
});

// ============ EFEK FADE-IN SAAT SCROLL ============
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Tambahkan CSS pendukung untuk efek fade-in
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}
.fade-in.show {
  opacity: 1;
  transform: translateY(0);
}
`;
document.head.appendChild(fadeInStyle);

// ============ EFEK RIPPLE AIR (KLIK TOMBOL) ============
document.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const circle = document.createElement('span');
        circle.classList.add('ripple');
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        this.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
    });
});

// Tambahkan CSS untuk efek ripple
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: rippleEffect 0.6s linear;
  background: rgba(255, 255, 255, 0.6);
  pointer-events: none;
}
@keyframes rippleEffect {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
button, .btn-primary, .btn-secondary {
  position: relative;
  overflow: hidden;
}
`;
document.head.appendChild(rippleStyle);

// ============ TEKS JUDUL BERKEDIP HALUS ============
const title = document.querySelector('.logo h1');
if (title) {
    let glow = false;
    setInterval(() => {
        glow = !glow;
        title.style.textShadow = glow 
            ? "0 0 10px #00e5ff, 0 0 20px #00bfff" 
            : "none";
    }, 1200);
}

// ============ ANIMASI LATAR (GELEMBUNG AIR) ============
const bubbleContainer = document.createElement('div');
bubbleContainer.classList.add('bubble-container');
document.body.appendChild(bubbleContainer);

for (let i = 0; i < 20; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    bubbleContainer.appendChild(bubble);
}

// Tambahkan gaya bubble
const bubbleStyle = document.createElement('style');
bubbleStyle.textContent = `
.bubble-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: -1;
}
.bubble {
  position: absolute;
  bottom: -10px;
  width: 15px;
  height: 15px;
  background: rgba(0, 191, 255, 0.3);
  border-radius: 50%;
  animation: rise 10s infinite ease-in;
}
@keyframes rise {
  0% { transform: translateY(0) scale(1); opacity: 0.6; }
  50% { opacity: 1; transform: translateY(-50vh) scale(1.2); }
  100% { transform: translateY(-100vh) scale(0.8); opacity: 0; }
}
`;
document.head.appendChild(bubbleStyle);// ============ EFEK 3D PARALLAX KURSOR ============
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 60;
    const y = (window.innerHeight / 2 - e.pageY) / 60;
    document.querySelectorAll('.product-card, .developer-card').forEach(card => {
        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.03)`;
    });

    // Latar belakang ikut bergerak 3D
    document.body.style.setProperty('--rotateX', `${y / 2}deg`);
    document.body.style.setProperty('--rotateY', `${x / 2}deg`);
    document.body.style.backgroundPosition = `${50 + x / 5}% ${50 + y / 5}%`;
});

// ============ HEADER REAKTIF SAAT SCROLL ============
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ============ ANIMASI DEPTH PARALLAX LEMBUT ============
const layers = document.querySelectorAll('.hero-image, .hero-content');
document.addEventListener('mousemove', (e) => {
    layers.forEach(layer => {
        const speed = layer.dataset.speed || 10;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// ============ EFEK TEKS 3D GLOW ============
const logoText = document.querySelector('.logo h1');
if (logoText) {
    logoText.style.transition = "text-shadow 0.6s ease";
    logoText.addEventListener('mousemove', e => {
        const x = e.offsetX / logoText.offsetWidth;
        const y = e.offsetY / logoText.offsetHeight;
        logoText.style.textShadow = `
            ${x * 30 - 15}px ${y * 30 - 15}px 25px rgba(0, 191, 255, 0.6),
            ${x * -30 + 15}px ${y * -30 + 15}px 25px rgba(255, 255, 255, 0.2)
        `;
    });
    logoText.addEventListener('mouseleave', () => {
        logoText.style.textShadow = "0 0 10px rgba(0, 191, 255, 0.6)";
    });
}
