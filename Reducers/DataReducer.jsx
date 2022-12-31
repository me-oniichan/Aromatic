import {createSlice} from "@reduxjs/toolkit";

const DataReducer = createSlice({
    name: 'data',
    initialState: {
        table : null,
        activities: null,
        restricted : null
    },
    reducers: {
        dataLoad(state, action) {
            return {...action.payload};
        },

        dataUpdate(state, action) {
            return {...state, [action.prop]: action.payload}
        }
    }
})

export const {dataLoad, dataUpdate} = DataReducer.actions;
export default DataReducer.reducer;
