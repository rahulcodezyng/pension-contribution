import PensionBenchmark from "./components/PensionBenchmark";
import PercentageContributionSection from "./components/PercentageContributionSection";
import ConfigureContribution from "./components/ConfigureContribution";
import NavigateFooter from "./components/NavigateFooter";

const Page = () => {
  return (
    <main className="max-w-container m-auto flex flex-col justify-between h-screen">
      <div>
        <ConfigureContribution />
        <div className="max-w-lg m-auto">
          <PercentageContributionSection />
          <PensionBenchmark />
        </div>
      </div>
      <div className="max-w-lg w-full mx-auto mt-3">
        <NavigateFooter />
      </div>
    </main>
  );
};

export default Page;
