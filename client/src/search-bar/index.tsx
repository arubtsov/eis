import React, { useCallback, ChangeEventHandler } from 'react';
import { useDispatch } from 'react-redux';

import { filterProducts } from '../actions';

export default function SearchBar () {
    const dispatch = useDispatch();

    const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(event => {
        dispatch(filterProducts(event.target.value));
    }, [dispatch])

    return (
        <input type="text" onChange={onChange} />
    );
}
