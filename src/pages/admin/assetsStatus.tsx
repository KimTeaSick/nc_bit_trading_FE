import { FC, useState } from "react";
import Admin from "@/layouts/admin";
import TransHis from "@/views/admin/assetsStatus/TransHis";
import { TOP_MENU_LIST } from "@/views/admin/assetsStatus/variables/variables";
import { AS_TOP_MENU_TYPE } from "@/@types/AssetsStatus";
import Rate from "@/views/admin/assetsStatus/Rate";
const TOP_MENU_COVER_CLASS = "flex gap-2 font-bold text-3xl text-gray-700 ";

const TradingList: FC = () => {
  const [active, setActive] = useState<AS_TOP_MENU_TYPE>("transaction");

  return (
    <Admin>
      <div className={TOP_MENU_COVER_CLASS}>
        {TOP_MENU_LIST.map((v, i) => (
          <div
            key={i}
            onClick={() => setActive(v.value)}
            className={
              active === v.value
                ? "text-gray-900 dark:text-red-500 bg-white rounded-t-lg p-5"
                : "" + " cursor-pointer p-5"
            }
          >
            {v.value}
          </div>
        ))}
      </div>
      {active === "transaction" && <TransHis />}
      {active === "rate" && <Rate />}
    </Admin>
  );
};
export default TradingList;
