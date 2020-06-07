import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddProductBar from './index';
import { CREATE_PRODUCT } from '../actions/types';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => {
    return {
        useDispatch: () => mockDispatch
    }
});

describe('AddProductBar', () => {
    afterEach(() => {
        mockDispatch.mockClear();
    });

    test('should not dispatch action if no files were selected', () => {
        const { container } = render(<AddProductBar />);
        const input = container.querySelector('input') as HTMLInputElement;

        expect(input).toBeInTheDocument();

        fireEvent.change(input, { target: { files: [] } });

        expect(mockDispatch).not.toBeCalled();
    });

    test('should dispatch createProduct action if file is selected', () => {
        const { container } = render(<AddProductBar />);
        const input = container.querySelector('input') as HTMLInputElement;
        const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });

        fireEvent.change(input, { target: { files: [file] } });

        expect(mockDispatch).toBeCalled();
        expect(mockDispatch).toHaveBeenCalledWith(
            { type: CREATE_PRODUCT, imageItem: file }
        );
    });
});
