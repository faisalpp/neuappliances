import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderNo:null,
  orderInfo:null,
  orderErrors:{order:false,payment:false,confirm:false},
  paymentIntent:null
}

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
   setPaymentIntent: (state, action) => {
     const data = action.payload;   
     state.paymentIntent = data
   },
   setOrderErrors: (state, action) => {
     const data = action.payload;   
     state.orderErrors = {...state.orderErrors,...data}
   },
   setOrderNo: (state, action) => {
     const data = action.payload;   
     state.orderNo = data
   },
   setOrder: (state, action) => {
     const data = action.payload;   
     state.orderInfo = data
   },
   resetOrder: (state, action) => {
     state.orderInfo = null
     state.orderNo = null
     state.orderErrors = {order:false,payment:false,confirm:false},
     state.paymentIntent = null
   },
  }
});

export const { setOrder,setOrderStatus,resetOrder,setOrderNo,setOrderErrors,setPaymentIntent} = orderSlice.actions;

export default orderSlice.reducer;