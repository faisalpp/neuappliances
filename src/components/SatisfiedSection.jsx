import React from 'react'
import ReviewExSlider from '../components/ReviewExSlider'

const SatisfiedSection = ({title}) => {
  return (
    <div className='flex flex-col justify-center xl:px-16 px-5 py-10' >
    <h4 className='xl:text-3xl text-2xl font-bold text-center' >{title}</h4>
     <ReviewExSlider  color="#ff9b3e20" />
   </div>
  )
}

export default SatisfiedSection