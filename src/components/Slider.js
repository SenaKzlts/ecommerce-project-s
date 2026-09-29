import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Product Slider</h2>
      <Slider {...settings}>
        <div>
          <img src="/path/to/product1.jpg" alt="Product 1" />
        </div>
        <div>
          <img src="/path/to/product2.jpg" alt="Product 2" />
        </div>
        <div>
          <img src="/path/to/product3.jpg" alt="Product 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ProductSlider;