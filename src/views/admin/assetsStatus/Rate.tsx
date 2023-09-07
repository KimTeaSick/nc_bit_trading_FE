import { FC, useEffect, useState } from "react";
import { RATE_BUTTON_TERM } from "./variables/variables";
import { rate_check } from "@/pages/api/tradingList";
import Card from "@/components/common/card";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import { RATE_TERM_TYPE } from "@/@types/AssetsStatus";
import AssetsTable from "./components/AssetsTable";

const RateButton = ({ onClick }: { onClick: (term: number) => void }) => {
  const dispatch = useDispatch<any>();
  const [active, setActive] = useState<RATE_TERM_TYPE>(1);

  const click_event = (value: RATE_TERM_TYPE) => {
    dispatch(onClick(value));
    setActive(value);
  };

  useEffect(() => {
    click_event(1);
  }, []);

  return (
    <div className="flex gap-2 my-5">
      {RATE_BUTTON_TERM.map((v, i) => (
        <div
          key={i}
          className={`${
            active === v.value && "text-red-700"
          } font-bold cursor-pointer`}
          onClick={async () => click_event(v.value)}
        >
          {v.key}
        </div>
      ))}
    </div>
  );
};

const Rate: FC = () => {
  const assets = useSelector((state: RootStateType) => state.trading);

  return (
    <div>
      <Card extra="h-[80vh] flex items-center justify-center p-2">
        <div className="text-4xl font-bold">{assets.account_balance} 원</div>
        <RateButton onClick={rate_check} />
        <div
          id="date"
          className="rounded-md px-5 py-1 border-2 text-gray-700 border-gray-300 mb-3 bg-[#ffffff]"
        >
          {assets.date}
        </div>
        <div
          id="info_box"
          className="w-full md:w-3/4 shadow-md rounded-md bg-[#f9f9f9] text-xs font-bold md:text-md dark:bg-blue-800"
        >
          <div id="top" className="flex p-5 justify-between">
            <p className="w-1/3">- 총 투자금액 : </p>
            <p className="w-1/3">- 기초평가금액 : </p>
            <p className="w-1/3">- 입금평가금액 : </p>
          </div>
          <div id="bottom" className="flex p-5 justify-between">
            <p className="w-1/3">- 총 투자손익 : </p>
            <p className="w-1/3">- 기말평가금액 : </p>
            <p className="w-1/3">
              - 투자원금 비교 수익률 :{" "}
              {(
                (assets.account_balance / assets.total_invest) * 100 -
                100
              ).toFixed(2)}{" "}
              %
            </p>
          </div>
        </div>
        <AssetsTable
          table_data={assets.table_data}
          total_invest={assets.total_invest}
        />
      </Card>
    </div>
  );
};

export default Rate;
