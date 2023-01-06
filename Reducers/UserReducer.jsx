import {createSlice} from "@reduxjs/toolkit";
import { auth } from "../Firebase/app";


const UserReducer = createSlice({
    name: "User",
    initialState: auth.currentUser == null ? null : auth.currentUser.email.slice(0, -14),
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
