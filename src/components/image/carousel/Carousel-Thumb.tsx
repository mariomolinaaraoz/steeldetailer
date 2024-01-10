import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import IMGModal from '../IMGModal';

import "./slick.css";
import "./slick-themes.css";

interface CarouselProps {
  sector: string,
}

const Carousel: React.FC<CarouselProps> = ({ sector }) => {
  const settings = {
    dots: false,
    arrows: false,
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
 
   const handleImageClick = () => {
     setIsModalOpen(true);
   };

  return (
    <>
    <Slider {...settings} className="w-full aspect-video cursor-pointer">
      {Array.from({ length: 5 }).map((_, index) => (        
        sector ? (
          <Image
            key={index}
            src={`/${sector}/img${index + 1}.png`}          
            alt={`Carousel imagen ${index + 1}`}
            width={854}
            height={480}
            onClick={handleImageClick}          
          />
        ) : null
      ))}
    </Slider>
    {isModalOpen && (      
      <IMGModal
        sector={sector}        
        onClose={() => setIsModalOpen(false)}
      />
    )}
    </>
  );
};
export default Carousel;