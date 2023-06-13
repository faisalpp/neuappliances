import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { IoMenu } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiPhone } from 'react-icons/fi';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import NavDropDown from '../Navbar/NavDropDown';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetUser } from '../../../store/userSlice'


const Navbar = ({ sCart, setSCart }) => {
  const [megMenu, setMegMenu] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.auth);
  const navigate = useNavigate();


  const handleLogout = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/logout', {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const res = await response.json();
    if (res.status === 200) {
      toast.success(res.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(resetUser());
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
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <div className='relative bg-b1' >
        {/* Navbar Start */}
        <div className="hidden lg:block py-5">
          <div className='lg:grid grid-cols-12 items-center max-w-1680px px-16 xl:px-20 2xl:px-120px mx-auto w-full'>
            <NavLink to="/">
              <img className='col-start-1 col-end-3' src="neu.png" alt="logo" />
            </NavLink>
            <div className='col-start-4 col-end-8 flex items-center bg-white h-10 px-2 rounded-lg space-x-2 w-full ' ><AiOutlineSearch className='text-black' /><input type="text" placeholder='Search for appliances' className="w-full text-xs outline-none" /></div>
            <div className='col-start-9 col-end-13 flex justify-end space-x-2 w-full' >
              <div onClick={() => { sCart ? setSCart(false) : setSCart(true) }} className='flex items-center cursor-pointer px-2 bg-b2 h-10 w-24 rounded-md text-white' ><AiOutlineShoppingCart /><span className='ml-2 font-reg font-normal text-sm' >Cart</span><span className='ml-2 bg-b3 rounded-full text-xs h-4 w-4 text-center' >2</span></div>
              {isAuth ? <NavLink to="/useraccount" ><div className='flex items-center px-2 bg-b2 h-10 w-32 cursor-pointer rounded-md text-white' ><BiUserCircle /><span className='ml-2 font-reg font-normal text-sm' >My Account</span></div></NavLink> : <NavLink to="/login" ><div className='flex items-center px-2 bg-b2 h-10 w-32 cursor-pointer rounded-md text-white' ><BiUserCircle /><span className='ml-2 font-reg font-normal text-sm' >My Account</span></div></NavLink>}
              <div onClick={() => { megMenu ? setMegMenu(false) : setMegMenu(true) }} className='flex items-center cursor-pointer px-2 bg-b2 h-10 w-24 rounded-md text-white' ><IoMenu /><span className='ml-2 font-reg font-normal text-sm' >Menu</span></div>
              {/* <div onClick={handleLogout} className='flex items-center cursor-pointer text-center px-2 bg-b2 h-10 w-24 rounded-md text-white' ><span className='text-center font-medium text-xs px-5' >Logout</span></div>   */}
            </div>
          </div>
        </div>
        {/* Navbar End */}
        {/* Sub Navbar Start */}
        <div className="relative hidden lg:block text-white bg-white/[0.08] py-4" >

          {/* Mega Menu Start */}
          <div className={`absolute ${megMenu ? '' : 'hidden'} top-0 bg-b1 w-full pt-5 pb-20 z-30`} >

            <div className='grid grid-cols-12 justify-center max-w-1680px px-16 xl:px-20 2xl:px-120px mx-auto'>
              <div className='col-start-1 col-end-3 flex flex-col items-center' >
                <h4 className='font-semibold' >How It Works</h4>
                <div className='flex flex-col space-y-4 text-xs font-medium mt-4 text-white/80' >
                  <a>What We Sell</a>
                  <a>Rating System</a>
                  <a>Testing Process</a>
                  <a>Product Photos</a>
                  <a>Delivery</a>
                  <a>Warranty & Return</a>
                </div>
              </div>

              <div className='col-start-3 col-end-5 ml-8' >
                <h4 className='font-semibold' >Resources</h4>
                <div className='flex flex-col space-y-4 text-xs font-medium mt-4 text-white/80' >
                  <a>Appliance Repair</a>
                  <a>Product Reviews</a>
                  <a>Measuring Guide</a>
                  <a>Appliance Tips</a>
                  <a>Appliance Blog</a>
                </div>
              </div>

              <div className='col-start-6 col-end-6 flex flex-col' >
                <h4 className='font-semibold' >About Us</h4>
                <div className='flex flex-col space-y-4 text-xs mt-4 font-medium text-white/80' >
                  <a>Our Story</a>
                  <a>Our Outlet</a>
                  <a>Our Companies</a>
                  <a>FAQ</a>
                </div>
              </div>

              <div className='col-start-8 col-end-11' >
                <h4 className='font-semibold' >Help & Support</h4>
                <div className='flex flex-col space-y-4 text-xs mt-4 font-medium text-white/80' >
                  <a>Help Placing an Order Us</a>
                  <a>Return and Exchange</a>
                  <a>Contact Us</a>
                </div>
              </div>

              <div className='col-start-11 col-end-13' >
                <h4 className='font-semibold' >Delivery</h4>
                <div className='flex flex-col space-y-4 text-xs mt-4 font-medium text-white/80' >
                  <a>Important Information</a>
                </div>
              </div>
            </div>

          </div>
          {/* Mega Menu End */}

          <div className='grid grid-cols-12 items-center max-w-1680px px-16 xl:px-20 2xl:px-120px mx-auto'>
            <div className='col-start-1 col-end-5 flex items-center space-x-4 xl:space-x-8 2xl:space-x-14' >
              {/* <NavLink to='/' ><div className='flex items-center font-reg text-xs cursor-pointer text-white/80 hover:text-b6' ><span className='w-max' >Home</span></div></NavLink>  */}
              <NavDropDown icon={<RiArrowDropDownLine className='text-2xl' />} title="Deals" links={[{ 'name': 'Recent Arrival', 'url': '/recent-arrivals' }, { 'name': '5 Star Products', 'url': '/five-star-products' }, { 'name': '4 Star Products', 'url': '/four-star-products' }, { 'name': '3 Star Products', 'url': '/three-star-products' }]} />
              <div className='flex items-center font-normal text-white/80 text-xs cursor-pointer hover:text-b6' ><span className='w-max' >Shop Now</span></div>
              <NavDropDown icon={<RiArrowDropDownLine className='text-2xl' />} title="Products" links={[{ 'name': 'Refrigerators', 'url': '/products' }, { 'name': 'Washer & Dryers', 'url': '/appliances' }, { 'name': 'Rangers', 'url': '/products' }, { 'name': 'Dishwasher', 'url': '/products' }, { 'name': 'Microwaves', 'url': '/products' }, { 'name': 'View All Categories', 'url': '/products' }]} bold={600} />
              <NavDropDown icon={<RiArrowDropDownLine className='text-2xl' />} title="Popular Brands" links={[{ 'name': 'Amana', 'url': '/brands/amana' }, { 'name': 'Maytag', 'url': '/brand/maytag' }, { 'name': 'Frigdaire', 'url': '/brand/frigdaire' }, { 'name': 'Haier', 'url': '/brand/haier' }, { 'name': 'Hisense', 'url': '/brand/hisense' }, { 'name': 'Kenmore', 'url': '/Kenmore' }, { 'name': 'LG', 'url': '/lg' }, { 'name': 'KitchenAid', 'url': '/kitchen-aid' }, { 'name': 'Samsung', 'url': '/samsung' }, { 'name': 'Whirlpool', 'url': '/whirlpool' }, { 'name': 'Midea', 'url': '/midea' }]} bold={600} />
              <div className='flex items-center font-normal text-white/80 text-xs cursor-pointer hover:text-b6' ><span className='w-max' >Financing</span></div>
              <div className='flex items-center font-normal text-white/80 text-xs cursor-pointer hover:text-b6' ><span className='w-max' >Testimonials</span></div>
              <div className='flex items-center font-normal text-white/80 text-xs cursor-pointer hover:text-b6' ><span className='w-max' >Pricing</span></div>
            </div>
            <div className='col-start-10 col-end-13 flex items-center justify-end space-x-10' >
              <div className='flex items-center space-x-1 text-b4 cursor-pointer hover:text-white' ><FiPhone /><span className='text-xs font-medium w-max' >(512) 992-2714</span></div>
              <div className='flex items-center space-x-1 text-white cursor-pointer' ><TfiHeadphoneAlt /><span className='text-xs font-medium w-max text-white/80' >Need Help?</span></div>
            </div>
          </div>

        </div>
        {/* Sub Navbar End */}

      </div>
    </>
  )
}

export default Navbar