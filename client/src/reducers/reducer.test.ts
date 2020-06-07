import productsReducer, { defaultState } from './index';
import { createProduct } from '../actions';

describe('createProduct', () => {
    test('name should contain serial number', () => {
        const state = { ...defaultState };
        const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });

        state.products.length = 41;

        const newState = productsReducer(state, createProduct(file));

        expect(newState.editedProduct?.name).toBe(`Product XYZ${state.products.length + 1}`);
    });
});
