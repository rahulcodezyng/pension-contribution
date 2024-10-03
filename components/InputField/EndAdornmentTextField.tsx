import React from "react";

type Props = {
  variant?: string;
  type?: string;
  placeholder: string;
  onChangeHandler: () => void;
};

const EndAdornmentTextField = ({
  variant = "",
  type,
  placeholder,
  onChangeHandler,
}: Props) => {
  return (
    <div className={`relative max-w-40 ${variant}`}>
      <label htmlFor="pension-contribution" className="sr-only">
        {placeholder}
      </label>
      <input
        onChange={onChangeHandler}
        type={type || "text"}
        className="w-full pl-3 text-sm pr-10 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
      <span className="absolute inset-y-0 text-sm right-0 flex items-center pr-3">
        %
      </span>
    </div>
  );
};

export default EndAdornmentTextField;
