import { SET_PRODUCTS, HANDLE_SEARCH } from "./types";

// Set current page with page parameters
export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    };
};

export const handleSearch = (search) => {
    return {
        type: HANDLE_SEARCH,
        payload: search,
    };
};