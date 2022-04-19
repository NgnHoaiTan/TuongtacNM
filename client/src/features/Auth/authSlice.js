import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Axios from '../Axios'


const initialState = {
    login: {
        isLoading: false,
        error: false
    },
    result: {},
    register: {
        isLoading: false,
        success: false,
        error: false
    },
}
export const AsyncLogin = createAsyncThunk('auth/AsyncLogin', async (data) => {
    const response = await Axios.post('accounts/login', {
        username: data.username,
        password: data.password
    })
    return response.data;
})
const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginPending: (state) => {
            state.login.isLoading = true;
            state.login.error = false;
        },
        loginSuccess: (state, action) => {
            console.log(action.payload)
            state.login.isLoading = false;
            state.login.error = false;
        },
        loginFail: (state) => {
            state.login.error = true;
        },

        registerPending: (state) => {
            state.register.isLoading = true;
            state.register.error = false;
        },
        registerSuccess: (state) => {
            state.register.isLoading = false;
            state.register.success = true;
            state.register.error = false;
        },
        registerFail: (state) => {
            state.register.isLoading = false;
            state.register.success = false;
            state.register.error = true;
        },

        logout: (state) => {
            state.result = {};
        }
    },
    extraReducers: {
        [AsyncLogin.pending]: () => {
            console.log('Start checkout account')

        },
        [AsyncLogin.fulfilled]: (state, action) => {
            console.log('Checkout account success')
            state.login.isLoading = false;
            state.login.error = false;
            state.result = action.payload;


        },
        [AsyncLogin.rejected]: (state) => {
            console.log('Checkout account failure')
            state.login.error = true;
        }
    }

})

const { reducer, actions } = authReducer;

export const { loginPending, loginSuccess, loginFail, logout, registerPending, registerSuccess, registerFail } = actions;
export const getlogin = (state) => state.auth.login;
export const getresult = (state) => state.auth.result;


// export const selectUser = (state) = state.user.user;

export default reducer;