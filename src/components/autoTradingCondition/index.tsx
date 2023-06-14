import { FC, useCallback, useEffect } from "react";
import ConditionList from "./components/list/ConditionList";
import { useSellCondition } from "./lib/useSellCondition";
import { useBuyCondition } from "./lib/useBuyCondition";
import AccountComponent from "./components/Account/index";
import SellCondition from "./components/SellCondition";
import BuyCondition from "./components/BuyCondition";
import NameInput from "./components/NameInput";
import { useName } from "./lib/useName";
import { useAccount } from "./lib/useAccount";
import {
  RUTradingOptionList,
  activeTradingOption,
  deleteTradingOption,
  detailTradingOption,
  getTradingOptionList,
} from "@/pages/api/autotradingcondition";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";

const AutoTradingConditon: FC = () => {
  const ATState = useSelector((state: RootStateType) => state.autotrading);
  const [actCondition, setActCondition] = useAccount();
  const [sellCondition, setSellCondition] = useSellCondition();
  const [buyCondition, setBuyCondition] = useBuyCondition();
  const [name, setName, settingName] = useName();
  const dispatch = useDispatch<any>();

  const RUEvent = async (type: string) => {
    let url = "";
    const body = {
      account: actCondition,
      sell: sellCondition,
      buy: buyCondition,
      name,
    };
    type === "regist"
      ? (url = "insertTradingOption")
      : (url = "updateTradingOption");
    const response = await RUTradingOptionList(body, url);
    dispatch(getTradingOptionList());
    return response;
  };

  const getDetailOption = (name: string) => dispatch(detailTradingOption(name));

  const activeNdelete = async (name: string, type: number) => {
    type ? await activeTradingOption(name) : await deleteTradingOption(name);
    dispatch(getTradingOptionList());
  };

  useEffect(() => {
    dispatch(getTradingOptionList());
    if (ATState.account !== null) {
      settingName(ATState.name);
      setActCondition(ATState.account);
      setSellCondition(ATState.sell);
      setBuyCondition(ATState.buy);
    }
  }, [
    dispatch,
    settingName,
    ATState.account,
    setActCondition,
    setSellCondition,
    setBuyCondition,
  ]);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            자동 매매 조건 설정
          </h4>
        </div>
        <div className="w-full bg-navy-50 rounded-lg h-auto p-3">
          <div className="w-full flex gap-3 mb-3">
            <ConditionList
              itemList={ATState.optionList}
              onClick={getDetailOption}
            />
            <div className="w-full flex flex-col gap-3">
              <AccountComponent
                value={actCondition}
                setValue={setActCondition}
              />
              <div className="flex gap-3 mb-3">
                <BuyCondition
                  buyCondition={buyCondition}
                  setBuyCondition={setBuyCondition}
                />
                <SellCondition
                  sellCondition={sellCondition}
                  setSellCondition={setSellCondition}
                />
              </div>
            </div>
          </div>
          <NameInput
            type={ATState.account === null}
            name={name}
            AnD={activeNdelete}
            setName={setName}
            registerEvent={RUEvent}
            ATEvent={() => console.log("asd")}
          />
        </div>
      </div>
    </div>
  );
};

export default AutoTradingConditon;
