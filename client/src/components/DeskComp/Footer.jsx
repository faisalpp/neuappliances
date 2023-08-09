import React from 'react'
import { IoLocationOutline, IoSendSharp } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='flex justify-center bg-b1 px-32' >
    <div className="grid grid-cols-16 bg-b1 py-20 w-fit" >

      {/* Logo Section Start */}
      <div className='col-start-1 col-end-3 flex flex-col space-y-10 maxxl:!col-span-4' >

        {/* Nav Logos */}
        <div className='flex flex-col gap-y-10  text-white' >
          <h4 className='w-max text-white text-lg font-bold font-reg' >Our Companies</h4>
          <div className='flex flex-col space-y-2' >
            <img className='w-32 h-12' src="/neu.png" alt="logo2" />
            <p className='text-xs w-max text-white/60 font-normal' >Shop Austin's #1 Local Discount Appliance Outlet</p>
          </div>
        </div>

        {/* Nav Logo 2 */}
        <div className='flex flex-col gap-y-2 text-white' >
          <img className='w-32 h-12' src="/neu2.png" alt="logo2" />
          <p className='text-xs w-max text-white/60 font-normal' >Shop Discount Appliance Repair Parts</p>
        </div>

        {/* Nav Logo 3 */}
        <div className='flex flex-col gap-y-3 text-white' >
          <img className='w-32 h-12' src="/neu3.png" alt="logo3" />
          <p className='text-xs w-80 text-white/60 font-normal' >Wholesale Supply Distributor of Bulk Scratch and Dent Appliances to Appliance Vendor's across the Country</p>
        </div>

      </div>
      {/* Logo Section End */}

      {/* Quick Links Section Start */}
      <div className='col-start-6 col-end-7 maxxl:!col-span-4' >
        <h4 className='w-max text-white text-lg font-bold font-reg' >Quick Links</h4>
        <div className='flex flex-col text-white/60 text-base font-normal gap-y-5 w-max mt-10 hover:[&>a]:underline hover:[&>a]:cursor-pointer' >
          <a href=''>Shop Now</a>
          <a href=''>Shop On Sale</a>
          <a href=''>Live Inventory</a>
          <a href=''>Virtual Showroom</a>
          <a href='/financing'>Financing</a>
          <a href=''>Discount Appliances in Stock</a>
          <a href=''>Austin Appliance Liquidation</a>
          <a href=''>Used Appliances</a>
          <a href='/appliance-repair'>Appliance Repair</a>
          <a href='/helpful-appliances-tips'>Helpful Appliance Tips</a>
        </div>
      </div>
      {/* Quick Links Section End */}

      {/* Quick Links Section 2 Start */}
      <div className='col-start-9 col-end-13  lg:mt-0 flex flex-col text-white/60 text-base font-normal gap-y-5 w-max pt-[65px] hover:[&>a]:underline hover:[&>a]:cursor-pointer' >
        <a href=''>Our Brands</a>
        <a href=''>Delivery</a>
        <a href='/measuring-guide'>Appliance Measuring Guide</a>
        <a href='/do-i-have-electric-or-gas'>Do i have Electric or Gas?</a>
        <a href='/appliancetypes'>Our Products</a>
        <a href='/faqs'>FAQ</a>
        <a href=''>Contact</a>
        <a href=''>Terms</a>
        <a href=''>Refund</a>
        <a href=''>Privacy Policy</a>
      </div>
      {/* Quick Links Section 2 End */}

      {/* Quick Links Section 2 Start */}
      <div className='col-start-13 col-end-16  flex flex-col h-full text-white text-sm md:w-max' >
        {/* Email Address */}
        <div>
          <h4 className='font-bold text-lg' >Get Latest Discount Offers</h4>
          <div className='col-start-4 col-end-8 mt-3 flex items-center bg-b2 h-10 px-3 rounded-lg space-x-2 w-full ' ><input type="text" placeholder='Email Address' className="bg-b2 w-full text-xs text-white/90 outline-none" /><IoSendSharp className='text-white' /></div>
        </div>
        {/* Follow Us */}
        <div className='flex flex-col py-4 lg:items-start items-center gap-y-3 mt-5' >
          <h4 className='font-bold text-lg' >Follow Us</h4>
          <div className='flex space-x-2' >
            <span className='flex items-center justify-center w-10 h-10 rounded-full bg-b2' ><FaFacebookF /></span>
            <span className='flex items-center justify-center w-10 h-10 rounded-full bg-b2' ><FaInstagram /></span>
            <span className='flex items-center justify-center w-10 h-10 rounded-full bg-b2' ><FaTwitter /></span>
          </div>
        </div>
        {/* Contact Us */}
        <div className='flex flex-col mt-10 lg:items-start items-center gap-y-3 lg:mt-5' >
          <h4 className='font-bold text-lg' >Contact Us</h4>
          <div className='flex flex-col gap-y-5' >
            <div className='flex items-center space-x-2' ><span className='flex items-center justify-center w-9 h-9 rounded-full bg-b2' ><FiPhone /></span><span className='text-sm' >(512) 992-2714</span></div>
            <div className='flex items-center space-x-2' ><span className='flex items-center justify-center w-9 h-9 rounded-full bg-b2' ><IoLocationOutline /></span><span className='text-sm' >123 N Loop Blvd E, Austin, TX 78751</span></div>
            <div className="mapouter"><div className="gmap_canvas"><iframe title="map" className='rounded-xl maxmd:w-full maxmd:h-[150px]' width="300" height="150" id="gmap_canvas" src="https://maps.google.com/maps?q=Austin&t=&z=10&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><br /></div></div>
          </div>
        </div>

      </div>
      {/* Quick Links Section 2 End */}


    </div>
    </div>
  )
}

export default Footer