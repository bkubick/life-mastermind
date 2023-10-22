import { createAsyncThunk } from "@reduxjs/toolkit";

import { api, ApiRoute } from "src/api";


// Interfaces
interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
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
 * @param username The user's username.
 * @param password The user's password.
 * @returns void
 */
const register = createAsyncThunk('user/auth/register', async (data: RegisterData): Promise<any> => {
    const response = await api.post(ApiRoute.USER.REGISTER, { ...data });

    return response.data;
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
const login = createAsyncThunk('user/auth/login', async (data: LoginData): Promise<any> => {
    const response = await api.post(ApiRoute.USER.LOGIN, { ...data });

    return response.data;
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
