import React from 'react';
import styles from './image.module.css';

interface ImageProps {
    src: string;
}

export default function ProductImage ({ src }: ImageProps) {
    return <img src={src} alt="" className={styles.image} />;
}
