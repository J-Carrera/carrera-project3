document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".page");
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
  