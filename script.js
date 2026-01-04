document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de rolagem suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Exemplo de validação de formulário de contato (muito básica)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Aqui você pode integrar um serviço de envio de formulário
                // como Formspree.io, Netlify Forms, ou um backend customizado.
                // Por simplicidade, vamos apenas logar no console e resetar.
                console.log('Formulário enviado:', { name, email, message });
                alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
                contactForm.reset();
            } else {
                alert('Por favor, preencha todos os campos do formulário.');
            }
        });
    }
});