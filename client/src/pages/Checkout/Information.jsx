import React from 'react';
import { RiQuestionFill } from 'react-icons/ri';
import CustomInput from '../../components/Reusable/CustomInput';
import { Checkbox } from "@material-tailwind/react";
import Checkout from './Checkout';
import UpdateButton from '../../components/Checkout/UpdateButton';
import BreadCrumb from '../../components/Checkout/BreadCrumb';
import CustomSelect from '../../components/Reusable/CustomSelect';

const Information = () => {
    const Countrys = [
        { name: 'Canada', value: 'canada' },
        { name: 'China', value: 'china' },
        { name: 'Japan', value: 'japan' },
        { name: 'Pakistan', value: 'pakistan' }
    ]
    const Province = [
        { name: 'Alberta', value: 'alberta' },
        { name: 'Alberta', value: 'alberta' },
        { name: 'Alberta', value: 'alberta' },
        { name: 'Alberta', value: 'alberta' }
    ]

    return (
        <>
            <Checkout>
                {/* Logo */}
                <img src="login_logo.png" alt="" />
                {/* Bread Crumbs Start */}
                <BreadCrumb />
                {/* Bread Crumbs End */}

                <fieldset className='border border-b31 rounded-md pb-5 px-5 pt-2'>
                    <legend className='mx-auto text-b16 font-medium text-sm px-3'>Express checkout</legend>
                    <div className='grid grid-cols-3 gap-2'>
                        <button className='rounded text-white flex justify-center p-3 bg-[#5A31F4]'>
                            <img src="/payment/shoppay.png" alt="shoppay" className='h-[23px] object-contain' />
                        </button>
                        <button className='rounded text-white flex justify-center p-3 bg-[#113984]'>
                            <img src="/payment/paypal.png" alt="shoppay" className='h-[23px] object-contain' />
                        </button>
                        <button className='rounded text-white flex justify-center p-3 bg-black'>
                            <img src="/payment/pay.png" alt="shoppay" className='h-[23px] object-contain' />
                        </button>
                    </div>
                </fieldset>
                {/* Bread Crumbs End */}
                <div className='text_between_line my-8'>OR</div>
                {/* Conatct Information */}
                <div className='space-y-14px [&>*]:text-b16 [&>*]:text-sm'>
                    <h3 className='text-sm font-medium text-b16'>Contact information</h3>
                    <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="Email" type="email" />
                    <Checkbox id='keep-me-update' label="Keep me up to date on news and exclusive offers" className='checked:bg-black border-b31' ripple={false} />
                </div>
                {/* Shipping */}
                <div className='space-y-14px mt-8'>
                    <h3 className='text-lg font-medium text-b16'>Shipping address</h3>
                    <div className='grid grid-cols-2 gap-3'>
                        <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="First name (optional)" />
                        <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="Last name" />
                        <div className="col-span-2 space-y-3">
                            <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="Address" />
                            <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="Apartment, suite, etc. (optional)" />
                            <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="City" />
                            <div className='grid grid-cols-2 md:grid-cols-3 gap-14px'>
                                <CustomSelect id="country_region" label="Country / region" Options={Countrys} />
                                <CustomSelect id="province" label="Province" Options={Province} />
                                <div className='col-span-2 md:col-span-1 [&>*]:h-full'>
                                    <CustomInput colorStyle="border-b31 placeholder:text-b25  md:h-full" placeholder="Postal Code" type="number" />
                                </div>
                            </div>
                            <div className='relative'>
                                <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="Phone" />
                                <div className='absolute right-3 top-2'>
                                    <RiQuestionFill className='text-2xl text-b3' />
                                </div>
                            </div>
                            <div className='[&>*]:text-b16 [&>*]:text-sm'>
                                <Checkbox id='save-information' label="Save this information for next time" className='checked:bg-black border-b31' ripple={false} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Next Step */}
                <UpdateButton prevTitle="Cart" nextTitle="Shipping" prevLink="/mycart" nextLink="/mycart/shipping" />
            </Checkout>
        </>
    )
}

export default Information