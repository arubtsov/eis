import { useState, useEffect } from 'react';
import { Product } from '../store';

function useProducts () {
    const [error, setError] = useState('');
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('/products')
            .then(async response => {
                const result = await response.json();

                if (response.ok)
                    setProducts(result.data);
                else
                    setError(result.error);
            })
            .catch(error => setError(error.toString()));
    }, []);

    return { products, error };
}

export default useProducts;
