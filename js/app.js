// ===== MENU MOBILE (hamburger) =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Ferme le menu mobile après avoir cliqué sur un lien
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== VALIDATION DU FORMULAIRE DE CONTACT =====
const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // empêche l'envoi réel (front uniquement)

    let isValid = true;

    // Récupération des champs
    const nom = document.getElementById('nom');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Récupération des zones d'erreur
    const erreurNom = document.getElementById('erreurNom');
    const erreurEmail = document.getElementById('erreurEmail');
    const erreurMessage = document.getElementById('erreurMessage');

    // Reset des messages d'erreur
    erreurNom.textContent = '';
    erreurEmail.textContent = '';
    erreurMessage.textContent = '';
    feedback.textContent = '';
    feedback.className = 'form-feedback';

    // Validation du nom (obligatoire, min 2 caractères)
    if (nom.value.trim().length < 2) {
      erreurNom.textContent = 'Merci d\'indiquer votre nom (2 caractères minimum).';
      isValid = false;
    }

    // Validation de l'email (obligatoire + format valide)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      erreurEmail.textContent = 'Merci d\'indiquer une adresse email valide.';
      isValid = false;
    }

    // Validation du message (obligatoire, min 10 caractères)
    if (message.value.trim().length < 10) {
      erreurMessage.textContent = 'Votre message doit contenir au moins 10 caractères.';
      isValid = false;
    }

    // Feedback final
    if (isValid) {
      feedback.textContent = '✓ Merci ! Votre message a bien été envoyé.';
      feedback.classList.add('success');
      contactForm.reset();
    } else {
      feedback.textContent = 'Veuillez corriger les erreurs ci-dessus avant d\'envoyer.';
      feedback.classList.add('error');
    }
  });
}
// ===== DÉFILEMENT FLUIDE FORCÉ (indépendant des réglages Windows) =====
document.querySelectorAll('a[href^="#"]').forEach(lien => {
  lien.addEventListener('click', function (e) {
    const cibleId = this.getAttribute('href');
    const cible = document.querySelector(cibleId);

    if (cible) {
      e.preventDefault();
      cible.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});