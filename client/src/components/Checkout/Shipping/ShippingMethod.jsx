import React from 'react'
import { Radio, Typography } from "@material-tailwind/react";
import RadioSvg from '../../../svgs/RadioSvg';
import { useSelector } from 'react-redux';

const ShippingRadio = ({ id, title, subtitle, price,checked,handleChange }) => {
    return (
        <div className='flex justify-between w-full gap-3 py-4 px-2'>
            <Radio id={id} onChange={e=>handleChange(id,title,subtitle,price,e.target.checked)} icon={<RadioSvg className="w-[18px] h-[18px]" />} className='border border-[#D9D9D9] bg-white p-0 w-[18px] h-[18px]' ripple={false} name="shipping-method" label={
                <div>
                    <Typography className="font-medium tracking-032 text-sm text-b16">
                        {title}
                    </Typography>
                    <Typography className="text-xs tracking-032 text-b25">
                        {subtitle}
                    </Typography>
                </div>
            } defaultChecked={checked} />
            <div className='text-b16 text-sm font-medium'>
                ${price}
            </div>
        </div>
    )
}

const ShippingMethod = ({radioOnChange}) => {
    const deliveryOrders = useSelector((state)=>state.cart.deliveryOrders)
    const deliveryInfo = useSelector((state)=>state.cart.deliveryInfo)
    const pickupOrders = useSelector((state)=>state.cart.pickupOrders)
    
    return (
        <div className='space-y-14px mt-8'>
            <h3 className='text-lg font-medium text-b16'>Shipping method</h3>
            <div className='[&>*]:border-b [&>*]:border-b31 [&>*:last-child]:border-0 border border-b31 rounded-md'>
             {deliveryOrders?.length > 0  ? <ShippingRadio handleChange={radioOnChange} id="home_delivery" title="Home Delivery" subtitle="1 to 3 Business Days" price={deliveryInfo.shipping} checked={true} />:null}
             {pickupOrders.length > 0 ? <ShippingRadio handleChange={radioOnChange} id="home_delivery" title="Free Pickup" subtitle="Always Ready!" price="Free" checked={true} />:null}
            </div>
        </div>

    )
}

export default ShippingMethod