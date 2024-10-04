"use client"

import { useState } from "react";
import EndAdornmentTextField from "@/components/InputField/EndAdornmentTextField";
import BasicRangeSlider from "@/components/Slider/BasicRangeSlider";

const enum Limits {
  Max = 10,
}

const MatchedPension = () => {
  const [sliderValue, setSliderValue] = useState(4);
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setSliderValue(newValue);
  };

  const handlePercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue)) {
      if (newValue <= Limits.Max) {
        setSliderValue(newValue);
      }
    }
  };
  return (
    <>
      <div className="flex justify-between items-center mt-4 gap-0.5">
        <p className="text-sm font-semibold">Matched pension contribution</p>
        <EndAdornmentTextField
          value={sliderValue}
          placeholder="% to contribute"
          onChangeHandler={handlePercentageChange}
          type="text"
        />
      </div>
      <BasicRangeSlider
        onChange={handleSliderChange}
        maxValue={Limits.Max}
        value={sliderValue}
      />
    </>
  );
};

export default MatchedPension;
