import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { cancelEditing } from '../actions';

export default function useDismiss () {
    const dispatch = useDispatch();

    return useCallback(() => {
        dispatch(cancelEditing());
    }, [dispatch]);
}
