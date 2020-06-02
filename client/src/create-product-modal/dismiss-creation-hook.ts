import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { cancelCreation } from '../actions';

export default function useDismiss () {
    const dispatch = useDispatch();

    return useCallback(() => {
        dispatch(cancelCreation());
    }, [dispatch]);
}
