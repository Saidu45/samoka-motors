document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuIcon = document.querySelector('.mobile-menu i');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

    mobileMenuIcon.addEventListener('click', () => {
        mobileMenuOverlay.classList.toggle('active');
    });

    // Close Mobile Menu when clicking outside or on a link
    mobileMenuOverlay.addEventListener('click', (event) => {
        if (event.target === mobileMenuOverlay || event.target.tagName === 'A') {
            mobileMenuOverlay.classList.remove('active');
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Remove the '#' symbol
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Smooth Scrolling for CTA Buttons in Hero Section
    document.querySelectorAll('.cta').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = button.getAttribute('href').substring(1); // Remove the '#' symbol
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form Validation for "Get Involved" Section
    const contactForm = document.querySelector('.contact-form');
    const nameInput = document.querySelector('.contact-form input[placeholder="Your Name"]');
    const emailInput = document.querySelector('.contact-form input[placeholder="Your Email"]');
    const selectInput = document.querySelector('.form-select');
    const submitButton = document.querySelector('.contact-submit');

    contactForm.addEventListener('submit', (event) => {
        let isValid = true;

        // Validate Name Field
        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            isValid = false;
            event.preventDefault();
        }

        // Validate Email Field
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            alert('Please enter a valid email address.');
            isValid = false;
            event.preventDefault();
        }

        // Validate Select Field
        if (selectInput.value === '') {
            alert('Please select how we can assist you.');
            isValid = false;
            event.preventDefault();
        }

        // If all validations pass, allow form submission
        if (isValid) {
            console.log('Form submitted successfully!');
        }
    });

    // Add Active State to Timeline Items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('hovered');
        });
    });

    // Parallax Effect for Hero Background
    window.addEventListener('scroll', () => {
        const heroBg = document.querySelector('.hero-bg');
        const scrollPosition = window.scrollY;

        // Adjust the background position based on scroll
        heroBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // Lazy Load Images
    const lazyImages = document.querySelectorAll('img.lazy');
    const options = {
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                entry.target.classList.remove('lazy');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    lazyImages.forEach(image => {
        observer.observe(image);
    });

    // Scroll-to-Top Button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = 'Back to Top';
    scrollToTopButton.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show Scroll-to-Top Button on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Mobile Test Drive Button
    const mobileActionBtn = document.querySelector('.mobile-action-btn');
    mobileActionBtn.addEventListener('click', () => {
        const testDriveSection = document.getElementById('solution');
        if (testDriveSection) {
            testDriveSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

