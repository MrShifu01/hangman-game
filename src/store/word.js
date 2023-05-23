import { createSlice } from "@reduxjs/toolkit";

export const wordSlice = createSlice({
    
    name: "word",
    initialState: {
        word: "Testing"
    },

    reducers: {
        assignWord: (state, action) => {
            state.word = action.payload
        },

        resetWord: (state) => {
            state.word = null
        }
    },
})

export const {assignWord, resetWord} = wordSlice.actions

export default wordSlice.reducer