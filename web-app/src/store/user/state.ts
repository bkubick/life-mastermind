/**
 * The UserState interface defines the shape of the user slice of the store.
 */
interface UserState {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    loggedIn: boolean;

    isLoading: boolean;
}


/**
 * The initialUserState defines the initial state of the user slice of the store.
 */
const initialUserState: UserState = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    loggedIn: false,
    isLoading: false,
}


/**
 * The UserInfo interface defines the shape of the user information returned from the server.
 */
interface UserInfo {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
}


export default UserState;
export { initialUserState, type UserInfo };
