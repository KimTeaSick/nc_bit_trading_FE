import { Dispatch, FC, SetStateAction } from "react";
import { PagiNationSection } from "./PagiNation.styked";

interface PaginNationProps {
  page: string;
  setNowPage: Dispatch<SetStateAction<number>>;
}

const P_BUTTON_CLASS = "cursor-pointer font-bold dark:text-white";

const PaginNation: FC<PaginNationProps> = ({ page, setNowPage }) => {
  const count = new Array(page).fill("");

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-1">
      {count.map((value, index) => (
        <span
          className={P_BUTTON_CLASS}
          onClick={() => setNowPage(index + 1)}
          key={index}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
};

export default PaginNation;
