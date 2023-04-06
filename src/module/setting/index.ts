import { getDisparityOptionThunk } from "@/pages/api/settingAPI";
import { createSlice } from "@reduxjs/toolkit";
import { SettingInitialStateType } from "./setting";

const initialState: SettingInitialStateType = {
  search_idx: 0,
  search_name: "",
  price: "",
  trends_term: "",
  trends: "",
  transaction_amount: "",
  avg_volume: "",
  first_disparity: "",
  second_disparity: "",
};

const SettingSlice = createSlice({
  name: "SettingSlice",
  initialState,
  reducers: {
    setSearchOption: (state, action) => {
      console.log("action.payload", action.payload);
      action.payload.idx ? (state.search_idx = action.payload.idx) : 0;
      state.search_name = action.payload.name;
      state.price = action.payload.price;
      state.trends_term = action.payload.trends_term;
      state.trends = action.payload.trends;
      state.transaction_amount = action.payload.transaction_amount;
      state.avg_volume = action.payload.avg_volume;
      state.first_disparity = action.payload.first_disparity;
      state.second_disparity = action.payload.second_disparity;
    },
  },
  extraReducers: (builder) => {},
});

export const { setSearchOption } = SettingSlice.actions;

export default SettingSlice.reducer;
