import React from 'react'
import { Checkbox } from '@material-tailwind/react'

const NewsLetterSection = () => {
  return (
    <div id="news" className='flex justify-center items-center h-96' >
    <div className='lg:grid grid-cols-12 flex flex-col justify-center items-center py-5 bg-b4 w-10/12 lg:h-72 h-80 rounded-lg' >
     <div className='col-start-2 col-end-6 flex flex-col items-center justify-center' >
      <a className='bg-b3 px-5 py-2 text-xs w-fit rounded-2xl text-white' >STAY UPDATED</a>
      <h4 className='text-4xl font-bold' >Subscribe!</h4>
      <p className='font-normal text-sm text-center lg:w-72' >Get updates on exclusive discounts, experiences and more.</p>
     </div>
     <div className='col-start-7 col-end-12 flex flex-col space-y-2' >
      <h4 className='font-bold text-sm' >Email</h4>
      <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-3 space-x-5 items-center' ><input type="email" className='text-xs py-2 px-2 rounded-md w-72' placeholder='Enter Your Email!' /><a className='bg-b3 px-5 py-2 text-xs rounded-md w-max text-white' >Get Updates</a></div>
      <div className='flex items-center space-x-3 ' ><Checkbox color="gray" ripple={false} /><span className='text-sm' >Yes, sign me up!</span></div>
      <p className='text-xs w-72' >Sign up above to get updates delivered directly to your inbox. See our Privacy Policy.</p>
     </div> 
    </div>
   </div>
  )
}

export default NewsLetterSection