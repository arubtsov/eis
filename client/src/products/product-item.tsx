import React from 'react';
import { Product } from './use-products-hook';

function ProductItem (props: Product) {
    const { name, price, quantity, colour } = props;

    return (
        <div className="">
            <h3>{name}</h3>
            <div>{price.$numberDecimal}</div>
            <div>{quantity}</div>
            <div>{colour}</div>
        </div>
    )
}

export default ProductItem;
