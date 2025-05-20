import React from "react";

const Skill = ({ domain, skills }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-sm font-medium text-gray-900">{domain}</h4>
      <p className="text-sm text-gray-500 font-normal">{skills}</p>
    </div>
  );
};

export default Skill;
