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
        },
        setTable(state, action){
            return {...state, ...action.payload}
        }
    }
})

export const {dataLoad, dataUpdate, setTable} = DataReducer.actions;
export default DataReducer.reducer;
