import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from ".";
import { useQuery } from "@tanstack/react-query";

export const getNowUsedCondition = createAsyncThunk(
  "getNowUsedCondition",
  async () => {
    const response = await get("trade/getNowUsedCondition");
    return response;
  }
);

export const useRecommendCoin = () => {
  const queryKey = "trade/getSearchPriceList";
  const queryFn = async () =>
    await get(queryKey).then((res) => {
      return res;
    });
  const request = useQuery([queryKey], queryFn);
  return { request };
};

export const usePossessionCoin = () => {
  const queryKey = "dash/getPossessoionCoinInfo";
  const queryFn = async () =>
    await get(queryKey).then((res) => {
      return res;
    });
  const request = useQuery([queryKey], queryFn);
  return { request };
};

export const useTradingHis = () => {
  const queryKey = "trade/getTradingHis";
  const queryFn = async () =>
    await get(queryKey).then((res) => {
      return res;
    });
  const request = useQuery([queryKey], queryFn);
  return { request };
};

export const useAutoStatus = () => {
  const queryKey = "trade/autoTradingCheck";
  const queryFn = async () => {
    await get(queryKey).then((res) => {
      return res;
    });
  };

  const request = useQuery([queryKey], queryFn);
  return { request };
};

export const getATStatus = createAsyncThunk("autoTradingCheck", async () => {
  const response = await get("trade/autoTradingCheck");
  return response;
});
