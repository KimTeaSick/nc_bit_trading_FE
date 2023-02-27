import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from ".";

export const getOrderList = createAsyncThunk("getOrderList", async () => {
  const response = await post("getOrderList");
  return response;
});
