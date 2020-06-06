import React from 'react';
import useProducts from './use-products-hook';
import ProductItem from './product-item';
import styles from './products.module.css';

function ProductList () {
    const { products } = useProducts();

    return (
        <div className={styles.products}>
            {products.map(item => <ProductItem key={item.id} {...item}/>)}
        </div>
    );
}

export default ProductList;
