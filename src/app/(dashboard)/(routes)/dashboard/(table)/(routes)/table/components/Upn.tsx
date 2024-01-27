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
      <svg xmlns="http://www.w3.org/2000/svg" width="800.000" height="600.000" viewBox="0.0 0.0 800.000 600.000" version="1.1">
  <title>Produce by Acme CAD Converter</title>
  <desc>Produce by Acme CAD Converter</desc>
<path d="M444.45 449.9L444.45 186.86M444.45 186.86L444.45 186.86M444.45 186.86L444.28 182.88M444.28 182.88L443.74 178.93M443.74 178.93L442.87 175.04M442.87 175.04L441.64 171.25M441.64 171.25L440.09 167.58M440.09 167.58L438.21 164.06M438.21 164.06L436.04 160.73M436.04 160.73L433.57 157.6M433.57 157.6L430.83 154.7M430.83 154.7L427.85 152.06M427.85 152.06L424.64 149.69M424.64 149.69L421.24 147.62M421.24 147.62L417.66 145.86M417.66 145.86L413.95 144.42M413.95 144.42L410.12 143.32M410.12 143.32L406.21 142.56M406.21 142.56L402.24 142.16M402.24 142.16L247.29 133.28M247.29 133.28L247.29 133.28M247.29 133.28L244.49 132.94M244.49 132.94L241.76 132.26M241.76 132.26L239.13 131.23M239.13 131.23L236.65 129.88M236.65 129.88L234.36 128.23M234.36 128.23L232.3 126.3M232.3 126.3L230.49 124.13M230.49 124.13L228.98 121.75M228.98 121.75L227.77 119.2M227.77 119.2L226.9 116.52M226.9 116.52L226.36 113.75M226.36 113.75L226.19 110.93M226.19 110.93L226.19 94.51M226.19 94.51L478.03 94.51M478.03 94.51L478.03 542.24M478.03 542.24L226.19 542.24M226.19 542.24L226.19 525.82M226.19 525.82L226.19 525.82M226.19 525.82L226.36 523M226.36 523L226.9 520.23M226.9 520.23L227.77 517.55M227.77 517.55L228.98 515M228.98 515L230.49 512.62M230.49 512.62L232.3 510.45M232.3 510.45L234.36 508.52M234.36 508.52L236.65 506.87M236.65 506.87L239.13 505.52M239.13 505.52L241.76 504.5M241.76 504.5L244.49 503.81M244.49 503.81L247.29 503.47M247.29 503.47L402.24 494.6M402.24 494.6L402.24 494.6M402.24 494.6L406.21 494.19M406.21 494.19L410.12 493.43M410.12 493.43L413.95 492.33M413.95 492.33L417.66 490.9M417.66 490.9L421.24 489.14M421.24 489.14L424.64 487.06M424.64 487.06L427.85 484.7M427.85 484.7L430.83 482.05M430.83 482.05L433.57 479.16M433.57 479.16L436.04 476.03M436.04 476.03L438.21 472.69M438.21 472.69L440.09 469.18M440.09 469.18L441.64 465.51M441.64 465.51L442.87 461.71M442.87 461.71L443.74 457.83M443.74 457.83L444.28 453.88M444.28 453.88L444.45 449.9"
fill="none" stroke="white" stroke-width="3"/>

<path d="M481.53 94.51L535.04 94.51"
fill="none" stroke="yellow" stroke-width="0.5"/>

<path d="M481.53 542.24L535.04 542.24"
fill="none" stroke="yellow" stroke-width="0.5"/>

<path d="M529.45 108.51L529.45 528.25"
fill="none" stroke="yellow" stroke-width="0.5"/>

<path d="M527.11 108.51L529.45 94.51 529.45 94.51 531.78 108.51 527.11 108.51Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M527.11 528.25L529.45 542.24 529.45 542.24 531.78 528.25 527.11 528.25Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M525.95 343.98L503.56 343.98M515.29 343.98L512.09 340.78M512.09 340.78L511.02 338.65M511.02 338.65L511.02 335.45M511.02 335.45L512.09 333.32M512.09 333.32L515.29 332.26M515.29 332.26L525.95 332.26"
fill="none" stroke="white" stroke-width="2"/>

