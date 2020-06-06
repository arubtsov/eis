import React, { useState, useCallback, DragEvent, CSSProperties, DragEventHandler } from 'react';
import { useDispatch } from 'react-redux';

import styles from './add-product.module.css';
import { createProduct } from '../actions';

const getStyles = (dropAllowed: boolean): CSSProperties => {
    return {
        borderColor: dropAllowed ? 'purple' : 'transparent'
    };
};

const imageTypes = ['image/png', 'image/bmp', 'image/jpg', 'image/jpeg'];

export default function DropArea () {
    const dispatch = useDispatch();
    const [dropAllowed, setDropAllowed] = useState(false);
    const onImageDrop = useCallback(
        (event: DragEvent) => dispatch(createProduct(event.dataTransfer.items[0].getAsFile() as File)),
        [dispatch]
    );

    const onDrag: DragEventHandler = event => {
        const { dataTransfer: { items } } = event;

        console.log(items.length === 1 && imageTypes.includes(items[0].type));
        console.log(items[0]);

        setDropAllowed(items.length === 1 && imageTypes.includes(items[0].type));
    };

    const onDragLeave = () => setDropAllowed(false);

    return (
        <div className={styles.add_product__drop_area} style={getStyles(dropAllowed)}
            onDragEnter={onDrag}
            onDragOver={onDrag}
            onDragLeave={onDragLeave}
            onDrop={onImageDrop}>
            or drop your product here...
        </div>
    );
};
