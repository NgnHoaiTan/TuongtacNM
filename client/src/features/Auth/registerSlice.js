import { registerPending, registerSuccess, registerFail } from "./authSlice";

export const registerUser = (user, dispatch, navigate) => {
    dispatch(registerPending())
    try {
        // call api xử lý
        if (user) {
            setTimeout(() => {
                console.log(user);
                dispatch(registerSuccess())
                navigate("/welcome")
            }, 2000)
        } else {
            setTimeout(() => {
                dispatch(registerFail())
            }, 2000)
        }
    } catch (error) {
        dispatch(registerFail())
    }
}