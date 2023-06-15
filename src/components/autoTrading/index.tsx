import { FC, useEffect, useRef, useState } from "react";
import ConditionStatus from "./components/ConditionStatus";
import AccountStatus from "./components/AccountStatus";
import SearchResult from "./components/SearchResult";
import ConclusionStatus from "./components/ConclusionStatus";
import AccountPrice from "./components/AccountPrice";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import {
  getCoinInAccount,
  getNowUsedCondition,
  getSearchCoinList,
} from "@/pages/api/autotrading";
import { getProperty } from "@/pages/api/walletAPIs";
import ConditionModal from "./components/ConditionModal";

const AutoTrading: FC = () => {
  const dispatch = useDispatch<any>();
  const [show, setShow] = useState({ S: false, T: false });

  useEffect(() => {
    dispatch(getSearchCoinList());
    dispatch(getNowUsedCondition());
    dispatch(getCoinInAccount());
    dispatch(getProperty());
  }, [dispatch]);
  const AT = useSelector((state: RootStateType) => state.autotrading);
  const { myProperty } = useSelector((state: RootStateType) => state.wallet);

  const showControl = (type: string) => {
    type === "S" && setShow({ T: false, S: true });
    type === "T" && setShow({ T: true, S: false });
    type === "N" && setShow({ T: false, S: false });
  };

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
          <AccountStatus myProperty={myProperty} />
          <div className="flex w-full gap-5 mt-3">
            <SearchResult searchList={AT.searchList} />
            <ConclusionStatus colclusionList={[1, 2]} />
            <AccountPrice priceList={AT.myCoinList} />
          </div>
        </div>
        <>
          {show.S && (
            <ConditionModal
              type="search"
              showControl={showControl}
              condition={Object.values(
                AT.searchCondition ? AT.searchCondition : []
              )}
            />
          )}
          {show.T && (
            <ConditionModal
              type="trading"
              showControl={showControl}
              condition={Object.values(
                AT.tradingCondition ? AT.tradingCondition : []
              )}
            />
          )}
        </>
      </div>
    </div>
  );
};

export default AutoTrading;
