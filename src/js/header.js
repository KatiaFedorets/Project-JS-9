function openMenu() {
  const menuBtnRef = document.querySelector('.menu-button');
  const mobileMenuRef = document.querySelector('.content');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.add('is-open');
  });
}
openMenu();

function closeMenu() {
  const menuBtnClose = document.querySelector('.close-button');
  const mobileMenuRef = document.querySelector('.content');

  menuBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.remove('is-open');
  });
}

closeMenu();
