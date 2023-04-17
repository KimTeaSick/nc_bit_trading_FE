import { useSearchOptionListQuery } from "@/pages/api/settingAPI";
import { SearchOptionListContentWrapper, PlusButton } from "./Setting.styled";
import { SearchOptionType } from "@/module/setting/setting";
import { setSearchOption } from "@/module/setting";
import { useDispatch } from "react-redux";
import PLUS_URL from "../../img/plus.png";
import { FC } from "react";
import { EMPTY_SEARCH_OPTION } from "@/lib/const_val";

const SearchOptionList: FC = () => {
  const dispatch = useDispatch<any>();

  const request = useSearchOptionListQuery();
  const plusClickEvent = () => dispatch(setSearchOption(EMPTY_SEARCH_OPTION));
  const listClickEvent = (value: SearchOptionType) =>
    dispatch(setSearchOption(value));

  return (
    <SearchOptionListContentWrapper>
      {request.data?.map((value: SearchOptionType, index: number) => (
        <div className="list" key={index} onClick={() => listClickEvent(value)}>
          {value.name}
        </div>
      ))}
      <PlusButton background={PLUS_URL.src} onClick={plusClickEvent} />
    </SearchOptionListContentWrapper>
  );
};

export default SearchOptionList;
