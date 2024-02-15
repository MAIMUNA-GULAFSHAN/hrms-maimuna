import { configureStore } from "@reduxjs/toolkit";
import formDataSlice from "../slices/slice";

const Store = configureStore({
  reducer: formDataSlice,
});

export default Store;
