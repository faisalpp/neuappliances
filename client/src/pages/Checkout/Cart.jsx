import React, { useEffect, useState } from 'react';
import CustomInput from '../../components/Reusable/CustomInput';
import CartCard from '../../components/Checkout/CartCard';
import { HiOutlineTruck } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { GetCart,ApplyCoupon,RemoveCoupon} from '../../store/cartSlice'
import { useDispatch } from "react-redux";
import Toast from '../../utils/Toast'

const Cart = () => {
    const dispatch = useDispatch()

    const cartId = useSelector((state)=>state.cart?.cart._id)
    const subTotal = useSelector((state)=>state.cart?.cart.subTotal)
    const tax = useSelector((state)=>state.cart?.cart.tax)
    const products = useSelector((state)=>state.cart?.cart.products)
    const orderInfo = useSelector((state)=>state.cart?.cart.orderInfo)
    const coupons = useSelector((state)=>state.cart?.cart.coupons)
    const grandTotal = useSelector((state)=>state.cart?.cart.grandTotal)
    
    const [loading,setLoading] = useState(false)

    const GetCartData = async () => {
        setLoading(true)
        const data = {cartId:cartId}
        const res = await dispatch(GetCart(data));
        if (res.payload.status === 200) {
          setLoading(false)
        }else {
          setLoading(false)
        }
      }
    
    
      useEffect(() => {
        if (cartId) {
          GetCartData()
        }
      }, [cartId])

      const [coupen,setCoupen] = useState('')

      const handleCoupen = async (e) => {
        e.preventDefault()
        if(coupen.length > 4){
         const res = await dispatch(ApplyCoupon({cartId:cartId,code:coupen}))
         if(res.payload.status === 200){
            Toast(res.payload.msg,'success',1000)
         }else{
            Toast(res.payload.message,'error',1000)
         }
        }
      }

      const removeCoupen = async (e,id) => {
        e.preventDefault()
         const filt = coupons.find((item)=>item._id === id)
         if(!filt){
          Toast('Coupon Not Found!','error',1000)
         }else{
         const res = await dispatch(RemoveCoupon({coupon:filt,cartId:cartId}))
          if(res.payload.status === 200){
           Toast(res.payload.msg,'success',1000)
          }else{
           Toast(res.payload.message,'error',1000)
          }
         }
      }

    return (
        <>
            <div className='max-w-full w-full h-full px-4 sm:px-11 py-14 bg-[#F9F9F9]'>
                <div className='max-w-[418px] 3xl:max-w-xl mr-auto w-full flex flex-col gap-5'>
         
                {orderInfo?.type === 'delivery' ?<div className='flex w-full flex-col gap-6 bg-white px-4 sm:px-6 py-4'>
                        {products?.length > 0 && products.map((item, index) => <CartCard key={index} item={item} />)}
                        <div className='border border-b31 text-b32 flex gap-2 items-center p-4 text-sm'>
                            <HiOutlineTruck className='text-xl text-b25 rounded-lg' />
                            <span>
                                Delivering To {orderInfo?.email ? `${orderInfo?.address}, ${orderInfo?.city}, ${orderInfo?.province}, ${orderInfo?.country}, ${orderInfo?.postalCode}` : orderInfo?.location}
                            </span>
                        </div>
                    </div>:null}

                    {orderInfo?.type === 'pickup' ? <div className='bg-white px-6 py-4 flex flex-col gap-5'>
                        {products?.length > 0 && products.map((item, index) => <CartCard key={index} item={item} />)}
                        <div className='border border-b31 text-b32 flex gap-2 items-center p-4 text-sm'>
                            <img src="/svgs/Pick-up.webp" alt="Pick-up" />
                            <span>
                                Pick up at {orderInfo?.location}
                            </span>
                        </div>
                    </div>:null}

                    <hr />
                    <div className='flex gap-14px items-center w-full'>
                        <CustomInput type="text" state={coupen} setState={setCoupen} colorStyle="border-b31 placeholder:text-b25" placeholder="Discount code" />
                        <button onClick={e=>handleCoupen(e)} type='buttton' className='px-4 p-3 bg-b3 text-sm text-white font-medium rounded-lg'>
                            Apply
                        </button>
                    </div>
                    <hr />
                    <div className='[&>*]:text-sm flex flex-col gap-3'>
                        <div className='flex justify-between'>
                            <span className='text-b32'>
                                Subtotal
                            </span>
                            <span className='text-b16 font-medium'>
                                ${subTotal}
                            </span>
                        </div>
                        {coupons?.length > 0 ? coupons.map((coupon)=>(<>
                        <hr />
                        <div className='flex justify-between'>
                            <span className='text-b32'>
                                Coupon: <span className='text-xs' >{coupon.code}</span>
                            </span>
                            <span className='text-b16 font-medium text-xs'>
                              ({coupon.type === 'percentage-discount' ?  `-${coupon.amount}% / -$${coupon?.previous?.amount}` : coupon.amount })<span onClick={(e)=>removeCoupen(e,coupon._id)} className='ml-1 text-[10px] underline text-b6 cursor-pointer' >Remove</span>
                            </span>
                        </div></>)):null}
                        <hr/>
                        <div className='flex justify-between'>
                            <span className='text-b32'>
                                Shipping
                            </span>
                            <span className='text-b16 font-medium'>
                             {orderInfo?.type === 'delivery' ? `$${orderInfo.shipping}`: null}
                             {orderInfo?.type === 'pickup' ? orderInfo.shipping : null }
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-b32'>
                                Taxes
                            </span>
                            <span className='text-b16 font-medium'>
                                ${tax}
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center'>
                        <span className='text-b16 font-medium'>
                            Total
                        </span>
                        <div className='flex gap-2 items-center'>
                            <span className='text-xs text-b16'>
                                USD
                            </span>
                            <span className='text-b3 font-semibold tracking-032 text-2xl'>
                                ${grandTotal}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart