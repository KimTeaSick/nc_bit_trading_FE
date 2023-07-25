import { TradingInitialState } from "./trading.d";
import { createSlice } from "@reduxjs/toolkit";
import {
  getOrderList,
  getDateOrderList,
  rate_check,
} from "@/pages/api/tradingList";

const initialState: TradingInitialState = {
  orderList: [],
  orderListStatus: "",
  orderListPage: "",

  rate: null,
  account_balance: null,
  rateStatus: "",
};

const tradingSlice = createSlice({
  name: "tradingSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrderList.pending, (state) => {
      state.orderListStatus = "Loading";
    });
    builder.addCase(getOrderList.fulfilled, (state, action) => {
      state.orderListStatus = "Success";
      state.orderList = action.payload.data;
      state.orderListPage = action.payload.page;
    });
    builder.addCase(getOrderList.rejected, (state, action) => {
      state.orderListStatus = `error ${action.error}`;
    });

    builder.addCase(getDateOrderList.pending, (state) => {
      state.orderListStatus = "Loading";
    });
    builder.addCase(getDateOrderList.fulfilled, (state, action) => {
      state.orderListStatus = "Success";
      state.orderList = action.payload.data;
      state.orderListPage = action.payload.page;
    });
    builder.addCase(getDateOrderList.rejected, (state, action) => {
      state.orderListStatus = `error ${action.error}`;
    });

    builder.addCase(rate_check.pending, (state) => {
      state.rateStatus = "Loading";
    });
    builder.addCase(rate_check.fulfilled, (state, action) => {
      state.rateStatus = "Success";
      state.rate = action.payload.rate;
      state.account_balance = action.payload.account_balance;
    });
    builder.addCase(rate_check.rejected, (state, action) => {
      state.rateStatus = `error ${action.error}`;
    });
  },
});

export default tradingSlice.reducer;
