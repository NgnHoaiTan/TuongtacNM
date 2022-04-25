import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';
import UserReducer from './Slice/UserSlice'
import PostReducer from './Slice/PostSlice';
import VideoReducer from './Slice/VideoSlice';
import AccountReducer from './Slice/AccountSlice';
import ReactionPostReducer from './Slice/ReactionPostSlice';
import ReactionVideoReducer from './Slice/ReactionVideoSlice';
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
const prealoadedState = {
    auth: {
        login:{},
        result:{}
    },
    user:{
        admins:[],
        admin:{},
        users:[],
    },
    post:{
        posts:[],
        post:{},
        createresult:{},
        updateresult:{}
    },
    video: {
        videos:[],
        video:{},
        createresult:{},
        updateresult:{}
    },
    account:{
        accountAdmins:[],
        accounts:[],
    },
    reaction_post:{
        reactions: [],
        reactionbyuser: {},
        topreactions:[]
    },
    reaction_video:{
        reactions: [],
        topreactions:[]
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
    user:UserReducer,
    post:PostReducer,
    video: VideoReducer,
    account:AccountReducer,
    reaction_post:ReactionPostReducer,
    reaction_video:ReactionVideoReducer

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
    prealoadedState: prealoadedState,

});
export default store;