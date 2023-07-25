import React, { useEffect, useState } from 'react'
import StayLoopSlider from './StayLoopSlider'
import { BsArrowRightShort } from 'react-icons/bs'
import {getSingleVideoMedia} from '../api/frontEnd'
import {Link} from 'react-router-dom'

const LoopSection = () => {

  const [loopVideo,setLoopVideo] = useState([])
  const [video,setVideo] = useState('');

  useEffect(() => {
    const GetSingleVideoMedia = async () => {
      const data = {section:'stay-in-loop-videos'}
        const res = await getSingleVideoMedia(data);
        console.log(res)
        if(res.status === 200){
          setLoopVideo(res.data.media)
          setVideo(res.data.media[0].url)
        }
    }
    GetSingleVideoMedia()
  },[])

  return (
    // <div className='flex flex-col mt-12 3xl:max-w-1680px px-120px mx-auto' >
    <div className='flex flex-col mt-10 lg:mt-12 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
      <div className='flex flex-col justify-center space-y-3 items-center w-full' >
        <h4 className='lg:text-4xl xl:text-4xl text-2xl font-bold text-center' >Stay In The Loop</h4>
        <p className='xl:text-xl lg:text-xl text-sm font-medium text-center lg:w-7/12 xl:w-[990px] w-11/12' >Keep up with our videos about appliances we sell, New stock at our outlet store, product reviews,  sales and much more!</p>
      </div>

      <div className='py-10 lg:py-16 lg:mb-0' >
        {loopVideo.length > 0 ? <video controls className='col-start-1 col-end-6 object-cover w-full rounded-2xl 2xl:w-full xl:h-[651px] xl:w-full lg:w-full h-72 lg:h-[480px] md:w-full md:h-[400px]' src={video} />:null}
        <div>
          <StayLoopSlider loopVideo={loopVideo} setLoopVideo={setLoopVideo} setVideo={setVideo} />
        </div>
        <div className='flex justify-center mt-10 lg:mt-16' ><Link to='/stay-in-loop' className='flex items-center border-[1px] border-b3 w-fit px-4 py-2 rounded-md text-b3 font-semibold' ><span className='text-sm' >View All Videos</span><BsArrowRightShort className='text-2xl' /></Link></div>
      </div>

    </div>
  )
}

export default LoopSection