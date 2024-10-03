type Props = {
  onBtnClick: () => void;
  btnText: string;
  variant?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

const BasicButton = ({
  btnText,
  variant = "",
  startAdornment,
  endAdornment,
  onBtnClick,
}: Props) => {
  return (
    <button
      onClick={onBtnClick}
      className={`text-sm  py-1.5 border-[1px] border-gray-100 px-2 rounded-lg flex items-center gap-1 ${variant} `}
    >
      {startAdornment && <span>{startAdornment}</span>}
      {btnText}
      {endAdornment && <span>{endAdornment}</span>}
    </button>
  );
};

export default BasicButton;
