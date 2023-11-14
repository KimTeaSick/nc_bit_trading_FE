import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { AccountType, RateType } from "@/@types/Dash";
import { get, post } from ".";

export const useRecommendPrice = () => {
  const queryKey = "dash/recommendCoin" as const;
  const queryFn = async () =>
    await get(queryKey).then((res) => {
      return res;
    });
  const request = useQuery([queryKey], queryFn);
  return { request };
};

export const usePossessionCoin = () => {
  const queryKey = "dash/getPossessoionCoinInfo" as const;
  const queryFn = async () =>
    await get(queryKey).then((res) => {
      return res;
    });
  const request = useMutation(queryFn);
  return { request };
};

export const getPossessionCoin = createAsyncThunk(
  "dash/getPossessoionCoinInfo",
  async () => {
    const response = get("dash/getPossessoionCoinInfo");
    return response;
  }
);

export const getAccountThunk = createAsyncThunk(
  "dash/accountInfo",
  async (body: { date: string[] }) => {
    const response = await get("dash/accountInfo/", {
      params: { date1: body.date[0], date2: body.date[1] },
    });
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

export const get_users_rate_info = async (idx: number) => {
  const res = await get(`dash/get_users_rate_info/?idx=${idx}`);
  return res;
};

export const useUsersCurrentRate = (idx: number) => {
  const queryKey = `dash/getCurrentRate/${idx}` as const;
  const queryFn = async () =>
    await get("dash/getCurrentRate/", { params: { idx: idx } }).then((res) => {
      return res;
    });

  const request = useQuery([queryKey], queryFn);
  return { request };
};

export const get_day_week_month_data = async (idx: number) => {
  const res = await post("dash/day_week_month_data", { idx });
  return res;
};

export const all_user_deposit = async () => {
  const res = await get("dash/all_user_deposit");
  return res;
};

export const getChartData = async (idx: string | string[]) => {
  const res = await get(`dash/getChartData/?idx=${idx}`);
  return res;
};
