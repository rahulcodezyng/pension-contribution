import styles from "./BasicRangeSlider.module.css";

interface Props {
  variant?: string;
  value: number;
  maxValue?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasicRangerSlider = ({
  variant = "",
  value = 6,
  maxValue = 12,
  onChange,
}: Props) => {
  return (
    <div className="mt-5">
      <div
        className={`bg-gray-200 rounded-full h-2 dark:bg-gray-700 relative ${variant}`}
      >
        <input
          type="range"
          min="0"
          max={maxValue}
          value={value}
          onChange={onChange}
          className={`w-full ${styles["range-input"]} absolute top-0 h-2 z-10 cursor-pointer appearance-none bg-transparent ring-10px`}
        />
        <div
          className="bg-primary h-2 rounded-full relative"
          style={{ width: `${(value / maxValue) * 100}%` }}
        ></div>
        <div className="absolute grid grid-cols-4 w-full h-2 top-0">
          <div className="border-r-2 h-2 border-r-gray-300"></div>
          <div className="border-r-2 h-2 border-r-gray-300"></div>
          <div className="border-r-2 h-2 border-r-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default BasicRangerSlider;
