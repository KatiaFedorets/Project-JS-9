import productModal from '../templates/product-modal.hbs';
import axios from 'axios';

const refs = {
    productModalBackdrop: document.querySelector('.product-modal-backdrop'),
    sellerInfoBtn: document.querySelector('.product-modal__seller-info-btn'),
    sellerInfo: document.querySelector('.product-modal__seller-info'),  
    productModalCloseBtn: document.querySelector('.product-modal__close-btn'),
    productModalCarouselMobile: document.querySelector('.product-modal__carousel-mobile'),
};

refs.productModalCloseBtn.addEventListener('click', onProductModalCloseBtnClick);
refs.sellerInfoBtn.addEventListener('click', onSellerInfoBtnClick);

$(document).ready(function(){
    // мобільна карусель
    $('.product-modal__carousel-mobile').slick({        
        dots: true, 
        arrows: false,
    });

    // карусель для планшета та десктопа
    $('.product-modal__carousel').slick({                 
        arrows: false,
        swipe: false, 
        fade: true,                
    });
    $('.product-modal__carousel-nav').slick({
        slidesToShow: 5,              
        arrows: false,
        swipe: false,
        focusOnSelect: true,
        asNavFor: '.product-modal__carousel',            
    });
});

// показ інформації про продавця
function onSellerInfoBtnClick() {
    refs.sellerInfo.classList.toggle('is-hidden');

    refs.sellerInfoBtn.removeEventListener('click', onSellerInfoBtnClick);
};

// закриття модалки
function onProductModalCloseBtnClick() {
    refs.productModalBackdrop.classList.toggle('is-hidden');

    refs.productModalCloseBtn.removeEventListener('click', onProductModalCloseBtnClick);
};