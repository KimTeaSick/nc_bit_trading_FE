import { FC } from "react";
import ConditionStatus from "./components/ConditionStatus";
import AccountStatus from "./components/AccountStatus";
import SearchResult from "./components/SearchResult";
import ConclusionStatus from "./components/ConclusionStatus";
import AccountPrice from "./components/AccountPrice";

const AutoTrading: FC = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            자동 매매
          </h4>
        </div>
        <div className="bg-navy-50 p-4 rounded-md">
          <ConditionStatus
            search_condition="Tesasdast"
            trading_condition="Test"
          />
          <AccountStatus />
          <div className="flex w-full gap-5 mt-3">
            <SearchResult searchList={[1, 2, 3, 4]} />
            <ConclusionStatus
              colclusionList={[
                1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1,
                2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4,
              ]}
            />
            <AccountPrice priceList={[1, 2, 3, 4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoTrading;
