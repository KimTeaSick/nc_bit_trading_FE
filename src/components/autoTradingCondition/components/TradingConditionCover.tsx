import { FC, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  extend?: string;
}

const TradingConditionCover: FC<Props> = ({ title, children, extend }) => {
  return (
    <div
      className={`${extend} w-full bg-indigo-50 rounded-lg h-auto p-3 dark:bg-indigo-300`}
    >
      <p className="font-bold text-2xl">{title}</p>
      <div>{children}</div>
    </div>
  );
};

export default TradingConditionCover;
