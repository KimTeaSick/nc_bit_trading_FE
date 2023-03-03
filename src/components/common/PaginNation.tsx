import { FC } from "react";
import { PagiNationSection } from "./PagiNation.styked";

const PaginNation: FC = () => {
  const arr = [1, 2, 34, 4];
  return (
    <PagiNationSection>
      {arr.map((value, index) => (
        <div key={index}>{index + 1}</div>
      ))}
    </PagiNationSection>
  );
};

export default PaginNation;
