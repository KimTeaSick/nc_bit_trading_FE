import { FC, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const TradingConditionCover: FC<Props> = ({ title, children }) => {
  return (
    <div className="w-full bg-navy-50 rounded-lg h-auto p-5">
      <p className="font-bold text-2xl">{title}</p>
      <div>{children}</div>
    </div>
  );
};

export default TradingConditionCover;
