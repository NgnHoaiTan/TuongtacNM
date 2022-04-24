import { configureStore } from '@reduxjs/toolkit';
import PostReducer from './Slice/PostSlice';
import VideoReducer from './Slice/VideoSlice';
import ReactPostReducer from './Slice/ReactPostSlice';
import CommentPostReducer from './Slice/CmtPostSlice';
import ReactionVideoReducer from './Slice/ReactVidSlice';
import CommentVideoReducer from './Slice/CmtVidSlice';
import UserReducer from './Slice/UserSlice';
import authReducer from './Auth/authSlice';
import FollowReducer from './Slice/FollowSlice';
import ImageReducer from './Slice/ImgPostSlice';
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
    post: PostReducer,
    video: VideoReducer,
    reaction_post: ReactPostReducer,
    reaction_video: ReactionVideoReducer,
    comment_post: CommentPostReducer,
    comment_video: CommentVideoReducer,
    auth: authReducer,
    user: UserReducer,
    follow:FollowReducer,
    imagepost:ImageReducer,
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