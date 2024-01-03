import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/products/${id}`);
                console.log('Response data:', response.data);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product', error);
                console.error('error details:', error.message, error.response);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not Found</div>;
    }

    console.log('Product:', product);

    return (
        <div className="flex">
           {product.image && <img src={product.image} alt={product.name} className="w-1/2 h-auto object-cover" />}
            <div className="flex flex-col justify center items-start ml-4">
                <h2 className="text-2x1 font-bold mb-2">{product.name}</h2>
                <p className="text-x1 font-semibold mb-b">${product.price}</p>
                <p className="text-lg mb-4">{product.description}</p>
                <button className="px-4 py-2 bg-blue-500 hove:bg-blue-700 text-white rounded-lg">Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductDetails;