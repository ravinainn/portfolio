import React from "react";
import CompanyDetail from "./_components/CompanyDetail";
import EducationDetail from "./_components/EducationDetail";

const Experience = () => {
  return (
    <div className="pt-20 flex flex-col gap-8 md:flex-row md:gap-0 md:justify-between">
      <div className="md:w-2/5">
        <h1 className="text-base md:text-2xl md:font-medium tracking-wide pb-3 md:pb-4">
          experience
        </h1>
      </div>
      <div className="md:w-3/5 flex flex-col gap-8">
        <div>
          <h2 className="text-xs font-extrabold pb-4">EXPERIENCE</h2>
          <div className="flex flex-col gap-4">
            <CompanyDetail
              role={"Software Engineer Intern"}
              companyName={"Veersa Technologies"}
              location={"Noida"}
              start={"Aug 2024"}
              end={"Present"}
            />
            <CompanyDetail
              role={"SDE Intern"}
              companyName={"Ai-Shala Technologies"}
              location={"Delhi"}
              start={"July 2024"}
              end={"Aug 2024"}
            />
          </div>
        </div>
        <div>
          <h2 className="text-xs font-extrabold pb-4">EDUCATION</h2>
          <div className="flex flex-col gap-4">
            <EducationDetail
              school={"Guru Gobind Singh Indraprastha University"}
              location={"Delhi"}
              course={"Bachelor of Technology in CSE"}
              marks={"9.1 CGPA"}
              batch={"2021-2025"}
            />
            <EducationDetail
              school={"Vivekanand School"}
              location={"Delhi"}
              course={"High School"}
              marks={"93.25 %"}
              batch={"2020-2021"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
