import { createSlice } from "@reduxjs/toolkit";

const DataReducer = createSlice({
    name : 'data',
    initialState: {},
    reducers : {
        dataLoad(state, action){
            return {...action.payload};
        },

        dataUpdate(state, action){
            return {...state, [action.prop] : action.payload}
        }
    }
})

export const {dataLoad, dataUpdate} = DataReducer.actions;
export default DataReducer.reducer;