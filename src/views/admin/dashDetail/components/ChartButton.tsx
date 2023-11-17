import { Dispatch, SetStateAction } from "react";
import { CHART_TERM } from "../variables/chartTerm";

type Props = {
  setValue: Dispatch<SetStateAction<number>>;
};

export const ChartButton = ({ setValue }: Props) => {
  return (
    <div className="flex gap-3">
      {CHART_TERM.map((term, index) => (
        <div
          className="bg-navy-700 w-12 h-12 justify-center text-bold text-white items-center flex rounded-md cursor-pointer"
          onClick={() => setValue(term.value)}
          key={index}
        >
          {term.key}
        </div>
      ))}
    </div>
  );
};
