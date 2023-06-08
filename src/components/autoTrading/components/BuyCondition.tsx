import TradingConditionCover from "./TradingConditionCover";
import FixMoneyBuyMethod from "./Buy/FixMoneyBuyMethod";
import PercentBuyCondition from "./Buy/PercentBuyCondition";
import PercentMoneyBuyMethod from "./Buy/PercentMoneyBuyMethod";
import PriceCriteria from "./Buy/PriceCriteria";
import { UseBuyConditionType } from "../type/autoTrading";
import { Dispatch, FC, SetStateAction } from "react";
import RadioButton from "./RadioButton";

interface Props {
  buyCondition: UseBuyConditionType;
  setBuyCondition: Dispatch<SetStateAction<UseBuyConditionType>>;
}

const BuyCondition: FC<Props> = ({ buyCondition, setBuyCondition }) => {
  return (
    <TradingConditionCover title="매수">
      <div>
        {/* <div id="BuyCondition" className="p-1">
          <p className="text-xl font-bold">매수 조건</p>
          <PercentBuyCondition
            value={buyCondition}
            setValue={setBuyCondition}
          />
        </div> */}
        <div id="BuyMethod" className="p-1">
          <p className="text-xl font-bold">매수 방법</p>
          <div className="p-1">
            <p className="font-bold">1. 가격 기준</p>
            <PriceCriteria value={buyCondition} setValue={setBuyCondition} />
          </div>
          <div className="p-1">
            <p className="font-bold">2. 수량 기준</p>
            <div className="flex items-center">
              <RadioButton
                value="1"
                initialValue={buyCondition.checkbox}
                setValue={() =>
                  setBuyCondition({ ...buyCondition, checkbox: "1" })
                }
              />
              <FixMoneyBuyMethod
                value={buyCondition}
                setValue={setBuyCondition}
              />
            </div>
            <div className="flex items-center">
              <RadioButton
                value="2"
                initialValue={buyCondition.checkbox}
                setValue={() =>
                  setBuyCondition({ ...buyCondition, checkbox: "2" })
                }
              />
              <PercentMoneyBuyMethod
                value={buyCondition}
                setValue={setBuyCondition}
              />
            </div>
          </div>
        </div>
      </div>
    </TradingConditionCover>
  );
};

export default BuyCondition;
