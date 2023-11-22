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
     state.grandTotal += data;
    },
    removeTax: (state,action) => {
     state.grandTotal -= state.tax;
     state.tax = 0;
    },
    setShipping: (state,action) => {
      const data = action.payload;
      state.shipping = data;
      if(data.type === 'delivery'){
       state.grandTotal += data.shipping
      }
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
      state.grandTotal += state.subTotal;
    },
    applyCoupon: (state,action) => {
      const data = action.payload;
      if(data.type !== 'free shipping'){
       state.subTotal -= data.amount;
       state.grandTotal -= data.amount;
      }
      state.coupons = [...state.coupons,data]
    },
    setCoupon: (state,action) => {
      const data = action.payload;
      if(data.type === 'flat'){
        state.subTotal = state.subTotal - data.amount;
        state.grandTotal = state.grandTotal - data.amount;
        state.coupons = [...state.coupons,data]
      }
    },
    removeCoupon: (state,action) => {
      const data = action.payload;
      const coupons = state.coupons;
      const getCoupon = coupons.find((_,indx) => indx === data)
      const newCoupons = coupons.filter((_,indx) => indx !== data)
      if(getCoupon){
       if(getCoupon.type === 'free shipping'){
        state.shipping = 0;
       }else{
        state.subTotal = state.subTotal + Number(getCoupon.amount);
        state.grandTotal = state.grandTotal + Number(getCoupon.amount);
       }
       state.coupons = newCoupons
       Toast('Coupon Removed!','info',1000)
      }
    },
  },
});

export const { resetCartFinance,removeTax,setTax,setShipping,setCoupon,incSubTotal,decSubTotal,setSubTotal,removeCoupon,applyCoupon } = adminCartSlice.actions;

export default adminCartSlice.reducer;