// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Add shadow/shrink to navbar on scroll
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Typing Animation for Hero Section
const typedTextSpan = document.getElementById("typing-text");
const textArray = ["Flutter Developer", "Mobile App Engineer", "Future Full Stack Developer"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Skills Progress Bar Animation on Scroll
const progressBars = document.querySelectorAll('.progress');

const animateProgress = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.getAttribute('data-width');
            progressBar.style.width = width;
            // observer.unobserve(progressBar); // Uncomment to animate only once
        } else {
            // Reset animation when out of view (optional based on preference)
            entry.target.style.width = '0';
        }
    });
};

const progressObserver = new IntersectionObserver(animateProgress, {
    root: null,
    threshold: 0.1, // Trigger when 10% visible
});

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// GitHub Stats Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

const animateCounters = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;

            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                    // observer.unobserve(counter); // Uncomment if you only want it to run once
                }
            };

            updateCount();
        } else {
            counter.innerText = '0'; // Reset when out of view
        }
    });
};

const counterObserver = new IntersectionObserver(animateCounters, {
    root: null,
    threshold: 0.5,
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Global Scroll Reveal Animations
const revealElements = document.querySelectorAll('section');

// Add the 'reveal' class to all sections that don't have it (except hero which usually loads immediately)
revealElements.forEach(el => {
    if (el.id !== 'hero') {
        el.classList.add('reveal');
    }
});

const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Unobserve if you only want it to animate once
            // observer.unobserve(entry.target); 
        }
    });
};

const revealObserver = new IntersectionObserver(revealOnScroll, {
    root: null,
    threshold: 0.15, // Trigger when 15% of the section is visible
});

document.querySelectorAll('.reveal').forEach(section => {
    revealObserver.observe(section);
});
