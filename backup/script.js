// Main JavaScript functionality

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    initializeCookieConsent();
    initializeContactForm();
    initializeSmoothScrolling();
    loadNews();
});

// Mobile Menu Toggle
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Cookie Consent
function initializeCookieConsent() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    
    // Check if cookies were already accepted
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieBanner.classList.remove('hidden');
            cookieBanner.classList.add('fade-in');
        }, 2000);
    }
    
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.add('hidden');
        });
    }
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simulate form submission
            showNotification('Mensaje enviado correctamente. Te contactaremos pronto.', 'success');
            contactForm.reset();
        });
    }
}

// Smooth Scrolling for anchor links
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Load News
function loadNews() {
    const newsContainer = document.getElementById('news-container');
    
    // Sample news data (in a real app, this would come from an API)
    const newsData = [
        {
            id: 1,
            title: "Nueva Convocatoria de Oposiciones",
            excerpt: "Se ha publicado una nueva convocatoria para técnicos informáticos en la administración de Castilla y León.",
            date: "2024-03-15",
            category: "Oposiciones"
        },
        {
            id: 2,
            title: "Reunión Anual de Socios",
            excerpt: "Te invitamos a participar en nuestra reunión anual donde se tratarán temas importantes para la asociación.",
            date: "2024-03-10",
            category: "Eventos"
        },
        {
            id: 3,
            title: "Actualización de Convenio Colectivo",
            excerpt: "Importantes mejoras conseguidas en las negociaciones del convenio colectivo para el personal informático.",
            date: "2024-03-05",
            category: "Convenios"
        }
    ];
    
    if (newsContainer) {
        newsContainer.innerHTML = newsData.map(news => createNewsCard(news)).join('');
    }
}

// Create News Card
function createNewsCard(news) {
    const formattedDate = new Date(news.date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    return `
        <article class="bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow hover-scale">
            <div class="flex items-center gap-2 mb-3">
                <span class="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                    ${news.category}
                </span>
                <span class="text-xs text-muted-foreground">${formattedDate}</span>
            </div>
            <h3 class="text-xl font-semibold mb-3 line-clamp-2">${news.title}</h3>
            <p class="text-muted-foreground mb-4 line-clamp-3">${news.excerpt}</p>
            <a href="noticia.html?id=${news.id}" class="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                Leer más
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </a>
        </article>
    `;
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Add fade in animation
    notification.classList.add('fade-in');
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll animations
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', addScrollAnimations);