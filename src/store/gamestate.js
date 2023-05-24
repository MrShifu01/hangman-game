import { createSlice } from "@reduxjs/toolkit";

export const gamestateSlice = createSlice({

    name: "gamestate",

    initialState: {
        win: false,
        lose: false
    },

    reducers: {
        toggleWin: (state) => {
            state.win = !state.win
        },

        resetWin: (state) => {
            state.win = false
        },

        toggleLose: (state) => {
            state.lose = !state.lose
        },

        resetLose: (state) => {
            state.lose = false
        },
    }
})

export const { toggleWin, toggleLose, resetWin, resetLose } = gamestateSlice.actions

export default gamestateSlice.reducer