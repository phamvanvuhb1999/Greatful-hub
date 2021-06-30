import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    profile: null,
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        LoginSuccess(state, action) {
            state.token = action.payload.token;
            state.profile = action.payload.profile;
        }
    }
});

const { LoginSuccess } = auth.actions;

export const login = ({ email, password }) => async(dispatch) => {
    const res = await axios.post('http://localhost:8000/users/login', {
        email,
        password
    });
    console.log(res.data);
    dispatch(LoginSuccess(res.data));
}


export default auth.reducer;