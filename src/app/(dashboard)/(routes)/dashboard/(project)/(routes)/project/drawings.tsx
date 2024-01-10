import React from 'react';
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Suspense } from 'react';
import { BlurImage } from '@/components/image/BlurImage';
import { useSupabaseData } from '@/api/api';

interface Props {
  currentDataId: string | undefined;
  setFilteredLength: React.Dispatch<React.SetStateAction<number>>;
}

const Drawings: React.FC<Props> = ({ currentDataId, setFilteredLength }) => {
  const supabaseData = useSupabaseData(currentDataId);

  // FILTRO////////////////////////////////////////////////////////////////
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = supabaseData.filter(
    (data) =>
      data.plano.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.elemento.toLowerCase().includes(searchTerm.toLowerCase())
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
    <Suspense fallback={<h2>Loading Drawings...</h2>}>
      <div
        id="subtitle"
        className="px-6 w-full flex flex-row justify-between sm:px-6 lg:px-20 xl:px-20"
      >
        <h1 className="w-1/3 hidden sm:hidden lg:flex xl:flex">
          <u>List of drawings:</u>
        </h1>
        <div id="search" className="flex w-full sm:w-full lg:w-1/3 xl:w-1/3">
          <Input
            placeholder="Search..."
            type="text"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="px-6 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {filtered.map((data) => (
          <BlurImage key={data.id} data={data} />
        ))}
      </div>
    </Suspense>
  );
};

export default Drawings;