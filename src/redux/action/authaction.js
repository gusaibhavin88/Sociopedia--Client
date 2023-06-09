import {
  registerStart,
  registerSuccess,
  registerFail,
  loginFail,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  logoutFail,
} from "../reducers/reducers";
import * as AuthApi from "../API/authrequest";

export const registerUser = (formdata) => async (dispatch) => {
  try {
    dispatch(registerStart());
    const response = await AuthApi.signUp(formdata);
    dispatch(registerSuccess(response));
  } catch (error) {
    dispatch(registerFail(error.response));
    console.log(error.response);
  }
};

export const logInUser = (formdata) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await AuthApi.logIn(formdata);
    dispatch(loginSuccess(response));
  } catch (error) {
    dispatch(loginFail(error.response));
  }
};

export const logOutUser = () => async (dispatch) => {
  try {
    dispatch(logoutStart());
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFail(error.response.data));
  }
};
