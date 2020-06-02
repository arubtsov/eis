import React from 'react';

import styles from './products.module.css';
import { Product } from '../store';
import useDelete from './use-delete-hook';

function ProductItem (props: Product) {
    const { _id, name, price, quantity, colour } = props;
    const deleteProduct = useDelete(_id);

    return (
        <div className={styles.item}>
            <h3 className={styles.name}>{name}</h3>
            <div>Price: {price.$numberDecimal}</div>
            <div>{quantity ? `Quantity: ${quantity}` : 'Out of order'}</div>
            <div>Colour: {colour}</div>

            <button onClick={deleteProduct}>X</button>
        </div>
    )
}

export default ProductItem;
