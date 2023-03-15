import { createReducer } from "@reduxjs/toolkit";
const initialstate = {};
export const ReducerUser = createReducer(initialstate, {
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  LoginFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  LogoutRequest: (state) => {
    state.loading = true;
  },
  LogoutSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  LogoutFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  getuserRequest: (state) => {
    state.loading = true;
  },
  getuserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  getuserFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  uploadRequest: (state) => {
    state.loading = true;
  },
  uploadSuccess: (state, action) => {
    state.loading = false;
    state.file = action.payload;
  },
  uploadFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  getfilesRequest: (state) => {
    state.loading = true;
  },
  getfilesSuccess: (state, action) => {
    state.loading = false;
    state.files = action.payload;
  },
  getfilesFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
