import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an asynchronous thunk for setting credentials
export const setCredentialsAsync = createAsyncThunk(
  'auth/setCredentialsAsync',
  async (payload) => {
    localStorage.setItem('userInfo', JSON.stringify(payload));
    return payload;
  }
);

// Define an asynchronous thunk for logging out
export const logoutAsync = createAsyncThunk(
  'auth/logoutAsync',
  async () => {
    localStorage.removeItem('userInfo');
  }
);

const initialState = {
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setCredentialsAsync.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.userInfo = null;
      });
  }
});

export const authActions = {
  ...authSlice.actions,
  setCredentialsAsync,
  logoutAsync
};

export default authSlice.reducer;
