import {
  UseBuyConditionType,
  UseSellConditionType,
  useAccountType,
} from "@/components/autoTradingCondition/type/autoTrading";

export type AutoInitialStateType = {
  optionList: OptionListType[];
  optionListState: string;
  sell: UseSellConditionType | null;
  buy: UseBuyConditionType | null;
  account: useAccountType | null;
  name: string | null;
  optionState: string;
};

export type OptionListType = {
  Name: string;
  Create_date: string;
  Update_date: string;
  used: number;
};
