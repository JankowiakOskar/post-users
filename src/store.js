/* eslint-disable import/no-named-as-default-member */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import usersReducer from './features/users/usersSlice';
import postsReducer from './features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    posts: postsReducer,
  },
});
