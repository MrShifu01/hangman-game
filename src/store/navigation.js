// Redux slice for managing the navigation state

import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation", // Slice name

  initialState: {
    instructions: false, // Initial state for instructions
    help: false, // Initial state for help
  },

  reducers: {
    toggleInstructions: (state) => {
      state.instructions = !state.instructions; // Toggle instructions state
      state.help = false; // Reset help state to false
    },

    toggleHelp: (state) => {
      state.help = !state.help; // Toggle help state
      state.instructions = false; // Reset instructions state to false
    },
  },
});

export const { toggleInstructions, toggleHelp } = navigationSlice.actions;

export default navigationSlice.reducer;
