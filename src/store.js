import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import accountInfoReducer from "./store/accountInfo/accountInfoSlice";

export const store = configureStore({
  reducer: {
    accountInfo: accountInfoReducer,
    counter: counterReducer,
  },
});
