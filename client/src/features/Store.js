import {configureStore} from '@reduxjs/toolkit';
import PostReducer from './Slice/PostSlice';
import VideoReducer from './Slice/VideoSlice';
import ReactPostReducer from './Slice/ReactPostSlice';
import CommentPostReducer from './Slice/CmtPostSlice';
import ReactionVideoReducer from './Slice/ReactVidSlice';
import CommentVideoReducer from './Slice/CmtVidSlice';
const store =  configureStore({
    reducer:{
        post:PostReducer,
        video:VideoReducer,
        reaction_post:ReactPostReducer,
        reaction_video:ReactionVideoReducer,
        comment_post:CommentPostReducer,
        comment_video:CommentVideoReducer,

    },
   
});
export default store;