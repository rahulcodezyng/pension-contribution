type Props = {
  children: React.ReactNode;
  variant?: string;
};

const BasicCard = ({ children, variant = "" }: Props) => {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 px-3 py-3 ${variant}`}
    >
      {children}
    </div>
  );
};

export default BasicCard;
