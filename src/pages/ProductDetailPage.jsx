import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Truck, Shield, RotateCcw } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();
  
  // Mock product data - in real app, this would come from API
  const product = {
    id: id,
    name: 'Wireless Headphones',
    price: '$99.99',
    originalPrice: '$149.99',
    image: 'https://via.placeholder.com/600x600?text=Wireless+Headphones',
    description: 'Experience premium sound quality with our wireless headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design for extended listening sessions.',
    rating: 4.5,
    reviews: 128,
    inStock: true,
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0 connectivity',
      'Comfortable over-ear design',
      'Built-in microphone',
      'Quick charge: 10 min = 5 hours'
    ],
    colors: ['Black', 'White', 'Blue'],
    sizes: ['One Size']
  };

  return (
    <div className="flex flex-col">
      {/* Breadcrumb - Mobile First */}
      <nav className="bg-gray-50 p-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-blue-600 transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-gray-800">{product.name}</span>
          </div>
        </div>
      </nav>

      {/* Product Detail - Mobile First */}
      <section className="p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images - Mobile First */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all">
                    <img 
                      src={`https://via.placeholder.com/150x150?text=View+${i}`}
                      alt={`View ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info - Mobile First */}
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              
              {/* Rating - Mobile First */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-4 h-4 md:w-5 md:h-5 ${
                        star <= Math.floor(product.rating) 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price - Mobile First */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl md:text-4xl font-bold text-gray-800">
                    {product.price}
                  </span>
                  <span className="text-xl md:text-2xl text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded">
                    33% OFF
                  </span>
                </div>
                <p className="text-sm text-green-600 mt-1">
                  {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                </p>
              </div>

              {/* Description - Mobile First */}
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                {product.description}
              </p>

              {/* Features - Mobile First */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                      <span className="text-blue-600 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color Selection - Mobile First */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Color:</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button 
                      key={color}
                      className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-colors text-sm"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity - Mobile First */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Quantity:</h3>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-xl">
                    -
                  </button>
                  <span className="text-lg font-semibold w-12 text-center">1</span>
                  <button className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-xl">
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons - Mobile First */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Wishlist
                </button>
              </div>

              {/* Benefits - Mobile First */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <Truck className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-sm text-gray-800">Free Shipping</p>
                    <p className="text-xs text-gray-600">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-sm text-gray-800">2 Year Warranty</p>
                    <p className="text-xs text-gray-600">Full coverage</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-sm text-gray-800">30 Day Returns</p>
                    <p className="text-xs text-gray-600">Hassle-free</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products - Mobile First */}
      <section className="bg-gray-50 p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-square bg-gray-100">
                  <img 
                    src={`https://via.placeholder.com/300x300?text=Related+${i}`}
                    alt={`Related ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm">Related Product {i}</h3>
                  <p className="text-lg font-bold text-gray-800">${(50 + i * 10).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
