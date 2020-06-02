import { ThunkDispatch } from 'redux-thunk';

import {
    ProductsActionTypes,
    REQUEST_PRODUCTS,
    FETCH_SUCCESS,
    FETCH_FAIL,
    FILTER_PRODUCTS,
    CREATE_PRODUCT,
    CANCEL_CREATION
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

export * from './types';
