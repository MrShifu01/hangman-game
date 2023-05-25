// Redux slice for managing the error state

import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error", // Slice name

  initialState: {
    value: 0, // Initial state for error value
  },

  reducers: {
    incrementError: (state) => {
      state.value += 1; // Increment error value
    },

    resetError: (state) => {
      state.value = 0; // Reset error value to 0
    },
  },
});

export const { incrementError, resetError } = errorSlice.actions;

export default errorSlice.reducer;
