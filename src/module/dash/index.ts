import * as Dash from "@/pages/api/dash";
import { createSlice } from "@reduxjs/toolkit";
import { DashInitialState } from "./dash";

const initialState: DashInitialState = {
  recommendPrice: [],
  recommendPriceStatus: "",
  accountInfo: [],
  accountInfoStatus: "",
  possessionCoin: [],
  possessionCoinStatus: "",
};

const DashSlice = createSlice({
  name: "DashSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Dash.getAccountThunk.pending, (state) => {
      state.accountInfoStatus = "Loading";
    });
    builder.addCase(Dash.getAccountThunk.fulfilled, (state, action) => {
      state.accountInfo = action.payload;
      state.accountInfoStatus = "Success";
    });
    builder.addCase(Dash.getAccountThunk.rejected, (state, action) => {
      state.accountInfoStatus = `error ${action.error}`;
    });
  },
});

export default DashSlice.reducer;
