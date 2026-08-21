
(function initAccordion() {
    const items = document.querySelectorAll('.timeline-item');
    if (!items.length) return;

    items.forEach(item => {
        const row = item.querySelector('.timeline-row');
        if (!row) return;

        row.addEventListener('click', () => {
            const isActive = item.classList.contains('expanded');


            items.forEach(other => other.classList.remove('expanded'));

            if (!isActive) {
                item.classList.add('expanded');
            }
        });
    });
})();


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const mobileOverlay = document.querySelector('.mobile-overlay');

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
}

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.contains('active');
        if (isOpen) {
            closeMobileMenu();
        } else {
            hamburger.classList.add('active');
            navLinks.classList.add('active');
            if (mobileOverlay) mobileOverlay.classList.add('active');
            document.body.classList.add('menu-open');
        }
    });

    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMobileMenu);
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerOffset = 70;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});


const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links li a');

function updateActiveNav() {
    let current = '';

    const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50;

    if (isAtBottom) {
        current = 'contact';
    } else {
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
    }

    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);


const navbar = document.querySelector('.navbar');
const logoElement = document.querySelector('.logo');
const heroSection = document.querySelector('.hero');

if (navbar && heroSection) {
    window.addEventListener('scroll', () => {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

        if (window.scrollY > heroBottom - 100) {
            navbar.classList.add('scrolled');
            if (logoElement) logoElement.classList.add('visible');
        } else {
            navbar.classList.remove('scrolled');
            if (logoElement) logoElement.classList.remove('visible');
        }
    });
}


const revealElements = document.querySelectorAll('.section, .card-image, .timeline-item');
revealElements.forEach(element => element.classList.add('reveal'));

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
revealElements.forEach(element => revealObserver.observe(element));


const textArray = ["Games.", "Tools.", "Systems."];
const textElement = document.getElementById('changing-text');
let textIndex = 0;

if (textElement) {
    function rotateText() {
        textElement.classList.add('fade-out');

        setTimeout(() => {
            textIndex = (textIndex + 1) % textArray.length;
            textElement.textContent = textArray[textIndex];
            textElement.classList.remove('fade-out');
            textElement.classList.add('fade-in');

            setTimeout(() => {
                textElement.classList.remove('fade-in');
            }, 400);
        }, 300);
    }
    setInterval(rotateText, 2500);
}


function initCarousel() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-arrow.prev');
    const nextBtn = carousel.querySelector('.carousel-arrow.next');
    const dotsContainer = carousel.querySelector('.carousel-dots');

    let currentIndex = 0;
    const totalSlides = slides.length;

    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
}

document.addEventListener('DOMContentLoaded', initCarousel);


(function initHoverPreviews() {
    if ('ontouchstart' in window && !window.matchMedia('(hover: hover)').matches) return;

    const hoverImages = document.querySelectorAll('img[data-hover]');
    if (!hoverImages.length) return;

    const preloadCache = new Map();

    hoverImages.forEach(img => {
        const staticSrc = img.getAttribute('src');
        const hoverSrc = img.getAttribute('data-hover');
        if (!hoverSrc) return;

        img.dataset.static = staticSrc;

        const hoverTarget = img.closest('.project-card') || img.closest('.work-item');
        if (!hoverTarget) return;

        hoverTarget.addEventListener('mouseenter', () => {
            if (preloadCache.has(hoverSrc)) {
                img.src = hoverSrc;
            } else {
                const preload = new Image();
                preload.onload = () => {
                    preloadCache.set(hoverSrc, true);
                    if (hoverTarget.matches(':hover')) {
                        img.src = hoverSrc;
                    }
                };
                preload.onerror = () => {
                    preloadCache.set(hoverSrc, false);
                };
                preload.src = hoverSrc;
            }
        });

        hoverTarget.addEventListener('mouseleave', () => {
            img.src = staticSrc;
        });
    });
})();

(function initShowcaseReel() {
    const slides = document.querySelectorAll('.showcase-slide');
    const dotsContainer = document.getElementById('showcaseDots');
    const label = document.getElementById('showcaseLabel');
    if (!slides.length || !dotsContainer || !label) return;

    const labels = [
        'Sparrow Engine',
        'PCG Dungeon Crawler',
        'Low Level Optimization',
        'Space Chunks',
        'Platform Development',
        'VR Experience'
    ];

    let current = 0;
    let timer;

    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'showcase-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', labels[i]);
        dot.addEventListener('click', () => { goTo(i); resetTimer(); });
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.showcase-dot');

    function goTo(index) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        label.classList.remove('visible');

        current = index;

        slides[current].classList.add('active');
        dots[current].classList.add('active');
        label.textContent = labels[current];

        requestAnimationFrame(() => {
            requestAnimationFrame(() => { label.classList.add('visible'); });
        });
    }

    function advance() {
        goTo((current + 1) % slides.length);
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(advance, 3000);
    }

    label.textContent = labels[0];
    requestAnimationFrame(() => {
        requestAnimationFrame(() => { label.classList.add('visible'); });
    });

    resetTimer();
})();

