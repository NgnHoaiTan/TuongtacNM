import { loginPending, loginSuccess, loginFail } from "./authSlice";

const userCheck = {
    username: 'admin',
    password: 'admin123'
}

export const loginUser = (user, dispatch, navigate) => {
    dispatch(loginPending())
    try {
        // call api xử lý
        if (user.username == userCheck.username && user.password == userCheck.password) {
            setTimeout(() => {
                dispatch(loginSuccess(user))
                navigate("/")
            }, 2000)
        } else {
            setTimeout(() => {
                dispatch(loginFail())
            }, 2000)
        }
    } catch (error) {
        dispatch(loginFail())
    }
}