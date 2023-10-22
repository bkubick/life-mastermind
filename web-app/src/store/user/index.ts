import { createSlice } from "@reduxjs/toolkit";

import * as actions from "./actions";
import * as reducers from "./reducers";
import UserState, { initialUserState } from "./state";


/**
 * The userSlice defines the user slice of the store.
 */
const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actions.register.fulfilled, (state: UserState, action) => {
            state.isLoading = false;
            reducers.setUserInfo(state, action.payload);
        });
        builder.addCase(actions.login.fulfilled, (state: UserState, action) => {
            console.log('API Accepted...')
            state.isLoading = false;
            reducers.setUserInfo(state, action.payload);
        });
        builder.addCase(actions.logout.fulfilled, (state: UserState, action) => {
            state.isLoading = false;
            reducers.clearUserInfo(state, action.payload);
        });
        builder.addCase(actions.register.pending, (state: UserState, action) => {
            state.isLoading = true;
        });
        builder.addCase(actions.login.pending, (state: UserState, action) => {
            console.log('API Rejected...')
            state.isLoading = true;
        });
        builder.addCase(actions.logout.pending, (state: UserState, action) => {
            state.isLoading = true;
        });
        builder.addCase(actions.login.rejected, (state: UserState, action) => {
            console.log('API Rejected...')
            state.isLoading = false;
        });
    }
});


export { actions };
export default userSlice;
