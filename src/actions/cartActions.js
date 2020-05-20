import { ADD_PRODUCT, REMOVE_PRODUCT } from "./types";

// Set current page with page parameters
export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: item
    };
};

export const removeProduct = (productId) => {
    return {
        type: REMOVE_PRODUCT,
        payload: productId
    };
};