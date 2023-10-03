import React, { useEffect, useState } from 'react';
import CustomInput from '../../components/Reusable/CustomInput';
import CartCard from '../../components/Checkout/CartCard';
import { HiOutlineTruck } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { GetCart } from '../../store/cartSlice'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import Toast from '../../utils/Toast'

const Cart = () => {

    const pickupLocation = useSelector((state) => state.cart.pickupLocation)
    const deliveryLocation = useSelector((state) => state.cart.deliveryLocation)



    const dispatch = useDispatch()

    const cartId = useSelector((state)=>state.cart.cartId)
    const tax = useSelector((state)=>state.cart.tax)
    const total = useSelector((state)=>state.cart.total)
    const pickupOrders = useSelector((state)=>state.cart.pickupOrders)
    const deliveryOrders = useSelector((state)=>state.cart.deliveryOrders)
    const deliveryInfo = useSelector((state)=>state.cart.deliveryInfo)

    const [grandTotal, setGrandTotal] = useState(tax ? total + tax : total)

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

    return (
        <>
            <div className='max-w-full w-full h-full px-4 sm:px-11 py-14 bg-[#F9F9F9]'>
                <div className='max-w-[418px] 3xl:max-w-xl mr-auto w-full flex flex-col gap-5'>

                    <div className='flex w-full flex-col gap-6 bg-white px-4 sm:px-6 py-4'>
                        {updatedDeliveryOrders && updatedDeliveryOrders.uniqueArr.map((item, index) => <CartCard key={index} item={item} count={updatedDeliveryOrders.deletedCount} />)}
                        <div className='border border-b31 text-b32 flex gap-2 items-center p-4 text-sm'>
                            <HiOutlineTruck className='text-xl text-b25 rounded-lg' />
                            <span>
                                Delivering To {deliveryInfo.location}
                            </span>
                        </div>
                    </div>

                    <div className='bg-white px-6 py-4 flex flex-col gap-5'>
                        {updatedPickupOrders && updatedPickupOrders.uniqueArr.map((item, index) => <CartCard key={index} item={item} count={updatedPickupOrders.deletedCount} />)}
                        <div className='border border-b31 text-b32 flex gap-2 items-center p-4 text-sm'>
                            <img src="/svgs/Pick-up.webp" alt="Pick-up" />
                            <span>
                                Pick up in store George Town, Tx
                            </span>
                        </div>
                    </div>

                    <hr />
                    <div className='flex gap-14px items-center w-full'>
                        <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="Discount code" />
                        <button type='buttton' className='px-4 p-3 bg-b3 text-sm text-white font-medium rounded-lg'>
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
                                *Calculated at next step
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-b32'>
                                Taxes
                            </span>
                            <span className='text-b16 font-medium'>
                                ${tax?tax:0}
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