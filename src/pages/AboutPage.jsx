import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      {/* About Header - Mobile First */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Learn more about our company and mission
          </p>
        </div>
      </section>

      {/* Our Story - Mobile First */}
      <section className="p-6 md:p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Founded in 2024, My Ecommerce started with a simple mission: to make quality products accessible to everyone. What began as a small online store has grown into a trusted platform serving customers worldwide.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We believe in providing exceptional customer service, high-quality products, and a seamless shopping experience. Our team works tirelessly to ensure that every customer finds exactly what they're looking for.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, we're proud to offer a wide range of products across multiple categories, all backed by our commitment to quality and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Our Mission - Mobile First */}
      <section className="bg-gray-50 p-6 md:p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                We only offer products that meet our strict quality standards
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="font-semibold text-gray-800 mb-2">Customer Focus</h3>
              <p className="text-gray-600 text-sm">
                Our customers are at the heart of everything we do
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-semibold text-gray-800 mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                We're committed to sustainable and ethical business practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Mobile First */}
      <section className="p-6 md:p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Our Values
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Integrity</h3>
                <p className="text-gray-600 text-sm">
                  We conduct business with honesty and transparency
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  We constantly seek new ways to improve and evolve
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  We believe in the power of teamwork and partnership
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We strive for excellence in everything we do
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile First */}
      <section className="bg-blue-600 text-white p-6 md:p-8 lg:p-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Journey
          </h2>
          <p className="mb-6 opacity-90">
            Be part of our growing community and discover amazing products
          </p>
          <Link 
            to="/shop"
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
