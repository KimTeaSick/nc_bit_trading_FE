import { configureStore } from "@reduxjs/toolkit";
import { Reducer, AnyAction } from "redux";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "./rootReducer";
import { RootStateType } from "./rootReducer.d";

const isDev = process.env.NODE_ENV === "development";

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer as Reducer<RootStateType, AnyAction>,
    devTools: isDev,
  });
  return store;
};

const wrapper = createWrapper(createStore);
export default wrapper;
