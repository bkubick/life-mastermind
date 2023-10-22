/**
 * The UserState interface defines the shape of the user slice of the store.
 */
interface UserState {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    loggedIn: boolean;
    loading: boolean;
}


const initialUserState: UserState = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    loggedIn: false,
    loading: false,
}


export default UserState;
export { initialUserState };
