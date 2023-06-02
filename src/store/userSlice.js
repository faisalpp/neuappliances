import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  email: "",
  firstName: "",
  lastName: "",
  auth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { _id, email, firstName, lastName,auth } = action.payload;

      state._id = _id;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.auth = auth;
    },
    resetUser: (state) => {
      state._id = "";
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.auth = false;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;