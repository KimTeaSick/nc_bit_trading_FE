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
      state.priceSearchCoin = action.payload.coins.Price;
      state.MACDSearchCoin = action.payload.coins.MACD;
      state.MASPSearchCoin = action.payload.coins.Masp;
      state.disparitySearchCoin = action.payload.coins.Disparity;
      state.transactionAmountSearchCoin = action.payload.coins.TransactioAmount;
      state.trendSearchCoin = action.payload.coins.Trend;
      state.recommends = action.payload.coins.recommends;
    },
    setSearchResultBetaData: (state, action) => {
      state.recommends = action.payload;
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
  setSearchResultBetaData,
} = SearchSlice.actions;
export default SearchSlice.reducer;
