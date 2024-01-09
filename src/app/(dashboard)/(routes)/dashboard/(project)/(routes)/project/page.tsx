"use client";

import { useState } from "react";
import { WorkData } from "./works";

import Description from "./description";
import Drawings from "./drawings";
import Works from "./works";

export default function GalleryPage() {
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
    <div className="flex flex-col gap-12">

      <div id="title" className="grid justify-items-center w-full gap-14">
        <h1 className="text-2xl shadow-lg shadow-slate-50 lg:text-4xl xltext-4xl">
          Last Projects
        </h1>
        <p className="text-lg shadow-lg shadow-slate-50 hidden sm:hidden lg:grid xl:grid">
          En esta sección, podemos encontrar planos de ejemplo de las ultimas
          obras realizadas.
        </p>
      </div>

      <Works setCurrentData={setCurrentData} />

      <Description currentData={currentData} />

      <Drawings currentDataId={currentData.ID} setFilteredLength={setFilteredLength}/>

      <div className="flex justify-end bg-[#111827] px-4 pt-4 pb-4 border-t border-t-foreground/10">
        <p className="text-xs">- Total Drawings [{filteredLength}] - </p>
      </div>
    </div>
  );
}
