import React, { useState, useCallback, DragEvent, CSSProperties, DragEventHandler } from 'react';
import { useDispatch } from 'react-redux';

import styles from './add-product.module.css';
import { createProduct } from '../actions';

const getStyles = (dropAllowed: boolean, dragging = false): CSSProperties => {
    return {
        borderColor: dropAllowed ? 'purple' : 'transparent',
        cursor: dropAllowed || !dragging ? 'default' : 'no-drop'
    };
};

const isImageRegexp = /image\/.+/;

export default function DropArea () {
    const dispatch = useDispatch();
    const [dragging, setDragging] = useState(false);
    const [dropAllowed, setDropAllowed] = useState(false);
    const onImageDrop = useCallback(
        (event: DragEvent) => {
            const draggedItem = event.dataTransfer.items[0];

            if (dropAllowed) dispatch(createProduct(draggedItem.getAsFile() as File));
        },
        [dispatch, dropAllowed]
    );

    const onDragOver: DragEventHandler = event => {
        const { dataTransfer: { items } } = event;
        const newDropAllowed = items.length === 1 && isImageRegexp.test(items[0].type);

        if (!dragging) setDragging(true);
        if (newDropAllowed) event.dataTransfer.dropEffect = 'copy';

        setDropAllowed(newDropAllowed);
    };

    const onDragLeave = () => {
        setDropAllowed(false);
        setDragging(false);
    };

    return (
        <div className={styles.add_product__drop_area} style={getStyles(dropAllowed, dragging)}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onImageDrop}>
            or drop your product here...
        </div>
    );
};
