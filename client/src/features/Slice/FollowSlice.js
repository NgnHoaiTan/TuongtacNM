import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../Axios";


const initialState={
    follows:[],
    following:[],
    resultfollow:{}
}
export const fetchAsyncFollowsOfUser = createAsyncThunk('follow/fetchAsyncFollowsOfUser',async(userId)=>{
    const response = await Axios.get(`follows/getfollowed/${userId}`);
    return response.data;
})
export const fetchAsyncFollowingOfUser = createAsyncThunk('follow/fetchAsyncFollowingOfUser',async(userId)=>{
    const response = await Axios.get(`follows/getfollowing/${userId}`);
    return response.data;
})
export const AsyncFollowSomeone = createAsyncThunk('follow/AsyncFollowSomeone',async(data)=>{
    const response = await Axios.post(`follows`,
        data
    );
    return response.data;
})
export const AsyncUnFollowSomeone = createAsyncThunk('follow/AsyncUnFollowSomeone',async(followId)=>{
    const response = await Axios.delete(`follows/${followId}`);
    return response.data;
})
const FollowSlice = createSlice({
    name:'follow',
    initialState,
    reducers:{},
    extraReducers:{
        // lay du lieu follow cua nguoi dung dang duoc follow
        [fetchAsyncFollowsOfUser.pending]:()=>{
            //console.log('Start to fetch followed of user');
        },
        [fetchAsyncFollowsOfUser.fulfilled]:(state,action)=>{
            //console.log('Finish to fetch followed of user');
            return{
                ...state,
                follows:action.payload
            }
        },
        [fetchAsyncFollowsOfUser.rejected]:()=>{
            //console.log('Failed to fetch followed of user');
        },

        // lay du lieu nguoi dung dang follow ai do 

        [fetchAsyncFollowingOfUser.pending]:()=>{
            //console.log('Start to fetch following of user');
        },
        [fetchAsyncFollowingOfUser.fulfilled]:(state,action)=>{
            //console.log('Finish to fetch following of user');
            return{
                ...state,
                following:action.payload
            }
        },
        [fetchAsyncFollowingOfUser.rejected]:()=>{
            //console.log('Failed to fetch following of user');
        },

        // follow someone
        [AsyncFollowSomeone.fulfilled]:(state,action)=>{
            //console.log('Follow someone success');
            return{
                ...state,
                resultfollow:action.payload
            }
        },
        [AsyncFollowSomeone.rejected]:()=>{
           // console.log('Follow someone failed');
            
        },
        // unfollow someone
        [AsyncUnFollowSomeone.fulfilled]:()=>{
            //console.log('unfollow success');
        },
        [AsyncUnFollowSomeone.rejected]:()=>{
           // console.log('unfollow failed');
        },

    }
})
export const getFollowing = state =>state.follow.following;
export const getFollows = state => state.follow.follows;
export default FollowSlice.reducer;