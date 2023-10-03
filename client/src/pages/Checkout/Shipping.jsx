import React from 'react';
import Checkout from './Checkout';
import UpdateButton from '../../components/Checkout/UpdateButton';
import BreadCrumb from '../../components/Checkout/BreadCrumb';
import ReviewDetail from '../../components/Checkout/Shipping/ReviewDetail';
import ShippingMethod from '../../components/Checkout/Shipping/ShippingMethod';
import { useSelector } from 'react-redux';

const Shipping = () => {

    const email = useSelector((state)=>state.order.email)
    const address = useSelector((state)=>state.order.address)
    const province = useSelector((state)=>state.order.province)
    const country = useSelector((state)=>state.order.country)

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
                    <ReviewDetail title="Contact" detail={email} />
                    <hr />
                    <ReviewDetail title="Ship to" detail={`${address}, ${province}, ${country}`} />
                </div>

                {/* Shipping Method */}
                <ShippingMethod />


                {/* Next Step */}
                <UpdateButton prevTitle="information" nextTitle="payment" prevLink="/mycart/information" nextLink="/mycart/payment" />
            </Checkout>
        </>
    )
}

export default Shipping