import { useCallback, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../actions';

export default function useDelete (productId: string) {
    const dispatch = useDispatch();

    return useCallback(
        (event: MouseEvent) => {
            event.stopPropagation();
            dispatch(deleteProduct(productId));
        },
        [dispatch, productId],
    );
}
