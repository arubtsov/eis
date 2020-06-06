import React, { useCallback, useRef, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import styles from './add-product.module.css';
import DropImageArea from './drop-area';
import { createProduct } from '../actions';

export default function AddProductBar () {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const onButtonClick = useCallback(
        () => {
            if (inputRef.current) inputRef.current.click();
        }, []
    );

    const onFileSelect = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { current: input } = inputRef;

            if (input && input.files && input.files.length) {
                dispatch(createProduct(input.files[0]));
                input.value = '';
            }
        },
        [dispatch]
    );

    return (
        <div className={styles.add_product}>
            <button className={styles.add_product__button}
                onClick={onButtonClick}>
                Add Product
            </button>
            <input type="file" accept="image/*" ref={inputRef} className={styles.add_product__input}
                onChange={onFileSelect} />
            <DropImageArea />
        </div>
    );
};
