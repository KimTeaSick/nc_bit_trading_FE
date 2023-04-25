import { FC, useState } from "react";

interface WarningButtonProps {
  isWarning: boolean;
  event: () => void;
}

const WarningButton: FC<WarningButtonProps> = ({ isWarning, event }) => {
  const [flag, setFlag] = useState<boolean>(isWarning);
  return (
    <button
      onClick={() => {
        setFlag(!flag);
        event();
      }}
      className={` border-solid border-red w-28 rounded h-10 text-white font-bold m-4 ${
        flag ? "bg-red-500" : "bg-blue-700"
      } `}
    >
      {flag ? "유의종목 해제" : "유의종목 등록"}
    </button>
  );
};

export default WarningButton;
