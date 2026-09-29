import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$99.99', image: 'https://via.placeholder.com/300x300?text=Headphones', description: 'High-quality wireless headphones' },
    { id: 2, name: 'Smart Watch', price: '$149.99', image: 'https://via.placeholder.com/300x300?text=Smart+Watch', description: 'Feature-rich smart watch' },
    { id: 3, name: 'Laptop Bag', price: '$49.99', image: 'https://via.placeholder.com/300x300?text=Laptop+Bag', description: 'Durable laptop bag' },
    { id: 4, name: 'USB-C Hub', price: '$29.99', image: 'https://via.placeholder.com/300x300?text=USB-C+Hub', description: 'Multi-port USB-C hub' },
    { id: 5, name: 'Wireless Mouse', price: '$39.99', image: 'https://via.placeholder.com/300x300?text=Wireless+Mouse', description: 'Ergonomic wireless mouse' },
    { id: 6, name: 'Phone Stand', price: '$19.99', image: 'https://via.placeholder.com/300x300?text=Phone+Stand', description: 'Adjustable phone stand' },
    { id: 7, name: 'Bluetooth Speaker', price: '$79.99', image: 'https://via.placeholder.com/300x300?text=Speaker', description: 'Portable bluetooth speaker' },
    { id: 8, name: 'Webcam HD', price: '$59.99', image: 'https://via.placeholder.com/300x300?text=Webcam', description: 'HD webcam for video calls' },
  ];

  return (
    <div className="flex flex-col">
      {/* Shop Header - Mobile First */}
      <section className="bg-gray-50 p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
            Shop
          </h1>
          <p className="text-gray-600 mb-4">Browse our collection of products</p>
          
          {/* Breadcrumb - Mobile First */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-800">Shop</span>
          </nav>

          {/* Filters - Mobile First */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                All Products
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                Electronics
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                Accessories
              </button>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Sort by:</label>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Mobile First */}
      <section className="p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Pagination - Mobile First */}
      <section className="p-4 md:p-6 lg:p-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-2">
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;