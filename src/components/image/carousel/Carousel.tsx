import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "./slick.css";
import "./slick-themes.css";

interface CarouselProps {
  sector: string,
}

const Carousel: React.FC<CarouselProps> = ({ sector }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // Tiempo en milisegundos entre cada slide
  };

   //FUNCTION MODAL///////////////////////////////////////////////////////////

   const [isModalOpen, setIsModalOpen] = useState(false);
  
   //FUNCTION MODAL///////////////////////////////////////////////////////////

   return (
    <>
    <Slider {...settings} className="w-full aspect-video cursor-pointer">
      {Array.from({ length: 5 }).map((_, index) => (
        sector ? (
          <Image
            key={index}
            src={`/${sector}/img${index + 1}.png`}          
            alt={`Carousel imagen ${index + 1}`}
            width={1920}
            height={1080}          
          />        
        ) : null
      ))}
    </Slider>    
    </>
  );
};
export default Carousel;