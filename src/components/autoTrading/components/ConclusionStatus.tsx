import { FC } from "react";
import { Col, TRADING_STATUS_COL } from "../construct/Col";
import { fixed } from "../lib/tool";
import { THStatusChanger } from "../lib/modalDataChanger";

const SEARCH_RESULT_CLASS = "flex flex-col w-full ";
const ITEM_STYLE_CLASS = "w-1/6 flex justify-center";
const ROW_STYLE_CLASS =
  "flex bg-gray-50 border-b-2 border-b-gray-300 h-10 items-center";
const ROW_COVER = "h-[60vh] bg-gray-50 overflow-y-auto";
3;

interface Props {
  his: any[];
}

const ConclusionStatus: FC<Props> = ({ his }) => {
  return (
    <div className={SEARCH_RESULT_CLASS}>
      <p className="text-2xl  font-bold">체결 현황</p>
      <Col itemCol={TRADING_STATUS_COL} colCount="6" />
      <div className={ROW_COVER}>
        {Array.isArray(his) &&
          his?.map((value, index) => (
            <div className={ROW_STYLE_CLASS} key={index}>
              <p className={ITEM_STYLE_CLASS}>{his[index].coin_name}</p>
              <p className={ITEM_STYLE_CLASS}>{fixed(his[index].unit, 4)}</p>
              <p className={ITEM_STYLE_CLASS}>{fixed(his[index].price, 0)}</p>
              <p className={ITEM_STYLE_CLASS}>{his[index].total}</p>
              <p className={ITEM_STYLE_CLASS}>{his[index].fee}</p>
              <p className={ITEM_STYLE_CLASS}>
                {THStatusChanger(his[index].status)}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ConclusionStatus;
