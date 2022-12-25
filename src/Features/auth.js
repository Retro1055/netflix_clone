import { createSlice } from '@reduxjs/toolkit';
import store from '../app/store';

const initialState = {
  user: {},
  isAuthenticated: false,
  sessionId: '',
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      store.sessionId = localStorage.getItem('session_id');
      localStorage.setItem('accountId', action.payload.id);
    },
  },
});
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
export const userSelector = (state) => state.user;
