import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import FaqAccordion from './FaqAccordion';


const InspectionScoreSection = () => {
  return (
    <>
      <div className='flex items-center flex-col bg-b8 py-10 lg:py-14 xl:py-20 w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >

        <div className='flex flex-col w-full' >
          <div className='flex flex-col space-y-4 w-full items-center' >
            <h4 className='text-2xl font-bold text-center' >Our 100-Point Quality Inspections Score</h4>
            <p className='text-center w-full md:w-2/3 font-normal' >Quality matters. That’s why every product we sell is run through our extensive 100-point checklist.Every product you see meets perfect scores for Cosmetic Rating, quality, performance, and more</p>

            {/* CArd */}
            <div className='flex flex-col rounded-lg px-5 py-5 bg-white w-full md:w-2/3' >
              <h4 className='text-xl font-semibold' >Our Quality Control</h4>
              {/* Contaienr */}
              <div className='flex flex-col space-y-4 mt-4' >

                {/* Inspection card long */}
                <div className='flex items-center px-5 py-4 rounded-md bg-b8' >
                  <div className='flex items-center justify-between w-full text-sm font-bold' ><h4 className='' >Cosmetic Inspection</h4><div className='flex items-center justify-end' ><div className='flex items-center space-x-3' ><AiOutlineCheckCircle className='text-b12 text-xl' /><h6 className='font-medium font-sm' >Passed</h6></div></div></div>
                </div>
                {/* Inspection card long */}
                <div className='flex items-center px-5 py-4 rounded-md bg-b8' >
                  <div className='flex items-center justify-between w-full text-sm font-bold' ><h4 className='' >Mechanical Inspection</h4><div className='flex items-center justify-end' ><div className='flex items-center space-x-3' ><AiOutlineCheckCircle className='text-b12 text-xl' /><h6 className='font-medium font-sm' >Passed</h6></div></div></div>
                </div>
                {/* Inspection card long */}
                <div className='flex items-center px-5 py-4 rounded-md bg-b8' >
                  <div className='flex items-center justify-between w-full text-sm font-bold' ><h4 className='' >Final QC Checks</h4><div className='flex items-center justify-end' ><div className='flex items-center space-x-3' ><AiOutlineCheckCircle className='text-b12 text-xl' /><h6 className='font-medium font-sm' >Passed</h6></div></div></div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Inspection Guide */}
        <FaqAccordion title="Product&nbsp;Description" parent='w-full md:w-2/3 mt-2 bg-b3 text-white bg- px-4 py-3 rounded-xl h-auto' icon='text-xl' textStyle='font-medium text-sm' child='[&>p]:text-sm' answer='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni pariatur assumenda, incidunt possimus alias illo nesciunt nemo at accusantium ad rem ipsum, rerum saepe a! Itaque qui officia quis totam?' isExpand={true} />

      </div>
    </>
  )
}

export default InspectionScoreSection