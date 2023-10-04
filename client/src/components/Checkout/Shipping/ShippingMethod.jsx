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

const ShippingMethod = ({data,radioOnChange,state}) => {

    const shippingInfo = useSelector((state)=>state.order.shippingInfo)

    return (
        <div className='space-y-14px mt-8'>
            <h3 className='text-lg font-medium text-b16'>Shipping method</h3>
            <div className='[&>*]:border-b [&>*]:border-b31 [&>*:last-child]:border-0 border border-b31 rounded-md'>
             {data && data.map((item,index)=><>
                 <ShippingRadio key={index} handleChange={radioOnChange} id={item._id} title={item.title} subtitle={item.days} price={item.price} checked={item._id === shippingInfo._id ? true : false} />
             </>
             )}
            </div>
        </div>

    )
}

export default ShippingMethod