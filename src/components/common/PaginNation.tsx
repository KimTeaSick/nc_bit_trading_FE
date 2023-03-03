import { FC } from "react";

const PaginNation: FC = () => {
  const arr = [1, 2, 34, 4];
  return (
    <div>
      {arr.map((value, index) => (
        <div key={index}>{index + 1}</div>
      ))}
    </div>
  );
};

export default PaginNation;
