import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'light',
    user: null,
    token: null,
    posts: []
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light'? 'dark' : 'light';
        },
        setLogin: (state, action) => {                                   //action.payload is used to access the parameters passed
            state.user = action.payload.user;             
            state.token = action.payload.token;             
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if(state.user) state.user.friends = action.payload.friends;
            else console.error("Login to see friends");
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            state.posts = state.posts.map((post) => {
                if (post._id === action.payload.id) return action.payload.post;
                return post;
            });
        }
    }
})

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;