import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "../reducer/registrationReducer";

export const store = configureStore({
  reducer: {
    registrationReducer: registrationReducer,
  },
});
