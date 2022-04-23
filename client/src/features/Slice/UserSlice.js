import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../Axios";

const initialState={
    user:{},
    users:[],
    authUser:{},
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
export const fetchAsyncUserById = createAsyncThunk('user/fetchAsyncUserById',async(userId)=>{
    const response = await Axios.get(`users/${userId}`);
    return response.data;
});
export const fetchAsyncAuthUserById = createAsyncThunk('user/fetchAsyncAuthUserById',async(userId)=>{
    const response = await Axios.get(`users/${userId}`);
    return response.data;
});
export const AsyncUpdateUser = createAsyncThunk('user/AsyncUpdateUser',async({formdata,userId})=>{
    const response = await Axios.put(`users/${userId}`,
        formdata,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );
    return response.data;
});

const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        resetUser:(state)=>{
            state.user={}
            console.log(state.user);
        }
    },
    extraReducers:{
        // get list
        [fetchAsyncUsers.pending]:()=>{
            console.log("Start to fetching list users")
        },
        [fetchAsyncUsers.fulfilled]:(state,action)=>{
            console.log("Finish to fetch list users");
            return{
                ...state,
                users:action.payload
            }
        },
        
        [fetchAsyncUsers.rejected]:()=>{
            console.log('Fetch list user rejected');
        },
        // get user by id
        [fetchAsyncUserById.fulfilled]:(state,action)=>{
            console.log('Finish to fetch user by id');
            return{
                ...state,
                user:action.payload
            }
        },
        [fetchAsyncUserById.rejected]:()=>{
            console.log('fetch user by id rejected');
           
        },

        // get auth user 

        [fetchAsyncAuthUserById.fulfilled]:(state,action)=>{
            console.log('Finish to fetch authuser by id');
            return{
                ...state,
                authUser:action.payload
            }
        },
        [fetchAsyncAuthUserById.rejected]:()=>{
            console.log('fetch authuser by id rejected');
           
        },

        // update user
        [AsyncUpdateUser.fulfilled]:()=>{
            console.log('Update information successfully')
        },

        [AsyncUpdateUser.rejected]:()=>{
            console.log('Update information rejected');
        },

        // get user by account
        [fetchAsyncUserByAccount.pending]:()=>{
            console.log('Start to fetch user by account');
        },
        
        
        [fetchAsyncUserByAccount.fulfilled]:(state,action)=>{
            console.log('Finish to fetch user by account');
            return{
                ...state,
                user:action.payload
            }
        },
        
        [fetchAsyncUserByAccount.rejected]:()=>{
            console.log('Fetch user by account rejected');
        },
        
        
    }
});
export const {resetUser} = UserSlice.actions;
export const getAuthUser = state => state.user.authUser;
export const getUser = (state) =>state.user.user;
export const getListUsers = (state) =>state.user.users;
export default UserSlice.reducer;