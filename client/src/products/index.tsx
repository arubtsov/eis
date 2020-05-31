import React from 'react';
import useProducts from './use-products-hook';
import ProductItem from './product-item';

function ProductList () {
    const { products } = useProducts();

    return (
        <div>
            {products.map(item => <ProductItem {...item}/>)}
        </div>
    );
}

export default ProductList;
