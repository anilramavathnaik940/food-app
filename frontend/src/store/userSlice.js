import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null 
  };

const userSlice = createSlice({
    name:"user",
    initialState,

    reducers : {
        loginUser: (state, action)=> {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout: (state)=> {
            state.user = null;
            localStorage.removeItem('persist:root');
        }
    }
});

export const {loginUser, logout} = userSlice.actions;

export default userSlice.reducer;