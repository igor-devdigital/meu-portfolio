document.addEventListener('DOMContentLoaded', () => {
    // Rolagem suave (mantém igual)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Validação e Envio Real do Formulário
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault(); // Impede o recarregamento da página

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Prepara os dados para o Formspree
                const data = new FormData(e.target);

                // Envia para o Formspree via Fetch API
                const response = await fetch("https://formspree.io/f/mnjnlvvw", {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
                    contactForm.reset();
                } else {
                    alert('Ops! Ocorreu um erro ao enviar sua mensagem.');
                }
            } else {
                alert('Por favor, preencha todos os campos do formulário.');
            }
        });
    }
});