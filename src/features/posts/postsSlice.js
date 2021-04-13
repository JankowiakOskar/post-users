import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const endpointPosts = 'https://jsonplaceholder.typicode.com/posts';

export const initialState = {
  posts: [],
  isLoading: false,
  error: {
    message: '',
  },
};

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  try {
    const { data } = await axios.get(endpointPosts);
    return data;
  } catch (err) {
    throw Error(`Something went wrong, and we couldn't load posts`);
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = !state.isLoading;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      const isError = Object.values(state.error).length;
      state.isLoading = !state.isLoading;
      state.posts = [...action.payload];
      state.error = isError && { message: '' };
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoading = !state.isLoading;
      state.error = { message: action.error.message };
    });
  },
});

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
