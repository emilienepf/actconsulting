// === Menu Déroulant ===
const menuToggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header-nav');

// Gestion de l'ouverture et fermeture du menu
if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', () => {
        headerNav.classList.toggle('open'); // Bascule la classe 'open' pour afficher/masquer le menu

        // Ajuste la hauteur du menu pour l'animation
        if (headerNav.classList.contains('open')) {
            headerNav.style.maxHeight = `${headerNav.scrollHeight}px`;
        } else {
            headerNav.style.maxHeight = '0';
        }
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && !headerNav.contains(event.target)) {
            headerNav.classList.remove('open');
            headerNav.style.maxHeight = '0';
        }
    });

    // Réinitialise le menu si la fenêtre est redimensionnée
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            headerNav.classList.remove('open');
            headerNav.style.maxHeight = null; // Supprime la limite de hauteur sur les grands écrans
        }
    });
};
