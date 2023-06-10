import React from 'react'
import ReviewExSlider from '../components/ReviewExSlider'

const SatisfiedSection = ({ title }) => {
  return (
    <div className=' flex flex-col justify-center xl:px-[8%] md:px-[7.2%] py-10 lg:py-16' >
      <h4 className='xl:text-3xl text-2xl font-bold text-center pb-7' >{title}</h4>
      <div className="relative" >  
      <ReviewExSlider/>
      </div>
    </div>
  )
}

export default SatisfiedSection