import React,{useEffect, useState} from 'react';
import Checkout from './Checkout';
import UpdateButton from '../../components/Checkout/UpdateButton';
import BreadCrumb from '../../components/Checkout/BreadCrumb';
import ReviewDetail from '../../components/Checkout/Shipping/ReviewDetail';
import ShippingMethod from '../../components/Checkout/Shipping/ShippingMethod';
import { useSelector} from 'react-redux';
import Toast from '../../utils/Toast'
import { useNavigate } from 'react-router-dom';

const Shipping = () => {

    const orderInfo = useSelector((state)=>state.order.orderInfo)
    const pickupOrders = useSelector((state)=>state.cart.pickupOrders)
    const deliveryOrders = useSelector((state)=>state.cart.deliveryOrders)
    
    const [shippingMethod,setShippingMethod] = useState({})

    const navigate = useNavigate()
    
    const handlePaymentMethod = (id,title,days,price,checked) => {
        setShippingMethod({_id:id,title:title,days:days,price:price,checked:checked})
    }
    useEffect(()=>{
        if(deliveryOrders?.length === 0 && pickupOrders?.length === 0){
          Toast('Cart is Empty','error',1000)
          navigate('/mycart')
        }
       },[])

    return (
        <>
            <Checkout>
                {/* Logo */}
                <img src="/login_logo.webp" alt="" />
                {/* Bread Crumbs Start */}
                <BreadCrumb />
                {/* Bread Crumbs End */}

                {/* Shipping */}

                <div className='border border-b31 p-3 flex flex-col gap-3 rounded-md'>
                    <ReviewDetail title="Contact" detail={orderInfo?.email} />
                    <hr />
                    <ReviewDetail title="Ship to" detail={`${orderInfo?.address}, ${orderInfo?.province}, ${orderInfo?.postalCode}, ${orderInfo?.country}`} />
                </div>

                {/* Shipping Method */}
                <ShippingMethod state={shippingMethod} radioOnChange={handlePaymentMethod} />


                {/* Next Step */}
                <UpdateButton prevTitle="information" nextTitle="payment" prevLink="/mycart/information" nextLink="/mycart/payment" />
            </Checkout>
        </>
    )
}

export default Shipping