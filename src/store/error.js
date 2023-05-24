import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({

    name: "error",

    initialState: {
        value: 0
    },

    reducers: {
        incrementError: (state) => {
            state.value += 1
        },

        resetError: (state) => {
            state.value = 0
        }
    }
})

export const { incrementError, decrementError, resetError } = errorSlice.actions

export default errorSlice.reducer