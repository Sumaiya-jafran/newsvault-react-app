import React from 'react';
import  { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import {Z} from '../../../assets/brands/images/Z.png';
// import {logo1} from '../../../assets/brands/images/logo1.png';
// import {logo2} from '../../../assets/brands/images/logo2.png';

const BrandCarousel = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <div>
           <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=''
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='{logo1}'
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='{logo2}'
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel> 
        </div>
    );
};

export default BrandCarousel;