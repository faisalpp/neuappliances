import { createSlice} from "@reduxjs/toolkit";
import Toast from "../utils/Toast";

const initialState = {
  coupons:[],
  subTotal:0,
  grandTotal:0,
  tax:0,
  shipping:{type:'pickup',location:'Georgtown, Tx',shipping:'Free'},
};

export const adminCartSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setGrandTotal: (state,action) => {
      const data = action.payload;
      state.grandTotal = data
    },
    resetCartFinance: (state,action) => {
      state.coupons = [],
      state.subTotal = 0,
      state.grandTotal = 0,
      state.tax = 0,
      state.shipping = {type:'pickup',location:'Georgtown, Tx',shipping:'Free'}
    },
    setTax: (state,action) => {
     const data = action.payload;
     state.tax = data;
    },
    removeTax: (state,action) => {
     state.grandTotal -= state.tax;
     state.tax = 0;
    },
    setShipping: (state,action) => {
      const data = action.payload;
      state.shipping = data;
    },
    incSubTotal: (state,action) => {
      const data = action.payload;
      state.subTotal += data;
    },
    decSubTotal: (state,action) => {
      const data = action.payload;
      state.subTotal -= data;
    },
    setSubTotal: (state,action) => {
      const data = action.payload;
      state.subTotal += data;
    },
    applyCoupon: (state,action) => {
      const data = action.payload;
      state.coupons = [...state.coupons,data]
    },
    removeCoupon: (state,action) => {
      const data = action.payload;
      const coupons = state.coupons;
      const newCoupons = coupons.filter((_,indx) => indx !== data)
       state.coupons = newCoupons
       Toast('Coupon Removed!','info',1000)
      }
  },
});

export const {setOnlyTax,addCoupon,setOnlyShipping,setOnlySubTotal, setGrandTotal,resetCartFinance,removeTax,setTax,setShipping,setCoupon,incSubTotal,decSubTotal,setSubTotal,removeCoupon,applyCoupon } = adminCartSlice.actions;

export default adminCartSlice.reducer;