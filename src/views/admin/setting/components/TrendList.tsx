import { PlusButton } from "@/components/Setting/Setting.styled";
import { EMPTY_SEARCH_OPTION } from "@/lib/const_val";
import { setSearchOption } from "@/module/setting";
import { SearchOptionType } from "@/module/setting/setting";
import { useSearchOptionListQuery } from "@/pages/api/settingAPI";
import { FC } from "react";
import PLUS_URL from "@/img/plus.png";

import { useDispatch } from "react-redux";

interface TrendListProps {
  list: any[];
}

const TrendList: FC<TrendListProps> = ({ list }) => {
  const dispatch = useDispatch<any>();
  const request = useSearchOptionListQuery();
  const plusClickEvent = () => dispatch(setSearchOption(EMPTY_SEARCH_OPTION));
  const listClickEvent = (value: SearchOptionType) =>
    dispatch(setSearchOption(value));

  return (
    <div className="overflow-y-scroll h-16 flex-col justify-center items-center">
      {request?.data?.map((content: any, index: number) => (
        <div
          key={index}
          onClick={() => listClickEvent(content)}
          className="w-full h-10 flex justify-center p-3 border-r-orange-300 font-bold cursor-pointer"
        >
          {content.name}
        </div>
      ))}
      <div className="w-full flex justify-center items-center">
        <PlusButton background={PLUS_URL.src} onClick={plusClickEvent} />
      </div>
    </div>
  );
};

export default TrendList;
