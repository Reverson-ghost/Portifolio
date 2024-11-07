// script.js
const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
});
