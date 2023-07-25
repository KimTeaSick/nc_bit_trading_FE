import { FC, useEffect, useState } from "react";
import { RATE_BUTTON_TERM } from "./variables/variables";
import { rate_check } from "@/pages/api/tradingList";
import Card from "@/components/common/card";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import { RATE_TERM_TYPE } from "@/@types/AssetsStatus";

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
    <div className="flex gap-2">
      {RATE_BUTTON_TERM.map((v, i) => (
        <div
          key={i}
          className={`${active === v.value && "text-red-700"} font-bold`}
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
      <Card extra="mt-5 h-[80vh] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div
            className={`text-3xl font-bold ${
              assets.rate && assets.rate > 0 ? "text-blue-600" : "text-red-600"
            }`}
          >
            {assets.rate} %
          </div>
          <RateButton onClick={rate_check} />
        </div>
        <div className="text-4xl font-bold">{assets.account_balance} 원</div>
      </Card>
    </div>
  );
};

export default Rate;
