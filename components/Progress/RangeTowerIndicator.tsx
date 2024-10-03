type Props = {
  isActive: boolean;
  height: number;
  variant?: string;
};

const RangeTowerIndicator = ({ isActive, height, variant = "" }: Props) => {
  return (
    <div
      className={`w-[3px] rounded-md ${
        isActive ? "bg-primary" : "bg-white"
      } transition-all duration-300 ${variant}`}
      style={{
        height: `${height}px`,
      }}
    ></div>
  );
};

export default RangeTowerIndicator;
