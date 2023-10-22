import UserState from "./state";


interface UserInfo {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
}


/**
 * The register reducer updates the user slice of the store with the user's information,
 * sets the loggedIn flag to true.
 * 
 * @param state the current state of the user slice
 * @param action the action dispatched to the user slice
 */
function setUserInfo(state: UserState, data: UserInfo): void {
    state.firstName = data.firstName;
    state.lastName = data.lastName;
    state.email = data.email;
    state.username = data.username;
    state.loggedIn = true;
};


/**
 * The logout reducer updates the user slice of the store to logout the current user.
 * 
 * @param state the current state of the user slice.
 */
function clearUserInfo(state: UserState, action: any): void {
    state.firstName = '';
    state.lastName = '';
    state.email = '';
    state.username = '';
    state.loggedIn = false;
}


export { setUserInfo, clearUserInfo };
