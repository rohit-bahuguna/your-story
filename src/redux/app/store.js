import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import PostReducer from '../features/postSlice';
import userReducer from '../features/userSlice';
import authReducer from '../features/authSlice';
import globalReducer from '../features/globalSlice';

const authPersistConfig = {
	key: 'auth',
	storage,
	whiteList: ['user']
};

const postPersistConfig = {
	key: 'post',
	storage,
	whiteList: ['post']
};

const userPersistConfig = {
	key: 'user',
	storage,
	whiteList: ['user']
};

const rootReducer = combineReducers({
	auth: persistReducer(authPersistConfig, authReducer),
	user: persistReducer(userPersistConfig, userReducer),
	post: persistReducer(postPersistConfig, PostReducer),
	globalReducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: [thunk]
});

export const persistor = persistStore(store);
