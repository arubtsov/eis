import React, { useState, useCallback, ChangeEventHandler } from 'react';
import { useDispatch } from 'react-redux';

import { Product } from '../store';
import useCancel from './cancel-editing-hook';
import { saveProduct, updateProduct } from '../actions';

import styles from './modal.module.css';

interface FormProps {
    product: Product;
}

export default function NewProductForm ({ product }: FormProps) {
    const { _id } = product;
    const dispatch = useDispatch();

    const [name, setName] = useState(product.name);
    const onNameChange: ChangeEventHandler<HTMLInputElement> =
        event => setName(event.target.value);

    const [quantity, setQuantity] = useState(product.quantity);
    const onQuantityChange: ChangeEventHandler<HTMLInputElement> =
        event => setQuantity(parseInt(event.target.value, 10));

    const [price, setPrice] = useState(parseFloat(product.price.$numberDecimal));
    const onPriceChange: ChangeEventHandler<HTMLInputElement> =
        event => setPrice(parseFloat(event.target.value));

    const [colour, setColour] = useState(product.colour);
    const onColourChange: ChangeEventHandler<HTMLInputElement> =
        event => setColour(event.target.value);

    const onSave = useCallback(
        _id ?
            () => dispatch(updateProduct({ _id, name, quantity, colour, price })) :
            () => dispatch(saveProduct({ name, quantity, colour, price })),
        [dispatch, name, quantity, colour, price],
    );

    const cancelEditing = useCancel();

    return (
        <form className={styles.modal__form}>
            <input type="text" value={name} onChange={onNameChange} />
            <input type="number" value={quantity} onChange={onQuantityChange} min={0} />
            <input type="number" value={price} onChange={onPriceChange} min={0} step="0.01" />
            <input type="text" value={colour} onChange={onColourChange} />

            <div className={styles.button_group}>
                <button type="button" onClick={onSave}>Save</button>
                <button type="button" onClick={cancelEditing}>Cancel</button>
            </div>
        </form>
    );
};
