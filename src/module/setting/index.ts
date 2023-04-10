import { getDisparityOptionThunk } from "@/pages/api/settingAPI";
import { createSlice } from "@reduxjs/toolkit";
import { SettingInitialStateType } from "./setting";

const initialState: SettingInitialStateType = {
  search_idx: 0,
  search_name: "",
  price: "",
  trends_idx: "",
  trends: "",
  transaction_amount: "",
  avg_volume: "",
  first_disparity: "",
  second_disparity: "",
  line_one: null,
  line_two: null,
  line_three: null,
};

const SettingSlice = createSlice({
  name: "SettingSlice",
  initialState,
  reducers: {
    setSearchOption: (state, action) => {
      action.payload.idx ? (state.search_idx = action.payload.idx) : 0;
      state.search_name = action.payload.name;
      state.price = action.payload.price;
      state.trends_idx = action.payload.trends_idx;
      state.trends = action.payload.trends;
      state.transaction_amount = action.payload.transaction_amount;
      state.avg_volume = action.payload.avg_volume;
      state.first_disparity = action.payload.first_disparity;
      state.second_disparity = action.payload.second_disparity;
    },
    setDisparityLineOption: (state, action) => {
      console.log("action.payloadaction.payload", action.payload);

      state.line_one = action.payload?.line_one;
      state.line_two = action.payload?.line_two;
      state.line_three = action.payload?.line_three;
    },
  },
  extraReducers: (builder) => {},
});

export const { setSearchOption, setDisparityLineOption } = SettingSlice.actions;

export default SettingSlice.reducer;
