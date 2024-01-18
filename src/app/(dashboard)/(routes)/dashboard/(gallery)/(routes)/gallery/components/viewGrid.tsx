import React from "react";
import Image from "next/image";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

import { useSupabaseGallery } from "@/api/api";

import View from "./view";

interface Props {
  currentDataId: string | undefined;
  setFilteredLength: React.Dispatch<React.SetStateAction<number>>;
}

const ViewGrid: React.FC<Props> = ({ setFilteredLength }) => {
  const supabaseData = useSupabaseGallery();

  // FILTRO////////////////////////////////////////////////////////////////
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = supabaseData.filter(
    (data) =>
      data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setFilteredLength(filtered.length);
  }, [filtered, setFilteredLength]);

  const handleSearchChange: React.ChangeEventHandler | undefined = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };
  // FILTRO////////////////////////////////////////////////////////////////

  return (
    <Suspense fallback={<h2>Loading Photos...</h2>}>
      <div
        id="subtitle"
        className="px-6 w-full flex flex-row justify-between sm:px-6 lg:px-20 xl:px-20"
      >
        <h1 className="w-1/3 hidden sm:hidden lg:flex xl:flex">
          <u>List of photos:</u>
        </h1>
        <div id="search" className="flex w-full sm:w-full lg:w-1/3 xl:w-1/3">
          <Input
            placeholder="Search..."
            type="text"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="columns-1 gap-4 space-y-4 mx-auto p-5 sm:columns-1 lg:columns-3 xl:columns-4">
        {filtered.map((data, index) => (
          <View 
            key={data.id} 
            index={index}
            bucket={"steeldetailer_site"}
            folder={"gallery"}
            item={data} 
            priority={false}
          />          
        ))}
      </div>      
    </Suspense>
  );
};

export default ViewGrid;