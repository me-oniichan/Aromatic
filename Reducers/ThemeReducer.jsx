import {createSlice} from "@reduxjs/toolkit";

const light = {
    color: 'black',
    bg: 'white',
}

const dark = {
    color: 'white',
    bg: 'black'
}

const theme = {
    dark,
    light
}

const ThemeReducer = createSlice({
    name: 'Theme',
    initialState: dark,
    reducers: {
        switchTheme(state, action) {
            return theme[action.payload];
        }
    }
})

export const {switchTheme} = ThemeReducer.actions;
export default ThemeReducer.reducer;
