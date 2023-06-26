import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { get } from ".";
import { AccountType } from "@/@types/Dash";

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
    await get(queryKey).then((res) => {
      return res;
    });
  const request = useQuery([queryKey], queryFn);
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

export const useNowRate = () => {
  const queryKey = "nowRate" as const;
  const queryFn = async () =>
    await get(queryKey).then((res: AccountType) => {
      return res;
    });

  const request = useQuery([queryKey], queryFn);

  return { request };
};
