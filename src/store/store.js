import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigation";
import wordReducer from "./word";
import errorReducer from "./error";
import keyReducer from "./key";
import gamestateReducer from "./gamestate";

export default configureStore ({
    reducer: {
        navigation: navigationReducer,
        word: wordReducer,
        error: errorReducer,
        key: keyReducer,
        gamestate: gamestateReducer,
    }
})