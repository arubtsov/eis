import React from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import { Product } from '../store';
import { ProductsState } from '../reducers';
import NewProductForm from './form';

export default function CreateProductModal () {
    const newProduct = useSelector<ProductsState, Product | null>(state => state.newProduct);

    return (
        <Modal isOpen={!!newProduct}>
            <NewProductForm product={newProduct}/>
        </Modal>
    );
};
