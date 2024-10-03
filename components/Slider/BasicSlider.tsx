import React from "react";

type Props = {
  variant?: string;
  width: number;
};

const BasicSlider = ({ variant = "", width }: Props) => {
  return (
    <div
      className={`bg-gray-200 rounded-full h-2 dark:bg-gray-700 mt-5 relative ${variant}`}
    >
      <div
        className={`bg-primary h-2 rounded-full relative`}
        style={{ width: `${width}%` }}
      >
        <span className="absolute border-[7px] w-5 h-5 bg-white -right-[0.4px]  -top-[77%] rounded-full border-primary"></span>
      </div>
      <div className="absolute grid grid-cols-4 w-full h-2  top-0">
        <div className="border-r-2 h-2  border-r-gray-300"></div>
        <div className="border-r-2 h-2  border-r-gray-300"></div>
        <div className="border-r-2 h-2  border-r-gray-300"></div>
      </div>
    </div>
  );
};

export default BasicSlider;
