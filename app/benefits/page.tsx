import ConfigureContribution from "./components/ConfigureContribution";
import Footer from "./components/Footer";
import PensionBenchmark from "./components/PensionBenchmark";
import PercentageContributionSection from "./components/PercentageContributionSection";

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
        <Footer />
      </div>
    </main>
  );
};

export default Page;
