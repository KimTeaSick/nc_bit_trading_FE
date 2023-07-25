import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from ".";

export const getOrderList = createAsyncThunk(
  "getOrderList",
  async (body: { page: number }) => {
    const response = await post("tradeHis/getOrderList", body);
    return response;
  }
);

export const getDateOrderList = createAsyncThunk(
  "getDateOrderList",
  async (body: any) => {
    const response = await post("getDateOrderList", body);
    return response;
  }
);

export const rate_check = createAsyncThunk(
  "dash/rateCheck",
  async (body: number) => {
    const response = await post("dash/rateCheck", { days: body });
    return response;
  }
);
