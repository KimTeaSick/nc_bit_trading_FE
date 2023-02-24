import { CoinInitialState } from "./coin.d";
import { getChartData } from "./../../pages/api/coinListAPIs";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CoinInitialState = {
  detailCoin: "",
  chartTerm: "24h",
  chartData: [],
  chartDataStatus: "",
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
