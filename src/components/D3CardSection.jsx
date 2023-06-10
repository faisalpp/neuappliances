import React from 'react'
import {  BsArrowRightShort } from 'react-icons/bs'
import D3Cards from './Carousel/D3Cards';
import { v4 as uuidv4 } from 'uuid'
import PproductCard from './PproductCard';

const D3CardSection = () => {

  let cards = [
    {
      key: uuidv4(),
      content: (
        <PproductCard type={1} stars={3} discount={1} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <PproductCard type={2} stars={2} discount={2} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <PproductCard type={3} stars={5} discount={3} />
      )
    },

  ];

  return (

    <div className='grid xl:grid-cols-2 gap-14 2xl:gap-20 3xl:gap-32 max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto py-14 lg:py-20'>
      <div className='flex flex-col space-y-5 w-full' >
        <div className='flex space-x-2' ><img src="starss.png" className='h-5' /><p className='text-[16px]'>We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic grades get Deeper Discounts! You pick your level of savings!</p></div>
        <div className='flex space-x-2' ><img src="pig.png" className='h-5' /><p className='text-[16px]'>We provide our Austin neighbors the best savings on  floor models , returns and scratch and dent appliances. </p></div>
        <div className='flex space-x-2' ><img src="circle.png" className='h-5' /><p className='text-[16px]'>Every appliance we sell is tested with our 100-point inspection process. We ensure every appliance functions the way it is supposed to and provide you the best discounts possible.</p></div>
        <div className='flex space-x-2' ><img src="pin.png" className='h-5' /><p className='text-[16px]'>Discover why our Austin neighbors trust us to provide great appliances at better savings. Lets find the perfect appliance for your needs at an unbeatable price by clicking below.</p></div>
        <div className='flex lg:justify-start' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-2 rounded-md text-b3 font-semibold' ><span className='text-sm' >Get Our Best Deals</span><BsArrowRightShort className='text-2xl' /></a></div>
      </div>
      
      <div className='xl:flex hidden w-full xl:mt-0 mt-14 parent-container' >
        <D3Cards
          cards={cards}
          height="400px"
          width="70%"
          margin="0 auto"
          offset={1}
          showArrows={false}
        />
      </div>
      <div className='xl:hidden lg:hidden md:hidden sm:hidden w-full xl:mt-0 mt-14 parent-container' >
        <D3Cards
          cards={cards}
          height="400px"
          width="95%"
          margin="0 auto"
          offset={1}
          showArrows={false}
        />
      </div>
      <div className='xl:hidden lg:block w-full xl:mt-0 mt-14 parent-container' >
        <D3Cards
          cards={cards}
          height="400px"
          width="50%"
          margin="0 auto"
          offset={1}
          showArrows={false}
        />
      </div>

    </div>
  )
}

export default D3CardSection