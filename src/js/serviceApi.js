import axios from 'axios';

const BASE_URL = 'https://callboard-backend.herokuapp.com';

//Authorization endpoints
//получает с формы регистрации такой обьект

// const userData = {
//     email: "user000@example.com",
//     password: "qwerty123",
// };
// const userData = JSON.stringify(userD);
// console.log(userData);

//регистрация юзера


export const registerUser = userData => {
    const { email, password } = userData;
    return axios.post(`${BASE_URL}/auth/register`, { email, password })

};

// registerUser(userData);

// логин юзера

export const loginUser = userData => {
    return axios.post(`${BASE_URL}/auth/login`, userData);
};

//  выход юзера
export const logoutUser = () => {
    return axios.post(`${BASE_URL}/auth/logout`);
};

//фвторизация пользователя через Google 

export const getGoogleAuth = () => {
    return axios(`${BASE_URL}/auth/google`);
};

// Call endpoints
// публикация нового обьявления товара, получает такой обьект


// const newAds = {
//     title: "string",
//     description: "string",
//     category: "string",
//     price: "integer",
//     phone: "string",
//     file: "string($binary)",
// };

export const postAds = newAds => {
    return axios.post(`${BASE_URL}/call`, newAds);
};

// получает список всех катигорий товаров

export const getCategoriesList = () => {
    return axios(`${BASE_URL}/call/categories`);
};

// Получение страниц с категориями по номеру страницы(1-3) параметр query 


export const getPagesCategories = query => {
    return axios(`${BASE_URL}/call?page=${query}`);
};

//добовляет в избраное  и  удаляет из избраного(id параметр в обьекте call)

export const addFavourite = id => {

    return axios.post(`${BASE_URL}/call/favourite/${id}`);
};

export const deleteFavourite = id => {

    return axios.delete(`${BASE_URL}/call/favourite/${id}`);
};

// Получение страниц с категориями по запросу(значения поля поиск)

export const getPageSearchQuery = searchQuery => {
    console.log(searchQuery);
    return axios(`${BASE_URL}/call/find?search=${searchQuery}`);
};

