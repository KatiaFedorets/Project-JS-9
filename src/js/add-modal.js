import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { defaults, alert } from '@pnotify/core';
import { postAds } from './serviceApi';

defaults.styling = 'material';
defaults.icons = 'material';

const inputTitle = document.querySelector('.js-input-title');
const textareaDescription = document.querySelector('.js-textarea-description');
// const categoryOption = document.querySelector('.js-category-option');
const selectCategory = document.querySelector('.js-options-select');
const inputPrice = document.querySelector('.js-input-price');
const inputPhone = document.querySelector('.js-input-phone');
const inputFile = document.querySelector('.js-input-file');
const btnPostAdvert = document.querySelector('.js-post-advert');
const postAdvertForm = document.querySelector('.js-post-advert-form');

postAdvertForm.addEventListener('submit', onSubmitPostAdvert);

function onSubmitPostAdvert(event) {
    event.preventDefault();
    const title = inputTitle.value;
    const description = textareaDescription.value;
    // const category = selectCategory.option;
    const category = selectCategory.options[1].value;
    const price = inputPrice.value;
    const phone = inputPhone.value;
    const files = inputFile.value;

    const advertData = {
        "title": title,
        "description": description,
        "category": category,
        "price": price,
        "phone": phone,
        "files": files
    };

    console.log(advertData);

    // если это раскоментить, то: 
    // 400 (Bad Request) !!!No token provided
    
    // postAds(advertData).then(({ data }) => {
    //     console.log(data);
    //     localStorage.setItem('token', data.id);
    //     alert({
    //         text: "Оголошення успішно створено",
    //     });
    // }).catch(error => {
    //     alert({
    //         text: error.response.data.message,
    //     });
    // })
};


