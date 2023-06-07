import { AutoInitialStateType } from "./index.d";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AutoInitialStateType = {};

const AutoTradingSlice = createSlice({
  name: "AutoTradingSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default AutoTradingSlice.reducer;
