import { FC, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const TradingConditionCover: FC<Props> = ({ title, children }) => {
  return (
    <div className="w-full bg-indigo-50 rounded-lg h-auto p-3">
      <p className="font-bold text-2xl">{title}</p>
      <div>{children}</div>
    </div>
  );
};

export default TradingConditionCover;
