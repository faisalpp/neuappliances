import React from 'react'
import ReviewExSlider from '../components/ReviewExSlider'

const SatisfiedSection = ({title}) => {
  return (
    <div className='flex flex-col justify-center xl:px-16 lg:px-20 pt-16 pb-10' >
    <h4 className='xl:text-3xl text-2xl font-bold text-center pb-7' >{title}</h4>
     <ReviewExSlider />
   </div>
  )
}

export default SatisfiedSection