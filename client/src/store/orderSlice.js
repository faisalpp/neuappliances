import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderInfo:null
}

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
   setOrder: (state, action) => {
     const data = action.payload;   
     state.orderInfo = data
   }
  },
});

export const { setOrder} = orderSlice.actions;

export default orderSlice.reducer;