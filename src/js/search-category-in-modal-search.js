import { getPageSearchQuerySpecific } from './serviceApi';
import productCard from '../templates/product-card.hbs';
import { onCloseModal } from './open-modal-search';

// import Handlebars from 'handlebars';
 // assumes you have handlebars installed as a project dependency
// productCard.registerHelper('inlineSVG', productCard);


const mainContainer = document.querySelector('.main-container');
const magnifireSearchModal = document.querySelector('.button-magnifire');
const textForBadStatus = document.querySelector('.text-for-status-no-ok');

magnifireSearchModal.addEventListener('click', fetchCategory);
magnifireSearchModal.addEventListener('submit', fetchCategory);


function renderProductCard(data) { 
    // mainContainer.insertAdjacentHTML('afterbegin', inlineSVG(data))
    mainContainer.insertAdjacentHTML('afterbegin', productCard(data))
}
function clearMainConteiner() {
    mainContainer.innerHTML = ''
} 


// function fetchCategory(e) {
//     e.preventDefault();
//     const query = document.querySelector('.search-input').value;
//     getPageSearchQuerySpecific(query)
//         .then(({ data }) => {
//             if (data.length > 0) {
//                 clearMainConteiner(),
//               renderProductCard(data),
//               onCloseModal(),
//               document.querySelector('.search-input').value = '',
//               textForBadStatus.textContent = ''
//             }
//         })
//     .catch (err => textForBadStatus.textContent = 'status 404')
// }

function fetchCategory(e) {
    e.preventDefault();
    const query = document.querySelector('.search-input').value;
    if (query === 'Нерухомість' || query === 'недвижимость' || query === 'property') {
        getPageSearchQuerySpecific('property')
            .then(({ data }) => {
                if (data.length > 0) {
                    clearMainConteiner(),
                    renderProductCard(data),
                        onCloseModal(),
                        document.querySelector('.search-input').value = '',
                        textForBadStatus.textContent = ''
                }
            })
    } else if (query === 'Транспорт'  || query === 'транспорт' || query === 'transport') {
        getPageSearchQuerySpecific('transport')
            .then(({ data }) => {
                if (data.length > 0) {
                    clearMainConteiner(),
                    renderProductCard(data),
                        onCloseModal(),
                        document.querySelector('.search-input').value = '',
                        textForBadStatus.textContent = ''
                }
            })
            
    }else if (query === 'Робота' || query === 'работа' || query === 'work') {
        getPageSearchQuerySpecific('work')
            .then(({ data }) => {
                if (data.length > 0) {
                    clearMainConteiner(),
                    renderProductCard(data),
                        onCloseModal(),
                        document.querySelector('.search-input').value = '',
                        textForBadStatus.textContent = ''
                }
            })
            
    }else if (query === 'Електроніка' || query === 'электрика' || query === 'electronics') {
        getPageSearchQuerySpecific('electronics')
            .then(({ data }) => {
                if (data.length > 0) {
                    clearMainConteiner(),
                    renderProductCard(data),
                        onCloseModal(),
                        document.querySelector('.search-input').value = '',
                        textForBadStatus.textContent = ''
                }
            })
            
    }else if (query === 'Бізнес та послуги' || query === 'бизнес и услуги' || query === 'business and services') {
        getPageSearchQuerySpecific('business and services')
            .then(({ data }) => {
                if (data.length > 0) {
                    clearMainConteiner(),
                    renderProductCard(data),
                        onCloseModal(),
                        document.querySelector('.search-input').value = '',
                        textForBadStatus.textContent = ''
                }
            })
            
    }else if (query === 'Відпочинок і спорт' || query === 'отдых и спорт' || query === 'recreation and sport') {
        getPageSearchQuerySpecific('recreation and sport')
            .then(({ data }) => {
                if (data.length > 0) {
                    clearMainConteiner(),
                    renderProductCard(data),
                        onCloseModal(),
                        document.querySelector('.search-input').value = '',
                        textForBadStatus.textContent = ''
                }
            })
            
    }else if (query === 'Віддам безкоштовно' || query === 'отдам даром' || query === 'free') {
        getPageSearchQuerySpecific('free')
            .then(({ data }) => {
                if (data.length > 0) {
                    clearMainConteiner(),
                    renderProductCard(data),
                        onCloseModal(),
                        document.querySelector('.search-input').value = '',
                        textForBadStatus.textContent = ''
                }
            })
            
    }else if (query === 'Обмін' || query === 'обмен' || query === 'trade') {
        getPageSearchQuerySpecific('trade')
            .then(({ data }) => {
                if (data.length > 0) {
                    clearMainConteiner(),
                    renderProductCard(data),
                        onCloseModal(),
                        document.querySelector('.search-input').value = '',
                        textForBadStatus.textContent = ''
                }
            })
            
    }
    textForBadStatus.textContent = 'status 404'
    
}