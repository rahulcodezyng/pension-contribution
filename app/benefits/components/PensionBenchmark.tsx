import Image from "next/image";
import BasicCard from "@/components/Card/BasicCard";
import RangeTowerIndicator from "@/components/Progress/RangeTowerIndicator";
import BasicStepper from "@/components/Progress/BasicStepper";

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
        <div className="bg-secondary-light flex gap-1 text-primary font-semibold text-xs px-2 py-1 rounded-md items-center">
          <p>Low</p>
          <div className="flex items-end">
            {[2.5, 5, 7.5].map((range, idx) => {
              return (
                <RangeTowerIndicator
                  key={range}
                  isActive={idx === 0}
                  height={range}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {[1, 2, 3].map((item, idx) => {
          return (
            <BasicStepper
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
