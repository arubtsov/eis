import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styles from './add-product.module.css';
import { createProduct } from '../actions';

export default function AddProductBar () {
    const dispatch = useDispatch();
    const onButtonClick = useCallback(
        () => dispatch(createProduct()),
        [dispatch]
    );

    return (
        <div className={styles.add_product}>
            <button className={styles.add_product__button}
                onClick={onButtonClick}>
                Add Product
            </button>
            <div className={styles.add_product__drop_area}>
                or drop your product here...
            </div>
        </div>
    );
};
