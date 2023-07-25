import {
  detailTradingOption,
  getTradingOptionList,
} from "@/pages/api/autotradingCondition";
import { AutoInitialStateType } from "./index.d";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AutoInitialStateType = {
  optionList: [],
  optionListState: "",
  detailIdx: null,
  name: null,
  buy: null,
  sell: null,
  account: null,
  optionState: "",
};

const AutoTradingSlice = createSlice({
  name: "AutoTradingSlice",
  initialState,
  reducers: {
    resetConditoin: (state) => {
      state.detailIdx = null;
      state.name = null;
      state.buy = null;
      state.sell = null;
      state.account = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTradingOptionList.pending, (state) => {
      state.optionListState = "Loading...";
    });
    builder.addCase(getTradingOptionList.fulfilled, (state, action) => {
      state.optionListState = "Success!";
      state.optionList = action.payload;
    });
    builder.addCase(getTradingOptionList.rejected, (state, action) => {
      state.optionListState = `Error, ${action.error}`;
    });
    builder.addCase(detailTradingOption.pending, (state) => {
      state.optionState = "Loading...";
    });
    builder.addCase(detailTradingOption.fulfilled, (state, action) => {
      state.optionState = "Success!";
      state.detailIdx = action.payload.value.idx;
      state.name = action.payload.name;
      state.buy = action.payload.value.buy;
      state.sell = action.payload.value.sell;
      state.account = action.payload.value.account;
    });
    builder.addCase(detailTradingOption.rejected, (state, action) => {
      state.optionState = `Error, ${action.error}`;
    });
  },
});

export const { resetConditoin } = AutoTradingSlice.actions;
export default AutoTradingSlice.reducer;
