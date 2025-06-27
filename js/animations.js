// This file will contain the JavaScript code for animations.
console.log("animations.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: Stop observing once animated
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(element => {
        element.classList.add('animate-on-scroll'); // Add base class for initial state
        observer.observe(element);
    });
});
