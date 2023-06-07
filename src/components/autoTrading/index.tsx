import { FC } from "react";
import BuyCondition from "./components/BuyCondition";
import SellCondition from "./components/SellCondition";
import { useSellCondition } from "./lib/useSellCondition";
import { useBuyCondition } from "./lib/useBuyCondition";
import { test } from "@/pages/api/autotrading";

const AutoTrading: FC = () => {
  const [sellCondition, setSellCondition] = useSellCondition();
  const [buyCondition, setBuyCondition] = useBuyCondition();

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            자동 매매
          </h4>
        </div>
        <div className="flex gap-2">
          <BuyCondition
            buyCondition={buyCondition}
            setBuyCondition={setBuyCondition}
          />
          <SellCondition
            sellCondition={sellCondition}
            setSellCondition={setSellCondition}
          />
        </div>
      </div>
      <button onClick={() => test(buyCondition, sellCondition)}>asd</button>
    </div>
  );
};

export default AutoTrading;
