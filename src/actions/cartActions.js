import { ADD_PRODUCT, REMOVE_PRODUCT, SET_CART_CLOSE, SET_CART_OPEN } from "./types";

// Set current page with page parameters
export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    };
};

export const removeProduct = (product) => {
    return {
        type: REMOVE_PRODUCT,
        payload: product
    };
};

export const setCartClose = () => {
    return {
        type: SET_CART_CLOSE,
        payload: false
    };
};

export const setCartOpen = () => {
    return {
        type: SET_CART_OPEN,
        payload: true
    };
};