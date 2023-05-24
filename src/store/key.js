import { createSlice } from "@reduxjs/toolkit";

export const keySlice = createSlice({
  name: "key",
  initialState: {
    activeKeys: [],
  },
  reducers: {
    toggleKey: (state, action) => {
      const key = action.payload;
      const index = state.activeKeys.indexOf(key);
      if (index !== -1) {
        // Key is already active, remove it
        state.activeKeys.splice(index, 1);
      } else {
        // Key is not active, add it
        state.activeKeys.push(key);
      }
    },

    resetKeys: (state) => {
        state.activeKeys = []
    }
  },
});

export const { toggleKey, resetKeys } = keySlice.actions;

export default keySlice.reducer;
