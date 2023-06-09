import * as AuthApi from "../API/postrequest.js";
import {
  getAllPostsStart,
  getAllPostsSuccess,
  getAllPostsFail,
  getPostUrlStart,
  getPostUrlSuccess,
  getPostUrlFail,
} from "../reducers/reducers.js";

export const getAllPosts = () => async (dispatch) => {
  try {
    dispatch(getAllPostsStart());
    const response = await AuthApi.getAllPosts();
    dispatch(getAllPostsSuccess(response));
  } catch (error) {
    dispatch(getAllPostsFail(error.response));
  }
};
export const getPostUrl = () => async (dispatch) => {
  try {
    dispatch(getPostUrlStart());
    const response = await AuthApi.getPostUrl();
    dispatch(getPostUrlSuccess(response));
  } catch (error) {
    dispatch(getPostUrlFail(error.response));
  }
};
