import React,{useState,useEffect} from 'react';
import Checkout from './Checkout';
import UpdateButton from '../../components/Checkout/UpdateButton';
import BreadCrumb from '../../components/Checkout/BreadCrumb';
import ReviewDetail from '../../components/Checkout/Shipping/ReviewDetail';
import ShippingMethod from '../../components/Checkout/Shipping/ShippingMethod';
import { useSelector,useDispatch } from 'react-redux';

const Shipping = () => {

    const dispatch = useDispatch()

    const orderInfo = useSelector((state)=>state.order.orderInfo)

    const payments = [
        {_id:1,title:'Canada Post Expedited Parcel',days:'1 to 7 business days',price:10.00,checked:true},
        {_id:2,title:'Canada Post Xpresspost',days:'1 to 3 business days',price:15.00,checked:false},
        {_id:3,title:'Canada Post Priority',days:'1 to 3 business days',price:20.00,checked:false}
    ]
    
    const [shippingMethod,setShippingMethod] = useState({_id:payments[0]._id,title:payments[0].title,days:payments[0].days,price:payments[0].price,checked:payments[0].checked})
    
    const handlePaymentMethod = (id,title,days,price,checked) => {
        setShippingMethod({_id:id,title:title,days:days,price:price,checked:checked})
    }

    return (
        <>
            <Checkout>
                {/* Logo */}
                <img src="login_logo.webp" alt="" />
                {/* Bread Crumbs Start */}
                <BreadCrumb />
                {/* Bread Crumbs End */}

                {/* Shipping */}

                <div className='border border-b31 p-3 flex flex-col gap-3 rounded-md'>
                    <ReviewDetail title="Contact" detail={orderInfo.email} />
                    <hr />
                    <ReviewDetail title="Ship to" detail={`${orderInfo.address}, ${orderInfo.province}, ${orderInfo.postalCode}, ${orderInfo.country}`} />
                </div>

                {/* Shipping Method */}
                <ShippingMethod state={shippingMethod} data={payments} radioOnChange={handlePaymentMethod} />


                {/* Next Step */}
                <UpdateButton prevTitle="information" nextTitle="payment" prevLink="/mycart/information" nextLink="/mycart/payment" />
            </Checkout>
        </>
    )
}

export default Shipping