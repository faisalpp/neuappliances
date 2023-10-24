import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderInfo:null,
  paymentInfo:null,
}

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
   setOrder: (state, action) => {
     const data = action.payload;   
     state.orderInfo = data
   },
   resetOrder: (state, action) => {
     state.orderInfo = null;
     state.paymentInfo = null;
   },
   setPaymentInfo: (state,action) => {
    const data = action.payload;
    state.paymentInfo = data;
   }
  },
});

export const { setOrder,setOrderStatus,resetOrder,setPaymentInfo} = orderSlice.actions;

export default orderSlice.reducer;