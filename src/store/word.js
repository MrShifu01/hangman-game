import { createSlice } from "@reduxjs/toolkit";

export const wordSlice = createSlice({
  name: "word", // Name of the slice
  initialState: {
    word: null, // Initial state for the word
  },
  reducers: {
    assignWord: (state, action) => {
      state.word = action.payload; // Update the word state with the assigned word
    },
    resetWord: (state) => {
      state.word = null; // Reset the word state to null
    },
  },
});

export const { assignWord, resetWord } = wordSlice.actions; // Export the action creators

export default wordSlice.reducer; // Export the reducer
