import { useCallback } from 'react';

import { Product } from '../store';
import { useDispatch } from 'react-redux';
import { editProduct } from '../actions';

export default function useEdit (product: Product) {
    const dispatch = useDispatch();

    return useCallback(
        () => dispatch(editProduct(product)),
        [dispatch, product],
    );
}
