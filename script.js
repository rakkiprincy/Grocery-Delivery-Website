// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Sample product data (converted to Indian market)
const products = [
    {
        id: 1,
        name: "Organic Bananas",
        category: "produce",
        price: 120,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        description: "Fresh organic bananas from Kerala farms, perfect for snacking",
        unit: "1 kg",
        inStock: 50
    },
    {
        id: 2,
        name: "Organic Whole Milk",
        category: "dairy",
        price: 85,
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        description: "Fresh organic whole milk from local dairy farms",
        unit: "1 liter",
        inStock: 30
    },
    {
        id: 3,
        name: "Vine Tomatoes",
        category: "produce",
        price: 60,
        image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Fresh vine-ripened tomatoes from Maharashtra",
        unit: "500g pack",
        inStock: 40
    },
    {
        id: 4,
        name: "Chicken Breast",
        category: "meat",
        price: 450,
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        description: "Fresh chicken breast, antibiotic-free from certified farms",
        unit: "1 kg",
        inStock: 25
    },
    {
        id: 5,
        name: "Fresh Broccoli",
        category: "produce",
        price: 80,
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        description: "Fresh green broccoli heads from hill stations",
        unit: "1 piece",
        inStock: 35
    },
    {
        id: 6,
        name: "Whole Grain Bread",
        category: "pantry",
        price: 45,
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        description: "Artisan whole grain bread made with Indian wheat",
        unit: "400g loaf",
        inStock: 20
    },
    {
        id: 7,
        name: "Farm Fresh Eggs",
        category: "dairy",
        price: 180,
        image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        description: "Free-range farm fresh eggs from happy hens",
        unit: "30 count tray",
        inStock: 45
    },
    {
        id: 8,
        name: "Frozen Mixed Berries",
        category: "frozen",
        price: 350,
        image: "https://images.unsplash.com/photo-1515872474884-c6a548860190?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Premium frozen mixed berries imported from Kashmir",
        unit: "500g pack",
        inStock: 30
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('freshcart') || '[]');
let currentCategory = 'all';
let searchQuery = '';

// Initialize the application
function init() {
    updateCartCount();
    renderProducts();
    setupEventListeners();
    lucide.createIcons();
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Category buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            setActiveCategory(category);
        });
    });

    // Search functionality
    const searchInputs = document.querySelectorAll('#searchInput, .mobile-search-input');
    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderProducts();
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                closeMobileMenu();
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Cart overlay click outside to close
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', (e) => {
            if (e.target === cartOverlay) {
                toggleCart();
            }
        });
    }
}

// Mobile menu functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    
    if (mobileMenu && mobileMenuIcon) {
        mobileMenu.classList.toggle('show');
        
        // Update icon
        if (mobileMenu.classList.contains('show')) {
            mobileMenuIcon.setAttribute('data-lucide', 'x');
        } else {
            mobileMenuIcon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    
    if (mobileMenu) {
        mobileMenu.classList.remove('show');
        if (mobileMenuIcon) {
            mobileMenuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    }
}

// Category management
function setActiveCategory(category) {
    currentCategory = category;
    
    // Update active button
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    renderProducts();
}

// Product rendering
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    // Filter products
    let filteredProducts = products;
    
    // Filter by category
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchQuery) ||
            product.category.toLowerCase().includes(searchQuery) ||
            (product.description && product.description.toLowerCase().includes(searchQuery))
        );
    }
    
    // Render products
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <p style="font-size: 1.125rem; color: var(--text-gray); margin-bottom: 0.5rem;">No products found</p>
                <p style="color: var(--text-gray);">Try adjusting your search or category filter</p>
            </div>
        `;
    } else {
        productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <button class="favorite-btn" onclick="toggleFavorite(${product.id})">
                        <i data-lucide="heart"></i>
                    </button>
                </div>
                <div class="product-info">
                    <h4 class="product-name">${product.name}</h4>
                    <p class="product-unit">${product.unit}</p>
                    <div class="product-footer">
                        <span class="product-price">₹${product.price}</span>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                            <i data-lucide="shopping-cart"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Re-initialize icons
    lucide.createIcons();
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            unit: product.unit,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    renderCartItems();
    showToast(`${product.name} added to cart!`);
    
    // Add animation to button
    const btn = event.target.closest('.add-to-cart-btn');
    if (btn) {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCartItems();
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartCount();
        renderCartItems();
    }
}

function saveCart() {
    localStorage.setItem('freshcart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        if (totalItems > 0) {
            cartCount.classList.add('show');
        } else {
            cartCount.classList.remove('show');
        }
    }
}

function getSubtotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getDeliveryFee() {
    const subtotal = getSubtotal();
    return subtotal >= 999 ? 0 : 50;
}

function getTotal() {
    return getSubtotal() + getDeliveryFee();
}

function toggleCart() {
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
        cartOverlay.classList.toggle('show');
        renderCartItems();
    }
}

function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const totalAmount = document.getElementById('totalAmount');
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i data-lucide="shopping-cart"></i>
                <p>Your cart is empty</p>
                <span>Add some products to get started</span>
            </div>
        `;
        if (cartFooter) cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-unit">${item.unit}</p>
                    <p class="cart-item-price">₹${item.price}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                        <i data-lucide="minus"></i>
                    </button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                        <i data-lucide="plus"></i>
                    </button>
                </div>
            </div>
        `).join('');
        
        if (cartFooter) {
            cartFooter.style.display = 'block';
            if (totalAmount) {
                totalAmount.textContent = `₹${getTotal()}`;
            }
        }
    }
    
    lucide.createIcons();
}

// Utility functions
function toggleFavorite(productId) {
    // Toggle favorite functionality (you can implement this)
    showToast('Added to favorites!');
}

function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function showCheckout() {
    // Simple checkout simulation
    const total = getTotal();
    alert(`Checkout Total: ₹${total}\n\nThis is a demo. In a real application, this would redirect to a secure checkout page.`);
}

function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.cssText = `
        position: fixed;
        top: 5rem;
        right: 1rem;
        background: var(--fresh-green);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

function handleContactForm(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Simulate form submission
    showToast('Message sent successfully! We will get back to you soon.');
    e.target.reset();
    
    // In a real application, you would send this data to your server
    console.log('Contact form submitted:', data);
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.animate-slide-up');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    init();
    setupScrollAnimations();
});

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 1024) {
        closeMobileMenu();
    }
});