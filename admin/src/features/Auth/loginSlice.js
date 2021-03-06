import { unwrapResult } from "@reduxjs/toolkit";
import { loginPending, loginSuccess, loginFail, AsyncLogin } from "./authSlice";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginPending())
    try {
        // call api xử lý
        const rawresult = await dispatch(AsyncLogin(user));
        const result = unwrapResult(rawresult);
        navigate('/');
    } catch (error) {
        dispatch(loginFail())
    }
}