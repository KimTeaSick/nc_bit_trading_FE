import { getDisparityOptionThunk } from "@/pages/api/settingAPI";
import { createSlice } from "@reduxjs/toolkit";
import { SettingInitialStateType } from "./setting";

const initialState: SettingInitialStateType = {
  firstDisparityTerm: "",
  firstDisparityColor: "",
  firstDisparityStatus: "",
  secondDisparityTerm: "",
  secondDisparityColor: "",
  secondDisparityStatus: "",
  thirdDisparityTerm: "",
  thirdDisparityColor: "",
  thirdDisparityStatus: "",
};

const SettingSlice = createSlice({
  name: "SettingSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDisparityOptionThunk.pending, (state) => {
      state.firstDisparityStatus = "Loading";
      state.secondDisparityStatus = "Loading";
      state.thirdDisparityStatus = "Loading";
    });
    builder.addCase(getDisparityOptionThunk.fulfilled, (state, action) => {
      state.firstDisparityStatus = "Success";
      state.firstDisparityTerm = action.payload[0][1];
      state.firstDisparityColor = action.payload[0][2];
      state.secondDisparityStatus = "Success";
      state.secondDisparityTerm = action.payload[1][1];
      state.secondDisparityColor = action.payload[1][2];
      state.thirdDisparityStatus = "Success";
      state.thirdDisparityTerm = action.payload[2][1];
      state.thirdDisparityColor = action.payload[2][2];
    });
    builder.addCase(getDisparityOptionThunk.rejected, (state, action) => {
      state.firstDisparityStatus = `error ${action.error}`;
      state.secondDisparityStatus = `error ${action.error}`;
      state.thirdDisparityStatus = `error ${action.error}`;
    });
  },
});

export default SettingSlice.reducer;
