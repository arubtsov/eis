import React from 'react';
import { Product } from '../store';
import styles from './products.module.css';

function ProductItem (props: Product) {
    const { name, price, quantity, colour } = props;

    return (
        <div className={styles.item}>
            <h3 className={styles.name}>{name}</h3>
            <div>Price: {price.$numberDecimal}</div>
            <div>{quantity ? `Quantity: ${quantity}` : 'Out of order'}</div>
            <div>Colour: {colour}</div>
        </div>
    )
}

export default ProductItem;
