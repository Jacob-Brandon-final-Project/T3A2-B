import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductCard from '../component/ProductCard';


const ShopPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async (category) => {
    try {
      const response = await axios.get(`https://ashtonmernapp1-0f2d2265be28.herokuapp.com//products/AllItems?category=${category}`);
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products', error)
    }
  };

  useEffect(() => {
    fetchProducts('All');
  }, []);

  const handleCategoryClick = (category) => {
    fetchProducts(category);
  }; 

  return (
    <div className="flex min-h-screen bg-blue-100 text-white">
      <aside className="w-64 p-4 bg-black">
        <h2 className="text-xl font-bold mb-4">Filter By:</h2>
        <ul>
          <li onClick={() => handleCategoryClick('All')}>ALL</li>
          <li onClick={() => handleCategoryClick('NBA')}>NBA</li>
          <li onClick={() => handleCategoryClick('Magic')}>Magic The Gathering</li>
          <li onClick={() => handleCategoryClick('DBZ')}>Dragon Ball Z</li>
        </ul>
      </aside>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
        <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage