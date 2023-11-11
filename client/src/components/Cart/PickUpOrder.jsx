import React from 'react';
import CartCard from './CartCard';
import { useSelector,useDispatch } from 'react-redux';
import { Radio, Typography } from "@material-tailwind/react";
import RadioSvg from '../../svgs/RadioSvg';
import ShipmentSvg from '../../svgs/ShipmentSvg';
import PickUpSvg from '../../svgs/PickUpSvg';
import {ChangeCartItemType,resetCart} from '../../store/cartSlice'
import Toast from '../../utils/Toast'
import { resetOrder } from '../../store/orderSlice';

const PickUpOrder = ({orders,refresh}) => {

    const orderInfo = useSelector((state)=>state.cart?.cart.orderInfo)

    const dispatch = useDispatch()

    const handlePickupChange = async (e) => {
        if(e.target.checked){
            const data = {cartId:cartId,orderInfo:{type:'pickup',location:'Georgetown, Tx',shipping:'Free'}};
            const res = await dispatch(ChangeCartItemType(data))
            if(res.payload.status === 200){
                refresh()
                Toast(res.payload.msg,'success',1000)
               }else if(res.payload.status === 404) {
                 dispatch(resetCart())
                 dispatch(resetOrder())
                Toast(res.payload.message,'error',1000)
               }else{
                Toast(res.payload.message,'error',1000)
               }
        }
      }

      const handleDeliveryChange = async (e) => {
        if(e.target.checked){
            const data = {cartId:cartId,orderInfo:{type:'delivery',location:'73301',shipping:45}};
            const res = await dispatch(ChangeCartItemType(data))
            if(res.payload.status === 200){
                refresh()
                Toast(res.payload.msg,'success',1000)
               }else if(res.payload.status === 404) {
                 dispatch(resetCart())
                 dispatch(resetOrder())
                Toast(res.payload.message,'error',1000)
               }else{
                Toast(res.payload.message,'error',1000)
               }
        }
      }

    return (
        <div className='border border-b26 rounded p-5 md:p-10 grid grid-cols-1 gap-8'>
            <h2 className='text-b16 font-bold text-xl'>Pickup Orders</h2>
            {orders.map((item,indx)=><CartCard key={indx} indx={indx} order={item} type="pickup" changeType={refresh} />)}
            <div className='w-full border border-[#D9D9D9] p-4 rounded-lg flex justify-between items-center'>
            <div className='flex' > 
             <div className='flex gap-2 items-center'>
              <span className='w-[18px] h-[18px]'><img src="/svgs/Pick-up.webp" alt="Pick-up" /></span>
              <span className='text-sm text-[#545454] pr-3'>{orderInfo.location}</span>
             </div>
             <div className="flex border-l-[1px]">
              <Radio id={`delivery1`} icon={<RadioSvg className="w-[18px] h-[18px]" />} className='border border-[#D9D9D9] bg-white p-0 w-[18px] h-[18px]' ripple={false} name={`delivery-1`} label={
                  <Typography className="font-medium text-sm text-b16 flex gap-4"><ShipmentSvg /><span>Delivery</span></Typography>
              } defaultChecked={orderInfo.type === 'delivery' ? true : false} onChange={(e)=>handleDeliveryChange(e)} />
              <Radio id={`pickup-1`} icon={<RadioSvg className="w-[18px] h-[18px]" />} className='border border-[#D9D9D9] bg-white w-[18px] h-[18px] p-0' ripple={false} name={`delivery-1`} label={
               <Typography className="font-medium text-sm text-b16 flex gap-4"><PickUpSvg /><span>Pickup</span></Typography>
              } defaultChecked={orderInfo.type === 'pickup' ? true : false} onChange={(e)=>handlePickupChange(e)} />
             </div>
             </div>
             <div className='leading-[-0.2px] text-sm text-b3'>Free</div>
            </div>
        </div>
    )
}

export default PickUpOrder