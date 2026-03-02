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

// Initialize EmailJS
(function () {
    emailjs.init("D0vHQJmjWlLdBap1m");
})();

// Handle form submit
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_8y75e6w",
        "template_2624t3q",
        this
    ).then(function () {
        alert("Message sent successfully!");
    }, function (error) {
        alert("Failed to send message. Please try again.");
        console.error(error);
    });

    this.reset();
});
