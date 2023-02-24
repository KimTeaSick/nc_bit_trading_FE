import { CommonInitialState } from "./common.d";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CommonInitialState = {
  activePage: "",
};

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    setPageActive: (state, action) => {
      state.activePage = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setPageActive } = commonSlice.actions;
export default commonSlice.reducer;
