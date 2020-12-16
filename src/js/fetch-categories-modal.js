import {getCategoriesList} from './serviceApi';

import categoriesOptionTpl from '../templates/categories-option.hbs';

const optionsSelect = document.querySelector('.js-options-select');

function fetchCategoriesOptions() {
  const url = 'https://callboard-backend.herokuapp.com/call/categories';
  return fetch(url).then(response => response.json()).then(renderCategoriesOptions);
}

function renderCategoriesOptions(categories) {
  const markupList = categoriesOptionTpl(categories);
  optionsSelect.innerHTML = markupList;
  // console.log(markupList);
}

fetchCategoriesOptions();


// const refs = {
//   openModalBtn: document.querySelector('[data-open-modal]'),
//   closeModalBtn: document.querySelector('[data-close-modal]'),
//   backdrop: document.querySelector('[data-backdrop]'),
// };

// refs.openModalBtn.addEventListener('click', toggleModal);
// refs.closeModalBtn.addEventListener('click', toggleModal);

// refs.backdrop.addEventListener('click', logBackdropClick);

// function toggleModal() {
//   document.body.classList.toggle('modal-open');
//   refs.backdrop.classList.toggle('is-hidden');
// }

// function logBackdropClick() {
//   console.log('Это клик в бекдроп');
// }