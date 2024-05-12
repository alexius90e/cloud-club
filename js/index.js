const burgerButton = document.querySelector('.header__burger-button');
const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav');

if (burgerButton && header && headerNav) {
  burgerButton.addEventListener('click', (event) => {
    document.body.classList.add('hidden');
    header.classList.add('active');
    headerNav.classList.add('active');
  });

  header.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      document.body.classList.remove('hidden');
      header.classList.remove('active');
      headerNav.classList.remove('active');
    }
  });

  headerNav.addEventListener('click', (event) => {
    const isCloseButton = event.target.classList.contains('header__nav-close');
    const isLink = event.target.classList.contains('header__nav-menu-item-link');
    const isLogo = event.target.classList.contains('header__logo-link');
    if (isCloseButton || isLink || isLogo) {
      document.body.classList.remove('hidden');
      header.classList.remove('active');
      headerNav.classList.remove('active');
    }
  });
}

const presentationButton = document.querySelector('.first-screen__presentation-button');
const modals = document.querySelectorAll('.modal');
const contactModal = document.querySelector('#contactModal');
const successModal = document.querySelector('#successModal');
const contactForm = document.querySelector('#contactModal .modal__form');

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    const isCloseButton = event.target.classList.contains('modal__close');
    const isOverlay = event.target === event.currentTarget;
    if (isCloseButton || isOverlay) modal.classList.remove('active');
  });
});

if (presentationButton) {
  presentationButton.addEventListener('click', () => {
    if (contactModal) contactModal.classList.add('active');
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (contactModal) contactModal.classList.remove('active');
    if (successModal) successModal.classList.add('active');
  });
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
