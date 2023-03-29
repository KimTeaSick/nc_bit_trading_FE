import { createAsyncThunk } from "@reduxjs/toolkit";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { get } from ".";

export const useRecommendPrice = () => {
  const queryKey = "getRecommendPrice" as const;
  const queryFn = async () =>
    await axios
      .get("http://localhost:8000/" + queryKey)
      .then((res) => res.data);
  const request = useQuery([queryKey], queryFn);
  return { request };
};

export const usePossessionCoin = () => {
  const queryKey = "dash/getPossessoionCoinInfo" as const;
  const queryFn = async () =>
    await axios
      .get("http://localhost:8000/" + queryKey)
      .then((res) => res.data);
  const request = useQuery([queryKey], queryFn);
  return { request };
};

export const useAccountInfo = (body: { date: string[] }) => {
  const queryKey = "dash/accountInfo/" as const;
  const queryFn = async () => {
    await axios.get("http://localhost:8000/" + queryKey, {
      params: { date1: body.date[0], date2: body.date[1] },
    });
  };
  const request = useQuery([queryKey], queryFn);
  return { request };
};

export const getAccountThunk = createAsyncThunk(
  "dash/accountInfo",
  async (body: { date: string[] }) => {
    const response = get("dash/accountInfo/", {
      params: { date1: body.date[0], date2: body.date[1] },
    });
    return response;
  }
);
