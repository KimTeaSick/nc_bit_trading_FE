import { FC, useState } from "react";
import Admin from "@/layouts/admin";
import TransHis from "@/views/admin/assetsStatus/TransHis";
import { TOP_MENU_LIST } from "@/views/admin/assetsStatus/variables/variables";
import { AS_TOP_MENU_TYPE } from "@/@types/AssetsStatus";
import Rate from "@/views/admin/assetsStatus/Rate";
const TOP_MENU_COVER_CLASS =
  "flex gap-2 font-bold text-3xl text-gray-700 border-b-4 border-gray-200 dark:border-gray-700";

const TradingList: FC = () => {
  const [active, setActive] = useState<AS_TOP_MENU_TYPE>("asset");

  return (
    <Admin>
      <div className={TOP_MENU_COVER_CLASS}>
        {TOP_MENU_LIST.map((v, i) => (
          <div
            key={i}
            onClick={() => setActive(v.value)}
            className={
              active === v.value
                ? "text-gray-900 dark:text-red-500"
                : "" + " cursor-pointer"
            }
          >
            {v.value}
          </div>
        ))}
      </div>
      {active === "transaction" && <TransHis />}
      {active === "rate" && <Rate />}
      {active === "asset" && <TransHis />}
    </Admin>
  );
};
export default TradingList;
