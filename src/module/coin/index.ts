import { CoinInitialState } from "./coin.d";
import {
  getChartData,
  get5AvgData,
  get20AvgData,
  get60AvgData,
} from "./../../pages/api/coinListAPIs";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CoinInitialState = {
  detailCoin: "",
  chartTerm: "10m",
  chartData: [],
  chartDataStatus: "",

  avg5Data: [],
  avg5DataStatus: "",
  avg5DataTrend: null,
  avg20Data: [],
  avg20DataStatus: "",
  avg20DataTrend: null,
  avg60Data: [],
  avg60DataStatus: "",
  avg60DataTrend: null,
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

    builder.addCase(get5AvgData.pending, (state) => {
      state.avg5DataStatus = "Loading";
    });
    builder.addCase(get5AvgData.fulfilled, (state, action) => {
      state.avg5DataStatus = "Success";
      state.avg5DataTrend = action.payload[0];
      state.avg5Data = Array.isArray(action.payload[1])
        ? action.payload[1]?.filter(
            (element: number | "undefined") => element !== "undefined"
          )
        : [];
    });
    builder.addCase(get5AvgData.rejected, (state, action) => {
      state.avg5DataStatus = `error ${action.error}`;
    });

    builder.addCase(get20AvgData.pending, (state) => {
      state.avg20DataStatus = "Loading";
    });
    builder.addCase(get20AvgData.fulfilled, (state, action) => {
      state.avg20DataStatus = "Success";
      state.avg20DataTrend = action.payload[0];
      state.avg20Data = Array.isArray(action.payload[1])
        ? action.payload[1]?.filter(
            (element: number | "undefined") => element !== "undefined"
          )
        : [];
    });
    builder.addCase(get20AvgData.rejected, (state, action) => {
      state.avg20DataStatus = `error ${action.error}`;
    });

    builder.addCase(get60AvgData.pending, (state) => {
      state.avg60DataStatus = "Loading";
    });
    builder.addCase(get60AvgData.fulfilled, (state, action) => {
      state.avg60DataStatus = "Success";
      state.avg60DataTrend = action.payload[0];
      state.avg60Data = Array.isArray(action.payload[1])
        ? action.payload[1]?.filter(
            (element: number | "undefined") => element !== "undefined"
          )
        : [];
    });
    builder.addCase(get60AvgData.rejected, (state, action) => {
      state.avg60DataStatus = `error ${action.error}`;
    });
  },
});

export const { setDetailCoin, setChartTerm } = coinSlice.actions;

export default coinSlice.reducer;
