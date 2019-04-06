import axios, {PRODUCTS_URL} from "../../api-urls";

export const PRODUCT_REQUEST_SUCCESS = "PRODUCT_REQUEST_SUCCESS";

export const loadProductDetail = (value) => {
    console.log('I am here');
    return dispatch => {
        return axios.get(PRODUCTS_URL + value)
            .then(response => {
                console.log(response.data);
                return dispatch({type: PRODUCT_REQUEST_SUCCESS, product: response.data});
            })
            .catch(error => console.log(error));
    }
};