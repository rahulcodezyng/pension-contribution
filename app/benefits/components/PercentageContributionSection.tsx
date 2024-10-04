"use client"


import BasicCard from "@/components/Card/BasicCard";
import Image from "next/image";
import MatchedPension from "./MatchedPension";

const PercentageContributionSection = () => {
  return (
    <section className="mt-14 mb-6">
      <h2 className="text-xl xl:text-2xl font-bold">
        Select the amount you want to contribute
      </h2>
      <p className="text-slate-600 text-sm mt-2 mb-6">
        Choose the pension percentage you want to offer to your employees
      </p>
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
        <MatchedPension />
        <p className="text-xs text-subtitle mt-4">
          Requires employees to match employer&#39;s contribution
        </p>
      </BasicCard>
    </section>
  );
};

export default PercentageContributionSection;
