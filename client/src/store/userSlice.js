import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {Signin} from "../api/user/auth"
import axios from "axios";
import Toast from '../utils/Toast'

const initialState = {
  _id: "",
  email: "",
  firstName: "",
  lastName: "",
  auth: false,
};

// Create an async thunk for the login action
export const loginUser = createAsyncThunk("user/login", async (data) => {
    try{
      const response = await Signin(data); // Call your login API with the provided data
      
      if(response.status === 200){
        return response.data; // Assuming your API response contains the user data
      }else{
        return response.data
      }
    }catch(error){
      
      Toast(error.response.message,'error',1000)
      return { payload: error.response?.data, error: true };
    }
});

export const refreshUser = createAsyncThunk("user/refresh", async () => {
    const isDev = import.meta.env.VITE_APP_DEV === "dev";
    const url = isDev ? `${import.meta.env.VITE_APP_INTERNAL_PATH}/api/user/refresh` : "/api/user/refresh";
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
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { user, auth } = action.payload;
      if(user){
        state._id = user._id;
        state.email = user.email;
        state.firstName = user.firstName;
        state.lastName = user.lastName;
        state.auth = auth;
      }
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      const {user,auth} = action.payload;
      
       state._id = user._id;
      state.email = user.email;
      state.firstName = user.firstName;
      state.lastName = user.lastName;
      state.auth = auth;
    })
  },
});

export const { setUser, resetUser,setUserAuth } = userSlice.actions;

export default userSlice.reducer;