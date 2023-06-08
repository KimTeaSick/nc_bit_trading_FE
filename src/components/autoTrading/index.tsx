import { FC } from "react";
import ConditionList from "./components/list/ConditionList";
import { useSellCondition } from "./lib/useSellCondition";
import { useBuyCondition } from "./lib/useBuyCondition";
import SellCondition from "./components/SellCondition";
import BuyCondition from "./components/BuyCondition";
import NameInput from "./components/NameInput";
import { DUMMY_DATA } from "./lib/construct";
import { useName } from "./lib/useName";
import axios from "axios";

const AutoTrading: FC = () => {
  const [sellCondition, setSellCondition] = useSellCondition();
  const [buyCondition, setBuyCondition] = useBuyCondition();
  const [name, setName] = useName();

  const RegisterEvent = async () => {
    const body = {
      sell: sellCondition,
      buy: buyCondition,
      // name,
    };
    const res = await axios.post(
      "http://192.168.10.43:8888/trade/tradingOption",
      body
    );
    console.log("body", res);
  };

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            자동 매매
          </h4>
        </div>
        <div className="w-full bg-navy-50 rounded-lg h-auto p-3">
          <div className="w-full flex gap-3 mb-3">
            <ConditionList itemList={DUMMY_DATA} />
            <BuyCondition
              buyCondition={buyCondition}
              setBuyCondition={setBuyCondition}
            />
            <SellCondition
              sellCondition={sellCondition}
              setSellCondition={setSellCondition}
            />
          </div>
          <NameInput
            name={name}
            setName={setName}
            registerEvent={RegisterEvent}
            ATEvent={() => console.log("asd")}
          />
        </div>
      </div>
    </div>
  );
};

export default AutoTrading;
