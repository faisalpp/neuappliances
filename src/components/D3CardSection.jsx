import React from 'react'
import { BsPiggyBank,BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5';
import Carousel from './Carousel/Carousel';
import Card from './Carousel/Card';
import {v4 as uuidv4} from 'uuid'
import ProductCard from '../components/ProductCard'
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
    
    <div className='flex xl:flex-row flex-col items-center py-20 xl:space-x-28 space-x-10 px-[8.33%]'>
     <div className='flex flex-col space-y-5 xl:w-1/2 w-full' >
       <div className='flex space-x-2 items-center' ><img src="pig.png" className='h-5' /><p className='text-[16px]'>We provide our Austin neighbors the best savings on  floor models , returns and scratch and dent appliances. </p></div>
       <div className='flex space-x-2' ><AiOutlineCheckCircle className='text-5xl' /><p className='text-[16px]'>Every appliance we sell is tested with our 100-point inspection process. We ensure every appliance functions the way it is supposed to and provide you the best discounts possible.</p></div>
       <div className='flex space-x-2' ><IoLocationOutline className='text-5xl' /><p className='text-[16px]'>Discover why our Austin neighbors trust us to provide great appliances at better savings. Lets find the perfect appliance for your needs at an unbeatable price by clicking below.</p></div>
       <div className='flex lg:justify-start justify-center' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-2 rounded-md text-b3 font-semibold' ><span className='text-sm' >Get Our Best Deals</span><BsArrowRightShort className='text-2xl' /></a></div>
     </div>
     <div className='xl:w-1/2 w-full xl:mt-0 mt-14 parent-container' >
     <Carousel
        cards={cards}
        height="400px"
        width="70%"
        margin="0 auto"
        offset={5}
        showArrows={false}
      />
     </div>
    </div>
  )
}

export default D3CardSection