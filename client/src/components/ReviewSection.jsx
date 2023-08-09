import React,{useState,useEffect} from 'react'
import ReviewSlider from './ReviewSlider'
import ReviewSlider2 from './ReviewSlider2'
import { BsArrowRightShort } from 'react-icons/bs'
import axios from 'axios'

const ReviewSection = () => {
  const clientreviews = [
    {
      content: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat...',
      author: 'John Doe',
      review: 3,
    },
    {
      content: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat...',
      author: 'John Doe',
      review: 4,
    },
    {
      content: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat...',
      author: 'John Doe',
      review: 1,
    },
    {
      content: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat...',
      author: 'John Doe',
      review: 2,
    },
    {
      content: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat...',
      author: 'John Doe',
      review: 2,
    }
  ];

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Your Google Places API key
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    // Place ID of the location you want to fetch reviews for
    const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        console.log(response)
        if (response.data.result && response.data.result.reviews) {
          setReviews(response.data.result.reviews);
        }
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);


  return (
    <div className='flex flex-col justify-center w-full 3xl:max-w-1680px mx-auto xl:px-20 2xl:px-32 lg:px-14 px-4 md:px-10 pb-10 lg:pb-16' >
      <h4 className='text-2xl font-extrabold mb-12' >Saving Austinites Money on Appliances Since 2015</h4>
      <div className='space-y-8'>
        <ReviewSlider color="#F5F5F5" clientreviews={reviews} icon="google.png" />
        <ReviewSlider2 color="#ff9b3e14" clientreviews={clientreviews} icon="yelp.png" />
      </div>
      <div className='flex justify-center mt-5' ><a href='/' className='flex items-center border-[1px] border-b3 w-fit px-4 py-3 rounded-md text-b3 font-semibold' ><span className='text-sm' >Shop Austin's Best Appliance Deals</span><BsArrowRightShort className='text-2xl' /></a></div>
    </div>
  )
}

export default ReviewSection