function openSubmenuByFocus() {
  const myCab = document.querySelector('.header-my-cab');
  const submenu = document.querySelector('.submenu-nav-header');

  myCab.addEventListener('focus', () => {
    submenu.classList.add('focus');
  });
  myCab.addEventListener('blur', () => {
    submenu.classList.remove('focus');
  });
}
openSubmenuByFocus();

function openSubmenuByClick() {
  const myCab = document.querySelector('.header-my-cab');
  const submenu = document.querySelector('.submenu-nav-header');

  myCab.addEventListener('click', () => {
    submenu.classList.add('focus');
  });
}
openSubmenuByClick();
