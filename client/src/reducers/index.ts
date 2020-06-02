import { Product } from '../store';
import {
    ProductsActionTypes,
    REQUEST_PRODUCTS,
    FETCH_SUCCESS,
    FETCH_FAIL,
    FILTER_PRODUCTS,
    CREATE_PRODUCT,
    CANCEL_CREATION
} from '../actions';

export interface ProductsState {
    isLoading: boolean;
    fetchError: string;
    products: Product[];
    filteredProducts: Product[];
    newProduct: Product | null;
}

const defaultState: ProductsState = {
    isLoading: false,
    fetchError: '',
    products: [],
    filteredProducts: [],
    newProduct: null
};

const defaultProduct: Product = {
    _id: '',
    name: "Product XYZ",
    quantity: 1,
    price: {
        $numberDecimal: '1'
    },
    colour: 'white'
};

const products = (state = defaultState, action: ProductsActionTypes): ProductsState => {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                fetchError: '',
                isLoading: false,
                products: action.products,
                filteredProducts: action.products
            };
        case FETCH_FAIL:
            return {
                ...state,
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
        case CREATE_PRODUCT:
            return {
                ...state,
                newProduct: { ...defaultProduct }
            };
        case CANCEL_CREATION:
            return {
                ...state,
                newProduct: null
            };
        default:
            return state
    }
}

export default products
