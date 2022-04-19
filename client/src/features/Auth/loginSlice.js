import { unwrapResult } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import { loginPending, loginSuccess, loginFail, AsyncLogin } from "./authSlice";

const userCheck = {
    username: 'admin',
    password: 'admin123'
}

export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginPending())
    try {
        // call api xử lý
        const rawresult = await dispatch(AsyncLogin(user));
        const result = unwrapResult(rawresult);
        navigate('/');
        window.location.reload();
    } catch (error) {
        dispatch(loginFail())
    }
}