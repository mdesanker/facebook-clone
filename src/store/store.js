import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // users: usersReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
  },
});

export default store;
