import { AssetsInitialType } from "./index.d";
import { get_assets_status } from "@/pages/api/assets";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AssetsInitialType = {
  account_balance: 0,
  rate: 0,
  date: "",
  table_data: [],
  invest_money: 0,
  assets_status: "",
};

const AssetsSlice = createSlice({
  name: "AssetsSlice",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(get_assets_status.pending, (state) => {
      state.assets_status = "Loading";
    });
    builder.addCase(get_assets_status.fulfilled, (state, action) => {
      state.assets_status = "Success";
      state.account_balance = action.payload.account_balance;
      state.rate = action.payload.rate;
      state.date = action.payload.date;
      state.table_data = action.payload.table_data;
      state.invest_money = action.payload.invest_money;
    });
    builder.addCase(get_assets_status.rejected, (state, action) => {
      state.assets_status = `Error ::: ::: ${action.error}`;
    });
  },
});

export default AssetsSlice.reducer;
