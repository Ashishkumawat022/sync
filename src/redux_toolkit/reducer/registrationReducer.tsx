import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch4, fetch3 } from "../../Apis/commonApis";

const initialState = {
  registrationState: 0,
  verifyState: 0,
  loginState:0,
  logoutState:0,
};

export let registrationMessage = "";
export let verifyMessage = "";
export let loginMessage:any = {
  success:true,
  message:""
};
export let logoutMessage = "";
export let user:any = {}

export const userRegistration: any = createAsyncThunk(
  "userRegistration",
  async (body) => {
    const result = await fetch4(
      `${process.env.REACT_APP_BASEURL}/register`,
      body
    );
    registrationMessage = result.message;
    return result;
  }
);

export const verifyRegistration: any = createAsyncThunk(
  "verifyRegistration",
  async (body) => {
    const result = await fetch3(
      `${process.env.REACT_APP_BASEURL}/verify/${body}`,
      "get"
    );
    verifyMessage = result.message;
    return result;
  }
);

export const userLogin: any = createAsyncThunk(
  "userLogin",
  async (body) => {
    const result = await fetch4(
      `${process.env.REACT_APP_BASEURL}/login`,
      body
    );
    if(result.success===true){
      user = result.user
      loginMessage.success = true
      loginMessage.message = "Login Successfully"
    }else{
      loginMessage.success = false
      loginMessage.message = result.message
    }
    return result;
  }
);

export const userLogout: any = createAsyncThunk(
  "userLogout",
  async () => {
    const result = await fetch3(
      `${process.env.REACT_APP_BASEURL}/logout`,
      "get"
    );
    user = {}
    logoutMessage = result.message
    return result;
  }
);

const registrationSlice: any = createSlice({
  name: "manageCoupon",
  initialState,
  reducers: {
    changeRegistrationState(state = initialState) {
      state.registrationState = 0;
    },
    changeVerifyState(state = initialState) {
      state.verifyState = 0;
    },
    changeLoginState(state = initialState) {
      state.loginState = 0;
    },
    changeLogoutState(state = initialState) {
      state.logoutState = 0;
    },
  },
  extraReducers: {
    [userRegistration.fulfilled]: (
      state: any,
      { payload: { error, message } }
    ) => {
      state.registrationState = 1;
      if (error) {
        state.error = error;
      } else {
        state.error = message;
      }
    },
    [verifyRegistration.fulfilled]: (
      state: any,
      { payload: { error, message } }
    ) => {
      state.verifyState = 1;
      if (error) {
        state.error = error;
      } else {
        state.error = message;
      }
    },
    [userLogin.fulfilled]: (
      state: any,
      { payload: { error, message } }
    ) => {
      state.loginState = 1;
      if (error) {
        state.error = error;
      } else {
        state.error = message;
      }
    },
    [userLogout.fulfilled]: (
      state: any,
      { payload: { error, message } }
    ) => {
      state.logoutState = 1;
      if (error) {
        state.error = error;
      } else {
        state.error = message;
      }
    },
  },
});

export const { changeRegistrationState, changeVerifyState, changeLoginState, changeLogoutState } =
  registrationSlice.actions;
export default registrationSlice.reducer;
