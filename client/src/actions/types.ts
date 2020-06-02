import { Product } from '../store';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CANCEL_CREATION = 'CANCEL_CREATION';

interface FetchProductsAction {
    type: typeof REQUEST_PRODUCTS;
}

interface ReceiveProductsAction {
    type: typeof FETCH_SUCCESS;
    products: Product[];
}

interface FetchFailAction {
    type: typeof FETCH_FAIL;
    error: string;
}

interface FilterProductsAction {
    type: typeof FILTER_PRODUCTS;
    namePart: string;
}

interface CreateProductAction {
    type: typeof CREATE_PRODUCT;
}

interface CancelProductCreationAction {
    type: typeof CANCEL_CREATION;
}

export type ProductsActionTypes =
    FetchProductsAction |
    ReceiveProductsAction |
    FetchFailAction |
    FilterProductsAction |
    CreateProductAction |
    CancelProductCreationAction;
