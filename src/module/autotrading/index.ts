import { getNowUsedCondition } from "@/pages/api/autotrading";
import { AutoTradingInitialState } from "./../autoTrading/index.d";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AutoTradingInitialState = {
  searchList: [],
  searchListStatus: "",
  searchCondition: null,
  tradingCondition: null,
  conditionListStatus: "",
  myCoinList: [],
  myCoinListStatus: "",
};

const AutoTradingSlice = createSlice({
  name: "AutoTradingSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNowUsedCondition.pending, (state) => {
      state.conditionListStatus = "Loading";
    });
    builder.addCase(getNowUsedCondition.fulfilled, (state, action) => {
      state.searchCondition = action.payload.searchOption;
      state.tradingCondition = action.payload.tradingOption;
      state.conditionListStatus = "Success";
    });
    builder.addCase(getNowUsedCondition.rejected, (state, action) => {
      state.conditionListStatus = `Error, ${action.error}`;
    });
  },
});

export default AutoTradingSlice.reducer;