const openModalAuthorization = document.querySelector('.login-button-tablet');
const closeModalAuthorization = document.querySelector('.authorization-button-close');
const modalAuthorization = document.querySelector("[data-modal]")

openModalAuthorization.addEventListener('click', toggleModal);
closeModalAuthorization.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    modalAuthorization.classList.toggle("is-hidden");
  }

function onOpenModalAuthorization () {
    modalAuthorization.classList.remove('.is-hidden');
    // console.log('hi');

}

function onCloseModalAuthorization() {
    modalAuthorization.classList.add('.is-hidden');
 
}



// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('.login-button-tablet'),
//     closeModalBtn: document.querySelector("[data-modal-close-authModal]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle("backdrop-authorization");
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();