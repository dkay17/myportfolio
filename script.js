document.addEventListener('DOMContentLoaded', function() {
    // const hamburger = document.querySelector('.hamburger');
    // const navOptions = document.querySelector('.navOptions');
    
    // hamburger.addEventListener('click', function () {
    //   if (navOptions.style.display === 'flex') {
    //     navOptions.style.display = 'none';
    //   } else {
    //     navOptions.style.display = 'flex';
    //     navOptions.style.flexDirection = 'column';
    //   }
    // });
    

    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        let name = data.name;
        let email = data.email;
        let subject = data.subject;
        let msg = data.msg;
        let mailtoLink = `mailto:${email}?subject=${subject}&body=My name is ${name} and ${msg}`;
        window.location.href = mailtoLink;
        form.reset();
    });


    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add("show");
    //         }
    //     });
    // }, { threshold: 0.2 }); // 20% of the element must be visible
  
    // document.querySelectorAll(".design").forEach((el) => observer.observe(el));
});

