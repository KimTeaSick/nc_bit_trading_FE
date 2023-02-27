import { getBalance, getProperty } from "@/pages/api/walletAPIs";
import { createSlice } from "@reduxjs/toolkit";
import { WalletInitialState } from "./wallet";

const initialState: WalletInitialState = {
  balance: 0.0,
  coinList: [],
  balanceState: "",
  myProperty: "",
  myPropertyState: "",
};

const walletSlice = createSlice({
  name: "walletSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBalance.pending, (state) => {
      state.balanceState = "Loading";
    });

    builder.addCase(getBalance.fulfilled, (state, action) => {
      state.balance = action.payload[0];
      state.coinList = action.payload[1];
      state.balanceState = "Success";
    });

    builder.addCase(getBalance.rejected, (state, action) => {
      state.balanceState = `error ${action.error}`;
    });

    builder.addCase(getProperty.pending, (state) => {
      state.myPropertyState = "Loading";
    });

    builder.addCase(getProperty.fulfilled, (state, action) => {
      state.myProperty = action.payload;
      state.myPropertyState = "Success";
    });

    builder.addCase(getProperty.rejected, (state, action) => {
      state.myPropertyState = `error ${action.error}`;
    });
  },
});

export default walletSlice.reducer;
