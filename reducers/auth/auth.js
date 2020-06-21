import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNOUT_ERROR,
  SIGNOUT_SUCCESS,
} from "@actions/ActionTypes";

const initialState = {
  isLogin: false,
  isLogOut: false,
  Error: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, isLogin: true, Error: "" };
    case LOGIN_USER_FAIL:
      var err = action.error;
      // if(err !== 'Error: Password should be at least 6 characters')
      alert(err);
      return { ...state, isLogin: false, Error: err };
    case SIGNOUT_SUCCESS:
      return { isLogOut: true, isLogin: false };
    case SIGNOUT_ERROR:
      var err = action.error;
      return { isLogOut: false, isLogin: true, Error: err };
    case CREATE_USER_SUCCESS:
      return { ...state };
    case CREATE_USER_FAIL:
      var err = action.error;
      if(err !== '[Error: Password should be at least 6 characters]')
      alert(err);
      return { ...state, Error: err };
    default:
      return state;
  }
};

export default auth;
