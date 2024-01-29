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
      <div className="flex flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400.000"
          height="300.000"
          viewBox="0.0 0.0 800.000 600.000"
          version="1.1"
        >
          <title>Produce by Acme CAD Converter</title>
          <desc>Produce by Acme CAD Converter</desc>
          <path d="M447.88 466.27L447.88 164.68M447.88 164.68L447.88 164.68M447.88 164.68L447.69 160.73M447.69 160.73L447.11 156.83M447.11 156.83L446.14 153M446.14 153L444.81 149.28M444.81 149.28L443.11 145.72M443.11 145.72L441.07 142.33M441.07 142.33L438.71 139.17M438.71 139.17L436.05 136.25M436.05 136.25L433.12 133.61M433.12 133.61L429.93 131.27M429.93 131.27L426.54 129.26M426.54 129.26L422.96 127.59M422.96 127.59L419.24 126.28M419.24 126.28L415.4 125.34M415.4 125.34L411.49 124.79M411.49 124.79L259.8 110.86M259.8 110.86L259.8 110.86M259.8 110.86L256.99 110.41M256.99 110.41L254.26 109.58M254.26 109.58L251.67 108.4M251.67 108.4L249.26 106.88M249.26 106.88L247.07 105.05M247.07 105.05L245.15 102.95M245.15 102.95L243.53 100.61M243.53 100.61L242.24 98.07M242.24 98.07L241.3 95.38M241.3 95.38L240.73 92.58M240.73 92.58L240.54 89.74M240.54 89.74L240.54 79.85M240.54 79.85L476.16 79.85M476.16 79.85L476.16 551.1M476.16 551.1L240.54 551.1M240.54 551.1L240.54 541.21M240.54 541.21L240.54 541.21M240.54 541.21L240.73 538.36M240.73 538.36L241.3 535.57M241.3 535.57L242.24 532.88M242.24 532.88L243.53 530.34M243.53 530.34L245.15 528M245.15 528L247.07 525.89M247.07 525.89L249.26 524.07M249.26 524.07L251.67 522.55M251.67 522.55L254.26 521.36M254.26 521.36L256.99 520.54M256.99 520.54L259.8 520.09M259.8 520.09L411.49 506.16M411.49 506.16L411.49 506.16M411.49 506.16L415.4 505.61M415.4 505.61L419.24 504.67M419.24 504.67L422.96 503.36M422.96 503.36L426.54 501.69M426.54 501.69L429.93 499.67M429.93 499.67L433.12 497.34M433.12 497.34L436.05 494.7M436.05 494.7L438.71 491.78M438.71 491.78L441.07 488.61M441.07 488.61L443.11 485.23M443.11 485.23L444.81 481.67M444.81 481.67L446.14 477.95M446.14 477.95L447.11 474.12M447.11 474.12L447.69 470.22M447.69 470.22L447.88 466.27"
