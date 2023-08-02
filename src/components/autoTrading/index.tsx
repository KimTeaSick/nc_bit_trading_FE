import { FC, useEffect, useState } from "react";
import ConditionStatus from "./components/ConditionStatus";
import AccountStatus from "./components/AccountStatus";
import SearchResult from "./components/SearchResult";
import ConclusionStatus from "./components/ConclusionStatus";
import AccountPrice from "./components/AccountPrice";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import {
  getNowUsedCondition,
  useAutoOrderList,
  usePossessionCoin,
  useRecommendCoin,
  useTradingHis,
} from "@/pages/api/autotrading";
import {
  TradingConditionM,
  SearchConditionM,
} from "./components/ConditionModal";
import { useNowRate, useTodayAccount } from "@/pages/api/dash";
import OrderListT from "./components/OrderList";

const PAGE_COVER_CLASS =
  "grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1";
const TITLE_SECTION_CLASS =
  "mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center";
const CONTENT_CLASS = "col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2";
const TITLE_CLASS = "ml-1 text-2xl font-bold text-navy-700 dark:text-white";

const AutoTrading: FC = () => {
  const dispatch = useDispatch<any>();
  const [show, setShow] = useState({ S: false, T: false });

  const { request: TrHis } = useTradingHis();
  const { request: rateInfo } = useNowRate();
  const { request: OList } = useAutoOrderList();
  const { request: Rcoin } = useRecommendCoin();
  const { request: Pcoin } = usePossessionCoin();
  const { request: accountInfo } = useTodayAccount();

  useEffect(() => {
    dispatch(getNowUsedCondition());
  }, [dispatch]);

  const AT = useSelector((state: RootStateType) => state.autotrading);

  const showControl = (type: string) => {
    type === "S" && setShow({ T: false, S: true });
    type === "T" && setShow({ T: true, S: false });
    type === "N" && setShow({ T: false, S: false });
  };

  return (
    <div className={PAGE_COVER_CLASS}>
      <div className={CONTENT_CLASS}>
        <div className={TITLE_SECTION_CLASS}>
          <h4 className={TITLE_CLASS}>자동 매매</h4>
        </div>
        <div className="bg-navy-50 p-4 rounded-md dark:bg-navy-600">
          <ConditionStatus
            search_condition={AT.searchCondition?.name}
            trading_condition={AT.tradingCondition?.name}
            showControl={showControl}
          />
          <AccountStatus myProperty={accountInfo.data} rate={rateInfo.data} />
          <div className="flex flex-col w-full gap-5 mt-3 md:!flex-row">
            <SearchResult searchList={Rcoin.data} />
            <div className="w-full flex flex-col">
              <OrderListT orderList={OList.data} />
              <ConclusionStatus his={TrHis.data} />
            </div>
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
