// Мой кабинет, Регистрация, Выход
const myAccountBtn = document.querySelectorAll('[data-account-button]');
const registerBtn = document.querySelectorAll('[data-auth-button]');
const logOutBtn = document.querySelectorAll('[data-logout-button]');

//Функции для смены кнопок авторизации и Мой кабинет

//Отображает кнопку Мой кабинет
export function showMyAccountBtn() {
  registerBtn.forEach(e => {
    e.classList.add('is-logout');
  });

  myAccountBtn.forEach(e => {
    e.classList.add('is-auth');
  });

  logOutBtn.forEach(e => {
    e.classList.add('is-auth');
  });
}

//Отображает кнoпку регистрации
export function showRegisterBtn() {
  registerBtn.forEach(e => {
    e.classList.remove('is-logout');
  });
  myAccountBtn.forEach(e => {
    e.classList.remove('is-auth');
  });
  logOutBtn.forEach(e => {
    e.classList.remove('is-auth');
  });
}

//Проверка наличия токена и отображение Регистрации или Мой кабинет
export function checkAuth() {
  const token = sessionStorage.getItem('accessToken');
  if (token === null) {
    console.log(token);
    showRegisterBtn();
    return;
  }
  showMyAccountBtn();
}

window.addEventListener('load', checkAuth);
