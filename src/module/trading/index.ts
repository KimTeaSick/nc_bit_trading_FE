import { TradingInitialState } from "./trading.d";
import { createSlice } from "@reduxjs/toolkit";
import { getOrderList } from "@/pages/api/tradingList";

const initialState: TradingInitialState = {
  orderList: [],
  orderListStatus: "",
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
      state.orderList = action.payload;
    });
    builder.addCase(getOrderList.rejected, (state, action) => {
      state.orderListStatus = `error ${action.error}`;
    });
  },
});

export default tradingSlice.reducer;
