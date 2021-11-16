import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: "",
    loader: true,
  },
  reducers: {
    singup: (state, action) => {
      console.log("Action", action);
      localStorage.getItem("user", JSON.stringify(action.payload));
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
      state.loader = false;
    },
    singupError: (state, action) => {
      state.error = action.payload;
      state.loader = true;
    },
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.loader = false;
    },
    loginError: (state, action) => {
      state.error = action.payload;
      state.loader = true;
    },
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("user");
      state.loader = true;
    },
  },
});

export const { login, singup, logout, singupError, loginError } =
  userSlice.actions;
export default userSlice.reducer;
