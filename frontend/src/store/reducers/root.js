import {combineReducers} from 'redux';
import productListReducer from "./product-list";
import categoryReducer from './categories';
import productReducer from './product-detail';
import tokenLoginReducer from "./app";
import loginReducer from "./login";
import authReducer from "./auth";

const rootReducer = combineReducers({
    login: loginReducer,
    auth: authReducer,
    productList: productListReducer,
    categoryList: categoryReducer,
    productDetail: productReducer,
    app: tokenLoginReducer
});

export default rootReducer;