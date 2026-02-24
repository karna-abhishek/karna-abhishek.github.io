/**
 * Scientific Portfolio Website - JavaScript
 * Author: Abhishek Karna
 * Interactive features and functionality
 */

// ============================
// NAVIGATION MENU TOGGLE
// ============================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'rotate(0) translate(0, 0)';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'rotate(0) translate(0, 0)';
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'rotate(0) translate(0, 0)';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'rotate(0) translate(0, 0)';
            });
        });
    }

    // ============================
    // SCROLL ANIMATIONS
    // ============================
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px 0px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate cards and sections on scroll
    const animatedElements = document.querySelectorAll(
        '.research-card, .award-card, .skill-category, .publication-item, .timeline-item, .resource-card, .interest-card, .cv-item, .publication-featured-card, .project-card'
    );

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        el.style.transitionDelay = '0s';
        observer.observe(el);
    });

    // ============================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ============================
    // NAVBAR SCROLL EFFECT
    // ============================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // ============================
    // CONTACT FORM HANDLING
    // ============================
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                showFormMessage('Please fill in all fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Create mailto link (since we're using static hosting)
            const mailtoLink = `mailto:abhishek.karna@duke.edu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            )}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            showFormMessage('Opening your email client... If it doesn\'t open, please email directly to abhishek.karna@duke.edu', 'success');

            // Reset form
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }

    function showFormMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';
        }
    }

    // ============================
    // SCROLL INDICATOR (HERO SECTION)
    // ============================
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.querySelector('.about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // ============================
    // STATS COUNTER ANIMATION
    // ============================
    const statsNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;

        statsNumbers.forEach(stat => {
            const target = parseFloat(stat.textContent);
            const increment = target / 50;
            let current = 0;

            const updateStat = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
                    requestAnimationFrame(updateStat);
                } else {
                    stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
                }
            };

            updateStat();
        });

        statsAnimated = true;
    }

    // Observe stats section
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsSection);
    }

    // ============================
    // LAZY LOADING FOR EXTERNAL LINKS
    // ============================
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // ============================
    // KEYBOARD NAVIGATION IMPROVEMENTS
    // ============================
    document.addEventListener('keydown', function(e) {
        // Escape key closes mobile menu
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    // ============================
    // ACTIVE LINK HIGHLIGHTING
    // ============================
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');

        let currentSection = '';
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);

    // ============================
    // PRINT BUTTON (for CV page)
    // ============================
    const printButton = document.querySelector('.cv-download .btn');
    if (printButton && window.location.pathname.includes('cv.html')) {
        printButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.print();
        });
    }

    // ============================
    // PERFORMANCE: DEBOUNCE SCROLL EVENTS
    // ============================
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

    const debouncedHighlight = debounce(highlightActiveSection, 100);
    window.addEventListener('scroll', debouncedHighlight);

    // ============================
    // ACCESSIBILITY: SKIP TO CONTENT
    // ============================
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--accent-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 100;
    `;
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);

    // ============================
    // CONSOLE MESSAGE
    // ============================
    console.log('%c👋 Welcome to Abhishek Karna\'s Portfolio', 'font-size: 20px; font-weight: bold; color: #4299e1;');
    console.log('%cInterested in the code? Check out the GitHub repository!', 'font-size: 14px; color: #718096;');
    console.log('%cBuilt with HTML, CSS, and vanilla JavaScript', 'font-size: 12px; color: #a0aec0;');
});

// ============================
// PAGE LOAD PERFORMANCE
// ============================
window.addEventListener('load', function() {
    // Remove any preloader if present
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.remove(), 300);
    }

    // Log performance metrics
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`%cPage loaded in ${pageLoadTime}ms`, 'color: #48bb78; font-weight: bold;');
    }
});

// ============================
// SERVICE WORKER REGISTRATION (for PWA)
// ============================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment below if you want to add PWA functionality
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}
