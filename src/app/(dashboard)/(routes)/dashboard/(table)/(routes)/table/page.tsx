"use client";

import { useState } from "react";

import TitleSection from "../../../components/title";
import Upn from "./components/Upn";

const Tables = () => {
  const [filteredLength, setFilteredLength] = useState<number>(0);

  return (
    <div className="flex flex-col gap-12 pt-5 sm:pt-5 lg:pt-20 xl:pt-20">
      <TitleSection
        title="Tables"
        subtitle="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      />

      <Upn setFilteredLength={setFilteredLength} />

      <div className="flex justify-end bg-[#111827] px-4 pt-4 pb-4 border-t border-t-foreground/10">
        <p className="text-xs">- Total Images [{filteredLength}] - </p>
      </div>
    </div>
  );
};

export default Tables;