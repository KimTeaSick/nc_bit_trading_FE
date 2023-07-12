import { Dispatch, FC, SetStateAction } from "react";
import { PagiNationSection } from "./PagiNation.styked";

interface PaginNationProps {
  page: string;
  setNowPage: Dispatch<SetStateAction<number>>;
}

const P_BUTTON_CLASS = "cursor-pointer dark:text-white";

const PaginNation: FC<PaginNationProps> = ({ page, setNowPage }) => {
  const count = new Array(page).fill("");

  return (
    <PagiNationSection>
      {count.map((value, index) => (
        <span
          className={P_BUTTON_CLASS}
          onClick={() => setNowPage(index + 1)}
          key={index}
        >
          {index + 1}
        </span>
      ))}
    </PagiNationSection>
  );
};

export default PaginNation;
