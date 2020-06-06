import React from 'react';
import styles from './image.module.css';

interface ImageProps {
    imageUrl: string;
}

export default function ProductImage ({ imageUrl }: ImageProps) {
    return <img src={imageUrl} alt="" className={styles.image} />;
}
