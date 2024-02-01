import React from "react";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { UuseSupabaseTables } from "@/api/api";

interface Props {
  setFilteredLength: React.Dispatch<React.SetStateAction<number>>;
}

interface ColumnHeader {
  key: string;
  label: string;
}

interface ColumnHeadersList {
  [key: string]: ColumnHeader[];
}

const Upn: React.FC<Props> = ({ setFilteredLength }) => {
  
  
  // TABLE HEADERS/////////////////////////////////////////////////////////
  const [selectedHeader, setSelectedHeader] = useState("upn");
  const [columnHeaderss, setColumnHeaderss] = useState<ColumnHeader[]>([]);  
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [supabaseData, setSupabaseData] = useState<any[]>([]);
  const columnHeadersList: ColumnHeadersList = {
    perfilW: [
      { key: "W", label: "W" },
      { key: "lbs/ft", label: "lbs/ft" },
      { key: "h", label: "h" },
      { key: "b", label: "b" },
      { key: "tw", label: "tw" },
      { key: "tf", label: "tf" },
      { key: "W", label: "W" },
    ],
    upn: [
      { key: "UPN", label: "UPN" },
      { key: "h", label: "h" },
      { key: "b", label: "b" },
      { key: "e", label: "e" },
      { key: "e1", label: "e1=r" },
      { key: "r1", label: "r1" },
      { key: "h1", label: "h1" },
      { key: "a", label: "A(cm2)" },
      { key: "p", label: "P(Kg/m)" },
      { key: "Ix", label: "Ix(cm4)" },
      { key: "Wx", label: "Wx(cm3)" },
      { key: "ix", label: "ix(cm)" },
      { key: "Iy", label: "Iy(cm4)" },
      { key: "Wy", label: "Wy(cm3)" },
      { key: "iy", label: "iy(cm)" },
      { key: "m2m", label: "m2/m" },
      { key: "UPN", label: "UPN" },
    ],
    pnl: [
      { key: "L", label: "L" },
      { key: "b", label: "e" },
      { key: "b", label: "b" },
      { key: "r", label: "r" },
      { key: "r1", label: "r1" },
      { key: "c(cm)", label: "c(cm)" },
      { key: "A(cm2)", label: "A(cm2)" },
      { key: "P(Kg/m)", label: "P(Kg/m)" },
      { key: "Ix=Iy(cm4)", label: "Ix=Iy(cm4)" },
      { key: "Wx=Wy(cm3)", label: "Wx=Wy(cm3)" },
      { key: "ix=iy(cm)", label: "ix=iy(cm)" },
      { key: "Ixy(cm4)", label: "Ixy(cm4)" },
      { key: "m2/m", label: "m2/m" },      
      { key: "L", label: "L" },
    ],
    chapaLC: [
      { key: "Cal.", label: "Cal." },
      { key: "Esp. mm.", label: "Esp. mm." },
      { key: "Peso Kgs/mts", label: "Peso Kgs/mts" },
      { key: "Cal.", label: "Cal." },
    ],
    perfilC: [
      { key: "ht", label: "ht" },
      { key: "bt", label: "bt" },
      { key: "dt", label: "dt" },
      { key: "t=r", label: "t=r" },
      { key: "a", label: "a" },
      { key: "g", label: "g" },
      { key: "Jy", label: "Jy" },
      { key: "Wy", label: "Wy" },
      { key: "iy", label: "iy" },
      { key: "Jy", label: "Jy" },
      { key: "Wz1", label: "Wz1" },
      { key: "Wz2", label: "Wz2" },
      { key: "iz", label: "iz" },
      { key: "yg", label: "yg" },
      { key: "yc", label: "yc" },
      { key: "Jt", label: "Jt" },
      { key: "Cw", label: "Cw" },
      { key: "ht", label: "ht" },
    ],
  };
  
  const handleHeaderChange = (selected: string) => {
    setSelectedHeader(selected);
    setColumnHeaderss(columnHeadersList[selected]);
  };
  
  const columnHeaders = columnHeadersList[selectedHeader];
  // TABLE HEADERS/////////////////////////////////////////////////////////  

  // FILTRO////////////////////////////////////////////////////////////////
  const [searchTerm, setSearchTerm] = useState("");

  const filtered =
    searchTerm !== ""
      ? supabaseData.filter(
          (data) =>
            data.h === parseInt(searchTerm) || data.b === parseInt(searchTerm)
        )
      : supabaseData;

  useEffect(() => {
    setFilteredLength(filtered.length);
  }, [filtered, setFilteredLength]);

  const handleSearchChange: React.ChangeEventHandler | undefined = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };
  // FILTRO////////////////////////////////////////////////////////////////

  useEffect(() => {
    setColumnHeaderss(columnHeadersList[selectedHeader]);
  
    // Fetch data from the selected table
    const usefetchData = async () => {
      try {
        const data = await UuseSupabaseTables(selectedHeader);
        setSupabaseData(data.data || []);  // Accede a la propiedad 'data' de la respuesta y maneja el caso de 'undefined'
      } catch (error) {
        console.error("Error fetching data:", error);
        // Manejar el error según sea necesario
      }
    };
  
    usefetchData();
  
  }, [selectedHeader]);

  return (
    <Suspense fallback={<h2>Loading UPN...</h2>}>
      <div className="w-full flex flex-row justify-between sm:px-6 lg:px-20 xl:px-20">
        <h1 className="w-1/3 hidden sm:hidden lg:flex xl:flex">
          <u>List of profile:</u>
        </h1>
        <div id="search" className="flex w-full sm:w-full lg:w-1/3 xl:w-1/3">
          <Input
            placeholder="Search..."
            type="text"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="w-full flex flex-row gap-4 justify-around sm:px-6 lg:px-20 xl:px-20">
        <Button variant="secondary" onClick={() => handleHeaderChange("perfilW")}>Perfil W</Button>
        <Button variant="secondary" onClick={() => handleHeaderChange("upn")}>UPN</Button>
        <Button variant="secondary" onClick={() => handleHeaderChange("pnl")}>PNL</Button>
        <Button variant="secondary" onClick={() => handleHeaderChange("chapaLC")}>Chapa LC</Button>
        <Button variant="secondary" onClick={() => handleHeaderChange("perfilC")}>Perfil C</Button>
      </div>

      <div className="flex flex-col-reverse justify-center sm:flex-col-reverse lg:flex-row xl:flex-row">
        <div className="w-full sm:w-full lg:w-2/3 xl:w-2/3">
          <Table>
            <TableHeader>
              <TableRow>
                {columnHeaders.map((header, index) => (
                  <TableHead key={index} className="text-center">{header.label}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((data, index) => (
                <TableRow key={index}>
                  <TableCell
                    key={`repeat-${index}`}
                    className="w-fit px-2 text-right font-bold tracking-widest"
                  >
                    {data[Object.keys(data)[1]]}
                  </TableCell>
                  {Object.keys(data)
                    .slice(2)
                    .map((key) => (
                      <TableCell key={key} className="w-fit px-2 text-right">
                        {data[key]}
                      </TableCell>
                    ))}
                  <TableCell
                    key={`repeat-${index}`}
                    className="w-fit px-2 text-right font-bold tracking-widest"
                  >
                    {data[Object.keys(data)[1]]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div
          id="perfil"
          className="overflow-hidden sm:w-full lg:w-3/12 xl:w-3/12 flex flex-col justify-center"
        >
          <Image
            className="sm:h-[300px] lg:h-[400px] xl:h-[400px] scale-100 sm:scale-100 lg:scale-150 xl:scale-150"
            src="/UPN220.svg"
            width={400}
            height={400}
            alt="Perfil UPN"
          />
          <div className="h-8 sm:h-8 lg:h-16 xl:h-16"></div>
          <div className="hidden grid grid-col gap-4 justify-center sm:hidden lg:grid xl:grid">
            <h1>A = área de la sección</h1>
            <h1>I = momento de inercia</h1>
            <h1>W = módulo resistente</h1>
            <h1>i = √(I/A) = radio de giro</h1>
            <h1>u = sup. lateral x mts.</h1>
          </div>
        </div>
      </div>
    </Suspense>
  );
};
export default Upn;