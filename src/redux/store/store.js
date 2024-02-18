import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../slices/slice"; // Update the import path

const store = configureStore({
  reducer: {
    form: formReducer
  },
});

export default store;
