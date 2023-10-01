import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {addToCart,getCart} from '../api/cart'

const initialState = {
  cartId:null,
  pickupOrders:[],
  deliveryOrders:[],
  total:0,
  orderInfo:{},
  cartCount:0,
  sCart:false,
};

// Create an async thunk for the Add To Cart
export const AddToCart = createAsyncThunk("cart/add", async (data) => {
  try{
    const response = await addToCart(data); // Call your login API with the provided data
    if(response.data.status === 200){
      return response.data; // Assuming your API response contains the user data
    }else{
      return response.data
    }
  }catch(error){
    return { payload: error.response?.data, error: true };
  }
});

// Create an async thunk for the Get CArt
export const GetCart = createAsyncThunk("cart/get", async (data) => {
  try{
    const response = await getCart(data); // Call your login API with the provided data
    if(response.data.status === 200){
      return response.data; // Assuming your API response contains the user data
    }else{
      return response.data
    }
  }catch(error){
    return { payload: error.response?.data, error: true };
  }
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state, action) => {
      state.pickupOrders = [],
      state.deliveryOrders = [],
      state.total = 0,
      state.orderInfo = {},
      state.cartCount = 0 
    },
    showSCart: (state, action) => {
      state.sCart = true 
    },
    hideSCart: (state, action) => {
      state.sCart = false 
    },
  },

  extraReducers: (builder) => {
    builder
     .addCase(AddToCart.fulfilled, (state, action) => {
      const { cart } = action.payload;
      state.cartId = cart._id,
      state.pickupOrders = cart.pickupOrders,
      state.deliveryOrders = cart.deliveryOrders,
      state.total = cart.total,
      state.orderInfo = cart.orderInfo,
      state.cartCount = cart.cartCount,
      state.sCart = true
    })
    .addCase(GetCart.fulfilled, (state, action) => {
      const { cart } = action.payload;
      state.cartId = cart._id,
      state.pickupOrders = cart.pickupOrders,
      state.deliveryOrders = cart.deliveryOrders,
      state.total = cart.total,
      state.orderInfo = cart.orderInfo,
      state.cartCount = cart.cartCount
    });
  },
  
});

export const { showSCart,hideSCart,resetCart } = cartSlice.actions;

export default cartSlice.reducer;