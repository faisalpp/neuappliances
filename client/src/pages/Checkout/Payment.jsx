import React,{useState} from 'react';
import Checkout from './Checkout';
import BreadCrumb from '../../components/Checkout/BreadCrumb';
import ReviewDetail from '../../components/Checkout/Shipping/ReviewDetail';
import PaymentMethod from '../../components/Checkout/Payment/PaymentMethod';
import LeftArrowSvg from '../../svgs/LeftArrowSvg';
import { Link ,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ChkLoader from '../../components/Loader/chkLoader';
import {setPayment} from '../../store/orderSlice'

const Payment = () => {

    const [isLoading,setLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    
    const deliveryOrders = useSelector((state)=>state.cart.deliveryOrders)
    const pickupOrders = useSelector((state)=>state.cart.pickupOrders)

    if(deliveryOrders.length === 0 && pickupOrders.length === 0){
         navigate('/mycart')
    }

    const {email,address,postalCode,city,country,province} = useSelector((state)=>state.order.orderInfo)
    const shippingInfo = useSelector((state)=>state.order.shippingInfo)

    const handlePaymentMethod = (data) => {
      dispatch(setPayment(data))
    }

    return (
        <>  {isLoading ? <ChkLoader /> :
            <Checkout>
                {/* Logo */}
                <img src="login_logo.webp" alt="" />
                {/* Bread Crumbs Start */}
                <BreadCrumb />
                {/* Bread Crumbs End */}

                {/* Shipping */}

                <div className='border border-b31 p-3 flex flex-col gap-3 rounded-md'>
                    <ReviewDetail title="Contact" detail={email} textStyle="font-medium" />
                    <hr />
                    <ReviewDetail title="Ship to" detail={`${address},${city} ,${province}, ${country},${postalCode}`} textStyle="font-medium" />
                    <hr />
                    <ReviewDetail title="Method" detail={`${shippingInfo.title} · $${shippingInfo.price}`} subtitle={shippingInfo.days} textStyle="font-medium" />
                </div>

                {/* Payment Method */}

                <PaymentMethod />


                {/* Payment Step */}
                <div className='flex justify-between items-center w-full mt-5'>
                    <Link to="/mycart/shipping" className='flex gap-1 items-center'>
                        <LeftArrowSvg />
                        <span className='text-sm font-medium text-b3'>
                            Return to shipping
                        </span>
                    </Link>
                    <Link to="" className='py-3 px-6 text-xs rounded-lg bg-b3 text-white' type='button'>
                        Pay Now
                    </Link>
                </div>
            </Checkout>}
        </>
    )
}

export default Payment