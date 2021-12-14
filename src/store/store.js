import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import usersReducer from "./usersSlice";
import postReducer from "./postSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // users: usersReducer,
    // post: postReducer,
    // firebase: firebaseReducer,
  },
});

export default store;
