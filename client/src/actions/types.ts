import { Product } from '../store';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

interface FetchProductsAction {
    type: typeof REQUEST_PRODUCTS;
}

interface ReceiveProductsAction {
    type: typeof FETCH_SUCCESS
    products: Product[]
}

interface FetchFailAction {
    type: typeof FETCH_FAIL;
    error: string;
}

export type ProductsActionTypes = FetchProductsAction | ReceiveProductsAction | FetchFailAction;
