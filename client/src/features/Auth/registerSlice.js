import { unwrapResult } from "@reduxjs/toolkit";
import { registerPending, registerFail, AsyncRegister } from "./authSlice";

export const registerUser = async(data, dispatch) => {
    try {
        // call server xử lý
        const rawresult = await dispatch(AsyncRegister(data));
        const result = unwrapResult(rawresult);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}