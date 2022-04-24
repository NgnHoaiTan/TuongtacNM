import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    createMigrate
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const migrations = {
    0: (state) => {
        // migration clear out device state
        return {
            ...state,
            device: undefined
        }
    },
    1: (state) => {
        // migration to keep only device state
        return {
            device: state.device
        }
    }
}
const persistConfig = {
    key: 'root',
    storage,
    version:1,
    migrate: createMigrate(migrations, { debug: false })

}
const rootReducer = combineReducers({
    auth: authReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

});
export default store;