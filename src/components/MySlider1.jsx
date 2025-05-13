// MySlider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MySlider1.css';

const MySlider = ({ slides, customWidth = 'default' }) => {
 
  if (!slides || !Array.isArray(slides)) {
    return <div>No slides available</div>;
  }

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className={`image-slider ${customWidth}`}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.description || `Slide ${index + 1}`} />
           <p>{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;