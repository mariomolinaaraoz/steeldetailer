import React from "react";

interface TitleSectionProps {
  title: string;
  subtitle: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle }) => {
  return (
    <div id="title" className="grid justify-items-center w-full gap-14">
      <h1 className="text-2xl shadow-lg shadow-slate-50 lg:text-4xl xltext-4xl">
        {title}
      </h1>
      <p className="text-lg shadow-lg shadow-slate-50 hidden sm:hidden lg:grid xl:grid">
        {subtitle}
      </p>
    </div>
  );
};

export default TitleSection;