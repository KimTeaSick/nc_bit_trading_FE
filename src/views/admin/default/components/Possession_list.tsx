import { FC } from "react";
import { POSSESSION_LIST } from "../variables/TABLE_COL";
import { CHANGE_KR_NAME } from "@/variables/coinNameChange";

const COMPONENT_COVER_CLASS =
  "w-full bg-white rounded-2xl h-[50vh] p-5 dark:bg-navy-800  overflow-x-scroll scrollbar-hide";
const TITLE_CLASS = "font-bold text-xl mb-3 text-gray-900 dark:text-gray-300";
const TH_CLASS =
  "flex justify-between w-full font-bold border-b-2 pb-2 text-gray-700 whitespace-nowrap";
const ROW_CLASS = "font-medium flex justify-between dark:text-gray-300";
const W_F = "w-full ";
const COL_CLASS = "font-bold my-3 text-sm";

interface Props {
  value: any[];
}

type P_Coin_type = {
  name: string;
  ratereturn: string;
  purchaseprice: string;
  quantity: string;
  purchaseamount: string;
};

const Possession_list: FC<Props> = ({ value }) => {
  return (
    <div className={COMPONENT_COVER_CLASS}>
      <p className={TITLE_CLASS}>보유 종목</p>
      <table className={W_F}>
        <thead>
          <tr className={TH_CLASS + ""}>
            {POSSESSION_LIST.map((col: string, index: number) => (
              <td className={W_F} key={index}>
                {col}
              </td>
            ))}
          </tr>
        </thead>
      </table>
      <div className="overflow-y-scroll w-full h-[35vh] scrollbar-hide ">
        <table className="w-full">
          <tbody>
            {Array.isArray(value) &&
              value?.map((coin: P_Coin_type, index: number) => (
                <tr className={ROW_CLASS} key={index}>
                  <td className={W_F + COL_CLASS}>
                    {CHANGE_KR_NAME(coin.name)}
                  </td>
                  <td className={W_F + COL_CLASS}>
                    <p className="w-2/5 text-end">{coin.ratereturn}%</p>
                  </td>
                  <td className={W_F + COL_CLASS}>{coin.purchaseprice}</td>
                  <td className={W_F + COL_CLASS}>{coin.quantity}</td>
                  <td className={W_F + COL_CLASS}>{coin.purchaseamount}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Possession_list;
