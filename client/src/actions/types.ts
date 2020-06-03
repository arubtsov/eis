import { Product } from '../store';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CANCEL_EDITING = 'CANCEL_EDITING';

export const REQUEST_SAVE = 'REQUEST_SAVE';
export const SAVE_SUCCESS = 'SAVE_SUCCESS';
export const SAVE_FAIL = 'SAVE_FAIL';

export const REQUEST_DELETE = 'REQUEST_DELETE';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAIL = 'DELETE_FAIL';

export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const REQUEST_UPDATE_PRODUCT = 'REQUEST_UPDATE_PRODUCT';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAIL = 'UPDATE_FAIL';

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

interface CancelProductEditingAction {
    type: typeof CANCEL_EDITING;
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

interface RequestDeletionAction {
    type: typeof REQUEST_DELETE;
}

interface DeleteSuccessAction {
    type: typeof DELETE_SUCCESS;
    productId: string;
}

interface DeleteFailAction {
    type: typeof DELETE_FAIL;
}

interface EditProductAction {
    type: typeof EDIT_PRODUCT;
    product: Product;
}

interface RequestUpdateAction {
    type: typeof REQUEST_UPDATE_PRODUCT;
}

interface SuccessUpdateAction {
    type: typeof UPDATE_SUCCESS;
    product: Product;
}

interface FailUpdateAction {
    type: typeof UPDATE_FAIL;
}

export type ProductsActionTypes =
    FetchProductsAction |
    ReceiveProductsAction |
    FetchFailAction |
    FilterProductsAction |
    CreateProductAction |
    CancelProductEditingAction |
    RequestSaveAction |
    SaveSuccessAction |
    SaveFailAction |
    RequestDeletionAction |
    DeleteSuccessAction |
    DeleteFailAction |
    EditProductAction |
    RequestUpdateAction |
    SuccessUpdateAction |
    FailUpdateAction;
