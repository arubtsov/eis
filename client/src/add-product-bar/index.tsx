import React from 'react';

import styles from './add-product.module.css';

export default function AddProductBar () {
    return (
        <div className={styles.add_product}>
            <button className={styles.add_product__button}>
                Add Product
            </button>
            <div className={styles.add_product__drop_area}>
                or drop your product here...
            </div>
        </div>
    );
};
