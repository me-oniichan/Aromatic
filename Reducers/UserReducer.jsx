import {createSlice} from "@reduxjs/toolkit";


const UserReducer = createSlice({
    name: "User",
    initialState: 'test',
    reducers: {
        loadUser(state, action) {
            return action.payload
        },

        logout(state, action) {
            return null;
        }
    }
})

export const {loadUser, logout} = UserReducer.actions;
export default UserReducer.reducer
