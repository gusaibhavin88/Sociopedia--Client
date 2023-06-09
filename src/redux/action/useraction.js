import {
  getUserFail,
  getUserStart,
  getUserSuccess,
  getAllUsersFail,
  getAllUsersStart,
  getAllUsersSuccess,
} from "../reducers/reducers";
import * as UserApi from "../API/userrequest";

export const getProfile = () => async (dispatch) => {
  try {
    dispatch(getUserStart());
    const response = await UserApi.getMyProfile();
    dispatch(getUserSuccess(response));
  } catch (error) {
    dispatch(getUserFail(error.response));
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch(getAllUsersStart());
    const response = await UserApi.getAllUsers();
    dispatch(getAllUsersSuccess(response));
  } catch (error) {
    dispatch(getAllUsersFail(error.response));
  }
};
