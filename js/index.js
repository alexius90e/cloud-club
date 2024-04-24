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