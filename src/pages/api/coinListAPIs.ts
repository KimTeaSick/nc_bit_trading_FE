import { createAsyncThunk } from "@reduxjs/toolkit";
import { ChartBodyType, DetailCoinType } from "@/@types/CoinList";
import { get, post } from ".";

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

export const getAvgData = createAsyncThunk("getAvgData", async () => {
  const data = await post("getAvgData");
  return data;
});
