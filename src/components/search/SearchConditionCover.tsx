import { FC, ReactNode } from "react";
import CheckBox from "./CheckBox";

interface Props {
  title: string;
  children: ReactNode;
  value: any;
  setValue: any;
  checkDisable?: boolean;
}

const SearchConditionCover: FC<Props> = ({
  title,
  children,
  value,
  setValue,
  checkDisable,
}) => {
  return (
    <div className="w-full flex flex-wrap items-center md:flex-nowrap justify-between">
      <div className="flex items-center">
        {!checkDisable ? (
          <CheckBox value={value} setValue={setValue} />
        ) : (
          <div className="w-11" />
        )}
        <div className="w-full font-bold text-lg md:!w1/12">{title}</div>
      </div>
      <div className="w-full md:w-11/12 bg-navy-50 rounded-md p-5 dark:bg-navy-600">
        {children}
      </div>
    </div>
  );
};

export default SearchConditionCover;
