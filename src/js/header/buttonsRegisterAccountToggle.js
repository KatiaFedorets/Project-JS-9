export function checkAuth() {
  // Мой кабинет, Регистрация, Выход
  const myAccountBtn = document.querySelector(
    '.header-nav-list.desktop.my-cab',
  );
  const registerBtn = document.querySelector('[data-auth-button]');
  const logOutBtn = document.querySelector('.menu-button.is-open');

  logOutBtn.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  });

  //Смена кнопок авторизации и Мой кабинет
  const token = localStorage.getItem('token');
  if (token === null) {
    myAccountBtn.classList.add('is-logout');
    logOutBtn.classList.add('is-logout');
  } else {
    myAccountBtn.classList.remove('is-logout');
    logOutBtn.classList.remove('is-logout');
    registerBtn.classList.add('is-logout');
    // location.reload();
  }
}

window.addEventListener('load', checkAuth);
