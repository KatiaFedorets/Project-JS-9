import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { defaults, alert } from '@pnotify/core';
import { registerUser } from './serviceApi';

defaults.styling = 'material';
defaults.icons = 'material';

const registerFormRef = document.querySelector('.register-form');
const OnRegisterSubmit = event => {
    event.preventDefault();

    const { currentTarget: form } = event;
    const formData = new FormData(form);
    const body = {};

    formData.forEach((value, key) => {
        body[key] = value;
    });

    registerUser(body)
        .then(({ data }) => {
            console.log(data);
            // localStorage.setItem('token', data.token)
            // document.location.href = '/';
        })
        .catch(error => {
            alert({
                text: error.response.data.message,
            });
        });
};

registerFormRef.addEventListener('submit', OnRegisterSubmit);