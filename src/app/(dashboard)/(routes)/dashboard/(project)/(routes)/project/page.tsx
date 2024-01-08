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

  return (
    <>
      <div
        id="title"
        className="px-4 py-6 grid justify-items-center w-full gap-12 sm:py-6 lg:py-10 xl:py-10"
      >
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

      <Drawings currentDataId={currentData.ID} />
    </>
  );
}