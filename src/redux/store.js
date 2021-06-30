import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth';

const reducer = combineReducers({
    auth: authReducer //token , profile
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: []
};

const persistReducerr = persistReducer(persistConfig, reducer);

const LogMiddleWare = function(store) {
    return function(next) {
        return function(action) {
            console.log('Action', action);
            next(action);
        }
    }
}

// const dispatchMiddleWare = (store) => (next) => (action) => {
//     if (typeof action == 'function') {
//         action(next); //next is dispatch we want to forward;
//     }
//     next(action);
// }

const store = configureStore({
    reducer: persistReducerr,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(LogMiddleWare)
});

export const persistor = persistStore(store);
export default store;