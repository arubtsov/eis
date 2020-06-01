import { Product } from '../store';
import {
    ProductsActionTypes,
    REQUEST_PRODUCTS,
    FETCH_SUCCESS,
    FETCH_FAIL
} from '../actions';

export interface ProductsState {
    isLoading: boolean;
    fetchError: string;
    products: Product[];
}

const defaultState: ProductsState = {
    isLoading: false,
    fetchError: '',
    products: []
}

const products = (state = defaultState, action: ProductsActionTypes): ProductsState => {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SUCCESS:
            return {
                fetchError: '',
                isLoading: false,
                products: action.products
            };
        case FETCH_FAIL:
            return {
                products: [],
                fetchError: action.error,
                isLoading: false
            };
        default:
            return state
    }
}

export default products
