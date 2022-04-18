import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    login: {
        currentUser: null,
        isLoading: false,
        error: false
    }
}

const authReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginPending: (state) => {
            state.login.isLoading = true;
            state.login.error = false;
        },

        loginSuccess: (state, action) => {
            state.login.isLoading = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },

        loginFail: (state) => {
            state.login.error = true;
        },

        logout: (state) => {
            state.login.currentUser = null;
        }
    }
})

const { reducer, actions} = authReducer;

export const { loginPending, loginSuccess, loginFail, logout } = actions;

// export const selectUser = (state) = state.user.user;

export default reducer;