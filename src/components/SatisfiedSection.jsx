import React from 'react'
import ReviewExSlider from '../components/ReviewExSlider'

const SatisfiedSection = ({ title }) => {
  const clientreviews = [
    {
      description: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet. Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet.',
      author: 'John Doe',
      review: 3,
    },
    {
      description: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet. Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet.',
      author: 'John Doe',
      review: 4,
    },
    {
      description: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet. Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet.',
      author: 'John Doe',
      review: 1,
    },
    {
      description: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet. Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet.',
      author: 'John Doe',
      review: 2,
    },
    {
      description: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet. Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet.',
      author: 'John Doe',
      review: 2,
    }
  ];
  return (
    <div className=' flex flex-col justify-center max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto py-10 lg:py-16' >
      <h4 className='xl:text-3xl text-2xl font-bold text-center pb-7' >{title}</h4>
      <div className="relative" >
        <ReviewExSlider clientreviews={clientreviews} />
      </div>
    </div>
  )
}

export default SatisfiedSection