import { Dispatch, FC, SetStateAction } from "react";
import { useSellCondition } from "../lib/useSellCondition";
import DisparitySellCondition from "./Sell/DisparitySellCondition";
import PercentSellCondtion from "./Sell/PercentSellCondition";
import PercentSellMethod from "./Sell/PercentSellMethod";
import PriceCriteria from "./Sell/PriceCriteria";
import TradingConditionCover from "./TradingConditionCover";
import { UseSellConditionType } from "../type/autoTrading";
import MACDCondition from "./Sell/MACDCondition";

interface Props {
  sellCondition: UseSellConditionType;
  setSellCondition: Dispatch<SetStateAction<UseSellConditionType>>;
}

const SellCondition: FC<Props> = ({ sellCondition, setSellCondition }) => {
  return (
    <TradingConditionCover title="매도">
      <div>
        <div id="BuyCondition" className="p-1">
          <p className="text-xl font-bold">매도 조건</p>
          <div className="flex flex-col gap-2 p-1">
            <p className="font-bold">1. 가격 기준</p>
            <PercentSellCondtion
              up_down={true}
              value={sellCondition}
              setValue={setSellCondition}
            />
            <PercentSellCondtion
              up_down={false}
              value={sellCondition}
              setValue={setSellCondition}
            />
          </div>
          <div className="flex flex-col gap-2 p-1">
            <p className="font-bold">2. 이평선 기준</p>
            <DisparitySellCondition
              up_down={true}
              value={sellCondition}
              setValue={setSellCondition}
            />
            <DisparitySellCondition
              up_down={false}
              value={sellCondition}
              setValue={setSellCondition}
            />
          </div>
          <div className="flex flex-col gap-2 p-1">
            <p className="font-bold">3. MACD 기준</p>
            <p className="pl-2 font-bold">
              <MACDCondition
                value={sellCondition}
                setValue={setSellCondition}
              />
            </p>
          </div>
        </div>
        <div id="BuyMethod" className="p-1">
          <p className="text-xl font-bold">매도 방법</p>
          <div className="p-1">
            <p className="font-bold">1. 가격 기준</p>
            <PriceCriteria value={sellCondition} setValue={setSellCondition} />
            <p className="pl-2 font-semibold">
              현재가 기준 -2 % 범위 안에서 가격 균등 배분
            </p>
          </div>
          <div className="p-1">
            <p className="font-bold">2. 수량 기준</p>
            <PercentSellMethod
              value={sellCondition}
              setValue={setSellCondition}
            />
          </div>
        </div>
      </div>
    </TradingConditionCover>
  );
};

export default SellCondition;
