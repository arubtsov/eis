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

const imageTypes = ['image/png', 'image/bmp', 'image/jpg', 'image/jpeg'];

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

    const onDrag: DragEventHandler = event => {
        const { dataTransfer: { items } } = event;

        event.dataTransfer.dropEffect = 'copy';

        if (!dragging) setDragging(true);
        setDropAllowed(items.length === 1 && imageTypes.includes(items[0].type));
    };

    const onDragLeave = () => {
        setDropAllowed(false);
        setDragging(false);
    };

    return (
        <div className={styles.add_product__drop_area} style={getStyles(dropAllowed, dragging)}
            onDragEnter={onDrag}
            onDragOver={onDrag}
            onDragLeave={onDragLeave}
            onDrop={onImageDrop}>
            or drop your product here...
        </div>
    );
};
