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

import { useSupabaseUpn } from "@/api/api";

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
  const supabaseData = useSupabaseUpn();

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

  const [selectedHeader, setSelectedHeader] = useState("upn");

  const columnHeadersList: ColumnHeadersList = {
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
    chapalisaLC: [
      { key: "nA", label: "n A" },
      { key: "nB", label: "n B" },
    ],
  };

  const handleHeaderChange = (selected: string) => {
    setSelectedHeader(selected);
  };

  const columnHeaders = columnHeadersList[selectedHeader];

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
        <Button variant="secondary" onClick={() => handleHeaderChange("upn")}>UPN</Button>
        <Button variant="secondary">PNL</Button>
        <Button variant="secondary">Perfil C</Button>
        <Button variant="secondary" onClick={() => handleHeaderChange("chapalisaLC")}>Chapa Lisa</Button>
        <Button variant="secondary">UPN</Button>
        <Button variant="secondary">PNL</Button>
        <Button variant="secondary">Perfil C</Button>
        <Button variant="secondary">Chapa Lisa</Button>
      </div>

      <div className="flex flex-col-reverse justify-center sm:flex-col-reverse lg:flex-row xl:flex-row">
        <div className="w-full sm:w-full lg:w-2/3 xl:w-2/3">
          <Table>
            <TableHeader>
              <TableRow>
                {columnHeaders.map((header, index) => (
                  <TableHead key={index}>{header.label}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((data, index) => (
                <TableRow key={index}>
                  <TableCell
                    key={`repeat-${index}`}
                    className="w-fit px-2 text-right font-semibold tracking-widest"
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
                    className="w-fit px-2 text-right font-semibold tracking-widest"
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
