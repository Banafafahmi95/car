import React from "react";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

let store;
const Root = ({ children, initialState = {} }, props) => {
  store = configureStore({
    reducer: rootReducer(),
    devTools: process.env.NODE_ENV !== "production",
  });

  return <Provider store={store}>{children}</Provider>;
};
export { store };
export default Root;
