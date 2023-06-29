import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  success: false,
  isAuthenticated: false,
  user: null,
  message: null,
  post: null,
  posturl: null,
  allusers: null,
  loginLoading: null,
  postLoading: null,
};

//authReduser

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
      state.isAuthenticated = false;
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.success = true;
      state.isAuthenticated = true;
      state.user = action.payload.data.user;
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...action?.payload.data.user })
      );
      localStorage.setItem(
        "token",
        JSON.stringify({ ...action?.payload.data.token })
      );
    },
    registerFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
      state.isAuthenticated = false;
    },

    loginStart: (state) => {
      state.loginLoading = true;
      state.error = null;
      state.success = false;
      state.isAuthenticated = false;
    },
    loginSuccess: (state, action) => {
      state.loginLoading = false;
      state.error = null;
      state.success = true;
      state.isAuthenticated = true;
      state.user = action.payload.data.user;
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...action?.payload.data.user })
      );
      localStorage.setItem(
        "token",
        JSON.stringify({ ...action?.payload.data.token })
      );
    },
    loginFail: (state, action) => {
      state.loginLoading = false;
      state.error = action.payload;
      state.success = false;
      state.isAuthenticated = false;
    },

    logoutStart: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
      state.isAuthenticated = false;
    },
    logoutSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.success = true;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.clear();
    },
    logoutFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
      state.isAuthenticated = true;
    },

    // userReduser

    getUserStart: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
      state.user = "";
    },
    getUserSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.success = true;
      state.isAuthenticated = true;
      state.user = action.payload.data.user;
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...action?.payload.data.user })
      );
    },
    getUserFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
      state.isAuthenticated = false;
      console.log(state.error);
    },

    // Get all Posts

    getAllPostsStart: (state) => {
      state.postLoading = true;
      state.error = null;
      state.success = false;
      state.isAuthenticated = true;
      state.post = null;
    },
    getAllPostsSuccess: (state, action) => {
      state.postLoading = false;
      state.error = null;
      state.success = true;
      state.isAuthenticated = true;
      state.post = action.payload.data.post;
      localStorage.setItem("post", JSON.stringify({ ...action?.payload.data }));
    },
    getAllPostsFail: (state, action) => {
      state.postLoading = false;
      state.error = action.payload;
      state.success = false;
      state.post = null;
    },

    // Get all Posts Url

    getPostUrlStart: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
      state.isAuthenticated = true;
      state.posturl = null;
    },
    getPostUrlSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.success = true;
      state.isAuthenticated = true;
      state.posturl = action.payload.data.posturl;
      localStorage.setItem(
        "postUrl",
        JSON.stringify({ ...action?.payload.data })
      );
    },
    getPostUrlFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
      state.posturl = null;
    },

    // Get all Users

    getAllUsersStart: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
    },
    getAllUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.success = true;
      state.allusers = action.payload.data.users;
    },
    getAllUsersFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
      state.posturl = null;
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFail,
  logoutStart,
  logoutSuccess,
  logoutFail,
  loginFail,
  loginStart,
  loginSuccess,
  getUserFail,
  getUserStart,
  getUserSuccess,
  getAllPostsStart,
  getAllPostsSuccess,
  getAllPostsFail,
  getPostUrlStart,
  getPostUrlSuccess,
  getPostUrlFail,
  getAllUsersStart,
  getAllUsersSuccess,
  getAllUsersFail,
} = authSlice.actions;
export default authSlice.reducer;
