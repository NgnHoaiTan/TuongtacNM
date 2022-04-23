import { unwrapResult } from "@reduxjs/toolkit";
import { registerPending, registerFail, AsyncRegister } from "./authSlice";

export const registerUser = async(user, dispatch, navigate) => {
    dispatch(registerPending())
    try {
        // call server xử lý
        const rawresult = await dispatch(AsyncRegister(user));
        const result = unwrapResult(rawresult);
        navigate('/welcome');
    } catch (error) {
        dispatch(registerFail())
    }
}