import { CoinInitialState } from "./coin.d";
import { getChartData, getCoinList } from "./../../pages/api/coinListAPIs";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CoinInitialState = {
  detailCoin: "",
  chartTerm: "10m",

  chartData: [],
  chartDataStatus: "",

  coinList: [],
  coinListStatus: "",
};

const coinSlice = createSlice({
  name: "coinSlice",
  initialState,
  reducers: {
    setDetailCoin: (state, action) => {
      state.detailCoin = action.payload;
    },
    setChartTerm: (state, action) => {
      state.chartTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCoinList.pending, (state) => {
      state.coinListStatus = "Loading";
    });
    builder.addCase(getCoinList.fulfilled, (state, action) => {
      state.coinList = action.payload;
      state.coinListStatus = "success";
    });
    builder.addCase(getCoinList.rejected, (state, action) => {
      state.coinListStatus = `error ${action.error}`;
    });
    builder.addCase(getChartData.pending, (state) => {
      state.chartDataStatus = "Loading";
    });
    builder.addCase(getChartData.fulfilled, (state, action) => {
      state.chartData = action.payload;
      state.chartDataStatus = "success";
    });
    builder.addCase(getChartData.rejected, (state, action) => {
      state.chartDataStatus = `error ${action.error}`;
    });
  },
});

export const { setDetailCoin, setChartTerm } = coinSlice.actions;

export default coinSlice.reducer;
