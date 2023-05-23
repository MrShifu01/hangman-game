import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    
    name: "navigation",
    initialState: {
        instructions: false,
        help: false
    },

    reducers: {
        toggleInstructions: (state) => {
            state.instructions = !state.instructions
            state.help = false
        },

        toggleHelp: (state) => {
            state.help = !state.help
            state.instructions = false
        }
    },
})

export const {toggleInstructions, toggleHelp} = navigationSlice.actions

export default navigationSlice.reducer