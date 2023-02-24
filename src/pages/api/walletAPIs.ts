import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from ".";

export const getBalance = createAsyncThunk("checkAccount", async () => {
  const response = await get("checkAccount");
  return response;
});

export const sell = (body: { coin: string; unit: number }) => {
  post("sell", body);
};

export const buy = (body: { coin: string; unit: number }) => {
  post("buy", body);
};
