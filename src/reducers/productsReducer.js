import { SET_PRODUCTS, HANDLE_SEARCH } from "../actions/types";

const initialState = {
    products: null,
    productsCopy: null,
    search: "",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload.filter( (product) => {
                    return product.title.includes(state.search);
                }),
                productsCopy: action.payload,
            };
        case HANDLE_SEARCH:
            if (action.payload.length === "") {
                return {
                    ...state,
                    search: action.payload,
                    products: state.productsCopy
                };
            } else {
                return {
                    ...state,
                    search: action.payload,
                    products: state.productsCopy.filter( (product) => {
                        return product.title.includes(action.payload);
                    }),
                };
            }

        default:
            return state;
    }
}