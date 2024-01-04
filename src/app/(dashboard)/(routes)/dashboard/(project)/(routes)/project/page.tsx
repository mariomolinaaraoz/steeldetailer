"use client";

import { fetchTodos } from "@/api/api";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

import { BlurImage } from "@/components/image/BlurImage";

export default function GalleryPage() {
  //SUPABASE////////////////////////////////////////////////////////////////
  const [todos, setTodos] = useState<any[]>([]);
  const [projectId, setProjectId] = useState<string>("B");

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetchTodos(projectId);
      setTodos(data);
    };
    getTodos();
  }, [projectId]);
  //SUPABASE////////////////////////////////////////////////////////////////

  //FILTRO////////////////////////////////////////////////////////////////
  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState("");
  const [data1, setData1] = useState("");

  const filtered = todos.filter(
    (data) =>
      data.plano.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.elemento.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange: React.ChangeEventHandler | undefined = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };
  //FILTRO////////////////////////////////////////////////////////////////

  return (
    <>
      <div className="px-4 py-6 grid justify-items-center w-full gap-12 sm:py-6 lg:py-10 xl:py-10">
        <h1 className="text-2xl shadow-lg shadow-slate-50 lg:text-4xl xltext-4xl">
          Last Projects
        </h1>
        <p className="text-lg shadow-lg shadow-slate-50 hidden sm:hidden lg:grid xl:grid">
          En esta sección, podemos encontrar planos de ejemplo de las ultimas
          obras realizadas.
        </p>
      </div>
      <div className="px-4 py-3 flex flex-col justify-center sm:flex-col lg:flex-row xl:flex-row items-baseline gap-4">
        <div
          id="obras"
          className="flex flex-row w-full justify-between sm:w-full lg:w-2/3 xl:w-2/3"
        >
          <Button
            className="w-24 h-10 text-lg"
            onClick={() => {
              setProjectId("A");
              setData(
                "Descripción: Estructura a un agua de 60mts de largo, por 35mts de ancho y 24mts de alto, con 5 entrepisos metálicos."
              );
              setData1("Area: 205 - Sector: A");
            }}
          >
            35x60
          </Button>
          <Button
            className="w-24 h-10 text-lg"
            onClick={() => {
              setProjectId("B");
              setData(
                "Descripción: Estructura a dos agua de 60mts de largo, por 60mts de ancho y 15mts de alto."
              );
              setData1("Area: 205 - Sector: B");
            }}
          >
            60x60
          </Button>
        </div>
      </div>
      <div className="px-6 pt-0 pb-5 flex flex-col gap-8 justify-between sm:pt-0 lg:pt-10 xl:pt-10 sm:px-6 lg:px-20 xl:px-20">
        <div className="flex justify-around px-20">
          <div className="flex flex-col gap-8">
            <h1 className="w-1/2 hidden sm:hidden lg:flex xl:flex">{data}</h1>
            <h1 className="w-1/2 hidden sm:hidden lg:flex xl:flex">
              Ubicación: Proyecto 3 Quebradas, Fiambalá. Catamarca, Argentina.
            </h1>
            <h1 className="w-1/2 hidden sm:hidden lg:flex xl:flex">{data1}</h1>
          </div>
          {/* <Carousel
            className="w-full max-w-xs"            
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-w-16 aspect-h-9 items-center justify-center p-0">
                        <Image
                          src={`/img${index + 1}.png`}
                          alt="Modelo"
                          placeholder="empty"
                          width={500}
                          height={500}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> */}
        </div>
        <div className="w-full flex flex-row justify-between">
          <h1 className="w-1/3 hidden sm:hidden lg:flex xl:flex">
            Listados de planos:
          </h1>
          <div id="search" className="flex w-full sm:w-full lg:w-1/3 xl:w-1/3">
            <Input
              placeholder="buscar..."
              type="text"
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      <div className="px-6 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {filtered.map((data) => (
          <BlurImage key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}
