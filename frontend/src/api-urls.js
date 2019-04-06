import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';
const PRODUCTS_URL = '/products/';
const CATEGORIES_URL = '/categories/';
const TOKEN_LOGIN_URL = '/token-login/';
const PHOTO_URL = '/photo/';
const LOGIN_URL ='/login/';


const instance = axios.create({
    baseURL: BASE_URL
});

export  {PRODUCTS_URL, BASE_URL, TOKEN_LOGIN_URL, PHOTO_URL, CATEGORIES_URL, LOGIN_URL}

export default instance;