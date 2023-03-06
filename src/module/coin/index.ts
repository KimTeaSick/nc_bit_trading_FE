import { CoinInitialState } from "./coin.d";
import { getChartData, getAvgData } from "./../../pages/api/coinListAPIs";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CoinInitialState = {
  detailCoin: "",
  chartTerm: "24h",
  chartData: [],
  chartDataStatus: "",

  avgData: [],
  avgDataStatus: "",
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

    builder.addCase(getAvgData.pending, (state) => {
      state.avgDataStatus = "Loading";
    });
    builder.addCase(getAvgData.fulfilled, (state, action) => {
      state.avgDataStatus = "Success";
      state.avgData = action.payload;
    });
    builder.addCase(getAvgData.rejected, (state, action) => {
      state.avgDataStatus = `error ${action.error}`;
    });
  },
});

export const { setDetailCoin, setChartTerm } = coinSlice.actions;

export default coinSlice.reducer;
