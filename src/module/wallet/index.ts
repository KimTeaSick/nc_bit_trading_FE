import { getBalance } from "@/pages/api/walletAPIs";
import { createSlice } from "@reduxjs/toolkit";
import { WalletInitialState } from "./wallet";

const initialState: WalletInitialState = {
  balance: 0.0,
  coinList: [],
  balanceState: "",
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
  },
});

export default walletSlice.reducer;
