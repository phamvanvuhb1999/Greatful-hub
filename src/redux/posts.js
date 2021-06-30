import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: []
};

const auth = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        LoadAllPostSuccess(state, action) {
            state.posts = action.payload.posts
        },
        CreateNewPostSuccess(state, action) {
            state.posts = [...state.posts, action.payload.post]
        },
        LoadPostSuccess(state, action) {
            state.posts = [...state.posts, ...action.payload.posts]
        }
    }
});

const { LoadAllPostSuccess, CreateNewPostSuccess, LoadPostSuccess } = auth.actions;

export const loadAllPosts = () => {
    axios.get('http://localhost:8000/posts/')
        .then(respond => {

        })
        .catch(error => {

        });
}


export default auth.reducer;