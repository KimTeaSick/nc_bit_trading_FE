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

export const get5AvgData = createAsyncThunk("getAvgData", async () => {
  const data = await post("getAvgData", { range: 5 });
  return data;
});

export const get20AvgData = createAsyncThunk("get20AvgData", async () => {
  const data = await post("getAvgData", { range: 20 });
  return data;
});

export const get60AvgData = createAsyncThunk("get60AvgData", async () => {
  const data = await post("getAvgData", { range: 60 });
  return data;
});