fill="none" stroke="black" stroke-width="1.5"/>

          <path
            d="M446.71 449.9L446.71 186.86M446.71 186.86L446.71 186.86M446.71 186.86L446.54 182.88M446.54 182.88L446 178.93M446 178.93L445.13 175.04M445.13 175.04L443.9 171.25M443.9 171.25L442.35 167.58M442.35 167.58L440.47 164.06M440.47 164.06L438.3 160.73M438.3 160.73L435.83 157.6M435.83 157.6L433.09 154.7M433.09 154.7L430.11 152.06M430.11 152.06L426.9 149.69M426.9 149.69L423.5 147.62M423.5 147.62L419.92 145.86M419.92 145.86L416.21 144.42M416.21 144.42L412.38 143.32M412.38 143.32L408.47 142.56M408.47 142.56L404.5 142.16M404.5 142.16L249.55 133.28M249.55 133.28L249.55 133.28M249.55 133.28L246.75 132.94M246.75 132.94L244.02 132.26M244.02 132.26L241.39 131.23M241.39 131.23L238.91 129.88M238.91 129.88L236.62 128.23M236.62 128.23L234.56 126.3M234.56 126.3L232.75 124.13M232.75 124.13L231.24 121.75M231.24 121.75L230.03 119.2M230.03 119.2L229.16 116.52M229.16 116.52L228.62 113.75M228.62 113.75L228.45 110.93M228.45 110.93L228.45 94.51M228.45 94.51L480.29 94.51M480.29 94.51L480.29 542.24M480.29 542.24L228.45 542.24M228.45 542.24L228.45 525.82M228.45 525.82L228.45 525.82M228.45 525.82L228.62 523M228.62 523L229.16 520.23M229.16 520.23L230.03 517.55M230.03 517.55L231.24 515M231.24 515L232.75 512.62M232.75 512.62L234.56 510.45M234.56 510.45L236.62 508.52M236.62 508.52L238.91 506.87M238.91 506.87L241.39 505.52M241.39 505.52L244.02 504.5M244.02 504.5L246.75 503.81M246.75 503.81L249.55 503.47M249.55 503.47L404.5 494.6M404.5 494.6L404.5 494.6M404.5 494.6L408.47 494.19M408.47 494.19L412.38 493.43M412.38 493.43L416.21 492.33M416.21 492.33L419.92 490.9M419.92 490.9L423.5 489.14M423.5 489.14L426.9 487.06M426.9 487.06L430.11 484.7M430.11 484.7L433.09 482.05M433.09 482.05L435.83 479.16M435.83 479.16L438.3 476.03M438.3 476.03L440.47 472.69M440.47 472.69L442.35 469.18M442.35 469.18L443.9 465.51M443.9 465.51L445.13 461.71M445.13 461.71L446 457.83M446 457.83L446.54 453.88M446.54 453.88L446.71 449.9"
            fill="none"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            d="M483.79 94.51L559.39 94.51"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M483.79 542.24L559.39 542.24"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M553.8 111.3L553.8 525.45"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M551 111.3L553.8 94.51 553.8 94.51 556.6 111.3 551 111.3Z"
            fill-rule="evenodd"
            fill="yellow"
          />
          <path
            d="M551 525.45L553.8 542.24 553.8 542.24 556.6 525.45 551 525.45Z"
            fill-rule="evenodd"
            fill="yellow"
          />
          {/* h */}
          <path
            d="M550.3 361.05L527.91 361.05M539.64 361.05L536.44 357.85M536.44 357.85L535.38 355.72M535.38 355.72L535.38 352.52M535.38 352.52L536.44 350.39M536.44 350.39L539.64 349.32M539.64 349.32L550.3 349.32"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M480.29 94.51L480.29 94.51"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M480.29 542.24L480.29 542.24"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M553.8 542.24L553.8 542.24"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M228.45 91.02L228.45 22.17"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M480.29 91.02L480.29 22.17"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M245.24 27.77L463.5 27.77"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M245.24 24.97L228.45 27.77 228.45 27.77 245.24 30.56 245.24 24.97Z"
            fill-rule="evenodd"
            fill="yellow"
          />
          <path
            d="M463.5 24.97L480.29 27.77 480.29 27.77 463.5 30.56 463.5 24.97Z"
            fill-rule="evenodd"
            fill="yellow"
          />
          {/* b */}
          <path
            d="M347.97 24.08L347.97 1.7M347.97 12.36L350.11 10.23M350.11 10.23L352.24 9.16M352.24 9.16L355.44 9.16M355.44 9.16L357.57 10.23M357.57 10.23L359.7 12.36M359.7 12.36L360.77 15.56M360.77 15.56L360.77 17.69M360.77 17.69L359.7 20.89M359.7 20.89L357.57 23.02M357.57 23.02L355.44 24.08M355.44 24.08L352.24 24.08M352.24 24.08L350.11 23.02M350.11 23.02L347.97 20.89"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M228.45 94.51L228.45 94.51"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M480.29 94.51L480.29 94.51"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M480.29 27.77L480.29 27.77"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M382.96 449.9L265.08 449.9"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M443.21 186.86L265.08 186.86"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M270.67 433.11L270.67 203.65"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M267.88 433.11L270.67 449.9 270.67 449.9 273.47 433.11 267.88 433.11Z"
            fill-rule="evenodd"
            fill="yellow"
          />
          <path
            d="M267.88 203.65L270.67 186.86 270.67 186.86 273.47 203.65 267.88 203.65Z"
            fill-rule="evenodd"
            fill="yellow"
          />
          <path
            d="M267.13 331.17L244.74 331.17M256.47 331.17L253.27 327.97M253.27 327.97L252.21 325.84M252.21 325.84L252.21 322.64M252.21 322.64L253.27 320.51M253.27 320.51L256.47 319.44M256.47 319.44L267.13 319.44M249.01 310.91L247.94 308.78M247.94 308.78L244.74 305.58M244.74 305.58L267.13 305.58"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M386.46 449.9L386.46 449.9"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M446.71 186.86L446.71 186.86"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M270.67 186.86L270.67 186.86"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M192.87 153.26L219.19 134.04"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M193.75 148.29L184.95 136.24M188.72 141.4L187.69 138.19M187.69 138.19L188.16 135.21M188.16 135.21L189.25 133.09M189.25 133.09L191.83 131.21"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M250.83 110.93L232.75 124.14"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M217.54 131.78L232.75 124.14 232.75 124.14 220.85 136.3 217.54 131.78Z"
            fill-rule="evenodd"
            fill="yellow"
          />
          <path
            d="M232.75 124.14L232.75 124.14"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M250.83 110.93L250.83 110.93"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M301.8 318.38L334.04 318.38M369.58 318.38L405.12 318.38M440.66 318.38L476.2 318.38M511.73 318.38L547.27 318.38M582.81 318.38L615.05 318.38"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M354.37 395.79L354.37 371.68M354.37 336.15L354.37 300.61M354.37 265.07L354.37 240.97"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M398.1 445.41L420.13 471.16"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M403.12 445.9L414.46 436.2M409.6 440.35L412.73 439.09M412.73 439.09L415.73 439.32M415.73 439.32L417.93 440.25M417.93 440.25L420.01 442.68"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M422.26 469.34L431.05 483.91 431.05 483.91 418.01 472.98 422.26 469.34Z"
            fill-rule="evenodd"
            fill="yellow"
          />
          <path
            d="M431.05 483.91L431.05 483.91"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M401.94 449.9L401.94 449.9"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M350.87 94.51L348.77 94.51"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M355.31 139.14L359.97 139.14"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M354.37 122.35L354.37 111.3"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M354.37 94.51L354.37 41.46"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M351.57 122.35L354.37 139.14 354.37 139.14 357.17 122.35 351.57 122.35Z"
            fill-rule="evenodd"
            fill="yellow"
          />
          <path
            d="M351.57 111.3L354.37 94.51 354.37 94.51 357.17 111.3 351.57 111.3Z"
            fill-rule="evenodd"
            fill="yellow"
          />
          <path
            d="M342.11 71.17L342.11 58.38M342.11 58.38L339.98 58.38M339.98 58.38L337.85 59.44M337.85 59.44L336.78 60.51M336.78 60.51L335.72 62.64M335.72 62.64L335.72 65.84M335.72 65.84L336.78 67.97M336.78 67.97L338.92 70.1M338.92 70.1L342.11 71.17M342.11 71.17L344.25 71.17M344.25 71.17L347.44 70.1M347.44 70.1L349.58 67.97M349.58 67.97L350.64 65.84M350.64 65.84L350.64 62.64M350.64 62.64L349.58 60.51M349.58 60.51L347.44 58.38M332.52 51.98L331.45 49.85M331.45 49.85L328.26 46.65M328.26 46.65L350.64 46.65"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M354.37 94.51L354.37 94.51"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M351.81 139.14L351.81 139.14"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M354.37 139.14L354.37 139.14"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M228.45 545.74L228.45 598.3"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M354.37 545.74L354.37 598.3"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M245.24 592.71L337.58 592.71"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M245.24 589.91L228.45 592.71 228.45 592.71 245.24 595.5 245.24 589.91Z"
            fill-rule="evenodd"
            fill="yellow"
          />
          <path
            d="M337.58 589.91L354.37 592.71 354.37 592.71 337.58 595.5 337.58 589.91Z"
            fill-rule="evenodd"
            fill="yellow"
          />
          <path
            d="M262.09 587.23L262.09 564.84M262.09 575.5L264.22 573.37M264.22 573.37L266.36 572.3M266.36 572.3L269.55 572.3M269.55 572.3L271.69 573.37M271.69 573.37L273.82 575.5M273.82 575.5L274.88 578.7M274.88 578.7L274.88 580.83M274.88 580.83L273.82 584.03M273.82 584.03L271.69 586.16M271.69 586.16L269.55 587.23M269.55 587.23L266.36 587.23M266.36 587.23L264.22 586.16M264.22 586.16L262.09 584.03M301.54 560.58L282.35 594.69M306.87 570.17L306.87 569.1M306.87 569.1L307.93 566.97M307.93 566.97L309 565.91M309 565.91L311.13 564.84M311.13 564.84L315.39 564.84M315.39 564.84L317.53 565.91M317.53 565.91L318.59 566.97M318.59 566.97L319.66 569.1M319.66 569.1L319.66 571.24M319.66 571.24L318.59 573.37M318.59 573.37L316.46 576.57M316.46 576.57L305.8 587.23M305.8 587.23L320.72 587.23"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M228.45 542.24L228.45 542.24"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M354.37 542.24L354.37 542.24"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M354.37 592.71L354.37 592.71"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M446.71 395.28L446.71 393.18"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M480.29 395.28L480.29 393.18"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M429.92 398.78L413.13 398.78"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M497.08 398.78L535.82 398.78"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M446.71 398.78L480.29 398.78"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M429.92 395.98L446.71 398.78 446.71 398.78 429.92 401.58 429.92 395.98Z"
            fill-rule="evenodd"
            fill="yellow"
          />
          <path
            d="M497.08 395.98L480.29 398.78 480.29 398.78 497.08 401.58 497.08 395.98Z"
            fill-rule="evenodd"
            fill="yellow"
          />
          <path
            d="M518.45 386.57L531.24 386.57M531.24 386.57L531.24 384.44M531.24 384.44L530.17 382.31M530.17 382.31L529.11 381.24M529.11 381.24L526.98 380.17M526.98 380.17L523.78 380.17M523.78 380.17L521.65 381.24M521.65 381.24L519.51 383.37M519.51 383.37L518.45 386.57M518.45 386.57L518.45 388.7M518.45 388.7L519.51 391.9M519.51 391.9L521.65 394.03M521.65 394.03L523.78 395.1M523.78 395.1L526.98 395.1M526.98 395.1L529.11 394.03M529.11 394.03L531.24 391.9"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M446.71 398.78L446.71 398.78"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M480.29 398.78L480.29 398.78"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M480.29 398.78L480.29 398.78"
            fill="none"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M313.9 262.13L334.8 260.78M313.9 244.22L334.8 260.78M334.8 260.78L343.76 268.52M343.76 268.52L345.26 270.56M345.26 270.56L345.26 275.04"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
          <path
            d="M586.59 308.69L610.62 287.79M603.02 308.69L594.2 287.79"
            fill="none"
            stroke="yellow"
            stroke-width="0.5"
          />
        </svg>

        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>UPN</TableHead>
              <TableHead>h</TableHead>
              <TableHead>b</TableHead>
              <TableHead>e</TableHead>
              <TableHead>e1=r</TableHead>
              <TableHead>r1</TableHead>
              <TableHead>h1</TableHead>
              <TableHead>A(cm2)</TableHead>
              <TableHead>P(Kg/m)</TableHead>
              <TableHead>Ix(cm4)</TableHead>
              <TableHead>Wx(cm3)</TableHead>
              <TableHead>ix(cm)</TableHead>
              <TableHead>Iy(cm4)</TableHead>
              <TableHead>Wy(cm3)</TableHead>
              <TableHead>iy(cm)</TableHead>
              <TableHead>m2/m</TableHead>
              <TableHead>UPN</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-bold tracking-wide text-right">
                  {data.UPN}
                </TableCell>
                <TableCell>{data.h}</TableCell>
                <TableCell>{data.b}</TableCell>
                <TableCell>{data.e}</TableCell>
                <TableCell>{data.e1}</TableCell>
                <TableCell>{data.r1}</TableCell>
                <TableCell>{data.h1}</TableCell>
                <TableCell>{data.a}</TableCell>
                <TableCell>{data.p}</TableCell>
                <TableCell>{data.Ix}</TableCell>
                <TableCell>{data.wx}</TableCell>
                <TableCell>{data.ix}</TableCell>
                <TableCell>{data.Iy}</TableCell>
                <TableCell>{data.Wy}</TableCell>
                <TableCell>{data.iy}</TableCell>
                <TableCell>{data.m2m}</TableCell>
                <TableCell className="font-bold tracking-wide text-right">
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
    </Suspense>
  );
};

export default Upn;
