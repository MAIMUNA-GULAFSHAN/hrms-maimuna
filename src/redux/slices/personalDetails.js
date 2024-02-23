
import { createSlice } from '@reduxjs/toolkit';

const personalDetails = createSlice({
  name: 'form',
  initialState: {
    formData: {},
  },
  reducers: {
    addFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { addFormData } = personalDetails.actions;
export const selectFormData = (state) => state.form;
export default personalDetails.reducer;