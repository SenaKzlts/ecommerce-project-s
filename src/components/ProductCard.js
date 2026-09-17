import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={product.image} alt={product.name} className="w-full" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-xl font-bold">{product.price}</p>
    </div>
  );
};

export default ProductCard;