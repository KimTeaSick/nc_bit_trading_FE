import { createSlice } from "@reduxjs/toolkit";
import { UserInitialStateType } from "./user";
// import { get_user_info } from "@/pages/api/user";

const InitialState: UserInitialStateType = {
  userInfo: {
    name: "",
    idx: null,
  },
  userInfoStatus: "",
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: InitialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(get_user_info.pending, (state) => {
    //   state.userInfoStatus = "Loading";
    // });
    // builder.addCase(get_user_info.fulfilled, (state, action) => {
    //   state.userInfoStatus = "Success";
    //   state.userInfo = action.payload;
    // });
    // builder.addCase(get_user_info.rejected, (state, action) => {
    //   state.userInfoStatus = `Error ${action.error}`;
    // });
  },
});

export default UserSlice.reducer;
