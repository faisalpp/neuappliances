import React from 'react';
import {AiOutlineCheckCircle,AiFillStar, AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {IoMenu,IoLocationOutline,IoSendSharp} from 'react-icons/io5';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {FiPhone} from 'react-icons/fi';
import {TfiHeadphoneAlt} from 'react-icons/tfi';
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa';
import {BsPiggyBank} from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import NavDropDown from '../components/NavBar/NavDropDown';
import BrandsSlider from '../components/BrandsSlider';
import Wwsl from '../components/Wwsl';
import ProductCard from '../components/ProductCard';
import HiwSection from '../components/HiwSection';
import ReviewSlider from '../components/ReviewSlider';
import ReviewExSlider from '../components/ReviewExSlider';
import StayLoopSlider from '../components/StayLoopSlider';
import SProductCard from '../components/SProductCard';
import CosmaticSlider from '../components/CosmaticSlider';
import GallerySlider from '../components/GallerySlider';
import { Checkbox } from "@material-tailwind/react";
import MapApi from '../components/MapApi';

const Home = () => {
  return (
    <>
     {/* Navbar Start */}

      <div className="grid grid-cols-12 items-center bg-b1 px-10 py-5" >
        <img className='col-start-1 col-end-3' src="neu.png" alt="logo" />
         <div className='col-start-4 col-end-8 flex items-center bg-white h-10 px-2 rounded-lg space-x-2 w-full ' ><AiOutlineSearch className='text-black' /><input type="text" placeholder='Search for appliances' className="w-full text-xs outline-none" /></div>
         <div className='col-start-9 col-end-13 flex justify-center space-x-2 w-full' >
          <div className='flex items-center px-2 bg-b2 h-10 w-24 rounded-md text-white' ><AiOutlineShoppingCart /><span className='ml-2 font-reg font-normal text-sm' >Cart</span><span className='ml-2 bg-b3 rounded-full text-xs h-4 w-4 text-center' >2</span></div>  
          <div className='flex items-center px-2 bg-b2 h-10 w-32 rounded-md text-white' ><BiUserCircle /><span className='ml-2 font-reg font-normal text-sm' >My Account</span></div>  
          <div className='flex items-center px-2 bg-b2 h-10 w-24 rounded-md text-white' ><IoMenu /><span className='ml-2 font-reg font-normal text-sm' >Menu</span></div>  
         </div>
      </div>
     {/* Navbar End */}
     {/* Sub Navbar Start */}
     <div className="grid grid-cols-12 text-white items-center bg-b2 px-10 py-5" >
        <div className='col-start-1 col-end-5 flex items-center space-x-10' >
          <NavDropDown icon={<RiArrowDropDownLine className='text-2xl' />} title="Deals" links={[{'name':'Recent Arrival','url':'/recent-arrivals'},{'name':'5 Star Products','url':'/five-star-products'},{'name':'4 Star Products','url':'/four-star-products'},{'name':'3 Star Products','url':'/three-star-products'}]} />
          <div className='flex items-center font-reg text-xs cursor-pointer hover:text-b6' ><span className='w-max' >Shop Now</span></div>
          <NavDropDown icon={<RiArrowDropDownLine className='text-2xl' />} title="Products" links={[{'name':'Refrigerators','url':'/referigerators'},{'name':'Washer & Dryers','url':'/washer-and-dryers'},{'name':'Rangers','url':'/rangers'},{'name':'Dishwasher','url':'/dishwashers'},{'name':'Microwaves','url':'/microwaves'},{'name':'View All Categories','url':'/categories'}]} bold={600} />
          <NavDropDown icon={<RiArrowDropDownLine className='text-2xl' />} title="Popular Brands" links={[{'name':'Amana','url':'/brands/amana'},{'name':'Maytag','url':'/brand/maytag'},{'name':'Frigdaire','url':'/brand/frigdaire'},{'name':'Haier','url':'/brand/haier'},{'name':'Hisense','url':'/brand/hisense'},{'name':'View All Categories','url':'/categories'}]} bold={600} />
        </div>
        <div className='col-start-10 col-end-13 flex items-center justify-center space-x-10' >
          <div className='flex items-center space-x-1 text-b4 cursor-pointer hover:text-white' ><FiPhone/><span className='text-xs w-max' >(512) 992-2714</span></div>  
          <div className='flex items-center space-x-1 text-white cursor-pointer' ><TfiHeadphoneAlt/><span className='text-xs w-max' >Need Help?</span></div>  
        </div>
      </div>
     {/* Sub Navbar End */}

      {/* Hero Section Start */}
        <div className='grid grid-cols-12 items-center py-20 px-10 bg-b5 auto' >
          <div className='col-start-1 col-end-7 flex flex-col space-y-10' >
           <h4 className='text-5xl font-bold' >Austin's Best Deals For Scratch & Dent Appliances</h4>
           <a href="#" className='flex text-white rounded-md space-x-2 font-semibold items-center justify-center bg-b7 w-56 h-[56px] text-sm' ><AiOutlineShoppingCart className='text-xl' /><span>Discover The Savings</span></a>
          </div>  
          <div className='col-start-8 col-end-13 flex justify-center' >
            <img src="hero-img.png" className='w-full h-96' />
          </div>
        </div>
      {/* Hero Section End */}

      {/* Brands Logo Slider Auto Start */}
       <div className='bg-white py-5' >
        <h4 className='text-center text-sm' >BRANDS WE SELL</h4>
        <div className='relative mt-2' >
          <BrandsSlider/>
        </div>
       </div>
      {/* Brands Logo Slider Auto End */}

      {/* What We Sell Section Start */}
       <div className='py-16 bg-b8' >
        <h4 className='text-center font-semibold text-4xl' >What We Sell</h4>
        <div className='grid grid-flow-col-dense justify-center space-x-10 px-10 mt-8' >
          <Wwsl img="wwsl1.png" title="Scratch and Dent Appliances" />
          <Wwsl img="wwsl2.png" title="Floor Model & Display Appliances" />
          <Wwsl img="wwsl3.png" title="Open Box Appliances" />
          <Wwsl img="wwsl4.png" title="Overstock Appliances" />
        </div>
        <p className="text-t1 font-semibold text-lg text-center mt-10" >We deliver customers deep discounts by liquidating thousands of appliances from big box retailers right here in Austin, Tx!</p>
       </div>
      {/* What We Sell Section End */}

      {/* Home Images Section Start */}
       <div className='flex' >
        <div className='relative' ><div className='absolute top-10 w-full' ><span className='flex justify-center w-100' ><img className=' w-9/12' src="ht1.png" /></span></div><img src="h1.png" /></div>
        <div className='relative' ><div className='absolute top-10 w-full' ><span className='flex justify-center w-100' ><img className=' w-9/12' src="ht2.png" /></span></div><img src="h2.png" /></div>
       </div>
      {/* Home Images Section End */}


      {/* Cosmatic Star Rating Section Start */}
      <div className='flex flex-col bg-b8 px-12 py-12' >
        {/* Heading Start  */}
        <div className='flex flex-col items-center' >
          <h4 className='font-semibold text-2xl' >Our Cosmetic Star Rating System</h4>
          <p className='text-center text-lg mt-2' >We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic grades get Deeper Discounts! You pick your level of savings!</p>
        </div>
       {/* Heading End */}

       {/* Products Card Start */}
        <div className="grid grid-flow-col-dense justify-center space-x-10 mt-8 h-auto" >
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
        </div>
       {/* Products Card End */}
      
      </div> 
      {/* Cosmatic Star Rating Section End */}

      {/* How It Works Section Start */}
       <HiwSection/>
      {/* How It Works Section End */}

      {/* Austins Love Section Start */}
       <div className='relative' >
        <div className='absolute text-center items-center py-24 h-full w-full text-white z-20 text-4xl font-bold' ><p>Austin Loves Our Star Rating System Here's Why</p></div> 
        <img src="austin_love.png" />
       </div>
      {/* Austins Love Section End */}

      {/* 3D Card Sectiont Start  */}
       <div className='grid grid-cols-12 py-16 px-10' >
        <div className='col-start-1 col-end-6 flex flex-col space-y-5 ' >
          <div className='flex space-x-2' ><BsPiggyBank className='text-3xl' /><p className='text-sm' >We provide our Austin neighbors the best savings on  floor models , returns and scratch and dent appliances. </p></div>
          <div className='flex space-x-2' ><AiOutlineCheckCircle className='text-5xl' /><p className='text-sm' >Every appliance we sell is tested with our 100-point inspection process. We ensure every appliance functions the way it is supposed to and provide you the best discounts possible.</p></div>
          <div className='flex space-x-2' ><IoLocationOutline className='text-5xl' /><p className='text-sm' >Discover why our Austin neighbors trust us to provide great appliances at better savings. Lets find the perfect appliance for your needs at an unbeatable price by clicking below.</p></div>
          <a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >Get Our Best Deals</span><BsArrowRightShort className='text-2xl' /></a>
        </div>
        <div className='col-start-7 col-end-13 relative flex justify-center items-center w-full' >
         <img src="3d1.png" className='w-48 h-56' />
         <img src="3d2.png" className='absolute -top-3 w-56 h-72' />
         <img src="3d3.png" className='w-56 h-56' />
        </div>
       </div>
      {/* 3D Card Sectiont End  */}

      {/* Reviews Section Start */}
       <div className='flex flex-col justify-center px-5' >
        <h4 className='text-2xl font-bold' >Saving Austinites Money on Appliances Since 2015</h4>
         <ReviewSlider  color="#F5F5F5" />
         <ReviewSlider  color="#ff9b3e14" />

        <div className='flex justify-center' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >Shop Austin's Best Appliance Deals</span><BsArrowRightShort className='text-2xl' /></a></div> 
       </div>
      {/* Reviews Section End */}

      {/* Stay In Loop Section Start */}
       <div className='flex flex-col mt-10' >
        <h4 className='text-2xl font-bold text-center' >Stay In The Loop</h4>
        <p className='text-sm text-center' >Keep up with our videos about appliances we sell, New stock at our outlet store, product reviews,  sales and much more!</p>
        
        <div className='mx-20 mt-10' >
          <img src="sitl.png" />
          <div>
            <StayLoopSlider/>
          </div>
          <div className='flex justify-center' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >View All Videos</span><BsArrowRightShort className='text-2xl' /></a></div>
        </div>

       </div>
      {/* Stay In Loop Section End */}

      {/* Shop Appliances Section Start */}
       <div className='flex flex-col py-10 bg-b8' >
        <h4 className='text-xl font-bold text-center' >Shop By Appliance Type</h4>
        <div className='grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-5 px-5 mt-8' >
         <SProductCard cat="Refrigerators" />
         <SProductCard cat="Washer & Dryers" />
         <SProductCard cat="Ranges" />
         <SProductCard cat="Dishwashers" />
         <SProductCard cat="Microwaves" />
         <SProductCard cat="All Appliances" />
        </div>
        <div className='flex justify-center mt-5' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >View All Categories</span><BsArrowRightShort className='text-2xl' /></a></div>
       </div>
      {/* Shop Appliances Section End */}

      {/* Delivery Map Section Start */}
      <div>
        {/* <MapApi/> */}
      </div>
      {/* Delivery Map Section End */}

      {/* Comatic 5 Rating Products */}
      <div className='flex flex-col mx-10 py-10' >
       <div className='flex flex-col items-center' >
        <h4 className='text-2xl font-bold' >Shop By Cosmetic Rating</h4>
        <h4 className='text-lg font-bold' >Cosmetic Rating: <span className='font-normal' >5 Stars</span> </h4>
        <div className='flex mt-2 items-center' ><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /></div>
      </div>
       <CosmaticSlider />
        <div className='flex justify-center' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >Shop All 5 Star Cosmetic Rating Appliances</span><BsArrowRightShort className='text-2xl' /></a></div>
      </div>
      {/* Comatic 5 Rating Products */}

      {/* Comatic 4 Rating Products */}
      <div className='flex flex-col mx-10 py-10' >
       <div className='flex flex-col items-center' >
        <h4 className='text-2xl font-bold' >Shop By Cosmetic Rating</h4>
        <h4 className='text-lg font-bold' >Cosmetic Rating: <span className='font-normal' >4 Stars</span> </h4>
        <div className='flex mt-2 items-center' ><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /></div>
       </div>
       <CosmaticSlider />
       <div className='flex justify-center' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >Shop All 4 Star Cosmetic Rating Appliances</span><BsArrowRightShort className='text-2xl' /></a></div>
      </div>
      {/* Comatic 4 Rating Products */}
      
      {/* Comatic 3 Rating Products */}
      <div className='flex flex-col mx-10 py-10' >
       <div className='flex flex-col items-center' >
        <h4 className='text-2xl font-bold' >Shop By Cosmetic Rating</h4>
        <h4 className='text-lg font-bold' >Cosmetic Rating: <span className='font-normal' >3 Stars</span> </h4>
        <div className='flex mt-2 items-center' ><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /></div>
       </div>
       <CosmaticSlider />
       <div className='flex justify-center' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >Shop All 3 Star Cosmetic Rating Appliances</span><BsArrowRightShort className='text-2xl' /></a></div>
      </div>
      {/* Comatic 3 Rating Products */}

      {/* Neu Tour Section Start */}
       <div id="tour" className='grid grid-cols-12 px-16 py-16' >
          <div className='col-start-1 col-end-6' >
            <img src="tour.png" />
          </div>
          <div className='col-start-7 col-end-13' >
            <div className='bg-white w-full h-full px-10 flex flex-col space-y-3 justify-center' >
                <h4 className='text-2xl font-bold' >Tour Our Outlet Store</h4>
                <p>Neu Appliance's retail store is located smack dab in the middle of Austin, Tx. If you live nearby come check us out and meet the team or shop from the comfort of your own home online.</p>
                <a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >Shop All 3 Star Cosmetic Rating Appliances</span><BsArrowRightShort className='text-2xl' /></a>
            </div>
          </div>
       </div>
      {/* Neu Tour Section End */}

      {/* Gallery Section Start */}
             <div className='flex flex-col bg-b3 py-12' >
        <div className='mx-20 ' >
          <img src="sitl.png" />
          <div>
            <GallerySlider/>
          </div>
        </div>
        <div className='flex justify-center' ><a className='flex items-center border-[1px] border-white w-fit px-4 py-1 rounded-md font-semibold text-white' ><span className='text-sm ' >View All Videos</span><BsArrowRightShort className='text-2xl' /></a></div>
       </div>
      {/* Gallery Section End */}

      {/* Satisfied Customer Section Start */}
      <div className='flex flex-col justify-center px-5 py-10' >
        <h4 className='text-2xl font-bold text-center' >Saving Austinites Money on Appliances Since 2015</h4>
         <ReviewExSlider  color="#ff9b3e20" />
       </div>
      {/* Satisfied Customer Section End */}

      {/* NewsLetter Section Start */}
       <div id="news" className='flex justify-center items-center h-96' >
        <div className='grid grid-cols-12 justify-center items-center bg-b4 w-10/12 h-72 rounded-lg' >
         <div className='col-start-2 col-end-6 flex flex-col items-center justify-center' >
          <a className='bg-b3 px-5 py-2 text-xs w-fit rounded-2xl text-white' >STAY UPDATED</a>
          <h4 className='text-4xl font-bold' >Subscribe!</h4>
          <p className='font-normal text-sm text-center w-72' >Get updates on exclusive discounts, experiences and more.</p>
         </div>
         <div className='col-start-7 col-end-12 space-y-2' >
          <h4 className='font-bold text-sm' >Email</h4>
          <div className='flex space-x-5 items-center' ><input type="email" className='text-xs py-2 px-2 rounded-md w-72' placeholder='Enter Your Email!' /><a className='bg-b3 px-5 py-2 text-xs rounded-md w-max text-white' >Get Updates</a></div>
          <div className='flex items-center space-x-3 ' ><Checkbox color="gray" ripple={false} /><span className='text-sm' >Yes, sign me up!</span></div>
          <p className='text-xs w-72' >Sign up above to get updates delivered directly to your inbox. See our Privacy Policy.</p>
         </div> 
        </div>
       </div>
      {/* NewsLetter Section Start */}
      
      {/* Footer Section */}
      <div className="grid grid-cols-12 bg-b1 py-10 px-5" >

      {/* Logo Section Start */}
       <div className='col-start-1 col-end-2 space-y-10' >
        
         {/* Nav Logos */}
         <div className='flex flex-col space-y-10  text-white' >
          <h4 className='w-max text-white text-lg font-bold font-reg' >Our Companies</h4>
          <div className='space-y-5' >
          <img className='w-32 h-12' src="neu.png" alt="logo2" />
          <p className='text-[10px] w-max text-white/60 font-reg' >Shop Austin's #1 Local Discount Appliance Outlet</p>
          </div>
         </div>
        
         {/* Nav Logo 2 */}
         <div className='flex flex-col space-y-2 mt-5 text-white' >
          <img className='w-32 h-12' src="neu2.png" alt="logo2" />
          <p className='text-[10px] w-max text-white/60 font-reg' >Shop Discount Appliance Repair Parts</p>
         </div>

         {/* Nav Logo 3 */}
         <div className='flex flex-col space-y-2 mt-5 text-white' >
          <img className='w-32 h-12' src="neu3.png" alt="logo3" />
          <p className='text-[10px] w-64 text-white/60 font-reg' >Wholesale Supply Distributor of Bulk Scratch and Dent Appliances to Appliance Vendor's across the Country</p>
         </div>

       </div>
      {/* Logo Section End */}
      
       {/* Quick Links Section Start */}
        <div className='col-start-4' >
        <h4 className='w-max text-white text-lg font-bold font-reg' >Quick Links</h4>
         <div className='flex flex-col text-white/60 text-sm space-y-5 w-max mt-3 hover:[&>a]:underline hover:[&>a]:cursor-pointer' >
          <a>Shop Now</a>
          <a>Shop On Sale</a>
          <a>Live Inventory</a>
          <a>Virtual Showroom</a>
          <a>Financing</a>
          <a>Discount Appliances in Stock</a>
          <a>Austin Appliance Liquidation</a>
          <a>Used Appliances</a>
          <a>Appliance Repair</a>
          <a>Helpful Appliance Tips</a>
         </div>
        </div> 
       {/* Quick Links Section End */}

       {/* Quick Links Section 2 Start */}
       <div className='col-start-7 flex flex-col text-white/60 text-sm space-y-5 w-max mt-10 hover:[&>a]:underline hover:[&>a]:cursor-pointer' >
          <a>Our Brands</a>
          <a>Delivery</a>
          <a>Appliance Measuring Guide</a>
          <a>Do i have Electric or Gas?</a>
          <a>Our Products</a>
          <a>FAQ</a>
          <a>Contact</a>
          <a>Terms</a>
          <a>Refund</a>
          <a>Privacy Policy</a>
         </div>
       {/* Quick Links Section 2 End */}

       {/* Quick Links Section 2 Start */}
       <div className='col-start-10 flex flex-col text-white text-sm w-max' >
        {/* Email Address */}
        <div>
         <h4 className='font-bold text-lg' >Get Latest Discount Offers</h4>
         <div className='col-start-4 col-end-8 mt-3 flex items-center bg-b2 h-10 px-2 rounded-lg space-x-2 w-full ' ><input type="text" placeholder='Email Address' className="bg-b2 w-full text-xs text-white/90 outline-none" /><IoSendSharp className='text-white' /></div>
        </div>
        {/* Follow Us */}
        <div className='flex flex-col space-y-3 mt-5' >
         <h4 className='font-bold text-lg' >Follow Us</h4>
         <div className='flex space-x-2' >
          <span className='flex items-center justify-center w-10 h-10 rounded-full bg-b2' ><FaFacebookF/></span>
          <span className='flex items-center justify-center w-10 h-10 rounded-full bg-b2' ><FaInstagram/></span>
          <span className='flex items-center justify-center w-10 h-10 rounded-full bg-b2' ><FaTwitter/></span>
         </div>
        </div>
        {/* Contact Us */}
        <div className='flex flex-col space-y-3 mt-5' >
         <h4 className='font-bold text-lg' >Contact Us</h4>
         <div className='flex flex-col space-y-5' >
          <div className='flex items-center space-x-2' ><span className='flex items-center justify-center w-9 h-9 rounded-full bg-b2' ><FiPhone/></span><span className='text-sm' >(512) 992-2714</span></div>
          <div className='flex items-center space-x-2' ><span className='flex items-center justify-center w-9 h-9 rounded-full bg-b2' ><IoLocationOutline/></span><span className='text-sm' >123 N Loop Blvd E, Austin, TX 78751</span></div>
          <div class="mapouter"><div class="gmap_canvas"><iframe title="map" className='rounded-xl' width="300" height="150" id="gmap_canvas" src="https://maps.google.com/maps?q=Austin&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br/></div></div>
         </div>
        </div>

       </div>
       {/* Quick Links Section 2 End */}

      </div>
      {/* Footer Section Start */}
    </>
  )
}

export default Home