"use client";

import { useState } from "react";

import TitleSection from "../../../components/title";
import ViewGrid from "./components/viewGrid";

const Projects = () => {
  const [filteredLength, setFilteredLength] = useState<number>(0);

  return (
    <div className="flex flex-col gap-12 pt-5 sm:pt-5 lg:pt-20 xl:pt-20">
      <TitleSection
        title="Image Gallery"
        subtitle="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      />

      <ViewGrid currentDataId="B" setFilteredLength={setFilteredLength} />

      <div className="flex justify-end bg-[#111827] px-4 pt-4 pb-4 border-t border-t-foreground/10">
        <p className="text-xs">- Total Images [2] - </p>
      </div>
    </div>
  );
};

export default Projects;