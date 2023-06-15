import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from ".";

export const getSearchCoinList = createAsyncThunk(
  "getSearchCoinList",
  async () => {
    const response = await get("trade/getSearchPriceList");
    return response;
  }
);

export const getNowUsedCondition = createAsyncThunk(
  "getNowUsedCondition",
  async () => {
    const response = await get("trade/getNowUsedCondition");
    return response;
  }
);

export const getCoinInAccount = createAsyncThunk(
  "getCoinInAccount",
  async () => {
    const response = await get("dash/getPossessoionCoinInfo");
    return response;
  }
);
