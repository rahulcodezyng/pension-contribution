import BasicButton from "@/components/Button/BasicButton";
import ProgressStepper from "@/components/Progress/ProgressStepper";
import Image from "next/image";

type Props = {
  variant?: string;
};

const ConfigureContribution = ({ variant = "" }: Props) => {
  return (
    <section className={`${variant} mt-8`}>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font">Configure Contribution</h2>
          <h6 className="text-sm text-subtitle mt-1">
            Configure the contributions for the benefits in your package
          </h6>
        </div>
        <BasicButton
          btnText="Cancel"
          startAdornment={
            <Image
              src="/icons/close.svg"
              width={14}
              height={14}
              alt="close icon"
            />
          }
        ></BasicButton>
      </div>
      <div className="grid grid-cols-5 gap-1">
        {[1, 2, 3, 4, 5].map((item, idx) => {
          return (
            <ProgressStepper
              bgActive="bg-primary"
              key={item}
              isActive={idx <= 3}
              variant={`h-1.5`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ConfigureContribution;
