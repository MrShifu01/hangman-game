// Redux store configuration

import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigation";
import wordReducer from "./word";
import errorReducer from "./error";
import keyReducer from "./key";
import gamestateReducer from "./gamestate";

export default configureStore({
  reducer: {
    navigation: navigationReducer, // Register navigation reducer
    word: wordReducer, // Register word reducer
    error: errorReducer, // Register error reducer
    key: keyReducer, // Register key reducer
    gamestate: gamestateReducer, // Register gamestate reducer
  },
});
