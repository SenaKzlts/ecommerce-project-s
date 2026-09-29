import React from 'react';
import { Link } from 'react-router-dom';
import ProductSlider from '../components/Slider.jsx';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Mobile First */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Welcome to My Ecommerce
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Discover amazing products at great prices
          </p>
          <Link 
            to="/shop" 
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="p-6 md:p-8 lg:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Featured Products
        </h2>
        <ProductSlider />
      </section>

      {/* Categories Section - Mobile First */}
      <section className="bg-gray-50 p-6 md:p-8 lg:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {['Electronics', 'Clothing', 'Home', 'Sports'].map((category) => (
            <div 
              key={category}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center"
            >
              <h3 className="font-semibold text-gray-800">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Mobile First */}
      <section className="bg-blue-600 text-white p-6 md:p-8 lg:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Get 20% Off Your First Order
        </h2>
        <p className="mb-6 opacity-90">
          Sign up for our newsletter and get exclusive deals
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg text-gray-800 flex-1"
          />
          <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;