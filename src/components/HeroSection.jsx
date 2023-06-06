import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const HeroSection = () => {
  return (
    <>
          <div className='lg:grid xl:grid flex flex-col lg:space-y-0 space-y-10 grid-cols-12 items-center py-20 px-[8.33%] bg-b5 auto' >
          <div className='col-start-1 col-end-7 flex flex-col space-y-10' >
           <h4 className='xl:text-6xl lg:text-5xl text-3xl lg:text-start text-center font-extrabold' >Austin's Best Deals For Scratch & Dent Appliances</h4>
           <div className='flex lg:justify-start justify-center' ><a href="#" className='flex text-white rounded-md space-x-2 font-semibold items-center justify-center bg-b7 w-56 h-[56px] text-sm' ><AiOutlineShoppingCart className='text-xl' /><span>Discover The Savings</span></a></div>
          </div>  
          <div className='col-start-8 col-end-12 flex justify-center xl:pr-16 ' >
            <div className='relative' >
              <img src="45.png" className='absolute xl:-top-14 xl:-left-10 lg:-top-10 lg:-left-10 xl:w-[152px] xl:h-[152px] lg:w-[125px] lg:h-[125px] h-20 -top-8 -left-5' />
              {/* <img src="hero-img.png" className='xl:w-[640] lg:h-96 xl:h-[504px] h-72 ' /> */}
              <iframe className='xl:w-[620px] xl:h-[504px] lg:h-96 lg:w-[430px] h-52 w-80 rounded-2xl ' src="https://www.youtube.com/embed/OzCAGd4YVbI" title="Introducing our Next Generation of High End Kitchen Appliances | Miele" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
    </>
  )
}

export default HeroSection