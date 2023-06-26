import { FC } from "react";
import { ACCOUNT_PRICE_COL, Col } from "../construct/Col";
import { fixed } from "../lib/tool";
import { krwChage } from "@/lib/krwChage";

const SEARCH_RESULT_CLASS = "flex flex-col w-full md:!w-3/5";
const ITEM_STYLE_CLASS = "w-1/5 flex justify-center";
const ROW_COVER = "h-[60vh] bg-gray-50 overflow-y-auto";
const ROW_STYLE_CLASS =
  "flex bg-gray-50 border-b-2 border-b-gray-300 h-10 items-center";

interface Props {
  priceList: any[];
}

const AccountPrice: FC<Props> = ({ priceList = [] }) => {
  return (
    <div className={SEARCH_RESULT_CLASS}>
      <p className="text-2xl font-bold">잔고 현황</p>
      <Col itemCol={ACCOUNT_PRICE_COL} colCount="5" />
      <div className={ROW_COVER}>
        {Array.isArray(priceList) &&
          priceList?.map((value, index) => (
            <div className={ROW_STYLE_CLASS} key={index}>
              <p className={ITEM_STYLE_CLASS}>{value.coin}</p>
              <p className={ITEM_STYLE_CLASS}>{fixed(value.info.rate, 2)}</p>
              <p className={ITEM_STYLE_CLASS}>
                {krwChage(fixed(value.info.buy_price, 0))}
              </p>
              <p className={ITEM_STYLE_CLASS}>{value.info.unit}</p>
              <p className={ITEM_STYLE_CLASS}>{value.info.unit}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AccountPrice;
