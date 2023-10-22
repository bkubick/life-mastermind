import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';

import user from './user';


const store = configureStore({
    reducer: {
        user: user.reducer,
    },
    middleware: [thunkMiddleware],
});

export default store
