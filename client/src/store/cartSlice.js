import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {addToCart,getCart,removeFromCart,changeCartItemType,UpdateTimeSlot,UpdatePickupLocation,UpdateDeliveryInfo,UpdateCartFinance} from '../api/cart'
import {applyCoupon,deleteCoupon} from '../api/frontEnd'

const initialState = {
  cart:{},
  sCart:false,
}

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

export const ChangeTimeSlot = createAsyncThunk("cart/time-slot", async (data) => {
  try{
    const response = await UpdateTimeSlot(data); // Call your login API with the provided data
    if(response.data.status === 200){
      return response.data; // Assuming your API response contains the user data
    }else{
      return response.data
    }
  }catch(error){
    return { payload: error.response?.data, error: true };
  }
});

export const ChangePickupLocation = createAsyncThunk("cart/change-location", async (data) => {
  try{
    const response = await UpdatePickupLocation(data); // Call your login API with the provided data
    if(response.data.status === 200){
      return response.data; // Assuming your API response contains the user data
    }else{
      return response.data
    }
  }catch(error){
    return { payload: error.response?.data, error: true };
  }
});

export const ChangeDeliveryInfo = createAsyncThunk("cart/change-delivery", async (data) => {
  try{
    const response = await UpdateDeliveryInfo(data); // Call your login API with the provided data
    if(response.data.status === 200){
      return response.data; // Assuming your API response contains the user data
    }else{
      return response.data
    }
  }catch(error){
    return { payload: error.response?.data, error: true };
  }
});

export const ChangeCartFinance = createAsyncThunk("cart/change-finance", async (data) => {
  try{
    const response = await UpdateCartFinance(data); // Call your login API with the provided data
    if(response.data.status === 200){
      return response.data; // Assuming your API response contains the user data
    }else{
      return response.data
    }
  }catch(error){
    return { payload: error.response?.data, error: true };
  }
});

export const ApplyCoupon = createAsyncThunk("cart/apply-coupon", async (data) => {
  try{
    const response = await applyCoupon(data); // Call your login API with the provided data
    if(response.data.status === 200){
      return response.data; // Assuming your API response contains the user data
    }else{
      return response.data
    }
  }catch(error){
    return { payload: error.response?.data, error: true };
  }
});

export const RemoveCoupon = createAsyncThunk("cart/remove-coupon", async (data) => {
  try{
    const response = await deleteCoupon(data); // Call your login API with the provided data
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
      state.cart = {}
    },
    showSCart: (state, action) => {
      state.sCart = true 
    },
    hideSCart: (state, action) => {
      state.sCart = false 
    },
    setTax: (state, action) => {
      const data = action.payload
      state.tax =  data
    },
    setTotal: (state, action) => {
      const data = action.payload;
      state.total =  data
    },
    setGrandTotal: (state, action) => {
      const data = action.payload;
      state.grandTotal =  data
    },
    resetDeliveryInfo: (state, action) => {
      const data = action.payload;
      state.deliveryInfo =  {}
    },
  },

  extraReducers: (builder) => {
    builder
     .addCase(AddToCart.fulfilled, (state, action) => {
      const {cart} = action.payload;
      
      if(cart){
       state.cart = cart
       state.sCart = true
      }
    })
    .addCase(GetCart.fulfilled, (state, action) => {
      const { cart } = action.payload;
      if(cart){
      state.cart = cart
      }
    })
    .addCase(RemoveFromCart.fulfilled, (state, action) => {
      const { cart } = action.payload;
      if(cart){
        state.cart = cart
      }
    })
    .addCase(ChangeCartItemType.fulfilled, (state, action) => {
      const { cart } = action.payload;
      if(cart){
        state.cart = cart
      }
    })
    .addCase(ChangeTimeSlot.fulfilled, (state, action) => {
      const { cart } = action.payload;
      if(cart){
        state.cart = cart
      }
    })
    .addCase(ChangePickupLocation.fulfilled, (state, action) => {
      const { cart } = action.payload;
      if(cart){
        state.cart = cart
      }
    })
    .addCase(ChangeDeliveryInfo.fulfilled, (state, action) => {
      const { cart } = action.payload;
      if(cart){
        state = cart
      }
    })
    .addCase(ChangeCartFinance.fulfilled, (state, action) => {
      const { cart } = action.payload;
      if(cart){
        state.cart = cart
      }
    })
    .addCase(ApplyCoupon.fulfilled, (state, action) => {
      const { cart } = action.payload;
      if(cart){
        state.cart = cart
      }
    })
    .addCase(RemoveCoupon.fulfilled, (state, action) => {
      const { cart } = action.payload;
      if(cart){
        state.cart = cart
      }
    });
  },
  
});

export const { showSCart,hideSCart,resetCart,setTotal,setGrandTotal,setTax,resetDeliveryInfo } = cartSlice.actions;

export default cartSlice.reducer;