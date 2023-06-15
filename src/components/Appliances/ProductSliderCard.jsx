import React from 'react'
import { AiOutlineDollar, AiFillStar } from 'react-icons/ai'
import { BsFire } from 'react-icons/bs'
import ProductSlider from '../ProductSlider'

const ProductSliderCard = ({ title, dicount, type, stars, discount, codmetics }) => {
  const products = [
    {
      image: 'refrigrator.png',
    },
    {
      image: 'refrigrator.png',
    },
    {
      image: 'refrigrator.png',
    },
    {
      image: 'refrigrator.png',
    },
    {
      image: 'refrigrator.png',
    },
    {
      image: 'refrigrator.png',
    },
    {
      image: 'refrigrator.png',
    },
  ];
  const StarIconPrinter = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
      <AiFillStar className='text-b7 text-xl' /> // Render the star icon component for each iteration
    ));

    return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
  };
  return (
    <div className='flex flex-col maxmd:max-w-[330px] relative maxmd:mx-auto bg-white w-full h-auto rounded-md p-4 sm:p-6 md:p-8 lg:p-6 shadow-md' >
      {type === 1 ? <div className='absolute top-0 left-2 flex items-center bg-b9 w-fit px-3 rounded-b-2xl ml-2 justify-center h-6 gap-x-2 text-white' ><AiOutlineDollar /><span className='text-xs' >Best Value</span></div> : null}
      {type === 2 ? <div className='absolute top-0 left-2  flex items-center bg-b3 w-fit px-3 rounded-b-2xl ml-2 justify-center h-7 gap-x-2 text-white' ><BsFire /> <span className='text-xs' >Most Popular</span></div> : null}
      {type === 3 ? <div className='absolute top-0 left-2  flex items-center bg-b7 w-fit rounded-b-2xl ml-2 justify-center px-3 h-7 gap-x-2 text-white' ><BsFire /> <span className='text-xs' >Premium Condition</span></div> : null}
      <div className='flex flex-col items-center justify-center mt-4 w-full' >
        <div className='flex justify-center items-center text-center gap-x-1 text-sm sm:text-base xl:text-[0.98rem]' ><h4 className='font-bold' >{title}:</h4><span className='font-semibold' >{stars} Stars</span></div>
        <div className='flex gap-x-3 mb-4' ><StarIconPrinter numberOfTimes={stars} /></div>
        {type === 1 ? <h4 className='text-b3 font-semibold text-sm' >Moderate Cosmetic Damage</h4> : null}
        {type === 2 ? <h4 className='text-b3 font-semibold text-sm' >Minor Cosmetic Damage</h4> : null}
        {type === 3 ? <h4 className='text-b3 font-semibold text-sm' >very Minor To No Cosmetic Damage</h4> : null}
        <div className='relative pt-5 w-full' >
          <ProductSlider products={products} />
        </div>

        <div className='flex flex-col gap-y-3 w-full mt-10' >
          <div className='flex items-center justify-between gap-x-3' >
            <span className='font-semibold text-[16px]' >Cosmetic Damage</span>
            <span className='text-[rgba(17,16,16,0.64)] text-xs'>
              {codmetics}
            </span>
          </div>
          <div className='flex justify-between items-center mb-4' >
            <span className='font-semibold text-[16px]' >Discount</span>
            <div className='flex items-center gap-x-4' >
              <div className='flex gap-x-1' >
                {discount === 1 ? <><span className='flex bg-b7 w-2 mt-2' ></span><span className='flex bg-b4 w-2 mt-1' ></span><span className='flex bg-b4 w-2 h-5' ></span></> : null}
                {discount === 2 ? <><span className='flex bg-b4 w-2 mt-2' ></span><span className='flex bg-b7 w-2 mt-1' ></span><span className='flex bg-b4 w-2 h-5' ></span></> : null}
                {discount === 3 ? <><span className='flex bg-b4 w-2 mt-2' ></span><span className='flex bg-b4 w-2 mt-1' ></span><span className='flex bg-b7 w-2 h-5' ></span></> : null}
              </div>
              <span className='font-semibold text-xs md:text-sm' >{dicount}</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductSliderCard