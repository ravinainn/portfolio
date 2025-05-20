import React from "react";

const EducationDetail = ({ school, location, course, marks, batch }) => {
  return (
    <div>
      <h4 className="text-sm font-medium text-gray-900">
        <span className="">{school}</span> • <span>{location}</span>
      </h4>
      <p className="text-sm text-gray-500 font-normal">
        {course} - <span className="text-gray-900 font-medium">{marks}</span>
      </p>
      <p className="text-sm text-gray-500 font-normal">{batch}</p>
    </div>
  );
};

export default EducationDetail;
