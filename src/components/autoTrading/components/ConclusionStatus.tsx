import { FC } from "react";
import { Col, TRADING_STATUS_COL } from "../construct/Col";

const SEARCH_RESULT_CLASS = "flex flex-col w-full ";
const ITEM_STYLE_CLASS = "w-1/5 flex justify-center";
const ROW_STYLE_CLASS =
  "flex bg-gray-50 border-b-2 border-b-gray-300 h-10 items-center";
const ROW_COVER = "h-[60vh] bg-gray-50 overflow-y-auto";

interface Props {
  colclusionList: any[];
}

const ConclusionStatus: FC<Props> = ({ colclusionList }) => {
  return (
    <div className={SEARCH_RESULT_CLASS}>
      <p className="text-2xl  font-bold">체결 현황</p>
      <Col itemCol={TRADING_STATUS_COL} colCount="5" />
      <div className={ROW_COVER}>
        {colclusionList.map((value, index) => (
          <div className={ROW_STYLE_CLASS} key={index}>
            <p className={ITEM_STYLE_CLASS}>test</p>
            <p className={ITEM_STYLE_CLASS}>test</p>
            <p className={ITEM_STYLE_CLASS}>test</p>
            <p className={ITEM_STYLE_CLASS}>test</p>
            <p className={ITEM_STYLE_CLASS}>test</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConclusionStatus;
