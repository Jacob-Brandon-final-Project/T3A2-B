import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
    return (
        <Link to={`/shop/product/${product._id}`} className="felx felx-col items-center m-4 p-4 bg-white rounded-lg shadow-md">
            <div className="product-card">
                <img src={product.image} alt={product.name} className="w-full max-h-64 object-cover mb-4" />
                <h2 className="text-xl font-bold mb-2 text-black">{product.name}</h2>
                <p className="text-lg font-semibold mb-4 text-black">${product.price}</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Add To Cart</button>
            </div>
        </Link>
    );
}

export default ProductCard;