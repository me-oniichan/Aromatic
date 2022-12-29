import {configureStore} from "@reduxjs/toolkit";
import data from "./DataReducer";
import theme from "./ThemeReducer";
import user from "./UserReducer";

export const store = configureStore({
    reducer: {
        data,
        theme,
        user
    }
})
