import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {Signin} from "../api/admin/auth"

const initialState = {
  _id: "",
  email: "",
  firstName: "",
  lastName: "",
  auth: false,
};

// Create an async thunk for the login action
export const loginAdmin = createAsyncThunk("admin/login", async (data) => {
    try{
      const response = await Signin(data); // Call your login API with the provided data
      if(response.status === 200){
        return response.data; // Assuming your API response contains the user data
      }else{
        return response
      }
    }catch(error){
      return { payload: error.response?.data, error: true };
    }
});

export const refreshAdmin = createAsyncThunk("admin/refresh", async () => {
  const isDev = import.meta.env.VITE_APP_DEV === "dev";
  const url = isDev ? `${import.meta.env.VITE_APP_INTERNAL_PATH}/api/admin/refresh` : "/api/admin/refresh";
  try{
  const response = await axios.get(url,{withCredentials: true});
    if(response.status === 200){
      return response.data;
    }else{
      return response;
    }
  }catch(error){
    return { payload: error.response?.data, error: true };
  }
});


export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      const { _id, email, firstName, lastName,auth } = action.payload;

      state._id = _id;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.auth = auth;
    },
    resetAdmin: (state) => {
      state._id = "";
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.auth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAdmin.fulfilled, (state, action) => {
      const { _id, email, firstName, lastName, auth } = action.payload;
      state._id = _id;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.auth = auth;
    }).addCase(refreshAdmin.fulfilled, (state, action) => {
      const { admin, auth } = action.payload;
      state._id = admin._id;
      state.email = admin.email;
      state.firstName = admin.firstName;
      state.lastName = admin.lastName;
      state.auth = auth;
    });
  },
});

export const { setAdmin, resetAdmin } = adminSlice.actions;

export default adminSlice.reducer;