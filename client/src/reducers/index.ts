import { Product } from '../store';
import {
    ProductsActionTypes,
    REQUEST_PRODUCTS,
    FETCH_SUCCESS,
    FETCH_FAIL,
    FILTER_PRODUCTS
} from '../actions';

export interface ProductsState {
    isLoading: boolean;
    fetchError: string;
    products: Product[];
    filteredProducts: Product[];
}

const defaultState: ProductsState = {
    isLoading: false,
    fetchError: '',
    products: [],
    filteredProducts: []
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
                products: action.products,
                filteredProducts: action.products
            };
        case FETCH_FAIL:
            return {
                products: [],
                filteredProducts: [],
                fetchError: action.error,
                isLoading: false
            };
        case FILTER_PRODUCTS:
            return {
                ...state,
                filteredProducts: state.products.filter(
                    item => item.name.toLowerCase().includes(action.namePart.trim().toLowerCase())
                )
            };
        default:
            return state
    }
}

export default products
