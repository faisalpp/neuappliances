import React, { useState, useRef, useEffect } from 'react';
import CartCard from './CartCard';
import SelectTimeSlot from './SelectTimeSlot';
import { useSelector } from 'react-redux';
import { GetZipWithSlots } from '../../api/frontEnd'

const DeliveryOrder = ({orders,refresh,loading}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

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

    const deliveryInfo = useSelector((state)=>state.cart.deliveryInfo)

    const [selectedDate, setSelectedDate] = useState(new Date("2023/05/10"));
    const [frames,setFrames] = useState([])
    const [timeSlot, setTimeSlot] = useState('')
    const [dates, setDates] = useState(null);

    const [zipChange,setZipChange] = useState(false)

    const GetZipSlots = async () => {
        setZipChange(true)
        const res = await GetZipWithSlots({zip:deliveryInfo.location})
        console.log(res)
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
        if(deliveryInfo){
            GetZipSlots();
        }
      }, [])

    return (
        <div className='border border-b26 rounded p-4 sm:p-5 md:p-10 grid grid-cols-1 gap-8'>
            <h2 className='text-b16 font-bold text-xl maxmd:text-center'>Delivery Orders</h2>
             {orders.map((item,indx)=><CartCard chk={loading} key={indx} indx={indx} order={item} type="delivery" changeType={refresh} />)}
            <div ref={dropdownRef} className='relative'>
                {zipChange?null:<button onClick={toggleDropdown} className='w-full border border-[#D9D9D9] p-4 rounded-lg flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <span className='w-[18px] h-[18px]'>
                            <img src="/svgs/calendar_month.webp" alt="calendar_month" />
                        </span>
                        <span className='text-xs font-medium text-b3'>
                            Select Time-slot
                        </span>
                    </div>
                    <div className='font-semibold text-sm text-b3'>
                        ${deliveryInfo?.shipping}
                    </div>
                </button>}
                {isOpen && (
                    <SelectTimeSlot frames={frames} timeSlot={timeSlot} setTimeSlot={setTimeSlot} selectDate={selectedDate} setSelectDate={setSelectedDate} dates={dates} />
                )}

            </div>
        </div>
    )
}

export default DeliveryOrder