<path d="M478.03 94.51L478.03 94.51"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M478.03 542.24L478.03 542.24"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M529.45 542.24L529.45 542.24"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M226.19 91.02L226.19 22.17"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M478.03 91.02L478.03 22.17"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M240.18 27.77L464.04 27.77"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M240.18 25.43L226.19 27.77 226.19 27.77 240.18 30.1 240.18 25.43Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M464.04 25.43L478.03 27.77 478.03 27.77 464.04 30.1 464.04 25.43Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M345.71 24.08L345.71 1.7M345.71 12.36L347.85 10.23M347.85 10.23L349.98 9.16M349.98 9.16L353.18 9.16M353.18 9.16L355.31 10.23M355.31 10.23L357.44 12.36M357.44 12.36L358.51 15.56M358.51 15.56L358.51 17.69M358.51 17.69L357.44 20.89M357.44 20.89L355.31 23.02M355.31 23.02L353.18 24.08M353.18 24.08L349.98 24.08M349.98 24.08L347.85 23.02M347.85 23.02L345.71 20.89"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M226.19 94.51L226.19 94.51"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M478.03 94.51L478.03 94.51"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M478.03 27.77L478.03 27.77"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M380.7 449.9L262.82 449.9"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M440.96 186.86L262.82 186.86"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M268.41 435.9L268.41 200.85"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M266.08 435.9L268.41 449.9 268.41 449.9 270.75 435.9 266.08 435.9Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M266.08 200.85L268.41 186.86 268.41 186.86 270.75 200.85 266.08 200.85Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M264.87 331.17L242.48 331.17M254.21 331.17L251.01 327.97M251.01 327.97L249.95 325.84M249.95 325.84L249.95 322.64M249.95 322.64L251.01 320.51M251.01 320.51L254.21 319.44M254.21 319.44L264.87 319.44M246.75 310.91L245.68 308.78M245.68 308.78L242.48 305.58M242.48 305.58L264.87 305.58"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M384.2 449.9L384.2 449.9"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M444.45 186.86L444.45 186.86"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M268.41 186.86L268.41 186.86"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M195.13 149.96L219.19 132.39"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M196.01 144.99L187.2 132.94M190.98 138.1L189.95 134.89M189.95 134.89L190.42 131.91M190.42 131.91L191.51 129.79M191.51 129.79L194.09 127.91"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M248.57 110.93L230.49 124.14"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M217.82 130.5L230.49 124.14 230.49 124.14 220.57 134.27 217.82 130.5Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M230.49 124.14L230.49 124.14"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M248.57 110.93L248.57 110.93"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M299.54 318.38L349.55 318.38M420.63 318.38L491.71 318.38M562.78 318.38L612.8 318.38"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M352.11 395.79L352.11 353.91M352.11 282.84L352.11 240.97"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M395.84 445.41L419.69 473.28"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M400.86 445.9L412.2 436.2M407.34 440.35L410.47 439.09M410.47 439.09L413.47 439.32M413.47 439.32L415.67 440.25M415.67 440.25L417.75 442.68"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M421.46 471.77L428.79 483.91 428.79 483.91 417.92 474.8 421.46 471.77Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M428.79 483.91L428.79 483.91"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M399.68 449.9L399.68 449.9"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M348.61 94.51L346.51 94.51"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M353.05 139.14L357.71 139.14"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M352.11 125.15L352.11 108.51"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M352.11 94.51L352.11 41.46"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M349.78 125.15L352.11 139.14 352.11 139.14 354.44 125.15 349.78 125.15Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M349.78 108.51L352.11 94.51 352.11 94.51 354.44 108.51 349.78 108.51Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M339.85 71.17L339.85 58.38M339.85 58.38L337.72 58.38M337.72 58.38L335.59 59.44M335.59 59.44L334.52 60.51M334.52 60.51L333.46 62.64M333.46 62.64L333.46 65.84M333.46 65.84L334.52 67.97M334.52 67.97L336.66 70.1M336.66 70.1L339.85 71.17M339.85 71.17L341.99 71.17M341.99 71.17L345.18 70.1M345.18 70.1L347.32 67.97M347.32 67.97L348.38 65.84M348.38 65.84L348.38 62.64M348.38 62.64L347.32 60.51M347.32 60.51L345.18 58.38M330.26 51.98L329.19 49.85M329.19 49.85L326 46.65M326 46.65L348.38 46.65"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M352.11 94.51L352.11 94.51"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M349.55 139.14L349.55 139.14"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M352.11 139.14L352.11 139.14"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M226.19 545.74L226.19 598.3"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M352.11 545.74L352.11 598.3"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M240.18 592.71L338.12 592.71"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M240.18 590.37L226.19 592.71 226.19 592.71 240.18 595.04 240.18 590.37Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M338.12 590.37L352.11 592.71 352.11 592.71 338.12 595.04 338.12 590.37Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M259.83 587.23L259.83 564.84M259.83 575.5L261.96 573.37M261.96 573.37L264.1 572.3M264.1 572.3L267.3 572.3M267.3 572.3L269.43 573.37M269.43 573.37L271.56 575.5M271.56 575.5L272.63 578.7M272.63 578.7L272.63 580.83M272.63 580.83L271.56 584.03M271.56 584.03L269.43 586.16M269.43 586.16L267.3 587.23M267.3 587.23L264.1 587.23M264.1 587.23L261.96 586.16M261.96 586.16L259.83 584.03M299.28 560.58L280.09 594.69M304.61 570.17L304.61 569.1M304.61 569.1L305.67 566.97M305.67 566.97L306.74 565.91M306.74 565.91L308.87 564.84M308.87 564.84L313.13 564.84M313.13 564.84L315.27 565.91M315.27 565.91L316.33 566.97M316.33 566.97L317.4 569.1M317.4 569.1L317.4 571.24M317.4 571.24L316.33 573.37M316.33 573.37L314.2 576.57M314.2 576.57L303.54 587.23M303.54 587.23L318.46 587.23"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M226.19 542.24L226.19 542.24"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M352.11 542.24L352.11 542.24"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M352.11 592.71L352.11 592.71"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M352.11 545.74L352.11 598.3"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M478.03 545.74L478.03 598.3"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M366.1 592.71L464.04 592.71"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M366.1 590.37L352.11 592.71 352.11 592.71 366.1 595.04 366.1 590.37Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M464.04 590.37L478.03 592.71 478.03 592.71 464.04 595.04 464.04 590.37Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M385.76 587.23L385.76 564.84M385.76 575.5L387.89 573.37M387.89 573.37L390.02 572.3M390.02 572.3L393.22 572.3M393.22 572.3L395.35 573.37M395.35 573.37L397.48 575.5M397.48 575.5L398.55 578.7M398.55 578.7L398.55 580.83M398.55 580.83L397.48 584.03M397.48 584.03L395.35 586.16M395.35 586.16L393.22 587.23M393.22 587.23L390.02 587.23M390.02 587.23L387.89 586.16M387.89 586.16L385.76 584.03M425.2 560.58L406.01 594.69M430.53 570.17L430.53 569.1M430.53 569.1L431.59 566.97M431.59 566.97L432.66 565.91M432.66 565.91L434.79 564.84M434.79 564.84L439.06 564.84M439.06 564.84L441.19 565.91M441.19 565.91L442.25 566.97M442.25 566.97L443.32 569.1M443.32 569.1L443.32 571.24M443.32 571.24L442.25 573.37M442.25 573.37L440.12 576.57M440.12 576.57L429.46 587.23M429.46 587.23L444.39 587.23"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M352.11 542.24L352.11 542.24"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M478.03 542.24L478.03 542.24"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M478.03 592.71L478.03 592.71"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M444.45 384.66L444.45 382.56"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M478.03 384.66L478.03 382.56"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M430.46 388.16L416.47 388.16"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M492.02 388.16L506.02 388.16"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M444.45 388.16L478.03 388.16"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M430.46 385.83L444.45 388.16 444.45 388.16 430.46 390.49 430.46 385.83Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M492.02 385.83L478.03 388.16 478.03 388.16 492.02 390.49 492.02 385.83Z"
fill-rule="evenodd" fill="yellow"/>
<path d="M454.85 375.95L467.64 375.95M467.64 375.95L467.64 373.82M467.64 373.82L466.57 371.69M466.57 371.69L465.51 370.62M465.51 370.62L463.37 369.55M463.37 369.55L460.18 369.55M460.18 369.55L458.04 370.62M458.04 370.62L455.91 372.75M455.91 372.75L454.85 375.95M454.85 375.95L454.85 378.08M454.85 378.08L455.91 381.28M455.91 381.28L458.04 383.41M458.04 383.41L460.18 384.48M460.18 384.48L463.37 384.48M463.37 384.48L465.51 383.41M465.51 383.41L467.64 381.28"
fill="none" stroke="yellow" stroke-width="0.5"/>
<path d="M444.45 388.16L444.45 388.16"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M478.03 388.16L478.03 388.16"
fill="none" stroke="black" stroke-width="0.5"/>
<path d="M478.03 388.16L478.03 388.16"
fill="none" stroke="black" stroke-width="0.5"/>
</svg>




        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800.000"
          height="600.000"
          viewBox="0.0 0.0 800.000 600.000"
          version="1.1"
        >          
          <path
            d="M276.95 475.25L276.95 124.75M276.95 124.75L276.95 124.75M276.95 124.75L277.14 120M277.14 120L277.71 115.28M277.71 115.28L278.65 110.62M278.65 110.62L279.95 106.06M279.95 106.06L281.62 101.61M281.62 101.61L283.64 97.3M283.64 97.3L285.99 93.18M285.99 93.18L288.66 89.25M288.66 89.25L291.64 85.54M291.64 85.54L294.9 82.09M294.9 82.09L298.43 78.91M298.43 78.91L302.2 76.01M302.2 76.01L306.18 73.43M306.18 73.43L310.36 71.17M310.36 71.17L314.71 69.25M314.71 69.25L319.2 67.69M319.2 67.69L323.79 66.48M323.79 66.48L328.47 65.65M328.47 65.65L333.2 65.18M333.2 65.18L539.67 53.36M539.67 53.36L539.67 53.36M539.67 53.36L542.87 53M542.87 53L546.02 52.3M546.02 52.3L549.07 51.26M549.07 51.26L551.99 49.9M551.99 49.9L554.75 48.23M554.75 48.23L557.32 46.28M557.32 46.28L559.65 44.06M559.65 44.06L561.74 41.6M561.74 41.6L563.54 38.93M563.54 38.93L565.05 36.08M565.05 36.08L566.24 33.08M566.24 33.08L567.1 29.98M567.1 29.98L567.62 26.8M567.62 26.8L567.8 23.58M567.8 23.58L567.8 1.7M567.8 1.7L232.2 1.7M232.2 1.7L232.2 598.3M232.2 598.3L567.8 598.3M567.8 598.3L567.8 576.42M567.8 576.42L567.8 576.42M567.8 576.42L567.62 573.2M567.62 573.2L567.1 570.02M567.1 570.02L566.24 566.92M566.24 566.92L565.05 563.92M565.05 563.92L563.54 561.07M563.54 561.07L561.74 558.4M561.74 558.4L559.65 555.94M559.65 555.94L557.32 553.72M557.32 553.72L554.75 551.77M554.75 551.77L551.99 550.1M551.99 550.1L549.07 548.74M549.07 548.74L546.02 547.7M546.02 547.7L542.87 547M542.87 547L539.67 546.64M539.67 546.64L333.2 534.82M333.2 534.82L333.2 534.82M333.2 534.82L328.47 534.35M328.47 534.35L323.79 533.52M323.79 533.52L319.2 532.31M319.2 532.31L314.71 530.75M314.71 530.75L310.36 528.83M310.36 528.83L306.18 526.57M306.18 526.57L302.2 523.99M302.2 523.99L298.43 521.09M298.43 521.09L294.9 517.91M294.9 517.91L291.64 514.46M291.64 514.46L288.66 510.75M288.66 510.75L285.99 506.82M285.99 506.82L283.64 502.7M283.64 502.7L281.62 498.39M281.62 498.39L279.95 493.94M279.95 493.94L278.65 489.38M278.65 489.38L277.71 484.72M277.71 484.72L277.14 480M277.14 480L276.95 475.25"
            fill="none"
            stroke="white"
            stroke-width="2"
          />
        </svg>         */}
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
