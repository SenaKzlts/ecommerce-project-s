import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import PageContent from '../layout/PageContent';
import Footer from '../layout/Footer';
import ProductSlider from '../components/ProductSlider';

const HomePage = () => {
  return (
    <div>
      <Header />
      <PageContent>
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Home Page</h1>
          <ProductSlider />
          <Link to="/shop">Shop Page</Link>
        </div>
      </PageContent>
      <Footer />
    </div>
  );
};

export default HomePage;