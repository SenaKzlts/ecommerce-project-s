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
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const slides = [
    {
      id: 1,
      title: 'Summer Collection',
      subtitle: 'Up to 50% Off',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      title: 'New Arrivals',
      subtitle: 'Free Shipping',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Best Sellers',
      subtitle: 'Top Rated Products',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-2">
            <div className={`bg-gradient-to-r ${slide.color} rounded-lg p-8 md:p-12 text-white h-48 md:h-64 flex flex-col justify-center items-center`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
              <p className="text-lg md:text-xl opacity-90">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;