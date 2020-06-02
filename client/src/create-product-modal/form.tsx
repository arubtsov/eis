import React, { useState, ChangeEventHandler } from 'react';

import { Product } from '../store';
import useDismiss from './dismiss-creation-hook';

import styles from './modal.module.css';

interface FormProps {
    product: Product;
}

export default function NewProductForm ({ product }: FormProps) {
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

    const onCancel = useDismiss();

    return (
        <form className={styles.modal__form}>
            <input type="text" value={name} onChange={onNameChange} />
            <input type="number" value={quantity} onChange={onQuantityChange} min={0} />
            <input type="number" value={price} onChange={onPriceChange} min={0} step="0.01" />
            <input type="text" value={colour} onChange={onColourChange} />
            <div className={styles.button_group}>
                <button type="button" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
};
