import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../slices/slice';

const store = configureStore({
  reducer: {
    form: formSlice,
  },
});

export default store;
