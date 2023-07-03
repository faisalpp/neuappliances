import React from 'react';
import Checkout from './Checkout';
import UpdateButton from '../../components/Checkout/UpdateButton';
import BreadCrumb from '../../components/Checkout/BreadCrumb';
import ReviewDetail from '../../components/Checkout/Shipping/ReviewDetail';

const Payment = () => {

    return (
        <>
            <Checkout>
                {/* Logo */}
                <img src="login_logo.png" alt="" />
                {/* Bread Crumbs Start */}
                <BreadCrumb />
                {/* Bread Crumbs End */}

                {/* Shipping */}

                <div className='border border-b31 p-3 flex flex-col gap-3 rounded-md'>
                    <ReviewDetail title="Contact" detail="name@example.com" textStyle="font-medium" />
                    <hr />
                    <ReviewDetail title="Ship to" detail="151 O’Connor St Ground floor, Ottawa ON K2P 2L8, Canada" textStyle="font-medium" />
                    <hr />
                    <ReviewDetail title="Method" detail="Canada Post Expedited Parcel · $10.00" subtitle="1 to 7 business days" textStyle="font-medium" />
                </div>

                {/* Shipping Method */}


                {/* Next Step */}
                <UpdateButton prevTitle="information" nextTitle="payment" prevLink="/mycart/shipping" nextLink="/mycart/shipping" />
            </Checkout>
        </>
    )
}

export default Payment