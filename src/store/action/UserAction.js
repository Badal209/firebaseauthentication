import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import {
  login,
  loginError,
  logout,
  singup,
  singupError,
} from "../slice/userSlice";

export const singupAction = (email, password) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("res", res);
        dispatch(singup({ email: email, password: password }));
      })
      .catch((err) => {
        dispatch(singupError(err.customData._tokenResponse.error.message));
        console.log("err", err);
      });
  };
};

export const loginAction = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("res", res);
        dispatch(login({ email: email, password: password }));
      })
      .catch((err) => {
        console.log("err", err);
        dispatch(loginError(err.code));
      });
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    signOut(auth);
    dispatch(logout());
  };
};
