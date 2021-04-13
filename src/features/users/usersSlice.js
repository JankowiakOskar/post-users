import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllUsers } from './usersAPI';

export const initialState = {
  users: [],
  isLoading: false,
  error: {
    message: '',
  },
};

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  try {
    const response = await getAllUsers();
    return response;
  } catch (err) {
    throw Error(`Something went wrong, and we couldn't load users`);
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = !state.isLoading;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      const isError = Object.values(state.error).length;
      state.isLoading = !state.isLoading;

      state.users = [...action.payload];
      state.error = isError && { message: '' };
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = !state.isLoading;
      state.error = { message: action.error.message };
    });
  },
});

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
