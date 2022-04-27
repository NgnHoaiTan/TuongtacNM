import { unwrapResult } from "@reduxjs/toolkit";
import { fetchAsyncUserByAccount } from "../Slice/UserSlice";
import { loginPending, loginFail, AsyncLogin } from "./authSlice";

export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginPending())
    try {
        // call api xử lý
        const rawresult = await dispatch(AsyncLogin(user));
        const result = unwrapResult(rawresult);
        console.log(result)
        await dispatch(fetchAsyncUserByAccount(result.accountId))
        navigate('/');
        
        
    } catch (error) {
        dispatch(loginFail())
    }
}