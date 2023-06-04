import React from 'react'
import {AiOutlineQuestionCircle,AiFillStar} from 'react-icons/ai'

const ProductCard2 = ({stars}) => {
  const StarIconPrinter = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
      <AiFillStar className='text-b7 text-lg' /> // Render the star icon component for each iteration
    ));
    return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
  }
  return (
    <>
    <div className='relative flex flex-col border-2 border-gray-100 rounded-lg bg-white py-10 xl:px-5 xl:w-[340px] xl:h-[540px] lg:w-[340px] lg:px-5' >
      <span className='absolute top-0 right-0 bg-b4 rounded-2xl mt-2 mr-1 px-4 py-2 text-xs font-bold ' >50% Off</span>
      <div className='flex w-full justify-center' ><img src="p1.png" className=' xl:w-54 h-full' /></div>
      <div className='flex flex-col space-y-3 xl:mt-6 mt-3' >
       <p className='font-semibold font-reg xl:text-[16px] text-sm' >White GE 1.7 cu. ft. Over the Range Microwave with Convenience Cooking Controls for long text</p>
       <div className='flex' ><h4 className='text-b3 font-semibold' >$279.00</h4><div className='flex justify-end w-full space-x-2 items-center' ><strike>$279.00</strike><span className='bg-b4 rounded-xl font-semibold px-2 py-1 text-xs' >- 27%</span></div></div>
       <div className='flex items-center space-x-2' ><div className='flex items-center' ><h4 className='text-sm font-semibold' >Cosmetic Rating</h4><AiOutlineQuestionCircle/></div><div className='flex mt-2 items-center' ><StarIconPrinter numberOfTimes={stars} /> </div></div>
       <div className='flex items-center space-x-10' >
        <div className='flex font-semibold text-sm' ><h4>Discount</h4>&nbsp;%</div>
        <div className='w-[100px] bg-gray-100 rounded-lg' ><span className='flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-20 h-2' ></span></div>
       </div>
      </div>
    </div>
    </>
  )
}

export default ProductCard2