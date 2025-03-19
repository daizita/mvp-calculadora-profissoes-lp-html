// Script para animação suave de scroll
document.addEventListener('DOMContentLoaded', function() {
    // Animação de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação para os cards quando ficam visíveis
    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.step-card, .career-card');
        
        cards.forEach(card => {
            // Configuração inicial dos cards
            if (!card.style.opacity) {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }
            
            // Verifica se o card está visível na tela
            const cardPosition = card.getBoundingClientRect();
            const isVisible = 
                cardPosition.top < window.innerHeight - 100 && 
                cardPosition.bottom > 0;
            
            if (isVisible) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Executa a animação quando a página carrega e durante o scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});