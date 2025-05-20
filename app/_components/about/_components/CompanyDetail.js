import React from "react";

const CompanyDetail = ({ role, companyName, location, start, end }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-sm font-medium text-gray-900">
        <span className="">{role}</span> @ <span>{companyName}</span> •{" "}
        <span>{location}</span>
      </h4>
      <p className="text-sm text-gray-500 font-normal">
        {start} - {end}
      </p>
    </div>
  );
};

export default CompanyDetail;
