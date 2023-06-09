import React from 'react'
import ReviewExSlider from '../components/ReviewExSlider'

const SatisfiedSection = ({ title, dots, SectionStyle }) => {
  const clientreviews = [
    {
      description: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet. Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet.',
      author: 'John Doe',
      review: 4,
    },
    {
      description: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet. Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet.',
      author: 'John Doe',
      review: 4,
    },
    {
      description: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet. Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet.',
      author: 'John Doe',
      review: 4,
    },
    {
      description: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet. Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet.',
      author: 'John Doe',
      review: 4,
    },
    {
      description: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet. Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet.',
      author: 'John Doe',
      review: 4,
    }
  ];
  return (
    <div className={`flex flex-col justify-center 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-[112px] mx-auto py-10 lg:py-16 xl:py-20 2xl:py-120px ${SectionStyle} ${dots ? 'mb-7' : ''}`} >
      {
        title ?
          <h2 className='text-xl lg:text-2xl xl:text-3xl 2xl:text-32px font-bold text-center pb-7 xl:pb-20' >{title}</h2>
          : null
      }
      <div className="relative" >
        <ReviewExSlider clientreviews={clientreviews} dots={dots} />
      </div>
    </div>
  )
}

export default SatisfiedSection