import { WorkData } from "./works";
import Carousel from "@/components/image/carousel/Carousel-Thumb";

interface DescriptionSectionProps {
  currentData: WorkData[keyof WorkData];
}

const Description: React.FC<DescriptionSectionProps> = ({ currentData }) => {
  return (
    <section id="description">
      <div className="px-6 sm:px-6 lg:px-20 xl:px-20
                      grid grid-rows-1
                      gap-8 
                      align-middle 
                      h-full 
                      items-center 
                      sm:grid-rows-1 lg:grid-cols-2 xl:grid-cols-2
                      sm:gap-8 lg:gap-6 xl:gap-6"
        >
        <div id="title" className="flex flex-col gap-6">
          <p><u>Description:</u> {currentData.descrip}</p>
          <div id="subtitle" className="flex flex-col gap-6 hidden sm:hidden lg:grid xl:grid">
            <p><u>Project:</u> {currentData.place}</p>
            <p><u>Area:</u> {currentData.area}</p>
            <p><u>Sector:</u> {currentData.sector}</p>
          </div>
        </div>

        <div id="carousel" className="grid grid-cols-1">
          <Carousel sector={currentData.sector} />
        </div>
      </div>
    </section>
  );
};

export default Description;