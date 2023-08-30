import React,{useState,useEffect} from 'react'
import ReviewSlider from './ReviewSlider'
import ReviewSlider2 from './ReviewSlider2'
import { BsArrowRightShort } from 'react-icons/bs'
import {GetGoogleReviews,getYelpReviews} from '../api/frontEnd'
import axios from 'axios'

const ReviewSection = () => {


  const [reviews, setReviews] = useState([]);

  const gg = async () => {
    const res =  await GetGoogleReviews();
    console.log(res.data.reviews)
    if(res.status === 200){
      setReviews(res.data.reviews);
    }else{
      setReviews([])
    }
  }

  useEffect(() => {
    gg()
  }, []);


  const [yelpReviews, setYelpReviews] = useState([]);
  const fetchYelpReviews = async () => {
     const res = await getYelpReviews();
     console.log(res)
     if(res.status === 200){
      setYelpReviews(res.data.reviews)
     } else{
      setYelpReviews([])
     }
  }

  useEffect(() => {

    fetchYelpReviews();
  }, []);


  return (
    <div className='flex flex-col justify-center w-full 3xl:max-w-1680px mx-auto xl:px-20 2xl:px-32 lg:px-14 px-4 md:px-10 pb-10 lg:pb-16' >
      <h4 className='text-2xl font-extrabold mb-12' >Saving Austinites Money on Appliances Since 2015</h4>
      <div className='space-y-8'>
      <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div class="elfsight-app-e353e15d-00c0-408e-a088-0d639b57d70f"></div>
<div class="elfsight-app-a9c6c21c-6d3f-4b27-9d75-ed5d69605c15"></div>
        {/* <ReviewSlider color="#F5F5F5" clientreviews={reviews} icon="google.png" /> */}
        {/* <ReviewSlider2 color="#ff9b3e14" clientreviews={yelpReviews} icon="yelp.png" /> */}
      </div>
      <div className='flex justify-center mt-5' ><a href='/' className='flex items-center border-[1px] border-b3 w-fit px-4 py-3 rounded-md text-b3 font-semibold' ><span className='text-sm' >Shop Austin's Best Appliance Deals</span><BsArrowRightShort className='text-2xl' /></a></div>
    </div>
  )
}

export default ReviewSection