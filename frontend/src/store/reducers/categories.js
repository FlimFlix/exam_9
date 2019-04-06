import {CATEGORIES_REQUEST_SUCCESS} from "../actions/categories";

const initialState = {
    categories: [],
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIES_REQUEST_SUCCESS:
            return {...state, categories: action.categories};
        default:
            return state;
    }
};


export default categoryReducer;