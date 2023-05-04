import Condition from "@/components/condition";
import ConditionDetail from "./components/ConditionDetail";
import ConditionTreeList from "./components/ConditionTreeList";
import DisparityOption from "./components/DisparityOption";
import TradingOption from "./components/TradingOption";
import TrendOption from "./components/TrendOption";
import { useState } from "react";
import { CHOICE_TYPE } from "@/components/condition/condition";

const Marketplace = () => {
  const [choice, select] = useState<CHOICE_TYPE>("주가 범위");

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* Header */}
        <div className="mb-4 mt-5 flex flex-row justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            자동 매매
          </h4>
        </div>

        {/* trending card */}
        <div className="z-20 flex gap-1">
          <ConditionTreeList select={select} />
          <Condition CHOICE={choice} />
          {/* <ConditionTreeList /> */}
          {/* <DisparityOption /> */}
          {/* <TrendOption /> */}
          {/* <TradingOption /> */}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
