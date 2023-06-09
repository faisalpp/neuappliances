import React from 'react'
import ReviewExSlider from '../components/ReviewExSlider'

const SatisfiedSection = ({ title }) => {
  return (
    <div className='flex flex-col justify-center px-4 md:px-10 xl:px-16 lg:px-20 py-10 lg:py-16' >
      <h4 className='xl:text-3xl text-2xl font-bold text-center pb-7' >{title}</h4>
      <ReviewExSlider />
    </div>
  )
}

export default SatisfiedSection