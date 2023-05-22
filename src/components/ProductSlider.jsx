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
    totalSlides={6}
    visibleSlides={1}
    >
    <ButtonNext className='absolute top-28 left-8 z-40'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-400 px-2 py-2 rounded-full text-white'><BsArrowLeftShort className='text-lg'/></div></ButtonNext>
    <Slider>
      <Slide index={0}>
        <img src="p1.png" className='w-full h-full' />
      </Slide>
      <Slide index={1}>
        <img src="p1.png" className='w-full h-full' />
      </Slide>
      <Slide index={2}>
        <img src="p1.png" className='w-full h-full' />
      </Slide>
      <Slide index={3}>
        <img src="p1.png" className='w-full h-full' />
      </Slide>
      <Slide index={4}>
        <img src="p1.png" className='w-full h-full' />
      </Slide>
      <Slide index={5}>
        <img src="p1.png" className='w-full h-full' />
      </Slide>
    </Slider>
   <ButtonBack className='absolute top-28 right-8 z-40'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group'><BsArrowRightShort className='text-xl'/></div></ButtonBack>
  </CarouselProvider>    
    </>
  )
}

export default ProductSlider