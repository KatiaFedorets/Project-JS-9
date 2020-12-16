import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { defaults, alert } from '@pnotify/core';


defaults.styling = 'material';
defaults.icons = 'material';



const openModalCreateAds = document.querySelector('.create-ad');
const closeModalCreateAds = document.querySelector('.add-modal-close');
const backdropCreateAds = document.querySelector('.add-modal-backdrop');
const token = localStorage.getItem('token');
console.log(token);



openModalCreateAds.addEventListener('click', onOpenByToken);
closeModalCreateAds.addEventListener('click', onCloseModalAuthorization);
backdropCreateAds.addEventListener('click', onBackdropClick);




function onOpenByToken() {
    if (token) {
        onOpenModalAuthorization()
    } else
        alert({
            text: "Необходимо зарегистрироваться",
        })
};




function onOpenModalAuthorization() {
    window.addEventListener('keydown', onEscKeyPress);
    backdropCreateAds.classList.remove("is-hidden");

}

function onCloseModalAuthorization() {
    window.removeEventListener('keydown', onEscKeyPress);
    backdropCreateAds.classList.add("is-hidden");
}


function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        onCloseModalAuthorization();
    }
}

function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;

    if (isEscKey) {
        onCloseModalAuthorization();
    }
}