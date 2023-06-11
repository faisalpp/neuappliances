import React, { useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import { RiStackLine } from 'react-icons/ri'
import { GiThermometerHot } from 'react-icons/gi'
import { GiFlame } from 'react-icons/gi'
import { RiArrowDropRightLine } from 'react-icons/ri';
import { MdElectricBolt, MdOutlinePropane } from 'react-icons/md';
import { AiFillStar, AiOutlineQuestionCircle, AiOutlineSearch, AiFillCloseCircle, AiOutlineShoppingCart, AiFillCheckCircle, AiOutlineCheckCircle, AiOutlineHeart } from 'react-icons/ai';
import { IoBagCheckOutline } from 'react-icons/io5';
import { BsArrowRightShort, BsShieldLock, BsShopWindow, BsStarHalf } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { BsTruck } from 'react-icons/bs';
import { useState } from 'react'
import { getCords } from '../api'
import OtherProductCard from '../components/OtherProductCard'
import FaqAccordion from '../components/FaqAccordion'
import HiwSection from '../components/HiwSection'
import PaymentOptions from '../components/PaymentOptions'
import SatisfiedSection from '../components/SatisfiedSection'
import ProductFeatures from '../components/ProductFeatures'
import LaunderySet from '../components/LaunderySet'
import MapSection from '../components/MapSection'
import InspectionScoreSection from '../components/InspectionScoreSection'
import ModelBuyingOptionsSection from '../components/ModelBuyingOptionsSection'
import ProductFaqSection from '../components/ProductFaqSection'
import CosmaticSlider from '../components/CosmaticSlider'
import ToolTip from '../components/ToolTip'
import MoreImagesModal from '../components/MoreImagesModal'
import StickyNavbar from '../components/DeskComp/Navbar/StickyNavbar'

const Product = () => {
  const [deliveryType, setDeliverType] = useState('pickup');
  const [zip, setZip] = useState('');
  const [changeZip, setChangeZip] = useState(true);
  const [error, setError] = useState(false);

  const Submit = async () => {
    const response = await getCords(zip);
    if (response) {
      setError(false);
      setChangeZip(false);
      console.log(response)
    } else {
      setChangeZip(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (zip.length === 5) {
      Submit();
    }
  }, [zip])

  const [showNavbar, setShowNavbar] = useState(false);

  const handleScroll = () => {
    setShowNavbar(window.pageYOffset > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [imgModal, setImgModal] = useState(false)

  return (
    <>
      <MainLayout>
        {/* StickyNavabr */}
        <StickyNavbar state={showNavbar} />


        <MoreImagesModal state={imgModal} setState={setImgModal} />

        {/* Bread Crumbs Start */}
        <div className='flex items-center py-10 w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
          <div className='flex items-center' ><h5 className='text-xs text-blue-400' >Home</h5><RiArrowDropRightLine className='text-xl text-gray-500' /><h5 className='text-xs text-blue-400' >Product</h5><RiArrowDropRightLine className='text-xl text-gray-500' /><h5 className='text-xs text-gray-500' >Washer</h5></div>
        </div>
        {/* Bread Crumbs End */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:items-start items-center mb-10 w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
          <div className='lg:col-span-5' >
            <div className='flex gap-2 md:gap-5' >
              <div className='flex flex-col space-y-2 min-w-[70px]' >
                <div className='border-[1px] border-gray-300 rounded-lg px-2 py-1 w-fit' ><img src="p1.png" className='w-12' alt='product' /></div>
                <div className='border-[1px] border-gray-300 rounded-lg px-2 py-1 w-fit' ><img src="p1.png" className='w-12' alt='product' /></div>
                <div className='border-[1px] border-gray-300 rounded-lg px-2 py-1 w-fit' ><img src="p1.png" className='w-12' alt='product' /></div>
                <div className='border-[1px] border-gray-300 rounded-lg px-2 py-1 w-fit' ><img src="p1.png" className='w-12' alt='product' /></div>
                <div className='relative border-[1px] border-blue-400 rounded-lg px-2 py-1 w-fit cursor-pointer' ><div onClick={() => setImgModal(true)} className='absolute flex justify-center items-center cursor-pointer left-0 top-0 rounded-lg w-full h-full bg-b3/70 font-semibold text-white' >+10</div><img src="p1.png" className='w-12' alt='product' /></div>
              </div>
              <div className='flex justify-center items-center border-[1px] border-gray-300 rounded-lg lg:h-96 w-full' >
                <img src="p1.png" alt='product' />
              </div>
            </div>
            <div className='flex flex-col space-y-5 mt-10' >
              <div className='flex items-center space-x-10' ><h5 className='text-sm font-semibold' >Model Number</h5><h5 className='text-sm' >WF45B6300AC</h5></div>
              <div className='flex items-center space-x-24' ><h5 className='text-sm font-semibold' >Item ID</h5><h5 className='text-sm' >#12354567876</h5></div>
              <div className='flex flex-col' >
                <h5 className='text-sm font-semibold' >Fuel Type</h5>
                <div className='flex flex-wrap gap-2 whitespace-nowrap mt-2' >
                  <div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><MdElectricBolt /><h5 className='text-xs' >240v Electric</h5><AiOutlineQuestionCircle /></div>
                  <div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><GiFlame /><h5 className='text-xs' >Gas</h5><AiOutlineQuestionCircle /></div>
                  <div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><MdOutlinePropane /><h5 className='text-xs' >Propane</h5><AiOutlineQuestionCircle /></div>
                  <div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><MdOutlinePropane /><h5 className='text-xs' >Dual Fuel</h5><AiOutlineQuestionCircle /></div>
                </div>
              </div>
              <div className='flex flex-col' >
                <h5 className='text-sm font-semibold' >Dryer Options</h5>
                <div className='flex space-x-2 mt-2' >
                  <div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><RiStackLine /><h5 className='text-xs' >STACKABLE</h5></div>
                  <div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><GiThermometerHot /><h5 className='text-xs' >STEAM</h5></div>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:col-span-7 flex flex-col lg:px-0 px-1 space-y-5 lg:mt-0 mt-4' >
            <h5 className='lg:text-xl text-sm font-bold lg:w-full sm:w-96' >Champagne ENERGY STAR Samsung 4.5 cu. ft. Front Load Washer with Wi-Fi Connectivity and 7.5 cu. ft. Front Load Gas Dryer with Steam</h5>
            <div className='flex items-center' ><h5 className='lg:text-sm text-xs lg:w-80 underline text-b3 font-semibold cursor-pointer' >View More Buying Options</h5><div className='flex justify-end w-full' ><span className='flex items-center bg-b10 text-white text-xs px-3 rounded-xl py-2' ><IoBagCheckOutline className='text-sm mr-1' />In Stock</span></div></div>
            <div className='flex maxsm:flex-col sm:items-center gap-5 whitespace-nowrap' >
              <div className='flex items-center gap-5'>
                <h4 className='font-bold lg:text-3xl text-xl text-b3 ' >$1,020.00</h4>
                <strike className="text-lg" >$1,249.00</strike>
              </div>
              <div className='flex items-center gap-5 lg:flex-wrap'>
                <span className='flex bg-b4 lg:text-xs text-[10px] text-black px-3 py-2 font-semibold rounded-2xl' >$229.00 Savings</span>
                <button className="flex justify-end items-center hover:underline text-b3" ><AiOutlineHeart /><span>Add to favorites</span></button>
              </div>
            </div>
            <img src="acima.png" className='w-60 mt-3' alt='' />
            <ul className='flex flex-col mt-5 space-y-2 text-sm' >
              <li>. Lorem ipsum dolor alter miler amigos</li>
              <li>. Lorem ipsum dolor alter miler amigos</li>
              <li>. Lorem ipsum dolor alter miler amigos</li>
              <li>. Lorem ipsum dolor alter miler amigos</li>
            </ul>
            <h6 className='text-xs font-bold hover:underline cursor-pointer' >+ View more</h6>
            <div className='flex items-center lg:space-x-16 space-x-5 lg:mt-4 mt-2' ><div className='flex items-center' ><h4 className='lg:text-sm text-xs font-semibold w-max' >Cosmetic Rating</h4><AiOutlineQuestionCircle /></div><div className='flex mt-2 items-center' ><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /></div></div>
            <div className='lg:flex hidden items-center space-x-14 mt-2' >
              <div className='flex font-semibold text-sm' ><h4>Discount</h4> %</div>
              <div className='w-52 bg-gray-100 rounded-lg' ><span className='flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-32 h-2' ></span></div>
            </div>

            <div className='flex space-x-3 items-center px-3 py-2 border-[1px] border-b3 rounded-lg w-fit' >
              <img src="shield.png" alt='' />
              <h6 className='text-sm font-bold w-40' >NeuShield 1 Year Applicance Warranty</h6>
            </div>
            {/* Delivery Card */}
            <div className='flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-3 w-full' >

              <div className={`flex flex-col px-5 py-5 w-full rounded-lg border-[1px] ${deliveryType === 'pickup' ? 'border-b10' : 'border-gray-300'} `} >
                <div className='flex items-center space-x-3' ><BsShopWindow className='text-xl' /><h6 className='font-bold text-sm' >Pickup</h6><div className='flex items-center justify-end w-full' ><span onClick={() => setDeliverType('pickup')} className={`px-1 py-1 rounded-full cursor-pointer ${deliveryType === 'pickup' ? 'bg-b10/20' : 'bg-gray-100'} `} ><GoPrimitiveDot className={` ${deliveryType === 'pickup' ? 'text-b10' : 'text-gray-200'} `} /></span></div></div>
                <div className='flex flex-col space-y-2 mt-2 text-sm' >
                  <h6 className='text-b10' >Ready Fri, April 26th (EST).</h6>
                  <h6 className='text-gray-500' >Georgetown, Tx</h6>
                  <h6 className='font-bold' >Free</h6>
                </div>
              </div>

              <div className={`flex flex-col px-5 py-5 w-full rounded-lg border-[1px] ${deliveryType === 'home' ? 'border-b10' : 'border-gray-300'} `} >
                <div className='flex items-center space-x-2' ><BsTruck className='text-3xl' /><h6 className='font-bold text-sm' >Delivery</h6><h6 onClick={() => setChangeZip(true)} className='text-xs w-max text-blue-400 hover:underline cursor-pointer' >Change ZIP</h6><div className='flex items-center justify-end w-full' ><span onClick={() => setDeliverType('home')} className={`px-1 py-1 rounded-full cursor-pointer ${deliveryType === 'home' ? 'bg-b10/20' : 'bg-gray-100'} `} ><GoPrimitiveDot className={` ${deliveryType === 'home' ? 'text-b10' : 'text-gray-200'} `} /></span></div></div>

                <div className={` ${changeZip ? 'flex' : 'hidden'} flex-col items-center justify-center h-full space-y-2 mt-2 text-sm`} >
                  <div className='flex items-center bg-white border-[1px] h-10 px-2 rounded-lg space-x-2 w-10/12 ' ><AiOutlineSearch className='text-blue-400 text-lg' /><input type="search" value={zip} onChange={e => setZip(e.target.value)} placeholder='Enter ZIP Code' className="w-full text-xs outline-none" /></div>
                </div>

                <div className={` ${changeZip ? 'hidden' : 'flex'} flex-col space-y-2 mt-2 text-sm`} >
                  <h6 className='text-b10' >Ready Fri, April 26th (EST).</h6>
                  <h6 className='text-gray-500' >Georgetown, Tx</h6>
                  {error ? <span className='flex items-center bg-gray-400 text-white text-xs w-fit px-2 py-1 rounded-xl' ><AiFillCloseCircle className='mr-1' />Delivery Not Available</span> : <h6 className='font-bold' >Free</h6>}
                </div>

              </div>


            </div>
            {/* Buttons */}
            <div className='flex justify-center items-center bg-b7 text-sm text-white py-3 rounded-lg' ><AiOutlineShoppingCart className='text-lg' /><h6 className="font-bold ml-2" >Add To Cart</h6></div>
            <div className='flex justify-center items-center bg-b3 text-sm text-white py-3 rounded-lg' ><h6 className="font-bold ml-2" >Complete Your Laundry Set</h6></div>

            {/* Quicl FAQs */}
            <div className='flex flex-col space-y-3' >
              {/* First FAQ */}
              <div className='flex items-center space-x-3 border-[1px] px-5 border-gray-200 text-sm text-black py-3 rounded-lg' >
                <BsTruck className='text-2xl' />
                <div className='flex flex-col' >
                  <h6 className="font-bold ml-2" >Need to Schedule your appliance delivery?</h6>
                  <h6 className="ml-2" >Select your delivery date and time during checkout</h6>
                </div>
              </div>

              {/* Second FAQ */}
              <div className='flex items-center space-x-3 border-[1px] px-5 border-gray-200 text-sm text-black py-3 rounded-lg' >
                <BsStarHalf className='text-2xl' />
                <div className='flex flex-col' >
                  <h6 className="font-bold ml-2" >Cosmetic Rating: What does it mean?</h6>
                  <h6 className="ml-2" >All Items work like new. Their Cosmetic Rating refers to their cosmetic appearance (how they look) <a href='' className='text-b3 hover:underline cursor-pointer font-medium' >Learn More</a></h6>
                </div>
              </div>
              {/* 3rd FAQ */}
              <div className='flex items-center space-x-3 border-[1px] px-5 border-gray-200 text-sm text-black py-3 rounded-lg' >
                <BsStarHalf className='text-2xl' />
                <div className='flex flex-col' >
                  <h6 className="font-bold ml-2" >Free Curbside Returns</h6>
                  <h6 className="ml-2" >Cancel your order curbside upon delivery free of charge! <a className='text-b3 font-medium hover:underline cursor-pointer' >Learn More</a></h6>
                </div>
              </div>

            </div>
            {/* Quicl FAQs */}

            {/* Other Product Section */}
            <div>
              <div class="flex" ><h6 className="font-bold" >Other Product Options</h6><div className="flex items-center w-full justify-end" ><h6 className="flex items-center hover:underline text-sm text-b3" >View All <BsArrowRightShort /></h6></div></div>
              <div className='lg:grid grid-cols-3 flex flex-col items-center lg:mt-0 mt-4 lg:space-y-0 space-y-4 lg:gap-x-5' >
                <OtherProductCard />
                <OtherProductCard />
                <OtherProductCard />
              </div>
            </div>

          </div>

        </div>

        {/* Faq Accrodions */}
        <div className='flex flex-col items-center mb-5 justify-center pt-14 xl:pt-10 gap-y-3 w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
          <FaqAccordion title="Product Description" parent='w-full px-4 py-4 rounded-xl h-auto' icon='text-xl' textStyle='font-bold text-sm' child='[&>p]:text-sm' answer='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni pariatur assumenda, incidunt possimus alias illo nesciunt nemo at accusantium ad rem ipsum, rerum saepe a! Itaque qui officia quis totam?' />
          <FaqAccordion title="Specifications" parent='w-full px-4 py-4 rounded-xl h-auto' icon='text-xl' textStyle='font-bold text-sm' child='[&>p]:text-sm' answer='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni pariatur assumenda, incidunt possimus alias illo nesciunt nemo at accusantium ad rem ipsum, rerum saepe a! Itaque qui officia quis totam?' />
          <FaqAccordion title="Delivery Info" parent='w-full px-4 py-4 rounded-xl h-auto' icon='text-xl' textStyle='font-bold text-sm' child='[&>p]:text-sm' answer='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni pariatur assumenda, incidunt possimus alias illo nesciunt nemo at accusantium ad rem ipsum, rerum saepe a! Itaque qui officia quis totam?' />
        </div>

        {/* 360 Degree Product Section */}
        <div className='flex flex-col space-y-5 items-center py-14 xl:py-20 w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
          <h4 className='text-2xl font-bold' >360° View of This Appliance</h4>
          <div className='mt-5' ><img src="p1.png" alt='' /></div>
          <p className="font-normal" >Rotate 360° to see the product from all angles</p>
          <div className='flex border-[1px] border-gray-200 rounded-md w-full md:w-2/3 xl:w-1/2' >
            <div className='flex flex-col items-center border-r-[1px] border-gray-200 w-full' >
              <h5 className='text-center border-b-[1px] border-gray-200 text-sm sm:text-base py-4 w-full font-semibold' >#ID</h5>
              <h5 className='flex items-center gap-1 justify-center text-center border-b-[1px] border-gray-200 text-sm sm:text-base py-4 w-full' ><span className='font-semibold' >Cosmetic Rating </span><ToolTip /></h5>
              <h5 className='flex items-center justify-center text-center  text-sm sm:text-base py-4 w-full font-semibold' >Warranty</h5>
            </div>
            <div className='flex flex-col items-center border-l-[1px] border-white w-full' >
              <h5 className='text-center border-b-[1px] border-gray-200 py-4 w-full font-normal' >#12354567876</h5>
              <div className='flex items-center justify-center py-[18px] w-full' ><AiFillStar className='text-b7 text-xl' /><AiFillStar className='text-b7 text-xl' /><AiFillStar className='text-b7 text-xl' /></div>
              <div className='flex items-center space-x-2 justify-center border-t-[1px] border-gray-200 py-3 w-full' >
                <div className='flex items-center rounded-md w-full justify-center border-[1px] border-gray-200 pl-5 py-1 space-x-1' ><BsShieldLock />
                  <span className='w-full text-xs font-medium break-words' >NeuShield <br /> 1 Year Applicance Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* PAyment Options */}
        <div className='flex flex-col py-10 md:py-14 xl:py-20 w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto bg-b8' >
          <h4 className='font-bold xl:text-[36px] text-3xl text-center mb-10 md:mb-14 xl:mb-20' >Payment Options</h4>
          <PaymentOptions />
        </div>

        {/* Review */}
        <div className='flex flex-col bg-white py-10 w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
          <div className='flex flex-col space-y-3 rounded-md items-center py-8 justify-center bg-b8' >
            <div className='flex mt-2 items-center' ><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /></div>
            <h6 className='font-bold' >Cosmetic Rating: 3 Stars </h6>
            <h6 className='font-medium' >What To Expect</h6>
            <p className='text-sm text-center px-10' >If you are shopping for bargains you are in the right place! 3-star rated appliances get you an open box appliance that works perfectly, with moderate cosmetic damage like scratches or dents at the largest discounted price we offer. Customers purchasing 3 star appliances capitalize on our deepest discounts in exchange for larger cosmetic blemishes while still obtaining a 100% functional appliance.</p>
          </div>
        </div>

        {/* How it Works */}
        <HiwSection />

        {/* Reviews Section */}
        <SatisfiedSection title="Our Customers LOVE our Scratch and Dent Discounts!" />

        {/* Prodcut Features */}
        <ProductFeatures />

        {/* Complete Your Laundery Set */}
        <LaunderySet />

        {/* Map Section */}
        <MapSection />

        {/* Inspection Score */}
        <InspectionScoreSection />

        {/* Model Buying Options */}
        <ModelBuyingOptionsSection />

        {/* Faq Section */}
        <ProductFaqSection />

        {/* Rlated Products */}
        <div className='flex flex-col py-10 w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
          <div className='flex flex-col items-center' >
            <h4 className='lg:text-2xl text-xl font-bold' >Related Products</h4>
          </div>
          <CosmaticSlider />
        </div>

      </MainLayout>
    </>
  )
}

export default Product