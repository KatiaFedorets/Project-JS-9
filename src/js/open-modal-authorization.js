const openModalAuthorization = document.querySelector('.login-button-tablet');
const closeModalAuthorization = document.querySelector('.authorization-button-close');
const modalAuthorization = document.querySelector("[data-modal]");
const backdrop = document.querySelector('.backdrop-authorization');

openModalAuthorization.addEventListener('click', toggleModal);
closeModalAuthorization.addEventListener('click', toggleModal);
window.addEventListener('keypress', toggleModal);
backdrop.addEventListener('click', onBackdropClick);


function toggleModal() {
    document.body.classList.toggle("modal-open");
    modalAuthorization.classList.toggle("is-hidden");
  }

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
      toggleModal()
    }
  }

