import {
  UseBuyConditionType,
  UseSellConditionType,
} from "@/components/autoTrading/components/type/autoTrading";

export const test = (buy: UseBuyConditionType, sell: UseSellConditionType) => {
  const body = { buy, sell };
  console.log("body :::::::::: ", body);
};
