import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from ".";

export const get_assets_status = createAsyncThunk(
  "get_assets_status",
  async (body: { days: string }) => {
    const res = await post("assets/asset_status", body);
    return res;
  }
);
