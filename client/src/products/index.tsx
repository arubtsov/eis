import React from 'react';
import useProducts from './use-products-hook';

function ProductList () {
    const { products } = useProducts();

    return (
        <div>
            {JSON.stringify(products)}
        </div>
    );
}

export default ProductList;
