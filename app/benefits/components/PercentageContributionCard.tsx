"use client";

import BasicCard from "@/components/Card/BasicCard";
import EndAdornmentTextField from "@/components/InputField/EndAdornmentTextField";
import BasicSlider from "@/components/Slider/BasicSlider";
import Image from "next/image";
import React from "react";

const PercentageContributionCard = () => {
  const percentageOnChange = () => {
    console.log("something");
  };
  return (
    <BasicCard>
      <div className="flex gap-1 items-center text-base font-semibold">
        <Image
          width={30}
          height={30}
          src={"/icons/piggy-bank-w-bg.svg"}
          alt="piggy bank with light green background"
        ></Image>
        <h6>Pension contribution</h6>
      </div>
      <div className="flex justify-between items-center mt-4 gap-0.5">
        <p className="text-sm font-semibold">Matched pension contribution</p>
        <EndAdornmentTextField
          placeholder="% to contribute"
          onChangeHandler={percentageOnChange}
          type="text"
        />
      </div>
      <BasicSlider width={40} />
      <p className="text-xs text-subtitle mt-4">
        Requires employees to match employer&#39;s contribution
      </p>
    </BasicCard>
  );
};

export default PercentageContributionCard;
