import { Dispatch, FC, SetStateAction } from "react";
import { PagiNationSection } from "./PagiNation.styked";

interface PaginNationProps {
  page: string;
  setNowPage: Dispatch<SetStateAction<number>>;
}

const PaginNation: FC<PaginNationProps> = ({ page, setNowPage }) => {
  const count = new Array(page).fill("");

  return (
    <PagiNationSection>
      {count.map((value, index) => (
        <div key={index} onClick={() => setNowPage(index + 1)}>
          {index + 1}
        </div>
      ))}
    </PagiNationSection>
  );
};

export default PaginNation;
