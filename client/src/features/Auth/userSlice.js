import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },

        logout: (state) => {
            state.user = null
        }
    }
})

const { reducer, actions} = user;

export const { login, logout } = actions;

export const selectUser = (state) = state.user.user;

export default reducer;