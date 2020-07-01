// Action
import firebase from "../firebase/index";
import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR
} from "./ActionTypes";
import * as Facebook from 'expo-facebook';
export const createUserSuccess = (resp) => {
  return {
    type: CREATE_USER_SUCCESS,
    user: resp,
  };
};

export const createUserFail = (error) => {
  return {
    type: CREATE_USER_FAIL,
    error,
  };
};

export const loginUserSuccess = (resp) => {
  return {
    type: LOGIN_USER_SUCCESS,
    user: resp,
  };
};

export const loginUserFail = (error) => {
  return {
    type: LOGIN_USER_FAIL,
    error,
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGNOUT_SUCCESS,
  };
};

export const signOutError = (error) => {
  return {
    type: SIGNOUT_ERROR,
    error,
  };
};

export const createUser = (email, pass,name) => (dispatch) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .then((resp) => {
      let url = "https://firebasestorage.googleapis.com/v0/b/rnmovies-c6507.appspot.com/o/image%2F1593366903051?alt=media&token=5ffde16f-55fa-4c5c-bb52-52ac1544371e"
      resp.user.updateProfile({
        displayName: name,
        photoURL:url
      })
      return dispatch(createUserSuccess(resp));
    })
    .catch((error) => dispatch(createUserFail(error)));
};

export const loginUser = (email, pass) => (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, pass)
    .then((resp) => {
      return dispatch(loginUserSuccess(resp));
    })
    .catch((error) => {
      dispatch(loginUserFail(error));
    });
};


export const signOut = () => (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      return dispatch(signOutSuccess());
    })
    .catch((error) => {
      dispatch(signOutError(error));
    });
};
