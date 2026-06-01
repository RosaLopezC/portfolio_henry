/* ═══════════════════════════════════════
   NAVBAR — sombra al hacer scroll
═══════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

/* ═══════════════════════════════════════
   HAMBURGER — menú móvil
═══════════════════════════════════════ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Cierra el menú al pulsar cualquier enlace
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* ═══════════════════════════════════════
   SCROLL REVEAL — aparición progresiva
═══════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Escalonamos la aparición de cada tarjeta
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.tl-item, .skill-card, .edu-card, .cert-card')
        .forEach(el => revealObserver.observe(el));
