import React, { useEffect, useState } from 'react';
import { getCarProducts } from '@meli-store/api';

export const ProductsTable = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getCarProducts());
    }, []);

    return (
        <section className="container mt-5">
            <ul class="list-group">
                {
                    products.map((product) => (
                        <li class="list-group-item" key={product.id}>{product.title}</li>
                    ))
                }
            </ul>
        </section>
    )
}
