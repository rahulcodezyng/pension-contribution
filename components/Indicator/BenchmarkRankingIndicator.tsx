import React from "react";
import RangeTowerIndicator from "../Progress/RangeTowerIndicator";
import { TBenchmarkRanking } from "@/utils/types/benefitTypes";

export type Props = {
  label: string;
  rankingData: TBenchmarkRanking[];
};

const BenchmarkRankingIndicator = ({ label, rankingData }: Props) => {
  return (
    <div className="bg-secondary-light flex gap-1 text-primary font-semibold text-xs px-2 py-1 rounded-md items-center">
      <p>{label}</p>
      <div className="flex items-end">
        {rankingData.map((range) => {
          return (
            <RangeTowerIndicator
              key={range.id}
              isActive={range.isActive}
              height={range.height}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BenchmarkRankingIndicator;
