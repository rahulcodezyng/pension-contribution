import ConfigureContribution from "./components/ConfigureContribution";
import Footer from "./components/Footer";
import PensionBenchmark from "./components/PensionBenchmark";
import PercentageContributionCard from "./components/PercentageContributionCard";

const Page = () => {
  return (
    <main className="max-w-container m-auto">
      <ConfigureContribution />
      <div className="max-w-lg m-auto">
        <section className="mt-14 mb-6">
          <h2 className="text-xl xl:text-2xl font-bold">
            Select the amount you want to contribute
          </h2>
          <p className="text-slate-600 text-sm mt-2 mb-6">
            Choose the pension percentage you want to offer to your employees
          </p>

          <PercentageContributionCard />
        </section>
        <PensionBenchmark />
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Page;
