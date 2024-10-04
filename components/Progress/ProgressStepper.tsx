type Props = {
  bgActive: string;
  variant?: string;
  isActive: boolean;
};

const ProgressStepper = ({ isActive, variant = "", bgActive }: Props) => {
  return (
    <div
      className={`rounded-full h-2 mt-5 relative ${
        isActive ? bgActive : "bg-gray-200"
      } ${variant} `}
    ></div>
  );
};

export default ProgressStepper;
