import React from "react";
import { useEffect, useState } from "react";

import worksJson from "@/api/works.json";
import { Button } from "@/components/ui/button";

export interface WorkData {
  [key: string]: {
    ID: string;
    button: string;
    descrip: string;
    place: string;
    area: string;
    sector: string;
  };
}

interface WorksProps {
  setCurrentData: React.Dispatch<
    React.SetStateAction<WorkData[keyof WorkData]>
  >;
}

const Works: React.FC<WorksProps> = ({ setCurrentData }) => {
  const [selectedButton, setSelectedButton] = useState<string>("");

  // JSON FILE////////////////////////////////////////////////////////////////
  const works: WorkData = worksJson;

  useEffect(() => {
    const keys = Object.keys(works);
    const lastDataKey = keys[keys.length - 1];
    setCurrentData(works[lastDataKey]);
    setSelectedButton(lastDataKey);
  }, [works]);
  // JSON FILE////////////////////////////////////////////////////////////////

  return (
    <div
      id="works"
      className="px-4 py-3 flex flex-col justify-center sm:flex-col lg:flex-row xl:flex-row items-baseline gap-4"
    >
      <div className="flex flex-row w-full justify-between sm:w-full lg:w-2/3 xl:w-2/3">
        {Object.keys(works)
          .reverse()
          .map((key) => (
            <Button
              key={key}
              className={`w-24 h-10 text-lg ${
                selectedButton === key ? "bg-sky-500 text-white" : ""
              }`}
              onClick={() => {
                setCurrentData(works[key]);
                setSelectedButton(key);
              }}
            >
              {works[key].button}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Works;