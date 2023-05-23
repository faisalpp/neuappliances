import React from 'react'
import { AiFillCheckCircle,AiFillCloseCircle } from 'react-icons/ai'
import MapForm from '../components/MapForm'
import MobMapForm from '../components/MobMapForm'
import MapApi from '../components/MapApi'

const MapSection = () => {
  return (
    <>
          <h4 className='font-bold text-center text-2xl mt-10' >Neu Local Delivery Area</h4>
          <div className='relative flex flex-col justify-center items-center py-10 w-full h-full' >
          <div className='absolute flex items-center space-x-2 bg-white shadow-xl px-5 py-2 rounded-lg' >
              <AiFillCheckCircle className='text-b12' />
              <p className='font-semibold' >Delivery Available 78626</p>
             </div>
             <div className='absolute bottom-10 flex items-center bg-transparent h-52 justify-center w-11/12' >
              <div className='flex justify-center h-fit items-center space-x-2 bg-white shadow-xl px-5 py-2 rounded-lg' >
               <AiFillCloseCircle className='text-red-500' />
               <p className='font-semibold' >Delivery Not Available  712356</p>
              </div>
            </div> 
            <MapForm/>
            <MobMapForm/>
            <MapApi/>
            {/* <div className='bg-red-500 w-11/12 h-[490px] rounded-2xl' ></div> */}
          </div>
    </>
  )
}

export default MapSection