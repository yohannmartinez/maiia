import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/types";

const initialState = {
    cart: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };

        case REMOVE_PRODUCT:
            let cartCopy = [...state.cart];
            cartCopy.forEach((item, index) => { if (item.id === action.payload) cartCopy.splice(index, 1) })
            return {
                ...state,
                cart: cartCopy,
            };
        default:
            return state;
    }
}