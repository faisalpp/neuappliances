import React from 'react'
import MainLayout from '../layout/MainLayout'
import {BsArrowRightShort} from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Login = () => {


  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const Login = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password
    }


  }

  return (
    <>
    
    <MainLayout>

      <div className='flex flex-col space-y-10 items-center pt-20 py-32 w-full' >
        <div><img src="login_logo.png" /></div>
        <form onSubmit={Login} className='flex flex-col space-y-5 w-5/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
          <h4 className='text-xl font-bold' >Login</h4>
          <div className='flex flex-col space-y-1' >
           <h5 className='text-xs font-semibold' >Email Address</h5>
           <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='youremail@mail.com' />
          </div>
          <div className='flex flex-col space-y-1' >
           <div className='flex items-center' ><h5 className='text-xs font-semibold' >Password</h5><div className='flex w-full justify-end' ><NavLink to="/forgot-password" ><span className='text-xs hover:underline cursor-pointer font-semibold text-b3' >Forgot Password?</span></NavLink></div></div>
           <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='youremail@mail.com' />
          </div>
          <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Login</span><BsArrowRightShort className='text-2xl' /></a></button>
          <div className='flex w-full justify-center' ><h5 className='text-sm' >New customer? <NavLink to="/register" ><span className='text-b3 hover:underline cursor-pointer' >Create an Account</span></NavLink></h5></div>
        </form>
      </div>

    </MainLayout>
    
    </>
  )
}

export default Login