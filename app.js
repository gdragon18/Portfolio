// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Project modal
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const projectCards = document.querySelectorAll('.project-card');

function openModal(modalId) {
    document.querySelectorAll('.modal-content').forEach(c => c.classList.remove('active'));
    document.getElementById(modalId).classList.add('active');
    modalOverlay.classList.add('active');
    modalClose.focus();
}

function closeModal() {
    modalOverlay.classList.remove('active');
}

projectCards.forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.modal));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(card.dataset.modal);
        }
    });
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Contact form (UI only, no backend)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = 'Thanks! This form is a UI demo — please reach me directly via email for now.';
    contactForm.reset();
});