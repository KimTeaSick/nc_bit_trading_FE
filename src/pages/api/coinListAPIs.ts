import { useSelector } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ChartBodyType,
  DetailCoinType,
  GetAvgDataBodyType,
} from "@/@types/CoinList";
import { get, post } from ".";
import { RootStateType } from "@/module/rootReducer.d";

export const getCoinList = () => {
  return get("getBitcoinInfo");
};

export const getCoinDetailInfo = (
  id: string | string[] | undefined
): Promise<DetailCoinType | undefined> => {
  return get(`getDetailBTCInfo/${id}`);
};

export const getChartData = createAsyncThunk(
  "getChartData",
  async (body: ChartBodyType): Promise<DetailCoinType> => {
    return post(`getCandleChart`, body);
  }
);

export const get5AvgData = createAsyncThunk(
  "getAvgData",
  async (body: GetAvgDataBodyType) => {
    console.log("body", body);

    const data = await post("getAvgData", body);
    return data;
  }
);

export const get20AvgData = createAsyncThunk(
  "get20AvgData",
  async (body: GetAvgDataBodyType) => {
    const data = await post("getAvgData", body);
    return data;
  }
);

export const get60AvgData = createAsyncThunk(
  "get60AvgData",
  async (body: GetAvgDataBodyType) => {
    const data = await post("getAvgData", body);
    return data;
  }
);
