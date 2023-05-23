import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigation";
import wordReducer from "./word";
import errorReducer from "./error";

export default configureStore ({
    reducer: {
        navigation: navigationReducer,
        word: wordReducer,
        error: errorReducer,
    }
})