import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
      <div className="relative aspect-square">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors">
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg md:text-xl font-bold text-gray-800">
            {product.price}
          </span>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;