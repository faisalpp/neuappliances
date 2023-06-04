import React from 'react'
import {AiOutlineDollar,AiFillStar,AiOutlineCheckCircle} from 'react-icons/ai'
import {IoIosArrowForward} from 'react-icons/io'
import {BsFire} from 'react-icons/bs'
import ProductSlider from './ProductSlider'

const ProductCard = ({type,stars}) => {
  const StarIconPrinter = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
      <AiFillStar className='text-b7 text-lg' /> // Render the star icon component for each iteration
    ));
  
    return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
  };
  return (
    <div className='flex flex-col bg-white xl:w-[460px] lg:w-[360px] w-11/12 h-auto rounded-md pb-10 shadow-md' >
        {type == 1 ?<div className='flex items-center bg-b9 w-fit px-3 rounded-b-2xl ml-3 justify-center h-6 space-x-2 text-white' ><AiOutlineDollar/><span className='text-xs' >Best Value</span></div>:null}
        {type == 2 ?<div className='flex items-center bg-b3 w-fit px-3 rounded-b-2xl ml-3 justify-center h-7 space-x-2 text-white' ><BsFire/> <span className='text-xs' >Most Popular</span></div>:null}
        {type == 3 ?<div className='flex items-center bg-b7 w-fit rounded-b-2xl ml-3 justify-center px-3 h-7 space-x-2 text-white' ><BsFire/> <span className='text-xs' >Premium Condition</span></div>:null}
        <div className='flex flex-col items-center justify-center mt-4' >
           <div className='flex justify-center items-center text-center space-x-1 text-lg' ><h4 className='font-bold' >Cosmetic Rating:</h4><span className='font-semibold' >{stars} Stars</span></div> 
           <div className='flex space-x-3 mt-2' ><StarIconPrinter numberOfTimes={stars} /></div>
           <h4 className='text-b9 font-semibold text-sm mt-3' >Moderate Cosmetic Damage</h4>
           <div className='flex items-center mt-2 space-x-1 bg-b10 rounded-xl px-2 py-1 text-white' ><AiOutlineCheckCircle/><span className='text-xs' >100% Functional</span></div>
           <div className='relative pt-5 w-full' >
            <ProductSlider />
           </div>
           
           <div className='flex flex-col space-y-3' >
            <div className='flex space-x-3' ><span className='font-semibold text-[16px]' >Cosmetic Damage</span><span>Moderate</span></div>
            <div className='flex space-x-20' >
              <span className='font-semibold text-[16px]' >Discount</span>
              <div className='flex space-x-4 h-5' >
                <div className='flex space-x-1' >
                 <span className='flex bg-b4 w-2 mt-2' ></span>
                 <span className='flex bg-b4 w-2 mt-1' ></span>
                 <span className='flex bg-b4 w-2 h-5' ></span>
                </div>
                <span className='font-semibold text-sm' >Massive</span>
              </div>
            </div>
            <div className='flex space-x-5' >
             <div className='text-sm space-y-2' >
              <div className='flex' ><span>Mechanical Test</span></div>
              <div className='flex' ><span>Inspection</span></div>
              <div className='flex' ><span>Warranty</span></div>
              <div className='flex' ><span>Class</span></div>
             </div>
             <div className='text-sm space-y-2' >
              <div className='flex space-x-1 items-center' ><AiOutlineCheckCircle className='text-b6' /><h4>100%</h4></div>
              <div className='flex space-x-1 items-center' ><AiOutlineCheckCircle className='text-b6' /><h4>Passed</h4></div>
              <div className='flex space-x-1 items-center' ><span>1 Year Warranty</span></div>
              <div className='flex space-x-1 items-center' ><span>Open Box / Scratch & Dent</span></div>
             </div>
            </div>
            <a className='flex items-center justify-center space-x-2 cursor-pointer text-white text-[16px] bg-b7 h-10 rounded-md hover:underline' ><span>Shop 3 Star Products</span><IoIosArrowForward className='text-xl' /></a>
           </div>
        </div>
    </div>
  )
}

export default ProductCard