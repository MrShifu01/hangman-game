import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigation";
import wordReducer from "./word";
import errorReducer from "./error";
import keyReducer from "./key";

export default configureStore ({
    reducer: {
        navigation: navigationReducer,
        word: wordReducer,
        error: errorReducer,
        key: keyReducer,
    }
})