import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../Axios";

const initialState={
    comments:[],
    comment:{},
    createresult:{},
    deleteresult:{}
}
export const fetchAsyncCommentsByPost = createAsyncThunk('comment_post/fetchAsyncCommentsByPost',async(postId)=>{
    const response = await Axios.get(`commentposts/getbypost/${postId}`);
    return response.data;
});

export const createAsyncComment = createAsyncThunk('comment_post/createAsyncComment',async(comment)=>{
    const response = await Axios.post('commentposts',{
        user:comment.user,
        post:comment.post,
        content:comment.content
    });
    return response.data;
});

const CommentPostSlice = createSlice({
    name:'comment_post',
    initialState,
    reducers:{},
    extraReducers:{
        // get cmt by post
        [fetchAsyncCommentsByPost.fulfilled]:(state,action)=>{
            console.log('Fetching Comments by post Successfully');
            return{
                ...state,
                comments:action.payload
            }
        },
        [fetchAsyncCommentsByPost.rejected]:()=>{
            console.log('Fetching Comments by post rejected');
            
        },
        
        // create comment
        [createAsyncComment.fulfilled]:(state,action)=>{
            console.log('create Comments Successfully');
            return{
                ...state,
                createresult:action.payload
            }
        },
        [createAsyncComment.rejected]:()=>{
            console.log('create Comments rejected');
            
        },
    }
});
export const getListComments = (state) => state.comment_post.comments;
export default  CommentPostSlice.reducer;