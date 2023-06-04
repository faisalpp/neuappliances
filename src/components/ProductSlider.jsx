import React from 'react'
import { CarouselProvider, Slider, Slide,ButtonBack,ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';


const ProductSlider = () => {
  return (
    <>
    <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={60}
    totalSlides={6}
    visibleSlides={1}
    >
    <ButtonNext className='absolute xl:top-32 top-28 xl:left-16 lg:left-5 left-10 z-40'><div className='flex bg-black/30 hover:bg-cyan-400 px-2 py-2 rounded-full text-white'><BsArrowLeftShort className='text-lg'/></div></ButtonNext>
    <Slider>
      <Slide index={0}>
        <div className='flex w-full justify-center' ><img src="p1.png" className='xl:w-1/2 lg:w-44 w-40 h-full' /></div>
      </Slide>
      <Slide index={1}>
      <div className='flex w-full justify-center' ><img src="p1.png" className='xl:w-1/2 lg:w-44 w-40 h-full' /></div>
      </Slide>
      <Slide index={2}>
      <div className='flex w-full justify-center' ><img src="p1.png" className='xl:w-1/2 lg:w-44 w-40 h-full' /></div>
      </Slide>
      <Slide index={3}>
      <div className='flex w-full justify-center' > <img src="p1.png" className='xl:w-1/2 lg:w-44 w-40 h-full' /></div>
      </Slide>
      <Slide index={4}>
      <div className='flex w-full justify-center' ><img src="p1.png" className='xl:w-1/2 lg:w-44 w-40 h-full' /></div>
      </Slide>
      <Slide index={5}>
      <div className='flex w-full justify-center' ><img src="p1.png" className='xl:w-1/2 lg:w-44 w-40 h-full' /></div>
      </Slide>
    </Slider>
   <ButtonBack className='absolute xl:top-32 top-28 xl:right-16 lg:right-5 right-10 z-40'><div className='flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group'><BsArrowRightShort className='text-xl'/></div></ButtonBack>
  </CarouselProvider>    
    </>
  )
}

export default ProductSlider