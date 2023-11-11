import React, { useState, useRef, useEffect } from 'react';
import CartCard from './CartCard';
import SelectTimeSlot from './SelectTimeSlot';
import { useDispatch,useSelector } from 'react-redux';
import { GetZipWithSlots } from '../../api/frontEnd'
import { Radio, Typography } from "@material-tailwind/react";
import RadioSvg from '../../svgs/RadioSvg';
import ShipmentSvg from '../../svgs/ShipmentSvg';
import PickUpSvg from '../../svgs/PickUpSvg';
import {ChangeCartItemType, resetCart} from '../../store/cartSlice'
import { resetOrder } from '../../store/orderSlice';
import Toast from '../../utils/Toast'

const DeliveryOrder = ({orders,refresh,loading}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const dispatch = useDispatch()

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const orderInfo = useSelector((state)=>state.cart?.cart.orderInfo)
    const cartId = useSelector((state)=>state.cart?.cart._id)

    const [selectedDate, setSelectedDate] = useState(new Date("2023/05/10"));
    const [frames,setFrames] = useState([])
    const [timeSlot, setTimeSlot] = useState('')
    const [dates, setDates] = useState(null);

    const [zipChange,setZipChange] = useState(false)

    const GetZipSlots = async () => {
        setZipChange(true)
        const res = await GetZipWithSlots({zip:orderInfo.location})
        if (res.status == 200) {
          setZipChange(false)
          let onlyDays = [];
          let timeFrames = [];
          res.data.zip.slots.forEach((item)=>{
            let date = new Date(item.date)
            onlyDays.push(date);
            const monthNames = [
              'January', 'February', 'March', 'April', 'May', 'June', 
              'July', 'August', 'September', 'October', 'November', 'December'
            ];
    
            const currentMonth = date.getMonth();
            const currentDay = date.getDate();
            const currentMonthName = monthNames[currentMonth];
            let frame = `${currentMonthName}`+" "+ `${currentDay+1}`+" "+'-'+" "+`${item.timeframe}`;
            let getTimeFrame = timeFrames.filter((item)=> item.id.day === currentDay && item.id.month+1 === currentMonthName)
            if(getTimeFrame.length > 0){
              timeFrames.push({id:`${getFirstFrame[0].id}`,timeFrame:frame})
            }else{
              timeFrames.push({id:`${currentMonth+1}`+"-"+`${currentDay+1}`,timeFrame:frame})
            }
          })
          setDates(onlyDays)
          setFrames(timeFrames)
        }
      };
    
      useEffect(() => {
        if(orderInfo){
            GetZipSlots();
        }
      }, [])

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
        <div className='border border-b26 rounded p-4 sm:p-5 md:p-10 grid grid-cols-1 gap-8'>
         <h2 className='text-b16 font-bold text-xl maxmd:text-center'>Delivery Orders</h2>
          {orders.map((item,indx)=><CartCard chk={loading} key={indx} indx={indx} order={item} type="delivery" changeType={refresh} />)}
          <div className='w-full border border-[#D9D9D9] p-4 rounded-lg flex justify-between items-center' >
          <div className='flex items-center space-x-5' >
            <div ref={dropdownRef} className='relative '>
                {zipChange?null:<button onClick={toggleDropdown} className='flex w-full '>
                    <div className='flex gap-2 items-center'>
                        <span className='w-[18px] h-[18px]'>
                            <img src="/svgs/calendar_month.webp" alt="calendar_month" />
                        </span>
                        <span className='text-xs font-medium text-b3'>
                            Select Time-slot
                        </span>
                    </div>
                </button>}
                {isOpen && (<SelectTimeSlot frames={frames} timeSlot={timeSlot} setTimeSlot={setTimeSlot} selectDate={selectedDate} setSelectDate={setSelectedDate} dates={dates} />)}            
            </div>
            <div className="flex border-l-[1px]">
              <Radio id={`delivery2`} icon={<RadioSvg className="w-[18px] h-[18px]" />} className='border border-[#D9D9D9] bg-white p-0 w-[18px] h-[18px]' ripple={false} name={`delivery-2`} label={
                  <Typography className="font-medium text-sm text-b16 flex gap-4"><ShipmentSvg /><span>Delivery</span></Typography>
              } defaultChecked={orderInfo.type === 'delivery' ? true : false} onChange={(e)=>handleDeliveryChange(e)} />
              <Radio id={`pickup-2`} icon={<RadioSvg className="w-[18px] h-[18px]" />} className='border border-[#D9D9D9] bg-white w-[18px] h-[18px] p-0' ripple={false} name={`delivery-2`} label={
               <Typography className="font-medium text-sm text-b16 flex gap-4"><PickUpSvg /><span>Pickup</span></Typography>
              } defaultChecked={orderInfo.type === 'pickup' ? true : false} onChange={(e)=>handlePickupChange(e)} />
             </div>
          </div>  

            <div className='font-semibold text-sm text-b3'>
                ${orderInfo?.shipping}
            </div>
          
          </div>  
            
            
        </div>
    )
}

export default DeliveryOrder