import {
  getCoinInAccount,
  getNowUsedCondition,
  getSearchCoinList,
} from "@/pages/api/autotrading";
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
    builder.addCase(getSearchCoinList.pending, (state) => {
      state.searchListStatus = "Loading";
    });
    builder.addCase(getSearchCoinList.fulfilled, (state, action) => {
      state.searchList = action.payload;
      state.searchListStatus = "Success";
    });
    builder.addCase(getSearchCoinList.rejected, (state, action) => {
      state.searchListStatus = `Error, ${action.error}`;
    });

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

    builder.addCase(getCoinInAccount.pending, (state) => {
      state.myCoinListStatus = "Loading";
    });
    builder.addCase(getCoinInAccount.fulfilled, (state, action) => {
      state.myCoinList = action.payload;
      state.myCoinListStatus = "Success";
    });
    builder.addCase(getCoinInAccount.rejected, (state, action) => {
      state.myCoinListStatus = `Error, ${action.error}`;
    });
  },
});

export default AutoTradingSlice.reducer;
