document.addEventListener('DOMContentLoaded', function() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 }); // 20% of the element must be visible
  
    document.querySelectorAll(".newLink").forEach((el) => observer.observe(el));
    document.querySelectorAll(".newText").forEach((el) => observer.observe(el));
    document.querySelectorAll(".newDesign").forEach((el) => observer.observe(el));
    document.querySelectorAll(".newOpt").forEach((el) => observer.observe(el));
});

