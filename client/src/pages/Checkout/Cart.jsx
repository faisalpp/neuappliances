import React, { useEffect, useState } from 'react';
import CustomInput from '../../components/Reusable/CustomInput';
import CartCard from '../../components/Checkout/CartCard';
import { HiOutlineTruck } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { GetCart,setTotal,setTax,setGrandTotal,resetDeliveryInfo } from '../../store/cartSlice'
import { useDispatch } from "react-redux";

const Cart = () => {
    const dispatch = useDispatch()

    const cartId = useSelector((state)=>state.cart.cartId)
    const total = useSelector((state)=>state.cart.total)
    const grandTotal = useSelector((state)=>state.cart.grandTotal)
    const tax = useSelector((state)=>state.cart.tax)
    const pickupOrders = useSelector((state)=>state.cart.pickupOrders)
    const deliveryOrders = useSelector((state)=>state.cart.deliveryOrders)
    const deliveryInfo = useSelector((state)=>state.cart.deliveryInfo)
    const pickupInfo =useSelector((state)=>state.cart.pickupInfo)

    function removeDuplicateObjectsAndGetCount(arr) {
        let seen = new Set();
        let uniqueArr = [];
        let deletedDuplicates = new Set();
        let deletedCount = 0;
      
        for (const item of arr) {
          if (!seen.has(item.pid)) {
            seen.add(item.pid);
            uniqueArr.push(item);
          } else {
            deletedDuplicates.add(item.pid);
            deletedCount++;
          }
        }
        if(deletedCount >= 1){
            deletedCount = deletedCount+1
        }else{
            deletedCount = 1
        }
        return { uniqueArr, deletedCount, deletedDuplicates };
      }

      const updatedPickupOrders = removeDuplicateObjectsAndGetCount(pickupOrders)
      const updatedDeliveryOrders = removeDuplicateObjectsAndGetCount(deliveryOrders)
      const orderInfo = useSelector((state)=>state.order.orderInfo)
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

      const handleCoupen = () => {
        if(coupen === 'c12'){
         const data = parseFloat(total)-20;
         dispatch(setTotal(data))
        }
      }

      const CalculateGrandTotal = () => {
          const TAX = ((8.25/100) * total)
          dispatch(setTax(TAX.toFixed(2)))
        if(deliveryOrders && deliveryOrders.length > 0){
         const GRAND_TOTAL = total + TAX + deliveryInfo.shipping
         dispatch(setGrandTotal(GRAND_TOTAL.toFixed(2)))
        }else{
         dispatch(resetDeliveryInfo())
         const GRAND_TOTAL = total + TAX
         dispatch(setGrandTotal(GRAND_TOTAL.toFixed(2)))
        }
      }

      useEffect(()=>{
        CalculateGrandTotal()
      },[])

    return (
        <>
            <div className='max-w-full w-full h-full px-4 sm:px-11 py-14 bg-[#F9F9F9]'>
                <div className='max-w-[418px] 3xl:max-w-xl mr-auto w-full flex flex-col gap-5'>

                {updatedDeliveryOrders?.uniqueArr?.length > 0 ?<div className='flex w-full flex-col gap-6 bg-white px-4 sm:px-6 py-4'>
                        {updatedDeliveryOrders && updatedDeliveryOrders.uniqueArr.map((item, index) => <CartCard key={index} item={item} count={updatedDeliveryOrders.deletedCount} />)}
                        <div className='border border-b31 text-b32 flex gap-2 items-center p-4 text-sm'>
                            <HiOutlineTruck className='text-xl text-b25 rounded-lg' />
                            <span>
                                Delivering To {orderInfo?.email ? `${orderInfo.address}, ${orderInfo.city}, ${orderInfo.province}, ${orderInfo.country}, ${orderInfo.postalCode}` : deliveryInfo?.location}
                            </span>
                        </div>
                    </div>:null}

                    {updatedPickupOrders?.uniqueArr?.length > 0 ? <div className='bg-white px-6 py-4 flex flex-col gap-5'>
                        {updatedPickupOrders && updatedPickupOrders.uniqueArr.map((item, index) => <CartCard key={index} item={item} count={updatedPickupOrders.deletedCount} />)}
                        <div className='border border-b31 text-b32 flex gap-2 items-center p-4 text-sm'>
                            <img src="/svgs/Pick-up.webp" alt="Pick-up" />
                            <span>
                                Pick up in store {pickupInfo?.location}
                            </span>
                        </div>
                    </div>:null}

                    <hr />
                    <div className='flex gap-14px items-center w-full'>
                        <CustomInput type="text" state={coupen} setState={setCoupen} colorStyle="border-b31 placeholder:text-b25" placeholder="Discount code" />
                        <button onClick={handleCoupen} type='buttton' className='px-4 p-3 bg-b3 text-sm text-white font-medium rounded-lg'>
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
                                ${total}
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-b32'>
                                Shipping
                            </span>
                            <span className='text-b16 font-medium'>
                                {deliveryOrders?.length > 0 ? `$${deliveryInfo.shipping}`:'Free'}
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