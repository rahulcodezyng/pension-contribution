import React from "react";

type Props = {
  bgActive: string;
  variant?: string;
  isActive: boolean;
};

const BasicStepper = ({ isActive, variant = "", bgActive }: Props) => {
  return (
    <div
      className={`rounded-full h-2 mt-5 relative ${
        isActive ? bgActive : "bg-gray-200"
      } ${variant} `}
    ></div>
  );
};

export default BasicStepper;
