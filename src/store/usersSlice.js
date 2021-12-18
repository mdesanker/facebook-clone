import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: "AvwkWp6nFeg0O8XEltAYV5D5u3K3",
      first: "Michael",
      last: "Creator",
      email: "host@gmail.com",
      password: "host1234",
      birthday: "1991-07-23",
      gender: "male",
    },
  ],
  totalUsers: 1,
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
