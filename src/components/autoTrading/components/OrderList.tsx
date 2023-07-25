import { FC } from "react";
import { Col, ORDER_LIST_COL } from "../construct/Col";
import { CHANGE_KR_NAME } from "@/variables/coinNameChange";
import { SUB_DATE } from "@/lib/dateFormat";

const SEARCH_RESULT_CLASS = "flex flex-col w-full";
const ITEM_STYLE_CLASS = "w-1/2 flex justify-center";
const ROW_STYLE_CLASS =
  "flex bg-gray-50 border-b-2 border-b-gray-300 h-10 items-center dark:bg-navy-800 dark:text-white";
const ROW_COVER = "h-[20vh] bg-gray-50 overflow-y-auto dark:bg-navy-800";
const TITLE = "text-2xl font-bold dark:text-white";
interface Props {
  orderList: any[] | undefined;
}

const OrderListT: FC<Props> = ({ orderList }) => {
  console.log("orderList :::: ", orderList);

  return (
    <div className={SEARCH_RESULT_CLASS}>
      <p className={TITLE}>주문 현황</p>
      <Col itemCol={ORDER_LIST_COL} colCount="2" />
      <div className={ROW_COVER}>
        {Array.isArray(orderList) &&
          orderList?.map((value, index) => (
            <div className={ROW_STYLE_CLASS} key={index}>
              <p className={ITEM_STYLE_CLASS}>{CHANGE_KR_NAME(value.coin)}</p>
              <p className={ITEM_STYLE_CLASS}>{value.status}</p>
              <p className={ITEM_STYLE_CLASS}>
                {SUB_DATE(value.transaction_time)}
              </p>
              <p className={ITEM_STYLE_CLASS}>
                {SUB_DATE(value.conclusion_time)}
              </p>
              <p className={ITEM_STYLE_CLASS}>{SUB_DATE(value.cancel_time)}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrderListT;
