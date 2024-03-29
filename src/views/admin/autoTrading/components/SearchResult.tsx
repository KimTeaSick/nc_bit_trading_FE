import { FC } from "react";

import { Col, SEARCH_RESULT_COL } from "../construct/Col";
import { krwChage } from "@/lib/krwChage";
import { CHANGE_KR_NAME } from "@/variables/coinNameChange";

const SEARCH_RESULT_CLASS = "flex flex-col w-full font-bold md:!w-1/3";
const ITEM_STYLE_CLASS = "w-1/2 text-sm flex justify-center";
const ROW_STYLE_CLASS =
  "flex bg-gray-50 border-b-2 border-b-gray-300 h-10 items-center dark:bg-navy-800 dark:text-white";
const ROW_COVER = "h-[60vh] bg-gray-50 overflow-y-auto dark:bg-navy-800";
const TITLE = "text-2xl font-bold dark:text-white";

interface Props {
  searchList: any[];
}

const SearchResult: FC<Props> = ({ searchList }) => {
  return (
    <div className={SEARCH_RESULT_CLASS}>
      <p className={TITLE}>검색된 종목</p>
      <Col itemCol={SEARCH_RESULT_COL} colCount="2" />
      <div className={ROW_COVER}>
        {Array.isArray(searchList) &&
          searchList?.map((value, index) => (
            <div className={ROW_STYLE_CLASS} key={index}>
              <p className={ITEM_STYLE_CLASS}>{CHANGE_KR_NAME(value.name)}</p>
              <p className={ITEM_STYLE_CLASS}>{krwChage(value.catch_price)}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchResult;
