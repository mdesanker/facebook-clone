import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  totalUsers: 0,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
      state.totalUsers++;
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
