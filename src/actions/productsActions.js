import { SET_PRODUCTS } from "./types";

// Set current page with page parameters
export const setProducts = (products) => {
    console.log('products are', products)
    return {
        type: SET_PRODUCTS,
        payload: products
    };
};