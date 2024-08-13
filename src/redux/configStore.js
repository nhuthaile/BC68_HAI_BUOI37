import { configureStore } from "@reduxjs/toolkit";
import sinhvienSlice from "./sinhvienSlice";

export const store = configureStore({
  reducer: { sinhvienSlice },
});
