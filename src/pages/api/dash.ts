import { post } from "./index";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRecommendPrice = createAsyncThunk(
  "getRecommendPrice",
  async () => {
    const response = await post("getRecommendPrice");
    return response;
  }
);
