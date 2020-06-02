import { Product } from '../store';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CANCEL_CREATION = 'CANCEL_CREATION';
export const REQUEST_SAVE = 'REQUEST_SAVE';
export const SAVE_SUCCESS = 'SAVE_SUCCESS';
export const SAVE_FAIL = 'SAVE_FAIL';

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

interface RequestSaveAction {
    type: typeof REQUEST_SAVE;
}

interface SaveSuccessAction {
    type: typeof SAVE_SUCCESS;
    createdProduct: Product;
}

interface SaveFailAction {
    type: typeof SAVE_FAIL;
    error: string;
}

export type ProductsActionTypes =
    FetchProductsAction |
    ReceiveProductsAction |
    FetchFailAction |
    FilterProductsAction |
    CreateProductAction |
    CancelProductCreationAction |
    RequestSaveAction |
    SaveSuccessAction |
    SaveFailAction;
