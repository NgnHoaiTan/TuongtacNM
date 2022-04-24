import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../Axios";

const initialState={
    accountAdmins:[],
    accounts:[],
    
}
export const fetchAsyncAdminAccounts = createAsyncThunk('account/fetchAsyncAdminAccounts',async()=>{
    const response = await Axios.get('accounts/admin');
    return response.data;
});
export const fetchAsyncAccounts = createAsyncThunk('account/fetchAsyncAccounts',async()=>{
    const response = await Axios.get('accounts');
    return response.data;
});



const AccountSlice = createSlice({
    name:'account',
    initialState,
    reducers:{
        resetUser:(state)=>{
            state.admin={}
        }
    },
    extraReducers:{
        // get list 

        [fetchAsyncAdminAccounts.fulfilled]:(state,action)=>{
            return{
                ...state,
                accountAdmins:action.payload
            }
        },
        [fetchAsyncAccounts.fulfilled]:(state,action)=>{
            return{
                ...state,
                accounts:action.payload
            }
        },
        
       

    }
});
export const getAdminAccounts = state => state.account.accountAdmins;
export default AccountSlice.reducer;