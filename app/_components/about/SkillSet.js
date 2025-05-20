import React from "react";
import CompanyDetail from "./_components/CompanyDetail";
import EducationDetail from "./_components/EducationDetail";
import Skill from "./_components/Skill";

const SkillSet = () => {
  return (
    <div className="pt-20 flex flex-col gap-8 md:flex-row md:gap-0 md:justify-between">
      <div className="md:w-2/5">
        <h1 className="text-base md:text-2xl md:font-medium tracking-wide pb-3 md:pb-4">
          skillset
        </h1>
      </div>
      <div className="md:w-3/5 flex flex-col gap-8">
        <div>
          <h2 className="text-xs font-extrabold pb-4">SKILLS</h2>
          <div className="flex flex-col gap-4">
            <Skill
              domain={"Frontend"}
              skills={"ReactJS, TailwindCSS, NextJS"}
            />
            <Skill
              domain={"Backend"}
              skills={
                "Spring/Spring Boot, PostgreSQL ,NodeJS, ExpressJS, MySQL, MongoDB, NextJS"
              }
            />
            <Skill
              domain={"Language"}
              skills={"C/C++, Python, Java, Javascript"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
