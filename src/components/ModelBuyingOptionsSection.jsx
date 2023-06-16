import React from 'react'
import ModelBuyingOptionCard from './ModelBuyingOptionCard'
import { AiFillStar, AiOutlineDollarCircle, AiOutlineStar } from 'react-icons/ai'
import { FaFire } from 'react-icons/fa'

const ModelBuyingOptionsSection = () => {
  return (
    <>

      <div className='py-14 xl:py-20 items-center w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-[180px] mx-auto' >
        <h4 className='text-2xl 2xl:text-3xl font-bold text-center' >Buying Options for Model Number WF45B6300AC</h4>


        <div className='overflow-x-auto'>
          <div className='flex flex-col justify-center pt-14 xl:pt-20 items-center w-full maxmd:w-[1000px]' >

            <div className='flex border border-gray-200 w-full rounded-md h-full' >


              {/* Specifications */}
              <div className='flex flex-col items-center justify-end h-12/12 whitespace-nowrap mb-[90px]' >

                <div className='flex flex-col gap-7 px-6 2xl:pl-6 pr-12' >
                  <h6 className='text-sm xl:text-base font-bold' >Cosmetic Ratings</h6>
                  <h6 className='text-sm xl:text-base font-bold' >Price</h6>
                  <h6 className='text-sm xl:text-base font-bold' >Model Number</h6>
                  <h6 className='text-sm xl:text-base font-bold' >ID #</h6>
                  <h6 className='text-sm xl:text-base font-bold' >Cosmetic Condition</h6>
                  <h6 className='text-sm xl:text-base font-bold' >Mechanical Test</h6>
                  <h6 className='text-sm xl:text-base font-bold' >Inspections</h6>
                  <h6 className='text-sm xl:text-base font-bold' >Warranty</h6>
                  <h6 className='text-sm xl:text-base font-bold' >Class</h6>
                </div>

              </div>

              <div className='flex flex-col border border-t-0 border-r-0 border-b-0 w-full border-gray-200' >

                <div className='py-3'>
                  <div className='flex justify-center text-sm w-full font-semibold' ><h5>White GE 1.7 cu. ft. Over the Range Microwave with Convenience Cooking Controls for long text</h5></div>
                </div>

                <div className='flex justify-center border-t' >
                  <ModelBuyingOptionCard active="bg-b8" cosmaticcondition="Moderate Cosmetic Damage" bestValue={<span className='flex items-center bg-b9 rounded-2xl px-4 py-1 text-xs xl:text-sm' ><AiOutlineDollarCircle className='mr-1' /> Best Value</span>} />
                  <ModelBuyingOptionCard cosmaticcondition="Minor Cosmetic Damage" bestValue={<span className='flex items-center bg-b3 rounded-2xl px-4 py-1 text-xs xl:text-sm' ><FaFire className='mr-1' />Most Popular</span>} />
                  <ModelBuyingOptionCard cosmaticcondition="Very Minor- No Cosmetic" bestValue={<span className='flex items-center bg-b7 rounded-2xl px-4 py-1 text-xs xl:text-sm' ><AiFillStar className='mr-1 text-white' />Premium Condition</span>} />
                </div>


              </div>

            </div>
          </div>
        </div>
        <div className='py-5 text-center' ><button type='button' className='text-b7 font-semibold mt-5' >GO View More Buying Options</button></div>
      </div>
    </>
  )
}

export default ModelBuyingOptionsSection