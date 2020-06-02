import React, { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';

import { Product } from '../store';
import { cancelCreation } from '../actions';

import styles from './modal.module.css';

interface FormProps {
    product: Product | null;
}

export default function NewProductForm ({ product }: FormProps) {
    const dispatch = useDispatch();

    const onCancel: MouseEventHandler<HTMLButtonElement> =
        () => dispatch(cancelCreation());

    return (
        <form className={styles.form}>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};
