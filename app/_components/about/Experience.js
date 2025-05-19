import React from "react";
import CompanyDetail from "./_components/CompanyDetail";
import EducationDetail from "./_components/EducationDetail";

const Experience = () => {
  return (
    <div className="pt-20 flex flex-col gap-8 md:flex-row md:gap-0 md:justify-between">
      <div className="md:w-1/2">
        <h1 className="text-base md:text-2xl md:font-medium tracking-wide pb-3 md:pb-4">
          experience
        </h1>
      </div>
      <div className="md:w-1/2 flex flex-col gap-8">
        <div>
          <h2 className="text-xs font-extrabold pb-4">EXPERIENCE</h2>
          <div className="flex flex-col gap-4">
            <CompanyDetail />
            <CompanyDetail />
            <CompanyDetail />
            <CompanyDetail />
          </div>
        </div>
        <div>
          <h2 className="text-xs font-extrabold pb-4">EDUCATION</h2>
          <div className="flex flex-col gap-4">
            <EducationDetail />
            <EducationDetail />
            <EducationDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
