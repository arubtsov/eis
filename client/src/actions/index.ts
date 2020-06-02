import { ThunkDispatch } from 'redux-thunk';

import {
    ProductsActionTypes,
    REQUEST_PRODUCTS,
    FETCH_SUCCESS,
    FETCH_FAIL,
    FILTER_PRODUCTS,
    CREATE_PRODUCT,
    CANCEL_CREATION,
    REQUEST_SAVE,
    SAVE_SUCCESS,
    SAVE_FAIL
} from './types';
import { Product } from '../store';
import { ProductsState } from '../reducers';

type DispatchFunction = ThunkDispatch<ProductsState, {}, ProductsActionTypes>;

export function requestProducts (): ProductsActionTypes {
    return {
        type: REQUEST_PRODUCTS
    };
};

export function receiveProducts (products: Product[]): ProductsActionTypes {
    return {
        type: FETCH_SUCCESS,
        products
    };
};

export function rejectFetch (error: string): ProductsActionTypes {
    return {
        type: FETCH_FAIL,
        error
    };
};

export function filterProducts (namePart: string): ProductsActionTypes {
    return {
        type: FILTER_PRODUCTS,
        namePart
    };
};

export function fetchProducts () {
    return async function (dispatch: DispatchFunction): Promise<void> {
        dispatch(requestProducts());

        const response = await fetch('/products');
        const json = await response.json();

        if (response.ok)
            dispatch(receiveProducts(json.data as Product[]));
        else
            dispatch(rejectFetch(json.error));
    };
};

export function createProduct (): ProductsActionTypes {
    return {
        type: CREATE_PRODUCT
    };
};

export function cancelCreation (): ProductsActionTypes {
    return {
        type: CANCEL_CREATION
    };
};

export function requestSave (): ProductsActionTypes {
    return {
        type: REQUEST_SAVE
    };
};

export function successSave (createdProduct: Product): ProductsActionTypes {
    return {
        type: SAVE_SUCCESS,
        createdProduct
    };
};

export function failSave (error: string): ProductsActionTypes {
    return {
        type: SAVE_FAIL,
        error
    };
};

const saveRequestOptions = (body: {}) => ({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
});

export function saveProduct (product: Omit<Product, '_id' | 'price'> & { price: number }) {
    return async function (dispatch: DispatchFunction): Promise<void> {
        dispatch(requestSave());

        const response = await fetch('/product', saveRequestOptions(product));
        const { id, error } = await response.json();

        if (response.ok) {
            const { price, ...others } = product;

            dispatch(successSave({
                ...others,
                _id: id,
                price: {
                    $numberDecimal: `${price}`
                }
            }));
        }
        else
            dispatch(failSave(error));
    };
}

export * from './types';
