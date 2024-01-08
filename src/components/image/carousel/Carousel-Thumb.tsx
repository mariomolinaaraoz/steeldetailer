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
 
   const handleImageClick = () => {
     setIsModalOpen(true);
   };

  return (
    <>
    <Slider {...settings} className="w-full aspect-video cursor-pointer">
      {Array.from({ length: 5 }).map((_, index) => (
        // Verifica si la variable 'sector' tiene un valor antes de cargar la imagen
        sector ? (
          <Image
            key={index}
            src={`/${sector}/img${index + 1}.png`}          
            alt={`Carousel imagen ${index + 1}`}
            width={400}
            height={400}
            onClick={handleImageClick}          
          />
        ) : null
      ))}
    </Slider>
    {isModalOpen && (      
      <IMGModal
        onClose={() => setIsModalOpen(false)}
      />
    )}
    </>
  );
};
export default Carousel;