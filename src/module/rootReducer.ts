import { RootStateType } from "./rootReducer.d";
import { AnyAction, CombinedState, combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import commonSlice from "./common";
import walletSlice from "./wallet";
import coinSlice from "./coin";
import tradingSlice from "./trading";
import dashSlice from "./dash";
import settingSlice from "./setting";

const rootReducer = (
  state: RootStateType,
  action: AnyAction
): CombinedState<any> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        common: commonSlice,
        wallet: walletSlice,
        coin: coinSlice,
        trading: tradingSlice,
        dash: dashSlice,
        setting: settingSlice,
      });
      return combineReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
