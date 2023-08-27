import { AiOutlineShoppingCart, AiOutlineLogin, AiOutlineLogout, AiFillHome, AiFillGift } from 'react-icons/ai';
import { IoMenu, IoCloseOutline } from 'react-icons/io5';
import { CgSmartHomeWashMachine } from 'react-icons/cg';
import { FaBandcamp } from 'react-icons/fa'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { GiReceiveMoney } from 'react-icons/gi'
import { BsFillChatSquareHeartFill } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { showSCart, hideSCart } from '../../store/cartSlice'
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {

  const [mobMenu, setMobMenu] = useState(false);
  const [dealMenu, setDealMenu] = useState(false);
  const [productMenu, setProductMenu] = useState(false);
  const [brandMenu, setBrandMenu] = useState(false);
  const sCart = useSelector((state) => state.cart.sCart)

  const dispatch = useDispatch()

  return (
    <>
      <div className='lg:hidden flex justify-between bg-b1 text-white py-4 px-4 md:px-10' >
        <img src="/neu.png" className='w-32' alt='neuappliance' />
        {/* <div className='col-start-5 col-end-9 flex items-center bg-white h-10 px-2 rounded-lg space-x-2 w-full ' ><AiOutlineSearch className='text-black' /><input type="text" placeholder='Search for appliances' className="w-full text-[10px] text-black outline-none" /></div> */}
        <div className='space-x-4 flex items-center justify-end' >
          <div onClick={() => { sCart ? dispatch(hideSCart()) : dispatch(showSCart()) }} className='relative items-center px-2 bg-b2 py-2 h-fit w-fit rounded-full text-white' ><AiOutlineShoppingCart /><span className='absolute -top-2 ml-2 bg-b3 rounded-full text-[8px] py-[3px] px-[7px] text-center' >2</span></div>
          {/* <div className='flex items-center px-2 py-2 bg-b2 h-fit w-fit rounded-full text-white' ><BiUserCircle /></div>   */}
          {mobMenu ? <div onClick={() => setMobMenu(false)} className='flex items-center px-2 py-2 bg-b2 h-fit w-fit rounded-full text-white' ><IoCloseOutline className='text-white' /></div> : <div onClick={() => setMobMenu(true)} className='flex items-center px-2 py-2 bg-b2 h-fit w-fit rounded-full text-white' ><IoMenu /></div>}
        </div>
      </div>

      <div style={{ height: `calc(100vh - 145px)` }} className={`${mobMenu ? 'fixed' : 'hidden'} lg:hidden right-0 bg-b1 w-2/3 overflow-y-scroll py-5 z-50`}>
        <div className='flex flex-col px-5 space-y-5 mt-2'>
          <NavLink to="/" ><div className='flex items-center bg-b2 rounded-md py-2 px-3 space-x-5 text-white' ><BiUserCircle className='text-2xl' /><h4>My Account</h4></div></NavLink>
          <NavLink to="/" ><div className='flex items-center bg-b2 rounded-md py-2 px-3 space-x-5 text-white' ><AiFillHome className='text-2xl' /><h4>Home</h4></div></NavLink>
          {/* Home Menu */}
          <div className='lg:hidden flex flex-col mt-2'>
            {/* Deals Menu Btn */}
            {dealMenu ? <div onClick={() => setDealMenu(false)} className='flex items-center bg-b2 rounded-md py-2 px-3 space-x-16 text-white' ><div className='flex items-center space-x-5' ><AiFillGift className='text-2xl' /><h4>Deals</h4></div><RiArrowDropUpLine className='text-2xl' /></div> : <div onClick={() => setDealMenu(true)} className='flex items-center bg-b2 rounded-md py-2 px-3 space-x-16 text-white' ><div className='flex items-center space-x-5' ><AiFillGift className='text-2xl' /><h4>Deals</h4></div><RiArrowDropDownLine className='text-2xl' /></div>}
            {/* Deals Menu Drop Down */}
            <div className={`${dealMenu ? 'flex' : 'hidden'} flex-col mt-5 space-y-2`}>
              <div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>Recent Arrivals</h3></div>
              <div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>4 Stars Products</h3></div>
              <div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>3 Stars Products</h3></div>
              <div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>5 Stars Products</h3></div>
            </div>
          </div>
          {/* Product Menu */}
          <div className='lg:hidden flex flex-col mt-2'>
            {/* Deals Menu Btn */}
            {productMenu ? <div onClick={() => setProductMenu(false)} className='flex items-center bg-b2 rounded-md py-2 px-3 space-x-10 text-white' ><div className='flex items-center space-x-5' ><CgSmartHomeWashMachine className='text-2xl' /><h4>Products</h4></div><RiArrowDropUpLine className='text-2xl' /></div> : <div onClick={() => setProductMenu(true)} className='flex items-center bg-b2 rounded-md py-2 px-3 space-x-10 text-white' ><div className='flex items-center space-x-5' ><CgSmartHomeWashMachine className='text-2xl' /><h4>Products</h4></div><RiArrowDropDownLine className='text-2xl' /></div>}
            {/* Deals Menu Drop Down */}
            <div className={`${productMenu ? 'flex' : 'hidden'} flex-col mt-5 space-y-2`}>
              <NavLink to="/products" ><div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>Refrigerators</h3></div></NavLink>
              <NavLink to="/products" ><div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>Washer & Dryers</h3></div></NavLink>
              <NavLink to="/products" ><div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>Ranges</h3></div></NavLink>
              <NavLink to="/products" ><div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>Dishwasher</h3></div></NavLink>
              <NavLink to="/products" ><div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>Microwaves</h3></div></NavLink>
              <NavLink to="/products" ><div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>All Categories</h3></div></NavLink>
            </div>
          </div>
          {/* Brands Menu */}
          <div className='lg:hidden flex flex-col mt-2'>
            {/* Brands Menu Btn */}
            {brandMenu ? <div onClick={() => setBrandMenu(false)} className='flex items-center bg-b2 rounded-md py-2 px-3 space-x-14 text-white' ><div className='flex items-center space-x-5' ><FaBandcamp className='text-2xl' /><h4>Brands</h4></div><RiArrowDropUpLine className='text-2xl' /></div> : <div onClick={() => setBrandMenu(true)} className='flex items-center bg-b2 rounded-md space-x-14 py-2 px-3 text-white' ><div className='flex items-center space-x-5' ><FaBandcamp className='text-2xl' /><h4>Brands</h4></div><RiArrowDropDownLine className='text-2xl' /></div>}
            {/* Brands Menu Drop Down */}
            <div className={`${brandMenu ? 'flex' : 'hidden'} flex-col mt-5 space-y-2`}>
              <div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>Refrigerators</h3></div>
              <div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>Washer & Dryers</h3></div>
              <div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>Ranges</h3></div>
              <div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>Dishwasher</h3></div>
              <div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>Microwaves</h3></div>
              <div className='border-l-2 border-white rounded-lg px-5 bg-b2 py-2 text-white'><h3>All Categories</h3></div>
            </div>
          </div>

          <NavLink to="/" ><div className='flex items-center bg-b2 rounded-md py-2 px-3 space-x-5 text-white' ><GiReceiveMoney className='text-2xl' /><h4>Financing</h4></div></NavLink>
          <NavLink to="/" ><div className='flex items-center bg-b2 rounded-md py-2 px-3 space-x-5 text-white' ><BsFillChatSquareHeartFill className='text-2xl' /><h4>Testimonaials</h4></div></NavLink>
          <NavLink to="/" ><div className='flex items-center bg-b2 rounded-md py-2 px-3 space-x-5 text-white' ><AiOutlineLogin className='text-2xl' /><h4>Login</h4></div></NavLink>
          <NavLink to="/" ><div className='flex items-center bg-b2 rounded-md py-2 px-3 space-x-5 text-white' ><AiOutlineLogout className='text-2xl' /><h4>Logout</h4></div></NavLink>
        </div>
      </div>


    </>
  )
}

export default Navbar