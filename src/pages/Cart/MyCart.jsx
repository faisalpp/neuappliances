import React from 'react';
import MainLayout from '../../layout/MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';
import Checkout from '../../components/Cart/Checkout';
import DeliveryOrder from '../../components/Cart/DeliveryOrder';
import PickUpOrder from '../../components/Cart/PickUpOrder';

const MyCart = () => {

    return (
        <>
            <MainLayout>
                {/* Bread Crumbs Start */}
                <div className='pt-10 pb-10 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    <div className='flex items-center' ><h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-[#5E5E5E]' >Cart</h5></div>
                    <h1 className='text-b18 font-bold text-40px mt-4'>
                        My Cart
                    </h1>
                </div>

                <div className='pb-10 lg:pb-16 xl:pb-20 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                    <div className='grid grid-cols-1 coxxl:grid-cols-[1fr_360px] 3xl:grid-cols-[1fr_440px] gap-10'>
                        <div>
                            <DeliveryOrder />
                            <PickUpOrder />
                            <hr className='my-6 border-[rgba(0,0,0,0.08)]' />
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-base sm:text-xl text-black font-semibold'>
                                    Subtotal (4 Items):
                                </span>
                                <div className='text-2xl sm:text-32px font-semibold'>
                                    $2,279.00
                                </div>
                            </div>
                        </div>
                        <div>
                            <Checkout />
                        </div>
                    </div>
                </div>

            </MainLayout>
        </>
    )
}

export default MyCart