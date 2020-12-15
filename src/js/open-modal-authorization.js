const openModalAuthorization = document.querySelector('.login-button-tablet');
const closeModalAuthorization = document.querySelector('.authorization-button-close');
const modalAuthorization = document.querySelector("[data-modal]");

const backdrop = document.querySelector('.backdrop-authorization');

openModalAuthorization.addEventListener('click', onOpenModalAuthorization);
closeModalAuthorization.addEventListener('click', onCloseModalAuthorization);
// window.addEventListener('keypress', toggleModal);
backdrop.addEventListener('click', onBackdropClick);


// function toggleModal() {
//     document.body.classList.toggle("modal-open");
//     modalAuthorization.classList.toggle("is-hidden");
//   }

// function onBackdropClick(e) {
//   if (e.target === e.currentTarget) {
//       toggleModal()
//     }
//   }


expotr function onOpenModalAuthorization() {
  window.addEventListener('keydown', onEscKeyPress);
  modalAuthorization.classList.toggle("is-hidden");

}

export function onCloseModalAuthorization() {
  window.removeEventListener('keydown', onEscKeyPress);
  modalAuthorization.classList.add("is-hidden");
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