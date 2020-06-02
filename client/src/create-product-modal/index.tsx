import React from 'react';
import Modal, { Styles } from 'react-modal';
import { useSelector } from 'react-redux';

import { Product } from '../store';
import { ProductsState } from '../reducers';
import NewProductForm from './form';
import useDismiss from './dismiss-creation-hook';

const customModalStyles: Styles = {
    overlay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    content: {
        position: 'static'
    }
};

export default function CreateProductModal () {
    const newProduct = useSelector<ProductsState, Product | null>(state => state.newProduct);
    const closeModal = useDismiss();

    return (
        <Modal isOpen={!!newProduct} style={customModalStyles} onRequestClose={closeModal}>
            {newProduct &&
                <NewProductForm product={newProduct}/>
            }
        </Modal>
    );
};
