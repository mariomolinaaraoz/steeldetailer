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
        className="w-full flex flex-row justify-between sm:px-6 lg:px-20 xl:px-20"
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
      <div className="w-full flex flex-row gap-4 justify-around sm:px-6 lg:px-20 xl:px-20">
        <Button variant="secondary">UPN</Button>
        <Button variant="secondary">PNL</Button>
        <Button variant="secondary">Perfil C</Button>
        <Button variant="secondary">Chapa Lisa</Button>
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
                <TableHead>UPN</TableHead>                
                <TableHead className="w-fit px-2 text-center">
                  h
                </TableHead>
                <TableHead className="w-fit px-2 text-center">
                  b
                </TableHead>
                <TableHead className="w-fit px-2 text-center">
                  e
                </TableHead>
                <TableHead className="w-fit px-2 text-center">e1=r</TableHead>
                <TableHead className="w-fit px-2 text-center">r1</TableHead>
                <TableHead className="w-fit px-2 text-center">h1</TableHead>
                <TableHead className="w-fit px-2 text-center">A(cm2)</TableHead>
                <TableHead className="w-fit px-2 text-center">
                  P(Kg/m)
                </TableHead>
                <TableHead className="w-fit px-2 text-center">
                  Ix(cm4)
                </TableHead>
                <TableHead className="w-fit px-2 text-center">
                  Wx(cm3)
                </TableHead>
                <TableHead className="w-fit px-2 text-center">ix(cm)</TableHead>
                <TableHead className="w-fit px-2 text-center">
                  Iy(cm4)
                </TableHead>
                <TableHead className="w-fit px-2 text-center">
                  Wy(cm3)
                </TableHead>
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
                  
                    <TableCell className="w-fit px-2 text-right" scope="col">
                      {data.h}
                    </TableCell>
                    <TableCell className="w-fit px-2 text-right" scope="col">
                      {data.b}
                    </TableCell>
                    <TableCell className="w-fit px-2 text-right" scope="col">
                      {data.e}
                    </TableCell>
                  

                  <TableCell className="w-fit px-2 text-right">
                    {data.e1}
                  </TableCell>
                  <TableCell className="w-fit px-2 text-right">
                    {data.r1}
                  </TableCell>
                  <TableCell className="w-fit px-2 text-right">
                    {data.h1}
                  </TableCell>
                  <TableCell className="w-fit px-2 text-right">
                    {data.a}
                  </TableCell>
                  <TableCell className="w-fit px-2 text-right">
                    {data.p}
                  </TableCell>
                  <TableCell className="w-fit px-2 text-right">
                    {data.Ix}
                  </TableCell>
                  <TableCell className="w-fit px-2 text-right">
                    {data.wx}
                  </TableCell>
                  <TableCell className="w-fit px-2 text-right">
                    {data.ix}
                  </TableCell>
                  <TableCell className="w-fit px-2 text-right">
                    {data.Iy}
                  </TableCell>
                  <TableCell className="w-fit px-2 text-right">
                    {data.Wy}
                  </TableCell>
                  <TableCell className="w-fit px-2 text-right">
                    {data.iy}
                  </TableCell>
                  <TableCell className="w-fit px-2 text-right">
                    {data.m2m}
                  </TableCell>
                  <TableCell className="font-bold tracking-widest text-right">
                    {data.UPN}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div id="perfil"
          className="overflow-hidden sm:w-full lg:w-3/12 xl:w-3/12 flex flex-col justify-center"
        >
          <Image className="sm:h-[300px] lg:h-[400px] xl:h-[400px] scale-100 sm:scale-100 lg:scale-150 xl:scale-150"
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
