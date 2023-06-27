import { FC, useEffect, useRef, useState } from "react";
import ConditionStatus from "./components/ConditionStatus";
import AccountStatus from "./components/AccountStatus";
import SearchResult from "./components/SearchResult";
import ConclusionStatus from "./components/ConclusionStatus";
import AccountPrice from "./components/AccountPrice";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import {
  getNowUsedCondition,
  usePossessionCoin,
  useRecommendCoin,
  useTradingHis,
} from "@/pages/api/autotrading";
import { getProperty } from "@/pages/api/walletAPIs";
import {
  TradingConditionM,
  SearchConditionM,
} from "./components/ConditionModal";
import { useNowRate, useTodayAccount } from "@/pages/api/dash";
import { fixed } from "./lib/tool";

const AutoTrading: FC = () => {
  const dispatch = useDispatch<any>();
  const [show, setShow] = useState({ S: false, T: false });
  const { request: Rcoin } = useRecommendCoin();
  const { request: Pcoin } = usePossessionCoin();
  const { request: TrHis } = useTradingHis();
  const { request: accountInfo } = useTodayAccount();
  const { request: rateInfo } = useNowRate();

  useEffect(() => {
    dispatch(getNowUsedCondition());
  }, [dispatch]);
  const AT = useSelector((state: RootStateType) => state.autotrading);

  const showControl = (type: string) => {
    type === "S" && setShow({ T: false, S: true });
    type === "T" && setShow({ T: true, S: false });
    type === "N" && setShow({ T: false, S: false });
  };
  console.log("AT.tradingCondition?.name", AT.tradingCondition);

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
            search_condition={AT.searchCondition?.name}
            trading_condition={AT.tradingCondition?.name}
            showControl={showControl}
          />
          <AccountStatus
            myProperty={accountInfo.data}
            rate={fixed(
              rateInfo?.data?.now_balance * (rateInfo?.data?.rate / 100),
              2
            )}
          />
          <div className="flex flex-col w-full gap-5 mt-3 md:!flex-row">
            <SearchResult searchList={Rcoin.data} />
            <ConclusionStatus his={TrHis.data} />
            <AccountPrice priceList={Pcoin.data} />
          </div>
        </div>
        <>
          {show.S && (
            <SearchConditionM
              showControl={showControl}
              cValue={AT.searchCondition}
            />
          )}
          {show.T && (
            <TradingConditionM
              showControl={showControl}
              cValue={AT.tradingCondition}
            />
          )}
        </>
      </div>
    </div>
  );
};

export default AutoTrading;
