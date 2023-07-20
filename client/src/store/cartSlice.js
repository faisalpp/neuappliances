import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pickupLocation:'Georgetown Warehouse',
  deliveryLocation:null,
  deliveryDate:null,
  deliveryTime:null,
  totalPrice:null,
  cartCount:0,
  sCart:false
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setPickupLocation: (state, action) => {
      state.pickupLocation = action.payload.pickupLocation  
    },
    setDeliveryLocation: (state, action) => {
      state.pickupLocation = action.payload.deliveryLocation  
    },
    setDeliveryDate: (state, action) => {
      state.deliveryDate = action.payload.deliveryDate  
    },
    setDeliveryTime: (state, action) => {
      state.deliveryTime = action.payload.deliveryTime  
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload.totalPrice  
    },
    setCartCount: (state, action) => {
      state.cartCount = action.payload.cartCount  
    },
    showSCart: (state, action) => {
      state.sCart = true 
    },
    hideSCart: (state, action) => {
      state.sCart = false 
    },
  },
  
});

export const { setPickupLocation ,setDeliveryLocation,setDeliveryDate,setDeliveryTime,setTotalPrice,setCartCount,showSCart,hideSCart } = cartSlice.actions;

export default cartSlice.reducer;