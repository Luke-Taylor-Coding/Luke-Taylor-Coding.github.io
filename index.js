
new TypeIt("#typed-text", {
    strings: ["Games Programmer", "Portfolio Showcase", "Work in Progress"],  
    speed: 50,     // Typing speed
    deleteSpeed: 25,  // Speed at which the text is deleted
    breakLines: false,  
    loop: true, 
    nextStringDelay: 5000, 
    loopDelay: 5000,  
    waitUntilVisible: true,
}).go();

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));
});


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.container');
    sections.forEach((section) => {
        section.style.opacity = 1;
        section.style.transform = 'translateY(0)';
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 50
        },
        "color": {
            "value": "#564537"
    },
        "size": {
            "value": 3
        },
        "line_linked": { 
            "enable": false  
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "push"
            }
        }
    }
});