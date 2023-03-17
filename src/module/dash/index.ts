// import { getRecommendPrice } from "@/pages/api/dash";
import { createSlice } from "@reduxjs/toolkit";
import { DashInitialState } from "./dash";

const initialState: DashInitialState = {
  recommendPrice: [],
  recommendPriceStatus: "",
};

const DashSlice = createSlice({
  name: "DashSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getRecommendPrice.pending, (state) => {
    //   state.recommendPriceStatus = "Loading";
    // });
    // builder.addCase(getRecommendPrice.fulfilled, (state, action) => {
    //   state.recommendPrice = action.payload;
    //   state.recommendPriceStatus = "Success";
    // });
    // builder.addCase(getRecommendPrice.rejected, (state, action) => {
    //   state.recommendPriceStatus = `error ${action.error}`;
    // });
  },
});

export default DashSlice.reducer;
