import { FC, ReactNode } from "react";
import CheckBox from "./CheckBox";

interface Props {
  title: string;
  children: ReactNode;
  value: any;
  setValue: any;
}

const SearchConditionCover: FC<Props> = ({
  title,
  children,
  value,
  setValue,
}) => {
  return (
    <div className="w-full flex items-center">
      <CheckBox value={value} setValue={setValue} />
      <div className="w-1/12 font-bold text-lg">{title}</div>
      <div className="w-11/12 bg-navy-50 rounded-md p-5">{children}</div>
    </div>
  );
};

export default SearchConditionCover;
