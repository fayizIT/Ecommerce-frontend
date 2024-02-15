// import React from 'react';
import { Carousel } from "@material-tailwind/react";

const CarouselComponent = () => {
  return (
    <Carousel className="rounded-sm overflow-hidden">
      <img
        src={'/banner.png'}
        alt="image 1"
        className="w-full h-auto md:h-[500px] object-cover"
      />
      <img
        src={'/s24.jpg'}
        alt="image 2"
        className="w-full h-auto md:h-[500px] object-cover"
      />
      <img
        src={'/iphone 15.jpg'}
        alt="image 3"
        className="w-full h-auto md:h-[500px] object-cover"
      />
    </Carousel>
  );
};

export default CarouselComponent;
