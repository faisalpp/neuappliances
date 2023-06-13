import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';


const ProductSlider = ({ products }) => {
  console.log(products);
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  const PrevButton = ({ onClick }) => (
    <button onClick={onClick} className='absolute top-0 bottom-0 flex items-center xl:left-16 lg:left-5 left-10 z-40 pointer-events-none'>
      <div className='flex bg-black/30 hover:bg-cyan-400 px-2 py-2 rounded-full text-white pointer-events-auto'>
        <BsArrowLeftShort className='text-xl' />
      </div>
    </button>
  );

  const NextButton = ({ onClick }) => (
    <button onClick={onClick} className='absolute top-0 bottom-0 flex items-center xl:right-16 lg:right-5 right-10 z-40 pointer-events-none'>
      <div className='flex bg-black/30 hover:bg-cyan-400 px-2 py-2 rounded-full text-white pointer-events-auto'>
        <BsArrowRightShort className='text-xl' />
      </div>
    </button>
  );
  return (
    <>
      <Slider {...settings} prevArrow={<PrevButton />} nextArrow={<NextButton />} className='relative'>
        {products.map((product, index) => (
          <div key={index}>
            <div className='flex w-full justify-center' ><img src={product.image} className='xl:w-1/2 lg:w-44 w-40 h-full mx-auto' alt='refrigrator' /></div>
          </div>
        ))}
      </Slider >
    </>
  )
}

export default ProductSlider