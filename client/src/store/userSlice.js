import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  email: "",
  firstName: "",
  lastName: "",
  auth: false,
  isAdmin: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { _id, email, firstName, lastName,auth,isAdmin } = action.payload;

      state._id = _id;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.auth = auth;
      state.isAdmin = isAdmin;
    },
    setUserAuth: (state, action) => {
      state.auth = action.payload.auth;
    },
    resetUser: (state) => {
      state._id = "";
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.auth = false;
      state.isAdmin = null;
    },
  },
});

export const { setUser, resetUser,setUserAuth } = userSlice.actions;

export default userSlice.reducer;