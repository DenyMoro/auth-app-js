import React from 'react';
import { useGetProductsQuery } from '../app/api';

export default function Products() {
    const { data, error, isLoading } = useGetProductsQuery();

    if (isLoading) return <div>Loading products...</div>;
    if (error) return <div>Error loading products</div>;

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {data.products.map((product) => (
                    <li key={product.id}>
                        <strong>{product.title}</strong> — ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
