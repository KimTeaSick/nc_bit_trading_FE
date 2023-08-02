import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { AccountType, RateType } from "@/@types/Dash";
import coin_list from "../../variables/coin_list.json";
import { get, post } from ".";

export const useRecommendPrice = () => {
  const queryKey = "dash/recommendCoin" as const;
  const queryFn = async () =>
    await get(queryKey).then((res) => {
      return res;
    });
  const request = useQuery([queryKey], queryFn);
  return { request };
  // return 1;
};

export const usePossessionCoin = () => {
  const queryKey = "dash/getPossessoionCoinInfo" as const;
  const queryFn = async () =>
    await post(queryKey, { idx: 1 }).then((res) => {
      return res;
    });
  const request = useMutation(queryFn);
  console.log("request ::: ::: ", request);

  return { request };
};

export const getPossessionCoin = createAsyncThunk(
  "dash/getPossessoionCoinInfo",
  async () => {
    const response = post("dash/getPossessoionCoinInfo", { idx: 1 });
    return response;
  }
);

export const getAccountThunk = createAsyncThunk(
  "dash/accountInfo",
  async (body: { date: string[] }) => {
    console.log("body", body);
    const response = await get("dash/accountInfo/", {
      params: { date1: body.date[0], date2: body.date[1] },
    });
    console.log("response", response);
    return response;
  }
);

export const useTodayAccount = () => {
  const queryKey = "todayAccount" as const;
  const queryFn = async () =>
    await get(queryKey).then((res: AccountType) => {
      return res;
    });

  const request = useQuery([queryKey], queryFn);

  return { request };
};

export const useNowRate = (): {
  request: UseQueryResult<RateType, unknown>;
} => {
  const queryKey = "nowRate" as const;
  const queryFn = async () =>
    await get(queryKey).then((res: RateType) => {
      return res;
    });
  const request = useQuery([queryKey], queryFn);
  return { request };
};

export const json_file_download = async () => {
  const response = await get("coinlist.json");
  const json_res = JSON.stringify(response);
  const json_coin_list = JSON.stringify(coin_list);
  console.log("one", response === coin_list);
  console.log("two", json_res === json_coin_list);
  return response;
};
