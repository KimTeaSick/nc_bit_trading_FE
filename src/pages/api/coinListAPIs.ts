import { createAsyncThunk } from "@reduxjs/toolkit";
import { ChartBodyType, DetailCoinType } from "@/@types/CoinList";
import { get, post } from ".";

export const getCoinList = createAsyncThunk("getCoinList", async () => {
  const { data } = await get("coin/getBitcoinInfo");
  const coinList = Object.entries(data);
  return coinList.slice(0, -1);
});

export const getCoinDetailInfo = async (
  id: string | string[] | undefined
): Promise<DetailCoinType | undefined> => {
  const { data } = await get(`coin/getDetailBTCInfo/${id}`);
  return data;
};

export const getChartData = createAsyncThunk(
  "getChartData",
  async (body: ChartBodyType): Promise<DetailCoinType> => {
    return post(`getCandleChart`, body);
  }
);

export const updateCoinWarning = async (body: {
  value: number;
  coin_name: string;
}) => {
  const response = await post("coinDetail/updateWarning", body);
  return response;
};
