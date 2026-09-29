import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Ecommerce</h1>
      <p className="mb-4">Discover amazing products at great prices</p>
      <Link 
        to="/shop" 
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default HomePage;