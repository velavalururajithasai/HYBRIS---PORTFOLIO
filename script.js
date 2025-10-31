// script.js — minimal, human-written interactivity
// Menu toggle, active section highlighting, simple contact form handler

document.addEventListener('DOMContentLoaded', () => {
  // Menu toggle for small screens
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('primaryNav');

  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  // Smooth scroll and active link
  const navLinks = document.querySelectorAll('.primary-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // close menu on mobile
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
      // Smooth scroll behaviour
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // update focus for accessibility
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  // Update copyright year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* Basic contact form handler — no backend (demo only) */
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please complete all fields before sending.');
    return;
  }

  // Simulate success — for a real site, POST to a server or use Formspree/Netlify forms
  alert(`Thanks, ${name}! Your message was noted. (Demo mode)`);
  e.target.reset();
}
