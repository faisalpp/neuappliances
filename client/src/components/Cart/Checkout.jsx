import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Toast from '../../utils/Toast'

const Checkout = (props) => {

    const deliveryInfo = useSelector((state)=>state.cart.deliveryInfo)
    const deliveryOrders = useSelector((state)=>state.cart.deliveryOrders)
    const pickupOrders = useSelector((state)=>state.cart.pickupOrders)

    const isDelivery = deliveryOrders?.length > 0 ? true : false;
    const isPickup = pickupOrders?.length > 0 ? true : false;

    const navigate = useNavigate()

    const handleCartToCheckout = (e) => {
        e.preventDefault()
       if((isDelivery && !isPickup) || (!isDelivery && isPickup)){
        navigate('/mycart/information')
       }else{
        Toast('Select Delivery Or Pickup Only!','error',1000)
       }

    }

    return (
        <div className='border border-b26 rounded px-5 py-10 md:p-10 flex flex-col gap-6'>
            <h2 className='text-b16 font-bold text-xl'>Order Summary</h2>
            <div className='flex justify-between'><span>{props.cartCount} Items</span><span>${props.total}</span></div>
            <div className='flex justify-between'><span>Delivery Fee</span><span>{deliveryOrders.length > 0 ? `$${deliveryInfo?.shipping}`:'Free'}</span></div>
            <hr className='border-[rgba(0,0,0,0.08)]' />
            <div className='flex justify-between p-2'><span>Order Total</span><span className='text-2xl'>-</span></div>
            <button type="button" onClick={e=>handleCartToCheckout(e)} className='px-4 py-3 flex gap-2 justify-center text-xs rounded-lg bg-b3 text-white font-semibold'>
                <span>
                 Proceed to Checkout
                </span>
                <AiOutlineArrowRight className='text-base' />
            </button>
        </div>
    )
}

export default Checkout