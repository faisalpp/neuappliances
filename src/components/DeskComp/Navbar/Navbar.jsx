import React, { useState } from 'react'
import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {IoMenu} from 'react-icons/io5';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {FiPhone} from 'react-icons/fi';
import {TfiHeadphoneAlt} from 'react-icons/tfi';
import NavDropDown from '../Navbar/NavDropDown';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../../context/GlobalContext';



const Navbar = ({sCart,setSCart}) => {
  const [megMenu,setMegMenu] = useState(false);
  const globel = useContext(AppContext);

  const handleLogout = async () => {
    // 
  }

  return (
    <div className='relative' >
         {/* Navbar Start */}
         <div className="lg:grid hidden grid-cols-12 items-center bg-b1 px-10 py-5" >
         <img className='col-start-1 col-end-3' src="neu.png" alt="logo" />
          <div className='col-start-4 col-end-8 flex items-center bg-white h-10 px-2 rounded-lg space-x-2 w-full ' ><AiOutlineSearch className='text-black' /><input type="text" placeholder='Search for appliances' className="w-full text-xs outline-none" /></div>
          <div className='col-start-9 col-end-13 flex justify-center space-x-2 w-full' >
           <div onClick={()=>{sCart ? setSCart(false) : setSCart(true)}} className='flex items-center cursor-pointer px-2 bg-b2 h-10 w-24 rounded-md text-white' ><AiOutlineShoppingCart /><span className='ml-2 font-reg font-normal text-sm' >Cart</span><span className='ml-2 bg-b3 rounded-full text-xs h-4 w-4 text-center' >2</span></div>  
           <NavLink to="/login" ><div className='flex items-center px-2 bg-b2 h-10 w-32 cursor-pointer rounded-md text-white' ><BiUserCircle /><span className='ml-2 font-reg font-normal text-sm' >My Account</span></div></NavLink> 
           <div onClick={()=>{megMenu ? setMegMenu(false) : setMegMenu(true)}} className='flex items-center cursor-pointer px-2 bg-b2 h-10 w-24 rounded-md text-white' ><IoMenu /><span className='ml-2 font-reg font-normal text-sm' >Menu</span></div>  
           <div onClick={()=>handleLogout()} className='flex items-center cursor-pointer px-2 bg-b2 h-10 w-24 rounded-md text-white' ><span className=' font-reg font-normal text-sm' >Logout</span></div>  
          </div>
       </div>
      {/* Navbar End */}
      {/* Sub Navbar Start */}
      <div className="relative lg:grid hidden grid-cols-12 text-white items-center bg-b2 px-10 py-5" >
         
       {/* Mega Menu Start */}
      <div className={`absolute ${ megMenu ? 'grid':'hidden'} grid-cols-12 justify-center top-0 bg-b2 w-full py-5 z-30 px-16`} >

         <div className='col-start-1 col-end-3' >
          <h4 className='font-semibold' >How It Works</h4>
          <div className='flex flex-col space-y-3 text-xs mt-2 text-white/80' >
            <a>What We Sell</a>
            <a>Rating System</a>
            <a>Testing Process</a>
            <a>Product Photos</a>
            <a>Delivery</a>
            <a>Warranty & Return</a>
          </div>
         </div>

         <div className='col-start-4 col-end-6' >
          <h4 className='font-semibold' >Resources</h4>
          <div className='flex flex-col space-y-3 text-xs mt-2 text-white/80' >
            <a>Appliance Repair</a>
            <a>Product Reviews</a>
            <a>Measuring Guide</a>
            <a>Appliance Tips</a>
            <a>Appliance Blog</a>
          </div>
         </div>

         <div className='col-start-7 col-end-10' >
          <h4 className='font-semibold' >About Us</h4>
          <div className='flex flex-col space-y-3 text-xs mt-2 text-white/80' >
            <a>Our Story</a>
            <a>Our Outlet</a>
            <a>Our Companies</a>
            <a>FAQ</a>
          </div>
         </div>

         <div className='col-start-10 col-end-13' >
          <h4 className='font-semibold' >Help & Support</h4>
          <div className='flex flex-col space-y-3 text-xs mt-2 text-white/80' >
            <a>Help Placing an Order Us</a>
            <a>Return and Exchange</a>
            <a>Contact Us</a>
          </div>
         </div>

      </div>
      {/* Mega Menu End */}
         
         
         <div className='col-start-1 col-end-5 flex items-center space-x-10' >
           <NavLink to='/' ><div className='flex items-center font-reg text-xs cursor-pointer hover:text-b6' ><span className='w-max' >Home</span></div></NavLink> 
           <NavDropDown icon={<RiArrowDropDownLine className='text-2xl' />} title="Deals" links={[{'name':'Recent Arrival','url':'/recent-arrivals'},{'name':'5 Star Products','url':'/five-star-products'},{'name':'4 Star Products','url':'/four-star-products'},{'name':'3 Star Products','url':'/three-star-products'}]} />
           <div className='flex items-center font-reg text-xs cursor-pointer hover:text-b6' ><span className='w-max' >Shop Now</span></div>
           <NavDropDown icon={<RiArrowDropDownLine className='text-2xl' />} title="Products" links={[{'name':'Refrigerators','url':'/products'},{'name':'Washer & Dryers','url':'/products'},{'name':'Rangers','url':'/products'},{'name':'Dishwasher','url':'/products'},{'name':'Microwaves','url':'/products'},{'name':'View All Categories','url':'/products'}]} bold={600} />
           <NavDropDown icon={<RiArrowDropDownLine className='text-2xl' />} title="Popular Brands" links={[{'name':'Amana','url':'/brands/amana'},{'name':'Maytag','url':'/brand/maytag'},{'name':'Frigdaire','url':'/brand/frigdaire'},{'name':'Haier','url':'/brand/haier'},{'name':'Hisense','url':'/brand/hisense'},{'name':'Kenmore','url':'/Kenmore'},{'name':'LG','url':'/lg'},{'name':'KitchenAid','url':'/kitchen-aid'},{'name':'Samsung','url':'/samsung'},{'name':'Whirlpool','url':'/whirlpool'},{'name':'Midea','url':'/midea'}]} bold={600} />
         </div>
         <div className='col-start-10 col-end-13 flex items-center justify-center space-x-10' >
           <div className='flex items-center space-x-1 text-b4 cursor-pointer hover:text-white' ><FiPhone/><span className='text-xs w-max' >(512) 992-2714</span></div>  
           <div className='flex items-center space-x-1 text-white cursor-pointer' ><TfiHeadphoneAlt/><span className='text-xs w-max' >Need Help?</span></div>  
         </div>

       </div>
      {/* Sub Navbar End */}

    </div>
  )
}

export default Navbar