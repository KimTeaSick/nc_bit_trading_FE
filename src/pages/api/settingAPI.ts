import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from ".";

export const getDisparityOptionThunk = createAsyncThunk(
  "getDisparityOptionThunk",
  async () => {
    const response = await get("setting/getDisparity");
    return response;
  }
);
