// Мой кабинет, Регистрация, Выход
// const myAccountBtn = document.querySelectorAll('[data-account-button]');
// const registerBtn = document.querySelectorAll('[data-auth-button]');
// const logOutBtn = document.querySelectorAll('[data-logout-button]');

//Функции для смены кнопок авторизации и Мой кабинет

//Отображает кнопку Мой кабинет
// export function showMyAccountBtn() {
//   registerBtn.forEach(e => {
//     e.classList.add('is-logout');
//   });

//   myAccountBtn.forEach(e => {
//     e.classList.add('is-auth');
//   });

//   logOutBtn.forEach(e => {
//     e.classList.add('is-auth');
//   });
// }

// //Отображает кнoпку регистрации
// export function showRegisterBtn() {
//   registerBtn.forEach(e => {
//     e.classList.remove('is-logout');
//   });
//   myAccountBtn.forEach(e => {
//     e.classList.remove('is-auth');
//   });
//   logOutBtn.forEach(e => {
//     e.classList.remove('is-auth');
//   });
// }

export function checkAuth() {
  // Мой кабинет, Регистрация, Выход
  const myAccountBtn = document.querySelector(
    '.header-nav-list.desktop.my-cab',
  );
  const registerBtn = document.querySelector('[data-auth-button]');
  const logOutBtn = document.querySelector('.menu-button.is-open');

  //Смена кнопок авторизации и Мой кабинет
  const token = localStorage.getItem('token');
  if (token === null) {
    // console.log(token);
    myAccountBtn.classList.add('is-logout');
    logOutBtn.classList.add('is-logout');
  } else {
    myAccountBtn.classList.remove('is-logout');
    logOutBtn.classList.remove('is-logout');
    registerBtn.classList.add('is-logout');
  }
}

window.addEventListener('load', checkAuth);
