import { ADD_PRODUCT, REMOVE_PRODUCT, SET_CART_OPEN, SET_CART_CLOSE } from "../actions/types";

const initialState = {
    cart: [],
    isOpen: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            if (state.cart.filter(item => item.id === action.payload.id).length === 0) {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                };
            } else {
                return {
                    ...state
                }
            };
        case REMOVE_PRODUCT:
            let cartCopy = [...state.cart];
            cartCopy.forEach((item, index) => { if (item.id === action.payload.id) cartCopy.splice(index, 1) })
            return {
                ...state,
                cart: cartCopy,
            };

        case SET_CART_OPEN:
            return {
                ...state,
                isOpen: action.payload
            };

        case SET_CART_CLOSE:
            return {
                ...state,
                isOpen: action.payload
            }
        default:
            return state;
    }
}