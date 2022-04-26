import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../Axios";

const initialState={
    posts:[],
    post:{},
    createresult:{},
    updateresult:{}
}
export const fetchAsyncPosts = createAsyncThunk('post/fetchAsyncPosts',async()=>{
    const response = await Axios.get('posts');
    return response.data;
});
export const fetchAsyncPostById = createAsyncThunk('post/fetchAsyncPostById',async(postId)=>{
    const response = await Axios.get(`posts/${postId}`);
    return response.data;
});
export const fetchAsyncPostByUser = createAsyncThunk('post/fetchAsyncPostByUser',async(userId)=>{
    const response = await Axios.get(`posts/getbyuser/${userId}`);
    return response.data;
});



const PostSlice = createSlice({
    name:'post',
    initialState,
    reducers:{},
    extraReducers:{
        // get list posts
        [fetchAsyncPosts.fulfilled]:(state,action)=>{
            //console.log("Fetching Posts Successfully");
            return{
                ...state,
                posts:action.payload
            }
        },
        [fetchAsyncPosts.rejected]:()=>{
            //console.log("Fetching Posts Rejected");
        },
        // get post by id
        [fetchAsyncPostById.fulfilled]:(state,action)=>{
            return{
                ...state,
                post:action.payload
            }
        },
        // get post by user
        [fetchAsyncPostByUser.fulfilled]:(state,action)=>{
            return{
                ...state,
                posts:action.payload
            }
        },
        
    }
});
export const getListPosts = (state)=>state.post.posts;
export const getPost = (state) => state.post.post;
export default PostSlice.reducer;