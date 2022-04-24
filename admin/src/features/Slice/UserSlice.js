import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../Axios";

const initialState={
    admins:[],
    admin:{},
    users:[],
}
export const fetchAsyncAdmins = createAsyncThunk('user/fetchAsyncAdmins',async()=>{
    const response = await Axios.get('users/admin');
    return response.data;
});
export const fetchAsyncUsers = createAsyncThunk('user/fetchAsyncUsers',async()=>{
    const response = await Axios.get('users');
    return response.data;
});
export const fetchAsyncAdminByAccount = createAsyncThunk('user/fetchAsyncAdminByAccount',async(accountId)=>{
    const response = await Axios.get(`users/getbyaccount/${accountId}`);
    return response.data;
});
export const fetchAsyncUserById = createAsyncThunk('user/fetchAsyncUserById',async(userId)=>{
    const response = await Axios.get(`users/${userId}`);
    return response.data;
});
export const fetchAsyncAdminById = createAsyncThunk('user/fetchAsyncAdminById',async(userId)=>{
    const response = await Axios.get(`users/${userId}`);
    return response.data;
});




const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        resetUser:(state)=>{
            state.admin={}
        }
    },
    extraReducers:{
        // get list 
        
        [fetchAsyncAdmins.fulfilled]:(state,action)=>{
            console.log("Finish to fetch list admins");
            return{
                ...state,
                admins:action.payload
            }
        },
        [fetchAsyncUsers.fulfilled]:(state,action)=>{
            console.log("Finish to fetch list users");
            return{
                ...state,
                users:action.payload
            }
        },
        
        [fetchAsyncUsers.rejected]:()=>{
            console.log('Fetch list admin rejected');
        },
        // get admin by id
        [fetchAsyncAdminById.fulfilled]:(state,action)=>{
            console.log('Finish to fetch admin by id');
            return{
                ...state,
                admin:action.payload
            }
        },
        [fetchAsyncUserById.fulfilled]:(state,action)=>{
            console.log('Finish to fetch user by id');
            return{
                ...state,
                user:action.payload
            }
        },

        // get user by account

        [fetchAsyncAdminByAccount.fulfilled]:(state,action)=>{
            console.log('Finish to fetch admin by account');
            return{
                ...state,
                admin:action.payload
            }
        },
        
        
    }
});
export const {resetUser} = UserSlice.actions;
export const getAdmin = (state) =>state.user.admin;
export const getUser = (state) =>state.user.user;
export const getListAdmins = (state) =>state.user.admins;
export const getListUsers = (state) =>state.user.users;
export default UserSlice.reducer;