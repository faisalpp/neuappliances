import React from 'react';
import CustomInput from '../../components/Reusable/CustomInput';
import CartCard from '../../components/Checkout/CartCard';
import { HiOutlineTruck } from 'react-icons/hi';

const Cart = () => {

    return (
        <>
            <div className='max-w-full w-full h-full px-4 sm:px-11 py-14 bg-[#F9F9F9]'>
                <div className='max-w-[418px] 3xl:max-w-xl mr-auto w-full flex flex-col gap-5'>
                    <div className='flex w-full flex-col gap-6 bg-white px-4 sm:px-6 py-4'>
                        <CartCard />
                        <CartCard />
                        <CartCard />
                        <div className='border border-b31 text-b32 flex gap-2 items-center p-4 text-sm'>
                            <HiOutlineTruck className='text-xl text-b25 rounded-lg' />
                            <span>
                                Delivering To 78626
                            </span>
                        </div>
                    </div>
                    <div className='bg-white px-6 py-4 flex flex-col gap-5'>
                        <CartCard />
                        <div className='border border-b31 text-b32 flex gap-2 items-center p-4 text-sm'>
                            <img src="/svgs/Pick-up.png" alt="Pick-up" />
                            <span>
                                Pick up in store Georgetown, Tx.
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
                                $120.00
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
                                $5.00
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
                                $125.00
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart