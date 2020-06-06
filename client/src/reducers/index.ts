import { Product } from '../store';
import {
    ProductsActionTypes,
    REQUEST_PRODUCTS,
    FETCH_SUCCESS,
    FETCH_FAIL,
    FILTER_PRODUCTS,
    CREATE_PRODUCT,
    CANCEL_EDITING,
    SAVE_SUCCESS,
    SAVE_FAIL,
    DELETE_SUCCESS,
    EDIT_PRODUCT,
    UPDATE_SUCCESS
} from '../actions';

export interface ProductsState {
    isLoading: boolean;
    requestError: string;
    products: Product[];
    filteredProducts: Product[];
    editedProduct: Product | null;
}

const defaultState: ProductsState = {
    isLoading: false,
    requestError: '',
    products: [],
    filteredProducts: [],
    editedProduct: null
};

const defaultProduct = (imageItem?: File): Product => ({
    _id: '',
    name: "Product XYZ",
    quantity: 1,
    price: {
        $numberDecimal: '1'
    },
    colour: 'white',
    imageItem: imageItem as File,
    imageUrl: ''
});

function updateCollection (collection: Product[], product: Product) {
    return collection.reduce((newCollection, current) => {
        newCollection.push(current._id === product._id ? product : current);

        return newCollection;
    }, [] as Product[]);
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
                ...state,
                requestError: '',
                isLoading: false,
                products: action.products,
                filteredProducts: action.products
            };
        case FETCH_FAIL:
            return {
                ...state,
                products: [],
                filteredProducts: [],
                requestError: action.error,
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
                editedProduct: defaultProduct(action.imageItem)
            };
        case CANCEL_EDITING:
            return {
                ...state,
                requestError: '',
                editedProduct: null
            };
        case SAVE_SUCCESS:
            return {
                ...state,
                editedProduct: null,
                requestError: '',
                products: [...state.products, action.createdProduct],
                filteredProducts: [...state.filteredProducts, action.createdProduct]
            }
        case SAVE_FAIL:
            return {
                ...state,
                requestError: action.error
            };
        case DELETE_SUCCESS:
            const isNotDeleted = (product: Product) => product._id !== action.productId;

            return {
                ...state,
                products: state.products.filter(isNotDeleted),
                filteredProducts: state.filteredProducts.filter(isNotDeleted)
            };
        case EDIT_PRODUCT:
            return {
                ...state,
                editedProduct: { ...action.product }
            };
        case UPDATE_SUCCESS:
            return {
                ...state,
                editedProduct: null,
                products: updateCollection(state.products, action.product),
                filteredProducts: updateCollection(state.filteredProducts, action.product)
            };
        default:
            return state
    }
}

export default products
