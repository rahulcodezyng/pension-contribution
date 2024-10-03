"use client";
import BasicButton from "@/components/Button/BasicButton";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex justify-between">
      <BasicButton
        onBtnClick={() => {}}
        btnText="Back"
        startAdornment={
          <Image src="/icons/previous.svg" width={20} height={20} alt="" />
        }
        variant="px-4 py-3"
      ></BasicButton>
      <BasicButton
        onBtnClick={() => {}}
        btnText="Next"
        endAdornment={
          <Image src="/icons/next.svg" width={20} height={20} alt="" />
        }
        variant="px-4 py-3 bg-black text-white"
      ></BasicButton>
    </div>
  );
};

export default Footer;
