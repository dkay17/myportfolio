document.addEventListener('DOMContentLoaded', function() {
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
});

