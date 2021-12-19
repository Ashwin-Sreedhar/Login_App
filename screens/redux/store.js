/* eslint-disable prettier/prettier */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
import { rootReducer } from './rootReducer';
import AsyncStorage from '@react-native-community/async-storage';

let middleWare = [thunk];

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistStoreReducer = persistReducer(persistConfig, rootReducer)

export const configStore = createStore(persistStoreReducer
    , applyMiddleware(...middleWare));

export let persistor = persistStore(configStore);
