const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: .08});
document.querySelectorAll('.section, .project-card, .timeline-row, .skills-grid > div').forEach(el => observer.observe(el));
