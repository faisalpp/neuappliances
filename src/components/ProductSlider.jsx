import React from 'react'
import { CarouselProvider, Slider, Slide,ButtonBack,ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';


const ProductSlider = () => {
  return (
    <>
    <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={80}
    totalSlides={2}
    visibleSlides={1}
    >
   <ButtonBack className='absolute top-28 left-8 z-40'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group'><BsArrowLeftShort className='text-xl'/></div></ButtonBack>
    <Slider>
      <Slide index={0}>
        <img src="p1.png" className='w-full h-full' />
      </Slide>
      <Slide index={1}>
        <img src="p1.png" className='w-full h-full' />
      </Slide>
    </Slider>
    <ButtonNext className='absolute top-28 right-8 z-40'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-400 px-2 py-2 rounded-full text-white'><BsArrowRightShort className='text-lg'/></div></ButtonNext>
  </CarouselProvider>    
    </>
  )
}

export default ProductSlider