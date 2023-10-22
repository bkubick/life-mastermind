import UserState from "./state";


/**
 * The register reducer updates the user slice of the store with the user's information,
 * sets the loggedIn flag to true, and sends state update to api. 
 * 
 * @param state the current state of the user slice
 * @param action the action dispatched to the user slice
 */
function register(state: UserState, action: any): UserState {
    return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        username: action.payload.username,
        loggedIn: true,
    };
};


/**
 * The login reducer updates the user slice of the store with the user's information,
 * sets the loggedIn flag to true, and sends state update to api. 
 * 
 * @param state the current state of the user slice
 * @param action the action dispatched to the user slice
 */
function login(state: UserState, action: any): UserState {
    return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        username: action.payload.username,
        loggedIn: true,
    };
}


/**
 * The logout reducer updates the user slice of the store to logout the current user,
 * and sends state update to api.
 * 
 * @param state the current state of the user slice.
 */
function logout(state: UserState, action: any): UserState {
    return {
        ...state,
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        loggedIn: false,
    };
}


export { login, logout, register };
