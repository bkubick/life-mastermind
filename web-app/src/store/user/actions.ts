import { createAsyncThunk } from "@reduxjs/toolkit";

import { api, ApiRoute } from "src/api";
import { UserInfo } from "./state";


// Interfaces
interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}


interface LoginData {
    email: string;
    password: string;
}


// Thunks
/**
 * Register a new user to the store and the server.
 *
 * TODO: Implement store registration.
 * 
 * @param firstName The user's first name.
 * @param lastName The user's last name.
 * @param email The user's email.
 * @param password The user's password.
 * @returns void
 */
const register = createAsyncThunk('user/auth/register', async (data: RegisterData): Promise<UserInfo> => {
    const response = await api.post(ApiRoute.USER.REGISTER, { ...data });
    const responseData: UserInfo = response.data;
    return responseData;
});


/**
 * Login a user to the store and the server.
 *
 * TODO: Implement store login.
 * 
 * @param email The user's email.
 * @param password The user's password.
 * @returns void
 */
const login = createAsyncThunk('user/auth/login', async (data: LoginData): Promise<UserInfo> => {
    console.log('API Loging In...')
    const response = await api.post(ApiRoute.USER.LOGIN, { ...data });
    const responseData: UserInfo = response.data;
    return responseData;
});


/**
 * Logout a user from the store and the server.
 *
 *  TODO: Implement store logout.
 * 
 * @returns void
 */
const logout = createAsyncThunk('user/auth/logout', async (): Promise<void> => {
    await api.post(ApiRoute.USER.LOGOUT);
});


// Exports
export {
    login,
    logout,
    register
};
