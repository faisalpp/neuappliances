import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderInfo:null,
  shippingInfo:null,
  paymentInfo:null,
  billingInfo:null,
}

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
   setOrder: (state, action) => {
     const data = action.payload;   
     state.orderInfo = data
   },
   setShipping: (state, action) => {
     const data = action.payload;   
     state.shippingInfo = data
   },
   setPayment: (state, action) => {
     const data = action.payload;   
     state.paymentInfo = data
   },
   setBilling: (state, action) => {
     const data = action.payload;   
     state.billingInfo = data
   },
  },
});

export const { setOrder,setPayment,setBilling,setShipping} = orderSlice.actions;

export default orderSlice.reducer;