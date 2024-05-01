document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const description = button.nextElementSibling; // Seleciona a descrição seguinte ao botão

            // Alternar a classe 'hidden' na descrição para mostrar ou ocultar
            description.classList.toggle('hidden');

            // Alterar o texto do botão entre 'Ver Descrição' e 'Ocultar Descrição'
            if (button.textContent === 'Ver Descrição') {
                button.textContent = 'Ocultar Descrição';
            } else {
                button.textContent = 'Ver Descrição';
            }
        });
    });
});
