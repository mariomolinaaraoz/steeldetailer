import React from 'react';
import Carousel from '@/components/image/carousel/Carousel-Thumb';
import { WorkData } from './works';

interface DescriptionSectionProps {
  currentData: WorkData[keyof WorkData];
}

const Description: React.FC<DescriptionSectionProps> = ({ currentData }) => {
  return (
    <div
      id="description"
      className="px-6 pt-0 pb-5 flex flex-col gap-8 justify-between sm:pt-0 lg:pt-10 xl:pt-10 sm:px-6 lg:px-20 xl:px-20"
    >
      <div className="flex justify-around px-20">
        <div className="flex flex-col gap-8">
          <h1 className="w-1/2 hidden sm:hidden lg:flex xl:flex">
            Descripción: {currentData.descrip}
          </h1>
          <h1 className="w-1/2 hidden sm:hidden lg:flex xl:flex">
            Proyecto: {currentData.place}
          </h1>
          <h1 className="w-1/2 hidden sm:hidden lg:flex xl:flex">
            Area: {currentData.area} - Sector: {currentData.sector}
          </h1>
        </div>
        <div className="w-1/3">
          <Carousel sector="A" />
        </div>
      </div>
    </div>
  );
};

export default Description;