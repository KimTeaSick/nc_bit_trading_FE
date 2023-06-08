import {
  UseBuyConditionType,
  UseSellConditionType,
} from "@/components/autoTrading/type/autoTrading";

export const test = (
  buy: UseBuyConditionType,
  sell: UseSellConditionType,
  name: string
) => {
  const body = { buy, sell, name };
  console.log("body :::::::::: ", body);
};
