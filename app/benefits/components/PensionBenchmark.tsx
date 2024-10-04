import Image from "next/image";
import BasicCard from "@/components/Card/BasicCard";
import ProgressStepper from "@/components/Progress/ProgressStepper";
import BenchmarkRankingIndicator from "@/components/Indicator/BenchmarkRankingIndicator";
import { benchmarkRanking } from "../utils/data";

const PensionBenchmark = () => {
  return (
    <BasicCard>
      <div className="flex justify-between">
        <div className="flex gap-1 items-center text-base font-semibold">
          <Image
            width={17}
            height={17}
            src={"/icons/piggy-bank-02.svg"}
            alt="piggy bank"
          ></Image>
          <h6 className="text-sm">Pension benchmark ranking</h6>
        </div>
        <BenchmarkRankingIndicator rankingData={benchmarkRanking} label="Low" />
      </div>
      <div className="grid grid-cols-3 gap-1">
        {[1, 2, 3].map((item, idx) => {
          return (
            <ProgressStepper
              bgActive="bg-secondary-light"
              key={item}
              isActive={idx === 0}
            />
          );
        })}
      </div>
    </BasicCard>
  );
};

export default PensionBenchmark;
