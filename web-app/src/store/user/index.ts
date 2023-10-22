import { createSlice } from "@reduxjs/toolkit";

import * as actions from "./actions";
import * as reducers from "./reducers";
import { initialUserState } from "./state";


/**
 * The userSlice defines the user slice of the store.
 */
const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {...reducers},
    extraReducers: (builder) => {
        builder.addCase(actions.register.fulfilled, (state, action) => {
            state.loading = false;
            return reducers.register(state, action);
        });
        builder.addCase(actions.login.fulfilled, (state, action) => {
            state.loading = false;
            return reducers.login(state, action);
        });
        builder.addCase(actions.logout.fulfilled, (state, action) => {
            state.loading = false;
            return reducers.logout(state, action);
        });
        builder.addCase(actions.register.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(actions.login.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(actions.logout.pending, (state, action) => {
            state.loading = true;
        });
    }
});



export const { login, logout, register } = userSlice.actions
export default userSlice.reducer;
