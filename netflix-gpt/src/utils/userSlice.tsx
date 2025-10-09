import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        uid: undefined,
        email: undefined,
        displayName: undefined,
        photoUrl: undefined,
        isAuthLoading: true, // new loading flag
    },
    reducers: {
        addUser: (state, action) => {
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoUrl = action.payload.photoURL;
            state.isLoggedIn = true;
            state.isAuthLoading = false;
        },
        removeUser: (state) => {
            state.uid = undefined;
            state.email = undefined;
            state.displayName = undefined;
            state.isLoggedIn = false;
            state.isAuthLoading = false;
        },
        setAuthLoading: (state, action) => {
            state.isAuthLoading = action.payload;
        },
    },
});

export const { addUser, removeUser, setAuthLoading } = userSlice.actions;
export default userSlice.reducer;