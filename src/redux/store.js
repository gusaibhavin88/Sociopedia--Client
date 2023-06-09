import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/reducers/reducers";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
