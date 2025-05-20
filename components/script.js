// Custom cursor functionality
const cursor = document.querySelector('.custom-cursor');
const cursorText = document.querySelector('.cursor-text');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .gallery-item, .service-tag');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        if (element.classList.contains('gallery-item')) {
            cursor.classList.add('text-hover');
        }
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursor.classList.remove('text-hover');
    });
});

// Navigation scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const overlayMenu = document.querySelector('.overlay-menu');
const overlayLinks = document.querySelectorAll('.overlay-nav-links a');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    overlayMenu.classList.toggle('active');
    document.body.style.overflow = overlayMenu.classList.contains('active') ? 'hidden' : '';
});

overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        overlayMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Update footer year
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}); 