"use client";

import { useState } from "react";
import { WorkData } from "./components/works";

import TitleSection from "../../../components/title";
import Description from "./components/description";
import Drawings from "./components/drawings";
import Works from "./components/works";

const Projects = () => {
  const [currentData, setCurrentData] = useState<WorkData[keyof WorkData]>({
    ID: "",
    button: "",
    descrip: "",
    place: "",
    area: "",
    sector: "",
  });

  const [filteredLength, setFilteredLength] = useState<number>(0);

  return (
    <div className="flex flex-col gap-12 pt-5 sm:pt-5 lg:pt-20 xl:pt-20">
      <TitleSection 
        title="Last Projects" 
        subtitle="En esta sección, podemos encontrar planos de ejemplo de las ultimas
        obras realizadas."
      />

      <Works setCurrentData={setCurrentData} />

      <Description currentData={currentData} />

      <Drawings
        currentDataId={currentData.ID}
        setFilteredLength={setFilteredLength}
      />

      <div className="flex justify-end bg-[#111827] px-4 pt-4 pb-4 border-t border-t-foreground/10">
        <p className="text-xs">- Total Drawings [{filteredLength}] - </p>
      </div>
    </div>
  );
};

export default Projects;
