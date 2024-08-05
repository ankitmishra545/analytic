import { configureStore } from "@reduxjs/toolkit";
import systemInfoReducer from "./systemInfoSlice";

const appStore = configureStore({
  reducer: {
    systemInfo: systemInfoReducer,
  },
});

export default appStore;
