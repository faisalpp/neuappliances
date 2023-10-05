import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderInfo:null,
  shippingInfo:null,
  paymentInfo:null,
  billingInfo:null,
  tax:0,
  grandTotal:0,
}

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
   setGrandTotal: (state, action) => {
     const data = action.payload;   
     state.grandTotal = data
   },
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
   setShippingFee: (state, action) => {
     const {fee} = action.payload;   
     state.shippingFee = fee
   },
   setTax: (state, action) => {
     const data = action.payload;   
     state.tax = (state.grandTotal*(data/100)).toFixed(2)
     state.grandTotal = (parseFloat(state.grandTotal) + (parseFloat(state.grandTotal)*(data/100))).toFixed(2)
   },
  },
});

export const { setOrder,setShipping ,setPayment,setBilling,setShippingFee,setGrandTotal,setTax} = orderSlice.actions;

export default orderSlice.reducer;