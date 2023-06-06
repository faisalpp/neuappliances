import React from 'react'
import {AiOutlineQuestionCircle,AiFillStar} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'


const ProductCard3 = ({isGrid,product}) => {

  const StarIconPrinter = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
      <AiFillStar className='text-b7 text-lg' /> // Render the star icon component for each iteration
    ));
  
    return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
  };

  return (
    <>

    {isGrid ? <NavLink to="/product" ><div className='flex flex-col items-center border-[1px] border-gray-200 rounded-2xl w-12/12 py-5 cursor-pointer' >
     <div className='relative' >
     <img src="p1.png" />
     <span className='absolute -top-2 -right-7 bg-b7 rounded-2xl font-semibold px-5 py-2 text-xs' >27% OFF</span>
     </div>
     <p className='font-semibold text-sm px-5' >White GE 1.7 cu. ft. Over the Range Microwave with Convenience Cooking Controls for long text</p>
     <div className='flex space-x-20 mt-5' ><h4 className='text-b3 font-semibold' >$499</h4><div className='flex justify-end w-full space-x-2 items-center' ><strike>$499</strike><span className='bg-b4 rounded-xl font-semibold px-2 py-1 text-xs' >-27%</span></div></div>
     <div className='flex space-x-20 mt-4' ><div className='flex items-center' ><h4 className='text-sm font-semibold min-w-20 w-20' >Cosmetic Rating</h4><AiOutlineQuestionCircle/></div><StarIconPrinter numberOfTimes={5} /> </div>
       <div className='flex items-center space-x-10 mt-2' >
        <div className='flex font-semibold text-sm' ><h4>Discount</h4>&nbsp;%</div>
        <div className='w-[150px] bg-gray-100 rounded-lg' ><span className='flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-28 h-2' ></span></div>
       </div>
    </div></NavLink>:
    
    <NavLink to="/product" ><div className='flex lg:space-x-10 space-x-2 border-[1px] border-gray-200 rounded-2xl w-full lg:py-8 py-5 lg:px-5 px-2 cursor-pointer' >
     <div className='relative' >
     <img src="p1.png" class="lg:w-52 w-52" />
      <span className='absolute lg:flex hidden lg:-top-5 -top-4 lg:right-0 right-0 bg-b7 rounded-2xl font-semibold lg:px-5 px-4 py-2 lg:text-xs text-[9px]' >50% OFF</span>
     </div>

     <div className='flex flex-col lg:px-5 px-1' >
      <div className='relative' >
      <div className='absolute -top-3 lg:hidden flex justify-end w-full h-fit' ><span className='lg:hidden bg-b7 rounded-2xl font-semibold lg:px-5 px-4 py-2 lg:text-xs text-[9px]' >50% OFF</span></div> 
       <p className='font-semibold lg:text-lg text-xs lg:w-96' >White GE 1.7 cu. ft. Over the Range Microwave with Convenience Cooking Controls for long text</p>
      </div>
     
     <div className='flex items-center lg:mt-5 mt-2 space-x-10'  ><h4 className='text-b3 font-semibold lg:text-[16px] text-xs' >$279.00</h4><div className='flex space-x-2 items-center lg:text-[16px] text-xs' ><strike>$279.00</strike><span className='bg-b4 rounded-xl font-semibold px-2 py-1 text-xs' >- 27%</span></div></div>
     <div className='flex items-center lg:space-x-16 space-x-5 lg:mt-4 mt-2' ><div className='flex items-center' ><h4 className='lg:text-sm text-xs font-semibold w-max' >Cosmetic Rating</h4><AiOutlineQuestionCircle/></div><div className='flex mt-2 items-center' ><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /></div></div>
       <div className='lg:flex hidden items-center space-x-14 mt-2' >
        <div className='flex font-semibold text-sm' ><h4>Discount</h4>&nbsp;%</div>
        <div className='w-full bg-gray-100 rounded-lg' ><span className='flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-32 h-2' ></span></div>
       </div>
       </div>
    </div></NavLink>}
    </>
  )
}

export default ProductCard3