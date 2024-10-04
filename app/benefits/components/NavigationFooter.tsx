"use client";
import BasicButton from "@/components/Button/BasicButton";
import Image from "next/image";

const NavigationFooter = () => {
  return (
    <div className="flex justify-between mb-8">
      <BasicButton
        onBtnClick={() => {}}
        btnText="Back"
        startAdornment={
          <Image
            src="/icons/previous.svg"
            width={20}
            height={20}
            alt="previous button"
          />
        }
        variant="px-8 py-3"
      ></BasicButton>
      <BasicButton
        onBtnClick={() => {}}
        btnText="Next"
        endAdornment={
          <Image
            src="/icons/next.svg"
            width={20}
            height={20}
            alt="next button"
          />
        }
        variant="px-8 py-3 bg-black text-white"
      ></BasicButton>
    </div>
  );
};

export default NavigationFooter;
