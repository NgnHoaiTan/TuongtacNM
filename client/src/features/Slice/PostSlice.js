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
export const fetchAsyncPostByFollowUser = createAsyncThunk('post/fetchAsyncPostByFollowUser',async(userId)=>{
    const response = await Axios.get(`posts/getbyfollowuser/${userId}`);
    return response.data;
});

export const fetchAsyncSearchPosts = createAsyncThunk('post/fetchAsyncSearchPosts',async(searchingText)=>{
    const response = await Axios.get(`posts/search/${searchingText}`);
    return response.data;
});

export const createAsyncPost = createAsyncThunk('post/createAsyncPost',async(data)=>{
    const response = await Axios.post(`posts`,
        data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }  
    );
    return response.data;
});

const PostSlice = createSlice({
    name:'post',
    initialState,
    reducers:{},
    extraReducers:{
        // get list posts
        [fetchAsyncPosts.pending]:()=>{
            console.log("Fetching Posts Start")
        },
        [fetchAsyncPosts.fulfilled]:(state,action)=>{
            console.log("Fetching Posts Successfully");
            return{
                ...state,
                posts:action.payload
            }
        },
        [fetchAsyncPosts.rejected]:()=>{
            console.log("Fetching Posts Rejected");
        },
        // get post by id
        [fetchAsyncPostById.fulfilled]:(state,action)=>{
            //console.log("Fetching Post by id Successfully");
            return{
                ...state,
                post:action.payload
            }
        },
        [fetchAsyncPostById.rejected]:()=>{
            console.log("Fetching Post by id Rejected");
        },

        // get post by user
        [fetchAsyncPostByUser.fulfilled]:(state,action)=>{
            //console.log("Fetching Posts by user Successfully");
            return{
                ...state,
                posts:action.payload
            }
        },
        [fetchAsyncPostByUser.rejected]:()=>{
            console.log("Fetching Posts by user Rejected");
        },
        // get posts by following

        [fetchAsyncPostByFollowUser.fulfilled]:(state,action)=>{
            return{
                ...state,
                posts:action.payload
            }
        },
       

        // create post
        [createAsyncPost.fulfilled]:(state,action)=>{
            //console.log("Create Posts Successfully");
            return{
                ...state,
                createresult:action.payload
            }
        },
        [createAsyncPost.rejected]:()=>{
            console.log("Create Posts Rejected");
        },

        // searching posts
        [fetchAsyncSearchPosts.fulfilled]:(state,action)=>{
            return{
                ...state,
                posts:action.payload
            }
        }
    }
});
export const getListPosts = (state)=>state.post.posts;
export const getPost = (state) => state.post.post;
export default PostSlice.reducer;