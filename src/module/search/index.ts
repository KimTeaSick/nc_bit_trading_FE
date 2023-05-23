import { createSlice } from "@reduxjs/toolkit";
import { SearchInitialStateType } from "./search";

const initialState: SearchInitialStateType = {
  priceSearchCoin: null,
  transactionAmountSearchCoin: null,
  disparitySearchCoin: null,
  MASPSearchCoin: null,
  trendSearchCoin: null,
  MACDSearchCoin: null,
  recommends: null,
  conditionList: null,
  conditionDetail: null,
};

const SearchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearchResultData: (state, action) => {
      state.priceSearchCoin = action.payload.Price;
      state.MACDSearchCoin = action.payload.MACD;
      state.MASPSearchCoin = action.payload.Masp;
      state.disparitySearchCoin = action.payload.Disparity;
      state.transactionAmountSearchCoin = action.payload.TransactioAmount;
      state.trendSearchCoin = action.payload.Trend;
      state.recommends = action.payload.recommends;
    },
    setResultDataRollback: (state) => {
      state.priceSearchCoin = null;
      state.MACDSearchCoin = null;
      state.MASPSearchCoin = null;
      state.disparitySearchCoin = null;
      state.transactionAmountSearchCoin = null;
      state.trendSearchCoin = null;
      state.recommends = null;
    },
    setCondiotionList: (state, action) => {
      state.conditionList = action.payload;
    },
    setConditionDetail: (state, action) => {
      state.conditionDetail = action.payload;
    },
    setConditionDetailRollBack: (state) => {
      state.conditionDetail = null;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setSearchResultData,
  setCondiotionList,
  setConditionDetail,
  setResultDataRollback,
  setConditionDetailRollBack,
} = SearchSlice.actions;
export default SearchSlice.reducer;
