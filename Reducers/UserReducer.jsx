import { createSlice } from "@reduxjs/toolkit";

const UserReducer = createSlice({
    name : "User",
    initialState : null,
    reducers : {
        loadUser(state, action){
            state = action.payload
        },

        logout(state, action){
            state = null;
        }
    }  
})

export const {loadUser, logout} = UserReducer.actions;
export default UserReducer.reducer