const openModalCreateAds = document.querySelector('.create-ad');
const closeModalCreateAds = document.querySelector('.add-modal-close');
const backdropCreateAds = document.querySelector('.add-modal-backdrop');
const token = localStorage.getItem('token');



openModalCreateAds.addEventListener('click', onOpenModalAuthorization);
closeModalCreateAds.addEventListener('click', onCloseModalAuthorization);
backdropCreateAds.addEventListener('click', onBackdropClick);

function onOpenByToken() {
    if (token) {
        onOpenModalAuthorization()
    }
};


function onOpenModalAuthorization() {
    window.addEventListener('keydown', onEscKeyPress);
    backdropCreateAds.classList.toggle("is-hidden");

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