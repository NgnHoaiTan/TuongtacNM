import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../Axios";

const initialState={
    user:{},
    users:[],
    updateresult:{}
}
export const fetchAsyncUsers = createAsyncThunk('user/fetchAsyncUsers',async()=>{
    const response = await Axios.get('users');
    return response.data;
});
export const fetchAsyncUserByAccount = createAsyncThunk('user/fetchAsyncUserByAccount',async(accountId)=>{
    const response = await Axios.get(`users/getbyaccount/${accountId}`);
    return response.data;
});

const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchAsyncUsers.pending]:()=>{
            console.log("Start to fetching list users")
        },
        [fetchAsyncUserByAccount.pending]:()=>{
            console.log('Start to fetch user by account');
        },
        [fetchAsyncUsers.fulfilled]:(state,action)=>{
            console.log("Finish to fetch list users");
            return{
                ...state,
                users:action.payload
            }
        },
        [fetchAsyncUserByAccount.fulfilled]:(state,action)=>{
            console.log('Finish to fetch user by account');
            return{
                ...state,
                user:action.payload
            }
        },
        [fetchAsyncUsers.rejected]:()=>{
            console.log('Fetch list user rejected');
        },
        [fetchAsyncUserByAccount.rejected]:()=>{
            console.log('Fetch user by account rejected');
        },
    }
});
export const getUser = (state) =>state.user.user;
export const getListUsers = (state) =>state.user.users;
export default UserSlice.reducer;