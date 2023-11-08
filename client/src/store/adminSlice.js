import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {Signin,refreshAdmin} from "../api/admin/auth"
import {addToCart,incCart,getCart,decCart} from "../api/admin/order"

const initialState = {
  _id: "",
  email: "",
  firstName: "",
  lastName: "",
  auth: false,
  cart:{}
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

export const RefreshAdmin = createAsyncThunk("admin/refresh", async () => {
  try{
  const response = await refreshAdmin();
    // console.log(response)
    if(response.status === 200){
      return response.data;
    }else{
      return response;
    }
  }catch(error){
    return { payload: error.response?.data, error: true };
  }
});

export const AddToCart = createAsyncThunk("admin/add-to-cart", async (data) => {
  try{
    const response = await addToCart(data); // Call your login API with the provided data
    if(response.status === 200){
      return response.data; // Assuming your API response contains the user data
    }else{
      return response
    }
  }catch(error){
    return { payload: error.response?.data, error: true };
  }
});
export const IncrementCart = createAsyncThunk("admin/increment-cart", async (data) => {
  try{
    const response = await incCart(data); // Call your login API with the provided data
    if(response.status === 200){
      return response.data; // Assuming your API response contains the user data
    }else{
      return response
    }
  }catch(error){
    return { payload: error.response?.data, error: true };
  }
});
export const DecrementCart = createAsyncThunk("admin/decrement-cart", async (data) => {
  try{
    const response = await decCart(data); // Call your login API with the provided data
    if(response.status === 200){
      return response.data; // Assuming your API response contains the user data
    }else{
      return response
    }
  }catch(error){
    return { payload: error.response?.data, error: true };
  }
});
export const GetCart = createAsyncThunk("admin/get-cart", async (data) => {
  try{
    const response = await getCart(data); // Call your login API with the provided data
    if(response.status === 200){
      return response.data; // Assuming your API response contains the user data
    }else{
      return response
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
    resetCart: (state) => {
      state.cart = {};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginAdmin.fulfilled, (state, action) => {
      const { admin, auth } = action.payload;
      state._id = admin._id;
      state.email = admin.email;
      state.firstName = admin.firstName;
      state.lastName = admin.lastName;
      state.auth = auth;
    }).addCase(RefreshAdmin.fulfilled, (state, action) => {
      const { admin, auth } = action.payload;
      state._id = admin._id;
      state.email = admin.email;
      state.firstName = admin.firstName;
      state.lastName = admin.lastName;
      state.auth = auth;
    }).addCase(AddToCart.fulfilled, (state, action) => {
      const {data} = action.payload;
      if(data?.products?.length > 0){
        state.cart = data;
      }
    }).addCase(IncrementCart.fulfilled, (state, action) => {
      const {data} = action.payload;
      console.log(data)
      if(data.products?.length > 0){
        state.cart = data;
      }
    }).addCase(DecrementCart.fulfilled, (state, action) => {
      const {data} = action.payload;
      console.log(data)
      if(data?.products){
        state.cart = data;
      }
    }).addCase(GetCart.fulfilled, (state, action) => {
      const {data} = action.payload;
      if(data?._id){
        state.cart = data;
      }
    })
  },
});

export const { setAdmin, resetAdmin,resetCart } = adminSlice.actions;

export default adminSlice.reducer;