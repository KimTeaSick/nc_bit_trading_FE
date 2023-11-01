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
  sellModal: false,
  sellCoin: "",
  sellUnit: "",
};

const AutoTradingSlice = createSlice({
  name: "AutoTradingSlice",
  initialState,
  reducers: {
    sellModalOpen: (state, action) => {
      state.sellModal = action.payload;
    },
    setSellCoin: (state, action) => {
      state.sellCoin = action.payload.coinName;
      state.sellUnit = action.payload.unit;
    },
  },
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

export const { sellModalOpen, setSellCoin } = AutoTradingSlice.actions;
export default AutoTradingSlice.reducer;
