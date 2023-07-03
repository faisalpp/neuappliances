import React from 'react';
import { RiArrowDropRightLine, RiQuestionFill } from 'react-icons/ri';
import CustomInput from '../../components/Reusable/CustomInput';
import { Checkbox } from "@material-tailwind/react";
import LeftArrowSvg from '../../svgs/LeftArrowSvg';
import { Link } from 'react-router-dom';
import CartCard from '../../components/Checkout/CartCard';
import { HiOutlineTruck } from 'react-icons/hi';

const Checkout = () => {

    return (
        <>
            <div className='grid grid-cols-1 justify-center items-center w-full h-full'>
                <div className='flex w-full h-full'>
                    <div className='pr-16 pt-14 pb-52 h-full grow w-full bg-white max-w-[808px]'>
                        <div className='max-w-[572px] w-full ml-auto'>
                            {/* Logo */}
                            <img src="login_logo.png" alt="" />
                            {/* Bread Crumbs Start */}
                            <div className='flex items-center my-4' >
                                <h5 className='text-xs text-b3 font-medium'>Cart</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-b17 font-medium' >Information</h5>
                                <RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-b17' >Shipping</h5>
                                <RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-b17' >Payment</h5>
                            </div>

                            <fieldset className='border border-b31 rounded-md pb-5 px-5 pt-2'>
                                <legend className='mx-auto text-b16 font-medium text-sm px-3'>Express checkout</legend>
                                <div className='grid grid-cols-3 gap-2'>
                                    <div className='rounded text-white flex justify-center p-3 bg-[#5A31F4]'>
                                        Shop
                                    </div>
                                    <div className='rounded text-white flex justify-center p-3 bg-[#113984]'>
                                        Shop
                                    </div>
                                    <div className='rounded text-white flex justify-center p-3 bg-black'>
                                        Shop
                                    </div>
                                </div>
                            </fieldset>
                            {/* Bread Crumbs End */}
                            <div className='text_between_line my-8'>OR</div>
                            {/* Conatct Information */}
                            <div className='space-y-[14px] [&>*]:text-b16 [&>*]:text-sm'>
                                <h3 className='text-sm font-medium text-b16'>Contact information</h3>
                                <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="Email" type="email" />
                                <Checkbox id='keep-me-update' label="Keep me up to date on news and exclusive offers" className='checked:bg-black border-b31' ripple={false} />
                            </div>
                            {/* Shipping */}
                            <div className='space-y-[14px] mt-8'>
                                <h3 className='text-sm font-medium text-b16'>Shipping address</h3>
                                <div className='grid grid-cols-2 gap-3'>
                                    <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="First name (optional)" />
                                    <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="Last name" />
                                    <div className="col-span-2 space-y-3">
                                        <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="Address" />
                                        <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="Apartment, suite, etc. (optional)" />
                                        <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="City" />
                                        <div className='relative'>
                                            <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="Phone" />
                                            <div className='absolute right-3 top-2'>
                                                <RiQuestionFill className='text-2xl text-b3' />
                                            </div>
                                        </div>
                                        <div className='[&>*]:text-b16 [&>*]:text-sm'>
                                            <Checkbox id='save-information' label="Save this information for next time" className='checked:bg-black border-b31' ripple={false} />
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <Link to="/mycart" className='flex gap-1 items-center'>
                                                <LeftArrowSvg />
                                                <span className='text-sm font-medium text-b3'>
                                                    Return to cart
                                                </span>
                                            </Link>
                                            <button className='py-3 px-6 text-xs rounded-lg bg-b3 text-white' type='button'>
                                                Continue to shipping
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-full w-full h-full px-11 py-14 bg-[#F9F9F9]'>
                        <div className='max-w-[418px] mr-auto w-full flex flex-col gap-5'>
                            <div className='flex w-full flex-col gap-6 bg-white px-6 py-4'>
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
                                    <img src="svgs/Pick-up.png" alt="Pick-up" />
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
                </div>
            </div>
        </>
    )
}

export default Checkout