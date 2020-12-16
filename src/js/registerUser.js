import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { defaults, alert } from '@pnotify/core';
import { registerUser, loginUser } from './serviceApi';
import { onCloseModalAuthorization } from './open-modal-authorization';

defaults.styling = 'material';
defaults.icons = 'material';

const inputEmail = document.querySelector('.js-email');
const inputPassword = document.querySelector('.js-password');
const btnLogin = document.querySelector('.js-login');
const btnRegister = document.querySelector('.js-register');
const registerFormRef = document.querySelector('.register-form');


const token = localStorage.getItem('token');
console.log(token);

registerFormRef.addEventListener('submit', onSubmitRegisterForm);
// btnRegister.addEventListener('submit', onRegisterClickBtn);
// btnLogin.addEventListener('submit', onLoginClickBtn);


let userData = {
    "email": '',
    "password": ''
};

// const email = inputEmail.value;
// const password = inputPassword.value;

function onSubmitRegisterForm(event) {
    event.preventDefault();
    const email = inputEmail.value;
    const password = inputPassword.value;
    userData = {
        "email": email,
        "password": password
    };

    registerUser(userData).then(({ data }) => {
        console.log(data);
        localStorage.setItem('token', data.id);
        alert({
            text: "Зареєстровано нового користувача!",
        });
        registerFormRef.reset();
        onCloseModalAuthorization();

    }).catch(error => {
        alert({
            text: error.response.data.message,
        });
    })



};





// function onRegisterClickBtn(event) {
//     registerUser(userData).then(({ data }) => {
//         onCloseModalAuthorization();
//         token = localStorage.setItem('token', data.id);
//         alert({
//             text: "Зареєстровано нового користувача!",
//         })
//     }).catch(error => {
//         alert({
//             text: error.response.data.message,
//         });
//     })
// };

// function onLoginClickBtn(event) {
//     if (token !== '') {
//         alert({
//             text: "Спочатку необхидно зареєструватись",
//         })
//     } else {
//         loginUser(userData).then(({ data }) => {
//             onCloseModalAuthorization();
//             alert({
//                 text: "Зашли!",
//             })
//         }).catch(error => {
//             alert({
//                 text: error.response.data.message,
//             });
//         })
//     }


// };

