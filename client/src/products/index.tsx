import React from 'react';
import useProducts from './use-products-hook';
import ProductItem from './product-item';

function ProductList () {
    const { products } = useProducts();

    return (
        <div>
            {products.map(item => <ProductItem key={item._id} {...item}/>)}
        </div>
    );
}

export default ProductList;
