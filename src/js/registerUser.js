import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { defaults, alert } from '@pnotify/core';
import { registerUser } from './serviceApi';
import { onCloseModalAuthorization } from './open-modal-authorization';

defaults.styling = 'material';
defaults.icons = 'material';

const inputEmail = document.querySelector('.js-email');
const inputPassword = document.querySelector('.js-password');
const btnLogin = document.querySelector('.js-login');
const btnRegister = document.querySelector('.js-register');
const registerFormRef = document.querySelector('.register-form');

registerFormRef.addEventListener('submit', onSubmitRegisterForm);

function onSubmitRegisterForm(event) {
    event.preventDefault();
    const email = inputEmail.value;
    const password = inputPassword.value;
    const userData = {
        "email": email,
        "password": password
    };

    registerUser(userData).then(({ data }) => {
        console.log(data);
        onCloseModalAuthorization();
        localStorage.setItem('token', data.id);
        alert({
            text: "Зареєстровано!",
        });
    }).catch(error => {
        alert({
            text: error.response.data.message,
        });
    })
};


