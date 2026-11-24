const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

// Плавное появление блоков при прокрутке страницы.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section-heading, .about-grid, .skill-card, .project-card, .education-card, .contact-box')
  .forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
  });

// Не позволяем пустым ссылкам Telegram/GitHub прокручивать страницу наверх.
document.querySelectorAll('.placeholder-link').forEach(link => {
  link.addEventListener('click', event => event.preventDefault());
});
