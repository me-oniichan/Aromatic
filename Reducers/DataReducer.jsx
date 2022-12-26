import { createSlice } from "@reduxjs/toolkit";

const DataReducer = createSlice({
    name : 'data',
    initialState: {},
    reducers : {
        dataLoad(state, action){
            state = {...action.payload};
        },

        dataUpdate(state, action){
            state[action.prop] = action.payload;
        }
    }
})

export const {dataLoad, dataUpdate} = DataReducer.actions;
export default DataReducer.reducer;