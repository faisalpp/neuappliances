import React from 'react';
import Checkout from './Checkout';
import UpdateButton from '../../components/Checkout/UpdateButton';
import BreadCrumb from '../../components/Checkout/BreadCrumb';
import ReviewDetail from '../../components/Checkout/Shipping/ReviewDetail';
import ShippingMethod from '../../components/Checkout/Shipping/ShippingMethod';

const Shipping = () => {

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
                    <ReviewDetail title="Contact" detail="name@example.com" />
                    <hr />
                    <ReviewDetail title="Ship to" detail="151 O’Connor St Ground floor, Ottawa ON K2P 2L8, Canada" />
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