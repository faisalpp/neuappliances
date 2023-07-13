import React from 'react';
import Checkout from './Checkout';
import BreadCrumb from '../../components/Checkout/BreadCrumb';
import ReviewDetail from '../../components/Checkout/Shipping/ReviewDetail';
import PaymentMethod from '../../components/Checkout/Payment/PaymentMethod';
import LeftArrowSvg from '../../svgs/LeftArrowSvg';
import { Link } from 'react-router-dom';

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
            </Checkout>
        </>
    )
}

export default Payment