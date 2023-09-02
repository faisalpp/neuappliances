import React, { useEffect } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import { RiStackLine } from 'react-icons/ri'
import { GiThermometerHot } from 'react-icons/gi'
import { GiFlame } from 'react-icons/gi'
import { RiArrowDropRightLine } from 'react-icons/ri';
import { MdElectricBolt, MdOutlinePropane } from 'react-icons/md';
import { AiOutlineDollarCircle, AiFillStar, AiOutlineQuestionCircle, AiOutlineSearch, AiFillCloseCircle, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { IoBagCheckOutline, IoCloseOutline } from 'react-icons/io5';
import { BsArrowRightShort, BsShopWindow, BsStarHalf } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { BsTruck } from 'react-icons/bs';
import { useState } from 'react'
import { getCords } from '../api'
import OtherProductCard from '../components/OtherProductCard'
import FaqAccordion from '../components/FaqAccordion'
import HiwSection from '../components/HiwSection'
import NewProductCards from '../components/NewProductCards'
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
import CustomModal from '../components/Modal/CustomModal'
import TruckSvg from '../svgs/TruckSvg'
import { GetAppliancesBySlug } from '../api/frontEnd'
import { addToCart } from '../api/cart'
import Loader from '../components/Loader/Loader'
import { React360Viewer } from 'react-360-product-viewer'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { resetUser } from "../store/userSlice";
import { showSCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Product = () => {
  // Get slug form url
  const { slug } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const location = useLocation();

  const [orderType, setOrderType] = useState('pickup');
  const [zip, setZip] = useState('');
  const [pickupLocation, setPickupLocation] = useState('Georgetown, Tx');
  const [changeZip, setChangeZip] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)

  const [product, setProduct] = useState([])

  // Auth State
  const id = useSelector((state) => state.user._id);

  const AddToCart = async () => {
    setLoading2(true)
    const data = { userId: id, productId: product._id, orderType: orderType, deliveryLocation: zip, pickupLocation: pickupLocation }
    const res = await addToCart(data)
    if (res.status === 200) {
      toast.success("Product Add To Cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading2(false)
      dispatch(showSCart())
      GetProduct()
    }
    if (res.code === 'ERR_BAD_REQUEST') {
      setLoading(false)
      toast.error("Login Required!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const callback = location.pathname
      dispatch(resetUser());
      navigate(`/login/?callback=${callback}`)
    }
    if (res.status === 404) {
      setLoading(false)
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



  useEffect(() => {
    GetProduct()
  }, [])


  const GetProduct = async () => {
    const data = { slug }
    setLoading(true)
    const res = await GetAppliancesBySlug(data);
    if (res.status === 200) {
      setProduct(res.data.product)
      setLoading(false)
    } else {
      setLoading(false)
      toast.error('Internal Server Error!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate(-1)
    }
  }



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

  // All Modal

  const [openModal, setOpenModal] = useState("");

  const handleOpenModal = (modal) => {
    setOpenModal(modal);
  };

  const handleCloseModal = () => {
    setOpenModal("");
  };

  const StarIconPrinter = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
      <AiFillStar key={index} className='text-b7 text-lg' /> // Render the star icon component for each iteration
    ));

    return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
  };


  return (
    <>
      {loading ? <Loader /> :
        <MainLayout>
          {/* StickyNavabr */}
          <StickyNavbar product={product} state={showNavbar} />


          <MoreImagesModal images={product.images} state={imgModal} setState={setImgModal} />

          {/* All Modal */}
          <CustomModal openmodal={openModal} closeModal={handleCloseModal} />
          {/* End */}
          {/* Bread Crumbs Start */}
          <div className='flex items-center py-10 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
            <div className='flex items-center' ><h5 className='text-xs text-blue-400' >Home</h5><RiArrowDropRightLine className='text-xl text-gray-500' /><h5 className='text-xs text-blue-400' >Product</h5><RiArrowDropRightLine className='text-xl text-gray-500' /><h5 className='text-xs text-gray-500' >{product.title}</h5></div>
          </div>
          {/* Bread Crumbs End */}
          <div id='product-information' className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:items-start items-center mb-10 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
            <div className='lg:col-span-5 lg:sticky lg:top-44' >
              <div className='flex gap-2 md:gap-5' >
                <div className='flex flex-col space-y-2 min-w-[70px] 2xl:min-w-[100px] h-full' >
                  {product.images ? product.images.slice(0, 4).map((image, index) =>
                    <div key={index} className='border-[1px] border-gray-300 rounded-lg px-2 py-1 w-fit' ><img src={`${import.meta.env.REACT_APP_INTERNAL_PATH}/${image}`} className='w-10 2xl:w-20' alt='product' /></div>
                  ) : null}
                  <div className='relative border-[1px] border-blue-400 rounded-lg px-2 py-1 w-fit cursor-pointer' ><div onClick={() => setImgModal(true)} className='absolute flex justify-center items-center cursor-pointer left-0 top-0 rounded-lg w-full h-full bg-b3/70 font-semibold text-white' >+4</div><img src={product.images ? `${import.meta.env.REACT_APP_INTERNAL_PATH}/${product.images[0]}` : ''} className='w-10 h-16 2xl:w-20' alt='product' /></div>
                </div>
                <div className='flex relative justify-center items-center border-[1px] border-gray-300 rounded-lg lg:h-96 2xl:h-auto 2xl:py-14 w-full' >
                  {product.threeSixty ? <React360Viewer
                    imagesBaseUrl={`${import.meta.env.REACT_APP_DEV ? import.meta.env.REACT_APP_INTERNAL_PATH : null}/${product.threeSixty}`}
                    imagesCount={36}
                    imagesFiletype="jpg"
                    mouseDragSpeed={5}
                    width={350}
                    height={350}
                  /> : null}
                  {product.rating === 3 ? <div className='absolute top-0 left-4'><div className=' px-3 py-[5px] bg-b9 text-white font-bold text-sm 3xl:text-base rounded-[0px_0px_24px_24px] flex gap-2 items-center'><AiOutlineDollarCircle />Best Value</div></div> : null}
                  {product.rating === 4 ? <div className='absolute top-0 left-4'><div className=' px-3 py-[5px] bg-b9 text-white font-bold text-sm 3xl:text-base rounded-[0px_0px_24px_24px] flex gap-2 items-center'><img src="/svgs/local_fire_department.png" alt="" />Most Popular</div></div> : null}
                  {product.rating === 5 ? <div className='absolute top-0 left-4'><div className=' px-3 py-[5px] bg-b9 text-white font-bold text-sm 3xl:text-base rounded-[0px_0px_24px_24px] flex gap-2 items-center'><img src="/svgs/star_rate_half.png.png" alt="" /> Premium Condition </div></div> : null}
                </div>
              </div>
              <div className='flex flex-col space-y-5 mt-10' >
                <div className='flex items-center space-x-10' ><h5 className='text-sm font-semibold' >Model Number</h5><h5 className='text-sm' >{product.modelNo}</h5></div>
                <div className='flex items-center space-x-24' ><h5 className='text-sm font-semibold' >Item ID</h5><h5 className='text-sm' >{product.itemId}</h5></div>
                <div className='flex flex-col' >
                  <h5 className='text-sm font-semibold' >Fuel Type</h5>
                  <div className='flex flex-wrap gap-2 whitespace-nowrap mt-2' >
                    {product.fuelType === 'electric' && product ? <div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><MdElectricBolt /><h5 className='text-xs' >240v Electric</h5><AiOutlineQuestionCircle /></div> : null}
                    {product.fuelType === 'gas' ? <div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><GiFlame /><h5 className='text-xs' >Gas</h5><AiOutlineQuestionCircle /></div> : null}
                    <div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><MdOutlinePropane /><h5 className='text-xs' >Propane</h5><AiOutlineQuestionCircle /></div>
                    <div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><MdOutlinePropane /><h5 className='text-xs' >Dual Fuel</h5><AiOutlineQuestionCircle /></div>
                  </div>
                </div>

                {product.dryerOption ? <div className='flex flex-col' >
                  <h5 className='text-sm font-semibold' >Dryer Options</h5>
                  <div className='flex space-x-2 mt-2' >
                    {product.dryerOption === 'STACKABLE' ? <div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><RiStackLine /><h5 className='text-xs' >STACKABLE</h5></div> : null}
                    {product.dryerOption === 'STEAM' ? <div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><GiThermometerHot /><h5 className='text-xs' >STEAM</h5></div> : null}
                    {product.dryerOption === 'BOTH' ? <><div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><RiStackLine /><h5 className='text-xs' >STACKABLE</h5></div><div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><GiThermometerHot /><h5 className='text-xs' >STEAM</h5></div></> : null}
                  </div>
                </div> : null}

              </div>
            </div>

            <div className='lg:col-span-7 flex flex-col lg:px-0 px-1 space-y-5 lg:mt-0 mt-4' >
              <h2 className='text-2xl md:text-3xl xl:text-[2rem] leading-8 font-bold lg:w-full' >{product.title}</h2>
              <div className='flex items-center' >
                <h5 className='lg:text-sm text-xs lg:w-80 underline text-b3 font-bold cursor-pointer' >View More Buying Options</h5><div className='flex justify-end w-full' >
                  {product.stock > 0 ? <span className='flex items-center bg-b13 text-white text-xs px-3 rounded-full py-2' >
                    <IoBagCheckOutline className='text-sm mr-1' />In Stock</span> :
                    <span className='flex items-center bg-red-500 text-white text-xs px-3 rounded-full py-2' >
                      <IoCloseOutline className='text-sm mr-1' />Out of Stock</span>
                  }
                </div>
              </div>
              <div className='flex maxsm:flex-col sm:items-center gap-5 whitespace-nowrap' >
                <div className='flex items-center gap-5'>
                  <h4 className='font-bold lg:text-3xl text-xl text-b3 ' >${product.salePrice ? product.salePrice : product.regularPrice}</h4>
                  {product.salePrice ? <strike className="text-lg" >${product.salePrice}</strike> : null}
                </div>
                <div className='flex items-center sm:justify-between sm:w-full gap-5 lg:flex-wrap'>
                  {product.salePrice ? <span className='flex bg-b4 lg:text-xs text-[10px] text-black px-3 py-2 font-semibold rounded-2xl' >${product.regularPrice - product.salePrice} Savings</span> : null}
                  <button className="flex justify-end items-center hover:underline text-b3" ><AiOutlineHeart /><span>Add to favorites</span></button>
                </div>
              </div>
              <div className='flex border justify-between px-3 py-1 w-[250px] rounded-lg'>
                <div className='flex flex-col gap-1'>
                  <span className='font-bold text-sm'>
                    No credit Financing
                  </span>
                  <span className='font-semibold text-[10px]'>
                    Powered by
                  </span>
                </div>
                <img src="/affirm.png" alt="affirm" className='w-[70px]' />
              </div>
              <ul className='flex flex-col mt-5 space-y-2 text-sm' >
                <li>. {product.bullet1}</li>
                <li>. {product.bullet2}</li>
                <li>. {product.bullet3}</li>
                <li>. {product.bullet4}</li>
              </ul>
              <Link to='' className='text-xs font-bold hover:underline cursor-pointer underline' >+ View more</Link>
              <div className='flex items-center lg:space-x-5 space-x-5 lg:mt-4 mt-2' >
                <div className='flex items-center gap-1' >
                  <h4 className='lg:text-sm text-xs font-semibold w-max text-black/50' >Cosmetic Rating</h4><ToolTip color="text-b3" />
                </div>
                <div className='flex items-center' ><StarIconPrinter numberOfTimes={product.rating} /> </div>
              </div>
              {product.salePrice ?
                <div className='lg:flex hidden items-center gap-4 mt-2' >
                  <div className='flex font-semibold text-sm text-black/50' ><h4>Discount</h4></div>
                  <div className='w-52 bg-gray-200 rounded-lg' ><span className='flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-40 h-3' ></span></div>
                  <div className='px-4 py-2 bg-b7 text-white rounded-full'>
                    70 %
                  </div>
                </div> : null}

              <button onClick={() => handleOpenModal("1")} className='flex space-x-3 items-center px-3 py-2 border-[1px] border-b3 rounded-lg w-fit' >
                <img src="/shield.png" alt='' />
                <h6 className='text-sm font-bold w-40' >NeuShield 1 Year Applicance Warranty</h6>
              </button>
              {/* Delivery Card */}
              <div className='flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-3 w-full' >

                <div className={`flex flex-col px-5 py-5 w-full rounded-lg border-2 ${orderType === 'pickup' ? 'border-b10' : 'border-gray-300'} `} >
                  <div className='flex items-center space-x-3' ><BsShopWindow className='text-xl' /><h6 className='font-bold text-sm' >Pickup</h6><div className='flex items-center justify-end w-full' ><span onClick={() => setOrderType('pickup')} className={`px-1 py-1 rounded-full cursor-pointer ${orderType === 'pickup' ? 'bg-b10/20' : 'bg-gray-100'} `} ><GoDotFill className={` ${orderType === 'pickup' ? 'text-b10' : 'text-gray-200'} `} /></span></div></div>
                  <div className='flex flex-col space-y-2 mt-2 text-sm' >
                    <h6 className='text-b10' >Ready Fri, April 26th (EST).</h6>
                    <h6 className='text-gray-500' >Georgetown, Tx</h6>
                    <h6 className='font-bold' >Free</h6>
                  </div>
                </div>

                <div className={`flex flex-col px-5 py-5 w-full rounded-lg border-2 ${orderType === 'home' ? 'border-b10' : 'border-gray-300'} `} >
                  <div className='flex items-center space-x-2' ><BsTruck className='text-3xl' /><h6 className='font-bold text-sm' >Delivery</h6><h6 onClick={() => setChangeZip(true)} className='text-xs w-max text-blue-400 hover:underline cursor-pointer' >Change ZIP</h6><div className='flex items-center justify-end w-full' ><span onClick={() => setOrderType('delivery')} className={`px-1 py-1 rounded-full cursor-pointer ${orderType === 'delivery' ? 'bg-b10/20' : 'bg-gray-100'} `} ><GoDotFill className={` ${orderType === 'delivery' ? 'text-b10' : 'text-gray-200'} `} /></span></div></div>

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
              <button type="button" disabled={product.stock > 0 ? false : true} onClick={AddToCart} className='flex justify-center items-center bg-b7 text-sm text-white py-3 rounded-lg' ><AiOutlineShoppingCart className='text-lg' /><span className="flex items-center font-bold ml-2" >Add To Cart {loading2 ? <img src="/loader-bg.gif" className='w-4 h-4 ml-2' /> : null}</span></button>
              {product.category === 'washer-&-dryer' ? <button type='button' onClick={() => handleOpenModal("2")} className='flex justify-center items-center bg-b3 text-sm text-white py-3 rounded-lg' ><span className="font-bold ml-2" >Complete Your Laundry Set</span></button> : null}

              {/* Quicl FAQs */}
              <div className='flex flex-col space-y-3' >
                {/* First FAQ */}
                <div className='flex items-center space-x-3 border-[1px] px-5 border-gray-200 text-sm text-black py-3 rounded-lg' >
                  <span>
                    <TruckSvg />
                  </span>
                  <div className='flex flex-col' >
                    <h6 className="font-bold ml-2" >Need to Schedule your appliance delivery?</h6>
                    <h6 className="ml-2" >Select your delivery date and time during checkout</h6>
                  </div>
                </div>

                {/* Second FAQ */}
                <div className='flex items-center space-x-3 border-[1px] px-5 border-gray-200 text-sm text-black py-3 rounded-lg' >
                  <span>
                    <BsStarHalf className='w-6 h-6' />
                  </span>
                  <div className='flex flex-col' >
                    <h6 className="font-bold ml-2" >Cosmetic Rating: What does it mean?</h6>
                    <h6 className="ml-2" >All Items work like new. Their Cosmetic Rating refers to their cosmetic appearance (how they look) <button type='button' onClick={() => handleOpenModal("4")} className='text-b3 hover:underline cursor-pointer font-semibold' >Learn More</button></h6>
                  </div>
                </div>
                {/* 3rd FAQ */}
                <div className='flex items-center space-x-3 border-[1px] px-5 border-gray-200 text-sm text-black py-3 rounded-lg' >
                  <span>
                    <img src="/assignment_return.png" alt="assignment_return" className='w-6 h-6' />
                  </span>
                  <button type='button' onClick={() => handleOpenModal("3")} className='flex flex-col' >
                    <h6 className="font-bold ml-2" >Free Curbside Returns</h6>
                    <h6 className="ml-2" >Cancel your order curbside upon delivery free of charge! <Link to="" className='text-b3 font-semibold hover:underline cursor-pointer' >Learn More</Link></h6>
                  </button>
                </div>

              </div>
              {/* Quicl FAQs */}

              {/* Other Product Section */}
              <div className=' rounded-lg bg-[#F8F8F8] p-5'>
                <div class="flex justify-between items-center mb-3" ><h6 className="font-bold" >Other Product Options</h6><Link to="" className="flex items-center hover:underline text-sm text-b3" >View All <BsArrowRightShort /></Link></div>
                <div className='lg:grid grid-cols-3 flex flex-col items-center lg:mt-0 mt-4 lg:space-y-0 space-y-4 lg:gap-x-5' >
                  <OtherProductCard rating={3} />
                  <OtherProductCard rating={4} />
                  <OtherProductCard rating={5} />
                </div>
              </div>

            </div>

          </div>
          {/* New Product Cards */}
          <NewProductCards />
          {/* Faq Accrodions */}
          <div className='flex flex-col items-center mb-5 justify-center pt-14 xl:pt-10 gap-y-3 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
            <FaqAccordion title="Appliance Description" parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='[&>p]:text-sm !mt-0' answer={product.description} chevrown />
            <FaqAccordion title="Specifications" parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='[&>p]:text-sm !mt-0' answer={product.specification} chevrown />
            <FaqAccordion title="Delivery Info" parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='[&>p]:text-sm !mt-0' answer={product.deliveryInfo} chevrown />
          </div>

          {/* 360 Degree Product Section */}
          <div id='360-view' className='flex flex-col gap-5 items-center py-10 lg:py-14 xl:py-20 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto border border-b14 rounded-3xl' >
            <h4 className='text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold' >360° View of This Appliance</h4>
            <div className='mt-5 relative flex justify-center w-full mb-5' >
              {/* <img src="/360appliance.png" alt='product' className='w-[17rem] mx-auto' /> */}
              <React360Viewer
                imagesBaseUrl={`${import.meta.env.REACT_APP_INTERNAL_PATH}/${product.threeSixty}`}
                imagesCount={36}
                imagesFiletype="jpg"
                mouseDragSpeed={5}
                width={350}
                height={350}
              />
              <div className='absolute -bottom-5 left-0 right-0'>
                <img src="/360angle.png" alt='product' className='w-72 mx-auto' />
              </div>
            </div>
            <p className="font-normal" >Rotate <b>360°</b> to see the product from all angles</p>
            <div className='flex border-2 border-gray-[rgba(0,0,0,0.08)] rounded-2xl w-full md:w-2/3 xl:w-1/2' >
              <div className='flex flex-col items-center border-r-[1px] border-gray-300 w-full' >
                <h5 className='text-center border-b-[1px] border-gray-300 text-sm sm:text-base py-4 w-full font-semibold' >#ID</h5>
                <h5 className='flex items-center gap-1 justify-center text-center border-b border-gray-300 text-sm sm:text-base py-4 w-full' ><span className='font-semibold' >Cosmetic Rating </span><ToolTip color="text-black/50" /></h5>
                <h5 className='flex items-center justify-center text-center border-b border-gray-300 text-sm sm:text-base py-4 w-full font-semibold' >Model Number</h5>
                <h5 className='flex items-center gap-1 justify-center text-center text-sm sm:text-base py-4 w-full font-semibold' ><span>Warranty</span> <ToolTip color="text-black/50" /></h5>
              </div>
              <div className='flex flex-col items-center border-l-[1px] border-white w-full' >
                <h5 className='text-center border-b-[1px] border-gray-300 py-4 w-full font-normal' >#{product.itemId}</h5>
                <div className='flex items-center border-b border-gray-300 justify-center py-[15px] w-full' ><StarIconPrinter numberOfTimes={product.rating} /></div>
                <div className='text-center border-b-[1px] border-gray-300 py-4 w-full font-normal' >{product.modelNo}</div>
                <div className='flex items-center space-x-2 justify-center border-gray-300 py-3 w-full' >
                  <div className='flex items-center rounded-md justify-center pl-2 pr-2 sm:pr-8 py-1 space-x-1 border border-gray-300' ><img src="/nueshield.png" alt="nueshield" />
                    <span className='w-full text-xs font-medium break-words ' >NeuShield <br /> 1 Year Warranty</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shop With Confidnce */}
            <div className='max-w-[930px] mt-6 lg:mt-10 mx-auto bg-b11 border-2 border-b14 rounded-3xl p-5 sm:p-8 flex flex-col gap-4'>
              <h3 className='text-xl sm:text-2xl font-medium'>Shop With Confidence.</h3>
              <p className=''>The item in the pictures above is the item you will receive.  Scratch and dent appliances are all unique, so we include 360° pictures and videos for every item we stock. Rotate the picture to Inspect the appliance's cosmetic condition.</p>
            </div>
          </div>

          {/* PAyment Options */}
          <div className='flex flex-col py-10 md:py-14 xl:py-20 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto bg-b8' >
            <h4 className='font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center mb-10 md:mb-14 xl:mb-20' >Payment Options</h4>
            <PaymentOptions item={product} />
          </div>

          {/* Review */}
          <div className='flex flex-col bg-white py-10 lg:py-14 xl:py-20 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
            <div className='flex flex-col gap-3 rounded-md items-center py-8 justify-center bg-b8' >
              <div className='flex mt-2 items-center' >{<StarIconPrinter numberOfTimes={product.rating} />} </div>
              <h3 className='text-[22px]'><span className='font-bold'>Cosmetic Rating:</span> <span className='font-medium'>{product.rating} Stars</span> </h3>
              <p className='font-medium text-[22px]' >What To Expect</p>
              {product.rating === 3 ? <p className='text-sm text-center px-10' >If you are shopping for bargains you are in the right place! 3-star rated appliances get you an open box appliance that works perfectly, with moderate cosmetic damage like scratches or dents at the largest discounted price we offer. Customers purchasing 3 star appliances capitalize on our deepest discounts in exchange for larger cosmetic blemishes while still obtaining a 100% functional appliance.</p> : null}
              {product.rating === 4 ? <p className='text-sm text-center px-10' >Our 4 Star line is for Austin's savviest shoppers! 4-star rated appliances get you an open box appliance that works perfectly, with minor to moderate cosmetic damage like scratches or dents at a great discount. Customers purchasing 4 star cosmetic Cosmetic Rating appliances are generally more accepting of more minor cosmetic blemishes for a deeper discount on the item while still obtaining a 100% functional appliance.</p> : null}
              {product.rating === 5 ? <p className='text-sm text-center px-10' >If your shopping our 5 star appliances then you understand the value of a good deal! 5-star rated appliances get you an open box appliance that works perfectly, with very minor to no cosmetic damage like scratches or dents at a great discount. Our customers purchasing 5 star Cosmetic Cosmetic Rating appliances are generally looking for like new or new appliances while capitalizing on an open box discount vs a "Scratch or Dent" discounted appliance while still obtaining a 100% functional appliance.</p> : null}
            </div>
          </div>

          {/* How it Works */}
          <div id='testimonials-view'>
            <HiwSection learnmore={() => handleOpenModal("1")} />
          </div>

          {/* Reviews Section */}
          <SatisfiedSection title="Our Customers LOVE our Scratch and Dent Discounts!" dots={true} />

          {/* Prodcut Features */}
          <ProductFeatures video={product.featuresVideo} />

          {/* Complete Your Laundery Set */}
          {product.category === 'washer-&-dryer' ? <LaunderySet /> : null}

          {/* Map Section */}
          <MapSection />

          {/* Inspection Score */}
          <InspectionScoreSection />

          {/* Model Buying Options */}
          <ModelBuyingOptionsSection />

          {/* Faq Section */}
          <ProductFaqSection />

          {/* Rlated Products */}
          <div className='flex flex-col py-10 lg:py-14 xl:py-20 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
            <div className='flex flex-col items-center' >
              <h4 className='text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold' >Related Products</h4>
            </div>
            <CosmaticSlider />
          </div>

        </MainLayout >}
    </>
  )
}

export default Product