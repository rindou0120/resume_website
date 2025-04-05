document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.ss3-1, .ss3-2, .ss3-3, .ss3-4');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0.5 // 超過一半才觸發
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  