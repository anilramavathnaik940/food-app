import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from "./userSlice";

import blogReducer from "./blogSlice";

import cartReducer from "./cartSlice";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['_persist'], 
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer : {
        user:persistedReducer, 
        blogs:blogReducer,
        cart : cartReducer
    }
});

export const persistor = persistStore(store);