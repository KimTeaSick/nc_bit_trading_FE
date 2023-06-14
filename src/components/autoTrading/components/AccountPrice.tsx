import { FC } from "react";
import { ACCOUNT_PRICE_COL, Col } from "../construct/Col";

const SEARCH_RESULT_CLASS = "flex flex-col w-full";
const ITEM_STYLE_CLASS = "w-1/5 flex justify-center";
const ROW_COVER = "h-[60vh] bg-gray-50 overflow-y-auto";
const ROW_STYLE_CLASS =
  "flex bg-gray-50 border-b-2 border-b-gray-300 h-10 items-center";

interface Props {
  priceList: any[];
}

const AccountPrice: FC<Props> = ({ priceList }) => {
  return (
    <div className={SEARCH_RESULT_CLASS}>
      <p className="text-2xl font-bold">잔고 현황</p>
      <Col itemCol={ACCOUNT_PRICE_COL} colCount="5" />
      <div className={ROW_COVER}>
        {priceList.map((value, index) => (
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

export default AccountPrice;
