import {createSlice} from "@reduxjs/toolkit";
import {loginThunk, logoutThunk, profileThunk, registerThunk, updateUserThunk} from "../services/auth-thunks";


const authSlice = createSlice({
        name: "auth",
        initialState: {currentUser: null},
        reducers: {},
        extraReducers: {
            [logoutThunk.fulfilled]: (state) => {
                state.currentUser = null;
            },
            [logoutThunk.pending]: (state) => {
                state.currentUser = null;
            },
            [logoutThunk.rejected]: (state) => {
                state.currentUser = null;
            },
            [profileThunk.fulfilled]: (state, {payload}) => {
                state.currentUser = payload;
            },
            [profileThunk.rejected]: (state, {payload}) => {
                state.currentUser = null;
            },
            [profileThunk.pending]: (state, action) => {
                state.currentUser = null;
            },
            [updateUserThunk.fulfilled]: (state, {payload}) => {
                state.currentUser = payload;
            },
            [registerThunk.fulfilled]: (state, {payload}) => {
                state.currentUser = payload;
            },
            [registerThunk.pending]: (state, {payload}) => {
                state.currentUser = null;
            },
            [registerThunk.rejected]: (state, {payload}) => {
                state.currentUser = null;
            },
            [loginThunk.fulfilled]: (state, {payload}) => {
                state.currentUser = payload;
            },
            [loginThunk.pending]: (state, {payload}) => {
                state.currentUser = null;
            },
            [loginThunk.rejected]: (state, {payload}) => {
                state.currentUser = null;
            },
        },
    })
;
export default authSlice.reducer;