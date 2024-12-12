document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".page", ".page-header");
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.style.transform = `translateY(${index * 50}px)`;
        section.style.transition = "transform 0.5s ease-in-out";
      } else {
        section.style.transform = "translateY(0)";
      }
    });
  });
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if(window.scrollY > 100) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  });
