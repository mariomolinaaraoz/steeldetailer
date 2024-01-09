import React from "react";
import Carousel from "@/components/image/carousel/Carousel-Thumb";
import { WorkData } from "./works";

interface DescriptionSectionProps {
  currentData: WorkData[keyof WorkData];
}

const Description: React.FC<DescriptionSectionProps> = ({ currentData }) => {
  return (
    <div
      id="description"
      className="px-6 flex flex-col justify-between sm:px-6 lg:px-20 xl:px-20"
    >
      <div className="grid grid-cols-2 gap-6 align-middle hidden sm:hidden lg:grid xl:grid h-full items-center">
        <div id="first" className="flex flex-col gap-6">
          <p className=""><u>Descripción:</u> {currentData.descrip}</p>
          <p className=""><u>Proyecto:</u> {currentData.place}</p>
          <p className=""><u>Área:</u> {currentData.area}</p>
          <p className=""><u>Sector:</u> {currentData.sector}</p>
        </div>
        <div id="second" className="grid grid-cols-1">
          <Carousel sector={currentData.sector} />
        </div>
      </div>
    </div>
  );
};

export default Description;
