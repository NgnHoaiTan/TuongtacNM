import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../Axios";

const initialState={
    comments:[],
    comment:{},
    createresult:{},
    deleteresult:{}
}
export const fetchAsyncCommentsByVideo = createAsyncThunk('comment_video/fetchAsyncCommentsByVideo',async(videoId)=>{
    const response = await Axios.get(`commentvideos/getbyvideo/${videoId}`);
    return response.data;
});

export const createAsyncComment = createAsyncThunk('comment_video/createAsyncComment',async(comment)=>{
    const response = await Axios.post('commentvideos',{
        user:comment.userId,
        video:comment.videoId,
        content:comment.content
    });
    return response.data;
});

const CommentVideoSlice = createSlice({
    name:'comment_video',
    initialState,
    reducers:{},
    extraReducers:{
        // get cmt by video
        [fetchAsyncCommentsByVideo.fulfilled]:(state,action)=>{
            //console.log('Fetching Comments by video Successfully');
            return{
                ...state,
                comments:action.payload
            }
        },
        [fetchAsyncCommentsByVideo.rejected]:()=>{
           // console.log('Fetching Comments by video rejected');
            
        },
        
        // create comment
        [createAsyncComment.fulfilled]:(state,action)=>{
            //console.log('create Comments Successfully');
            return{
                ...state,
                createresult:action.payload
            }
        },
        [createAsyncComment.rejected]:()=>{
            //console.log('create Comments rejected');
            
        },
    }
});
export const getListComments = (state) => state.comment_video.comments;
export default  CommentVideoSlice.reducer;