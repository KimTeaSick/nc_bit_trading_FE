import { TradingOptionType } from "@/components/autoTradingCondition/type/autoTrading";
import { get, post } from ".";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTradingOptionList = createAsyncThunk(
  "getTradingOptionList",
  async (): Promise<any> => {
    const response = await get("trade/tradingOptionList");
    return response;
  }
);

export const RUTradingOptionList = async (
  body: TradingOptionType,
  url: string
) => {
  const response = await post(`trade/${url}`, body);
  return response;
};

export const detailTradingOption = createAsyncThunk(
  "detailTradingOption",
  async (name: string) => {
    const response = await post(`trade/tradingOptionDetail`, { name });
    const returnOptionName = Object.keys(response);
    const returnValue: TradingOptionType[] = Object.values(response);
    return { name: returnOptionName[0], value: returnValue[0] };
  }
);

export const activeTradingOption = async (name: string) => {
  const response = await post("option/useTradingOption", { name });
  return response;
};

export const deleteTradingOption = async (name: string) => {
  const response = await post("trade/deleteTradingOption", { name });
  return response;
};
