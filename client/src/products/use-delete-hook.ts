import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../actions';

export default function useDelete (productId: string) {
    const dispatch = useDispatch();

    return useCallback(
        () => dispatch(deleteProduct(productId)),
        [dispatch, productId],
    );
}
