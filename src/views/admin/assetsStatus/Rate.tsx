import { FC } from "react";
import { RATE_BUTTON_TERM } from "./variables/variables";
import { rate_check } from "@/pages/api/tradingList";
import Card from "@/components/common/card";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";

const RateButton = ({ onClick }: { onClick: (term: number) => void }) => {
  const dispatch = useDispatch<any>();

  return (
    <div className="flex gap-2">
      {RATE_BUTTON_TERM.map((v, i) => (
        <div key={i} onClick={async () => dispatch(onClick(v.value))}>
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
      <Card extra="h-[80vh] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">{assets.rate} %</div>
          <RateButton onClick={rate_check} />
        </div>
        <div>asd</div>
      </Card>
    </div>
  );
};

export default Rate;
