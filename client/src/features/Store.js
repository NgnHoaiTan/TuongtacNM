import { configureStore } from '@reduxjs/toolkit';
import PostReducer from './Slice/PostSlice';
import VideoReducer from './Slice/VideoSlice';
import ReactPostReducer from './Slice/ReactPostSlice';
import CommentPostReducer from './Slice/CmtPostSlice';
import ReactionVideoReducer from './Slice/ReactVidSlice';
import CommentVideoReducer from './Slice/CmtVidSlice';
import UserReducer from './Slice/UserSlice';
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

} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,

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