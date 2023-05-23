import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigation";

export default configureStore ({
    reducer: {
        navigation: navigationReducer,
    }
})