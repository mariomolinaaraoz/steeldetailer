import React from "react";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

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

  return (
    <Suspense fallback={<h2>Loading UPN...</h2>}>
      <div
        id="subtitle"
        className="px-6 w-full flex flex-row justify-between sm:px-6 lg:px-20 xl:px-20"
      >
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
      <div className="flex flex-row px-20">
        <div className="w-3/4">
          <Table>            
            <TableHeader>
              <TableRow>
                <TableHead>UPN</TableHead>
                <TableHead className="w-fit px-2 text-center">h</TableHead>
                <TableHead className="w-fit px-2 text-center">b</TableHead>
                <TableHead className="w-fit px-2 text-center">e</TableHead>
                <TableHead className="w-fit px-2 text-center">e1=r</TableHead>
                <TableHead className="w-fit px-2 text-center">r1</TableHead>
                <TableHead className="w-fit px-2 text-center">h1</TableHead>
                <TableHead className="w-fit px-2 text-center">A(cm2)</TableHead>
                <TableHead className="w-fit px-2 text-center">P(Kg/m)</TableHead>
                <TableHead className="w-fit px-2 text-center">Ix(cm4)</TableHead>
                <TableHead className="w-fit px-2 text-center">Wx(cm3)</TableHead>
                <TableHead className="w-fit px-2 text-center">ix(cm)</TableHead>
                <TableHead className="w-fit px-2 text-center">Iy(cm4)</TableHead>
                <TableHead className="w-fit px-2 text-center">Wy(cm3)</TableHead>
                <TableHead className="w-fit px-2 text-center">iy(cm)</TableHead>
                <TableHead className="w-fit px-2 text-center">m2/m</TableHead>
                <TableHead className="w-fit px-2 text-center">UPN</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((data, index) => (
                <TableRow key={index}>
                  <TableCell className="font-bold tracking-widest text-right">
                    {data.UPN}
                  </TableCell>
                  <TableCell className="w-fit px-2 text-right">{data.h}</TableCell>
                  <TableCell className="w-fit px-2 text-right">{data.b}</TableCell>
                  <TableCell className="w-fit px-2 text-right">{data.e}</TableCell>
                  <TableCell className="w-fit px-2 text-right">{data.e1}</TableCell>
                  <TableCell className="w-fit px-2 text-right">{data.r1}</TableCell>
                  <TableCell className="w-fit px-2 text-right">{data.h1}</TableCell>
                  <TableCell className="w-fit px-2 text-right">{data.a}</TableCell>
                  <TableCell className="w-fit px-2 text-right">{data.p}</TableCell>
                  <TableCell className="w-fit px-2 text-right">{data.Ix}</TableCell>
                  <TableCell className="w-fit px-2 text-right">{data.wx}</TableCell>
                  <TableCell className="w-fit px-2 text-right">{data.ix}</TableCell>
                  <TableCell className="w-fit px-2 text-right">{data.Iy}</TableCell>
                  <TableCell className="w-fit px-2 text-right">{data.Wy}</TableCell>
                  <TableCell className="w-fit px-2 text-right">{data.iy}</TableCell>
                  <TableCell className="w-fit px-2 text-right">{data.m2m}</TableCell>
                  <TableCell className="font-bold tracking-widest text-right">
                    {data.UPN}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/* <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter> */}
          </Table>
        </div>
        <div className="w-3/12 flex flex-col justify-center space-y-8">
          <Image className="h-1/2 w-full scale-150" src="/UPN220.svg" width={400} height={400} alt="UPN"/>          
          <div className="h-2/6 w-full grid grid-col gap-4 justify-center">
              <h1>A = Area de la sección</h1>
              <h1>I = Momento de Inercia</h1>
              <h1>W = Módulo resistente</h1>
              <h1>i = √(I/A) = Radio de giro</h1>
              <h1>u = Sup. Lateral x mts.</h1>           
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Upn;
