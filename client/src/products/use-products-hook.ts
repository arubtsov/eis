import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Product } from '../store';
import { ProductsState } from '../reducers';
import { fetchProducts } from '../actions';

function useProducts () {
    const dispatch = useDispatch();
    const products = useSelector<ProductsState, Product[]>(state => state.filteredProducts);
    const error = useSelector<ProductsState, string>(state => state.requestError);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return { products, error };
}

export default useProducts;
