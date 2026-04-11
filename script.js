// script.js

// Modal Popup Functionality
const modalTrigger = document.getElementById('modal-trigger');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

modalTrigger.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// FAQ Toggle Functionality
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const answer = item.querySelector('.faq-answer');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    let valid = true;
    const email = form.querySelector('input[type="email"]').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        valid = false;
        alert('Please enter a valid email address.');
    }
    if (!valid) {
        event.preventDefault();
    }
});

// Lazy Loading Images
const lazyLoadVideos = document.querySelectorAll('video[data-src]');
const loadVideo = (video) => {
    video.src = video.dataset.src;
    video.load();
};
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            loadVideo(entry.target);
            videoObserver.unobserve(entry.target);
        }
    });
});

lazyLoadVideos.forEach((video) => {
    videoObserver.observe(video);
});

// Scroll Animations
const scrollElements = document.querySelectorAll('.scroll-animation');
const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            elementObserver.unobserve(entry.target);
        }
    });
});

scrollElements.forEach((element) => {
    elementObserver.observe(element);
});

// Footer Year Update
const footerYear = document.getElementById('footer-year');
year = new Date().getFullYear();
footerYear.textContent = year;

// Menu Toggle Functionality
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});