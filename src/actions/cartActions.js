import { ADD_PRODUCT, REMOVE_PRODUCT } from "./types";

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