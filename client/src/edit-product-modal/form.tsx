import React, { useState, useCallback, useEffect, ChangeEventHandler } from 'react';
import { useDispatch } from 'react-redux';

import ProductImage from '../product-image';
import { Product } from '../store';
import useCancel from './cancel-editing-hook';
import { saveProduct, updateProduct } from '../actions';

import styles from './modal.module.css';

interface FormProps {
    product: Product;
}

export default function ProductForm ({ product }: FormProps) {
    const { id, imageItem, imageUrl } = product;
    const dispatch = useDispatch();

    const [imageSrc, setSrc] = useState(imageUrl);

    const [name, setName] = useState(product.name);
    const onNameChange: ChangeEventHandler<HTMLInputElement> =
        event => setName(event.target.value);

    const [quantity, setQuantity] = useState(product.quantity);
    const onQuantityChange: ChangeEventHandler<HTMLInputElement> =
        event => setQuantity(parseInt(event.target.value, 10));

    const [price, setPrice] = useState(product.price);
    const onPriceChange: ChangeEventHandler<HTMLInputElement> =
        event => setPrice(parseFloat(event.target.value));

    const [colour, setColour] = useState(product.colour);
    const onColourChange: ChangeEventHandler<HTMLInputElement> =
        event => setColour(event.target.value);

    const saveChanges = useCallback(
        id ?
            () => dispatch(updateProduct({ id, name, quantity, colour, price, imageItem, imageUrl })) :
            () => dispatch(saveProduct({ id, name, quantity, colour, price, imageItem, imageUrl })),
        [dispatch, name, quantity, colour, price],
    );

    const cancelEditing = useCancel();

    useEffect(() => {
        if (!id) {
            const reader = new FileReader();

            reader.onload = () => setSrc(reader.result as string);
            reader.readAsDataURL(imageItem);
        }
    }, [imageItem, id]);

    return (
        <form className={styles.modal__form} onSubmit={saveChanges}>
            <ProductImage src={imageSrc} />
            <input type="text" value={name} onChange={onNameChange} autoFocus/>
            <input type="number" value={quantity} onChange={onQuantityChange} min={0} />
            <input type="number" value={price} onChange={onPriceChange} min={0} step="0.01" />
            <input type="text" value={colour} onChange={onColourChange} />

            <div className={styles.button_group}>
                <button type="submit">Save</button>
                <button type="button" onClick={cancelEditing}>Cancel</button>
            </div>
        </form>
    );
};
