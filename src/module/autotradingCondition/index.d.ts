import {
  UseBuyConditionType,
  UseSellConditionType,
  useAccountType,
} from "../../components/autoTradingCondition/type/autoTrading";

export type AutoInitialStateType = {
  optionList: OptionListType[];
  optionListState: string;
  detailIdx: number | null;
  name: string | null;
  buy: UseBuyConditionType | null;
  sell: UseSellConditionType | null;
  account: useAccountType | null;
  optionState: string;
};

export type OptionListType = {
  Name: string;
  Create_date: string;
  Update_date: string;
  used: number;
};
