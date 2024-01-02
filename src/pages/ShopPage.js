import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ShopPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async (category) => {
    try {
      const response = await axios.get(`http://localhost:5000/AllItems?category=${category}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products', error)
    }
  };

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
      
    </div>
  );
};

export default ShopPage