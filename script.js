const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => siteNav.classList.remove('open'));
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.16,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
