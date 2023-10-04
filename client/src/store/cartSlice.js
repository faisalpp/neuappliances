import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {addToCart,getCart,removeFromCart,changeCartItemType} from '../api/cart'

const initialState = {
  cartId:null,
  pickupOrders:[],
  deliveryOrders:[],
  orderInfo:{},
  cartCount:0,
  total:0,
  status:'INIT',
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

// Create an async thunk for the Add To Cart
export const RemoveFromCart = createAsyncThunk("cart/remove", async (data) => {
  try{
    const response = await removeFromCart(data); // Call your login API with the provided data
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

// Create an async thunk for the Get CArt
export const ChangeCartItemType = createAsyncThunk("cart/change", async (data) => {
  try{
    const response = await changeCartItemType(data); // Call your login API with the provided data
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
      state.cartId = null,
      state.pickupOrders = cart.pickupOrders,
      state.deliveryOrders = cart.deliveryOrders,
      state.total = cart.total,
      state.deliveryInfo = cart.deliveryInfo,
      state.pickupInfo = cart.pickupInfo,
      state.cartCount = cart.cartCount,
      state.status = cart.status,
      state.sCart = true
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
      state.deliveryInfo = cart.deliveryInfo,
      state.pickupInfo = cart.pickupInfo,
      state.cartCount = cart.cartCount,
      state.status = cart.status,
      state.sCart = true
    })
    .addCase(GetCart.fulfilled, (state, action) => {
      const { cart } = action.payload;
      if(cart){
      state.cartId = cart._id,
      state.pickupOrders = cart.pickupOrders,
      state.deliveryOrders = cart.deliveryOrders,
      state.total = cart.total,
      state.deliveryInfo = cart.deliveryInfo,
      state.pickupInfo = cart.pickupInfo,
      state.cartCount = cart.cartCount
      state.status = cart.status
      }
    })
    .addCase(RemoveFromCart.fulfilled, (state, action) => {
      const { cart } = action.payload;
      console.log(cart)
      state.cartId = cart._id,
      state.pickupOrders = cart.pickupOrders,
      state.deliveryOrders = cart.deliveryOrders,
      state.total = cart.total,
      state.deliveryInfo = cart.deliveryInfo,
      state.pickupInfo = cart.pickupInfo,
      state.cartCount = cart.cartCount
      state.status = cart.status
    })
    .addCase(ChangeCartItemType.fulfilled, (state, action) => {
      const { cart } = action.payload;
      console.log(cart)
      state.cartId = cart._id,
      state.pickupOrders = cart.pickupOrders,
      state.deliveryOrders = cart.deliveryOrders,
      state.total = cart.total,
      state.deliveryInfo = cart.deliveryInfo,
      state.pickupInfo = cart.pickupInfo,
      state.cartCount = cart.cartCount
      state.status = cart.status
    });
  },
  
});

export const { showSCart,hideSCart,resetCart,setGrandTotal } = cartSlice.actions;

export default cartSlice.reducer;