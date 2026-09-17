import React from 'react';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const products = [
    { name: 'Product 1', image: 'product1.jpg', description: 'Description 1', price: '$10' },
    { name: 'Product 2', image: 'product2.jpg', description: 'Description 2', price: '$20' },
    // Add more products here
  ];

  return (
    <div className="container mx-auto">
      <Header title="Home" />
      <PageContent />
      <Footer />
      <div className="grid grid-cols-2 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;