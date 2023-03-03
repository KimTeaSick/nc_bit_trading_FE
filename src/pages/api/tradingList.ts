import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from ".";

export const getOrderList = createAsyncThunk(
  "getOrderList",
  async (body: { page: string }) => {
    const response = await post("getOrderList", body);
    return response;
  }
);
