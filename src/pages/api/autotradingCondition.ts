import {
  TradingOptionBodyType,
  TradingOptionType,
} from "@/views/admin/autoTradingCondition/type/autoTrading";
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
  body: TradingOptionBodyType,
  url: string
) => {
  const response = await post(`trade/${url}`, body);
  return response;
};

export const detailTradingOption = createAsyncThunk(
  "detailTradingOption",
  async (idx: number) => {
    const response = await post(`trade/tradingOptionDetail`, { idx });
    const returnOptionName = Object.keys(response);
    const returnValue: TradingOptionType[] = Object.values(response);
    return { name: returnOptionName[0], value: returnValue[0] };
  }
);

export const activeTradingOption = async (idx: number) => {
  const response = await post("trade/useTradingOption", { idx });
  return response;
};

export const deleteTradingOption = async (idx: number) => {
  const response = await post("trade/deleteTradingOption", { idx });
  return response;
};

export const controlAuto = async (type: boolean) => {
  const response = await post("trade/controlAutoTrading", {
    flag: type ? 1 : 0,
  });
  return response;
};
