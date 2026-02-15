// Mobile Menu Toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Simple style toggle for now, can be enhanced
  if (navLinks.classList.contains('active')) {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.background = '#0a0a0a';
    navLinks.style.padding = '2rem';
  } else {
    navLinks.style.display = ''; // reset to css
  }
});

// Smooth Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // Close mobile menu if open
    if(navLinks.classList.contains('active')) {
       navLinks.classList.remove('active');
       navLinks.style.display = '';
    }
  });
});

// Simple Intersection Observer for Fade-in animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .step, .trust-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Add class for animation
const style = document.createElement('style');
style.innerHTML = `
  .fade-in-up {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);


// Placeholder Image Logic (If images fail to load or are missing)
// This ensures the site looks good even without the generated assets for now
const setBg = (id, color) => {
  const el = document.getElementById(id);
  if(el && !el.style.backgroundImage) {
      // Logic to eventually replace with real images
      // For now we might leave it or set a gradient if image not found
  }
}
