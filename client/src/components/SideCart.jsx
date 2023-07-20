import React,{useEffect, useState,useRef} from 'react'
import { AiOutlineArrowRight, AiOutlineClose,AiOutlineShop } from 'react-icons/ai'
import { HiOutlineTruck } from 'react-icons/hi'
import { FaDotCircle } from 'react-icons/fa'
import SideCartCard from './Cart/SideCartCard'
import { useSelector } from 'react-redux';
import {GoPrimitiveDot} from 'react-icons/go'
import SelectTimeSlot from './Cart/SelectTimeSlot'
import {getCart,removeFromCart} from '../api/cart'
import { resetUser } from "../store/userSlice";
import { setPickupLocation } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {BsCart3} from 'react-icons/bs'

const SideCart = ({ sCart, setSCart }) => {
  const cartCount = useSelector((state)=>state.cart.cartCount)
  const userId = useSelector((state)=>state.user._id)
  const deliveryLocation = useSelector((state)=>state.cart.deliveryLocation)
  const [pickupOrders,setPickupOrders] = useState([]);
  const [deliveryOrders,setDeliveryOrders] = useState([]);
  const [cartId,setCartId] = useState(null);
  const pickupLocation = useSelector((state)=>state.cart.pickupLocation)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();


  // Cart Time Slot Functions
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

  // Select Time Slot Data 
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlot,setTimeSlot] = useState('')
  // Zip Code Location
  const [zip,setZip] = useState(deliveryLocation)

  // checkout loader
  const [chkLoader,setChkLoader] = useState(false)
  
  const UpdateCart = () => {
    // 
  }

  useEffect(()=>{
    const currentDateMonth = new Date();
     const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
     const currentMonthName = monthNames[currentDateMonth.getMonth()]
     // Create a new Date object
     const currentDate = new Date();
     // Get the current date
     const currentDay = currentDate.getDate();
     setTimeSlot(`${currentMonthName} ${currentDate} - 8am - 12am`)
  },[])

  const GetCart = async () => {
    const res = await getCart({userId})
    if(res.status === 200){
        setPickupOrders(res.data.cart[0].pickupOrders)
        setDeliveryOrders(res.data.cart[0].deliveryOrders)
        setZip(res.data.cart[0].deliveryLocation)
        setCartId(res.data.cart[0]._id)
        console.log(res.data.cart)
        console.log(res.data.cart[0].deliveryOrders)
    }else if (res.code === 'ERR_BAD_REQUEST'){
      dispatch(resetUser());
      toast.error('Session Expired!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate('/');
    } else {
      toast.error(res.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  useEffect(()=>{
    if(sCart){
      GetCart()
    }
  },[sCart])

  const RemoveFromCart = async (e,proId,type) => {
    e.preventDefault()
    const data = {pId:proId,cartId,type}
    const res = await removeFromCart(data)
    console.log(data)
    if(res.status === 200){
      toast.success("Product Removed From Cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      GetCart()
    }else if (res.code === 'ERR_BAD_REQUEST'){
      dispatch(resetUser());
      toast.error('Session Expired!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate('/');
    } else {
      toast.error(res.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  


  return (
    <div className={` ${sCart ? 'fixed' : 'hidden'} top-0 z-[999] bg-black/60 w-full h-screen`} >

      <div className={` ${sCart ? 'flex' : 'hidden'} flex-col float-right bg-white overflow-y-auto max-w-[420px] w-full h-screen`} >
        <div className='flex items-center  py-5 px-6 justify-between' ><div className='flex items-center gap-x-3' ><h4>My Cart</h4>{pickupOrders.length === 0 && deliveryOrders.length === 0 ? null : <span className='bg-b3 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center' >{cartCount}</span>}</div><div className='flex items-center justify-end' ><AiOutlineClose onClick={() => setSCart(false)} className='cursor-pointer' /></div></div>
       {pickupOrders.length === 0 && deliveryOrders.length === 0 ? 
       <div className='flex flex-col space-y-5 w-full justify-center items-center h-full' >
        <img src="/bag.png" />
        <h1 className='font-extrabold' >Your Cart is Empty</h1>
        <h2 className='text-center' >Lorem Ipsum Doller Sit Amet, Consecture Audipicsing Elit</h2>
        <button type='button' className='flex items-center justify-center rounded-lg bg-b3 py-3 text-white font-medium w-1/2 text-sm'><BsCart3 className='mr-2'/> Start Shopping</button>
       </div> 
       : 
       <>
       <div style={{'height':'calc(100vh - 200px)'}} className='flex flex-col overflow-y-scroll' >
        {deliveryOrders.length > 0  ? <div className='flex flex-col rounded-lg px-6 py-5 mx-5 mb-5 border border-gray-200 ' >
          <h4 className='font-semibold' >Delivery Orders</h4>
          {/* Cart Product */}
          <div className='flex flex-col gap-6 space-y-2 mb-3 w-full'>
            {deliveryOrders.map((item,index)=> <SideCartCard key={index} item={item} RemoveFromCart={RemoveFromCart} type="delivery" />)}
          </div>
          {/* Cart Product End */}

          <div className='border flex flex-col gap-4 lg:mt-0 mt-3 border-gray-200 rounded-md py-3 px-3' >
            <div className='flex items-center justify-between' >
              <div className='flex items-center space-x-1' ><FaDotCircle className='text-b3' /><HiOutlineTruck className='text-2xl' />
                <h4 className='text-sm font-medium' >Delivering To</h4>
              </div>
              <h4 className='text-b3 font-semibold' >$80</h4>
            </div>
            <input type="text" value={zip} onChange={setZip} className='border border-b14 p-[10px] rounded-lg outline-none w-full' />
            <div ref={dropdownRef} className='relative'>
                <button onClick={toggleDropdown} className='w-full rounded-lg flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <span className='w-[18px] h-[18px]'>
                            <img src="/svgs/calendar_month.png" alt="calendar_month" />
                        </span>
                        <span className='text-xs font-medium text-b3'>
                            Select Time-slot
                        </span>
                    </div>
                </button>
                {isOpen && (
                  <SelectTimeSlot timeSlot={timeSlot} setTimeSlot={setTimeSlot} selectDate={selectedDate} setSelectDate={setSelectedDate} />
                  )}

            </div>

          </div>

        </div>:null}

        {pickupOrders.length > 0 ? <div className='flex flex-col rounded-lg px-6 py-5 mx-5 mb-5 border border-gray-200 ' >
          <h4 className='font-semibold' >Pickup Orders</h4>
          {/* Cart Product */}
          <div className='flex flex-col gap-6 space-y-2 mb-3'>
            {pickupOrders.map((item,index)=> <SideCartCard key={index} item={item} RemoveFromCart={RemoveFromCart} type="pickup" />)}
          </div>
          {/* Cart Product End */}

          <div className='border flex flex-col lg:mt-0 mt-3 border-gray-200 rounded-md py-3 px-1' >
            <div className='flex flex-col space-y-2' >
             
              <div className='flex items-center px-2 space-x-2' >
                <div className='flex' ><span onClick={() => dispatch(setPickupLocation('Georgetown Warehouse'))} className={`px-[2px] py-[2px] rounded-full cursor-pointer ${pickupLocation === 'Georgetown Warehouse' ? 'bg-b6/20' : 'bg-gray-100'} `} ><GoPrimitiveDot className={` ${pickupLocation === 'Georgetown Warehouse' ? 'text-b6' : 'text-gray-200'} `} /></span></div>
                <AiOutlineShop className='text-3xl text-gray-400' />
                <h4 className='text-sm font-normal text-gray-400 w-full' >Pickup in the store Georgetown Warehouse</h4>
                <h4 className='text-sm font-normal text-gray-400' >Free</h4>
              </div>
              <div className='flex items-center px-2 pt-2 space-x-2 border-t-[1px] border-gray-200' >
                <div className='flex' ><span onClick={() => dispatch(setPickupLocation('Austin, Tx'))} className={`px-[2px] py-[2px] rounded-full cursor-pointer ${pickupLocation === 'Austin, Tx' ? 'bg-b6/20' : 'bg-gray-100'} `} ><GoPrimitiveDot className={` ${pickupLocation === 'Austin, Tx' ? 'text-b6' : 'text-gray-200'} `} /></span></div>
                <AiOutlineShop className='text-3xl text-gray-400' />
                <h4 className='text-sm font-normal text-gray-400 w-full' >Pickup in the store Austin, Tx</h4>
                <h4 className='text-sm font-normal text-gray-400' >Free</h4>
              </div>
            </div>
            
            
          </div>

        </div>:null}
        </div>
        <div className=' border-t border-gray-300 p-6 flex flex-col justify-end gap-6'>
          <div className='flex justify-between'>
            <span className='text-sm'>
              Order Total
            </span>
            <span className='font-bold'>
              $20
            </span>
          </div>

          <button type='button' onClick={UpdateCart} className='text-xs text-white rounded-lg bg-b3 px-4 py-3 flex gap-2 justify-center'>
            Proceed to Checkout
            <AiOutlineArrowRight className='text-base' />
            {chkLoader ? <img src="/loader-bg.gif" className='w-4 h-4' />:null}
          </button>
        </div></>}

      </div>

    </div>
  )
}

export default SideCart