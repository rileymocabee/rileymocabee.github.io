document.addEventListener('DOMContentLoaded', () => {
  const fadeItems = document.querySelectorAll('.fade-in-on-scroll');
  const appearOptions = { threshold: 0.1 };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('fade-in-active');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  fadeItems.forEach(item => {
    appearOnScroll.observe(item);
  });
});