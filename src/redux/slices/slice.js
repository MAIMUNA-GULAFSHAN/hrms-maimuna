import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalDetails: {
    // Define initial state for personal details
    firstName: '',
    lastName: '',
    emailAddress: '',
    workEmail: '',
    employeeID: '',
    contactNo: '',
    emergencyContactNo: '',
    dateOfBirth: '',
    addressLine1: '',
    addressLine2: '',
    landmark: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addPersonalDetails: (state, action) => {
      state.personalDetails = action.payload;
    },
  },
});

export const { addPersonalDetails } = formSlice.actions;

export const selectPersonalDetails = (state) => state.form.personalDetails;

export default formSlice.reducer;
