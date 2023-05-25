// Redux slice for managing the game state

import { createSlice } from "@reduxjs/toolkit";

export const gamestateSlice = createSlice({
  name: "gamestate", // Slice name

  initialState: {
    win: false, // Initial state for win status
    lose: false, // Initial state for lose status
  },

  reducers: {
    toggleWin: (state) => {
      state.win = !state.win; // Toggle win status
    },

    resetWin: (state) => {
      state.win = false; // Reset win status to false
    },

    toggleLose: (state) => {
      state.lose = !state.lose; // Toggle lose status
    },

    resetLose: (state) => {
      state.lose = false; // Reset lose status to false
    },
  },
});

export const { toggleWin, toggleLose, resetWin, resetLose } = gamestateSlice.actions;

export default gamestateSlice.reducer;
