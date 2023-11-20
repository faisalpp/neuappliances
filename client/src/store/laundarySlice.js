import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  washer: null,
  dryer: null,
  subTotal: 0,
};

export const laundarySlice = createSlice({
 name: "laundary",
 initialState,
 reducers: {
  setWasher: (state, action) => {
   const item = action.payload;
   state.washer = item;
   state.subTotal += item.isSale ? item.salePrice : item.regPrice
  },
  setDryer: (state, action) => {
   const item = action.payload;
   state.dryer = item;
   state.subTotal += item.isSale ? item.salePrice : item.regPrice
  },
  setSubTotal: (state, action) => {
   const item = action.payload;
   state.subTotal = item;
  },
  resetSubTotal: (state) => {
   state.subTotal = 0;
  },
  resetDryer: (state) => {
   let subTotal = 0;
   if(state.dryer){
     subTotal = state.dryer.isSale ? state.dryer.salePrice : state.dryer.regPrice;
   }
   state.subTotal -= subTotal;
   state.dryer = null;
  },
  resetWasher: (state) => {
    let subTotal = 0;
   if(state.washer){
     subTotal = state.washer.isSale ? state.washer.salePrice : state.washer.regPrice;
   }
   state.subTotal -= subTotal;
   state.washer = null;
  },
  resetLaundary: (state) => {
   state.dryer = null;
   state.washer = null;
   state.subTotal = 0;
  },
 },
});

export const { setWasher,setDryer,resetLaundary,resetWasher,resetDryer,setSubTotal,resetSubTotal } = laundarySlice.actions;

export default laundarySlice.reducer;