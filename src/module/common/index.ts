import { getATStatus } from "@/pages/api/autotrading";
import { CommonInitialState } from "./common.d";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CommonInitialState = {
  activePage: "",
  pagiNation: "",
  lineOneRange: 5,
  lineOneColor: "green",
  lineTwoRange: 20,
  lineTwoColor: "skyblue",
  lineThreeRange: 60,
  lineThreeColor: "orange",
  autoTradingStatus: 0,
  ATStatus: "",
};

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    setPageActive: (state, action) => {
      state.activePage = action.payload;
    },
    setLineOneRange: (state, action) => {
      state.lineOneRange = action.payload;
    },
    setLineTwoRange: (state, action) => {
      state.lineTwoRange = action.payload;
    },
    setLineThreeRange: (state, action) => {
      state.lineThreeRange = action.payload;
    },
    setLineOneColor: (state, action) => {
      state.lineOneColor = action.payload;
    },
    setLineTwoColor: (state, action) => {
      state.lineTwoColor = action.payload;
    },
    setLineThreeColor: (state, action) => {
      state.lineThreeColor = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getATStatus.pending, (state) => {
      state.ATStatus = "Loading";
    });
    builder.addCase(getATStatus.fulfilled, (state, action) => {
      state.ATStatus = "Success";
      state.autoTradingStatus = action.payload.now_status;
    });
    builder.addCase(getATStatus.rejected, (state, action) => {
      state.ATStatus = `Error, ${action.error}`;
    });
  },
});

export const {
  setPageActive,
  setLineOneRange,
  setLineTwoRange,
  setLineThreeRange,
  setLineOneColor,
  setLineTwoColor,
  setLineThreeColor,
} = commonSlice.actions;

export default commonSlice.reducer;
