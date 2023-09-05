import React from 'react'
import MainLayout from '../layout/MainLayout'
import { BsArrowRightShort } from 'react-icons/bs'

const ResetPassword = () => {
  return (
    <>

      <MainLayout>

        <div className='flex flex-col space-y-10 items-center pt-20 py-32 w-full' >
          <div><img src="login_logo.webp" /></div>
          <form className='flex flex-col space-y-5 w-5/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
            <h4 className='text-xl font-bold' >Reset Password</h4>
            <div className='flex flex-col space-y-1' >
              <h5 className='text-xs font-semibold' >New Password</h5>
              <input type="password" className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='youremail@mail.com' />
            </div>
            <div className='flex flex-col space-y-1' >
              <h5 className='text-xs font-semibold' >Re-Type Password</h5>
              <input type="password" className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='youremail@mail.com' />
            </div>
            <div className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Change Password</span><BsArrowRightShort className='text-2xl' /></a></div>
          </form>
        </div>

      </MainLayout>

    </>
  )
}

export default ResetPassword