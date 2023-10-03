import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  email:'',
  firstName:'',
  lastName:'',
  address:'',
  appartment:'',
  city:'',
  country:'',
  postalCode:'',
  phone:'',
  saveAddress:null,
  keepUpdates:null,
  province:'',
}

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
   setOrder: (state, action) => {
     const {email,firstName,lastName,address,appartment,city,country,postalCode,phone,saveAddress,keepUpdates,province } = action.payload;   
     state.email=email
     state.firstName=firstName
     state.lastName=lastName
     state.address=address
     state.appartment=appartment
     state.city=city
     state.country=country
     state.postalCode=postalCode
     state.phone=phone
     state.saveAddress=saveAddress
     state.keepUpdates=keepUpdates
     state.province=province
   },
   resetOrder: (state) => {
     state.email=''
     state.firstName=''
     state.lastName=''
     state.address=''
     state.appartment=''
     state.city=''
     state.country=''
     state.postalCode=''
     state.phone=''
     state.saveAddress=null
     state.keepUpdates=null
     state.province=''
   },
  },
//   extraReducers: (builder) => {
//   },
});

export const { setOrder, resetOrder } = orderSlice.actions;

export default orderSlice.reducer;