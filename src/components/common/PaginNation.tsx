import { Dispatch, FC, SetStateAction } from "react";
import { PageButton, PagiNationSection } from "./PagiNation.styked";

interface PaginNationProps {
  page: string;
  setNowPage: Dispatch<SetStateAction<number>>;
}

const PaginNation: FC<PaginNationProps> = ({ page, setNowPage }) => {
  const count = new Array(page).fill("");

  return (
    <PagiNationSection>
      {count.map((value, index) => (
        <PageButton key={index} onClick={() => setNowPage(index + 1)}>
          {index + 1}
        </PageButton>
      ))}
    </PagiNationSection>
  );
};

export default PaginNation;
