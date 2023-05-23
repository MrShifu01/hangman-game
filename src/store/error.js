import { createSlice } from "@reduxjs/toolkit";

const maxValue = 7
const minValue = 0

export const errorSlice = createSlice({

    name: "error",

    initialState: {
        value: 0
    },

    reducers: {
        incrementError: (state) => {
            if (state.value < maxValue)
            state.value += 1
        },

        decrementError: (state) => {
            if (state.value > minValue)
            state.value -= 1
        },

        resetError: (state) => {
            state.value = 0
        }
    }
})

export const { incrementError, decrementError, resetError } = errorSlice.actions

export default errorSlice.reducer