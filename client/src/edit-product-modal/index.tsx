import React from 'react';
import Modal, { Styles } from 'react-modal';
import { useSelector } from 'react-redux';

import { Product } from '../store';
import { ProductsState } from '../reducers';
import NewProductForm from './form';
import useCancel from './cancel-editing-hook';

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

export default function EditProductModal () {
    const editedProduct = useSelector<ProductsState, Product | null>(state => state.editedProduct);
    const closeModal = useCancel();

    return (
        <Modal isOpen={!!editedProduct} style={customModalStyles} onRequestClose={closeModal}>
            {editedProduct &&
                <NewProductForm product={editedProduct}/>
            }
        </Modal>
    );
};
