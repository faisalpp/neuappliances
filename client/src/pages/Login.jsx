import React, { useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import { BsArrowRightShort } from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { loginUser } from '../store/userSlice'
import Toast from '../utils/Toast'

const Login = () => {

  const navigate = useNavigate();
    const isUser = useSelector((state) => state.user.auth)
    const isAdmin = useSelector((state) => state.admin.auth)

  useEffect(()=>{
    if(!isAdmin && !isUser){
      return
    }else{
     if(isAdmin){
       navigate('/admin/dashboard')
      }else{
        navigate('/my-account/profile')
     }
    }
  },[])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();


  const Login = async (e) => {
    e.preventDefault();
    const data = { email, password }

    const res = await dispatch(loginUser(data));
    console.log(res)
    if (res.payload.code === 'ERR_BAD_REQUEST') {
      Toast('Invalid Credentials!','error',1000)
    }
    if (res.payload.status === 200) {
     Toast(res.payload.msg,'success',1000)
     navigate('/my-account/profile');
    }else{
      Toast(res.payload.message,'success',1000)
     }
    }

  return (
    <>
      <MainLayout>
        <div className='flex flex-col space-y-10 items-center pt-20 px-5 py-32 w-full' >
          <div><img src="/login_logo.webp" alt="login_logo" /></div>
          <form onSubmit={Login} className='flex flex-col space-y-8 xl:w-[512px] lg:w-[512px] md:w-7/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
            <h4 className='text-xl font-bold' >Login</h4>
            <div className='flex flex-col space-y-1' >
              <h5 className='text-xs font-semibold' >Email Address</h5>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='youremail@mail.com' />
            </div>
            <div className='flex flex-col space-y-1' >
              <div className='flex items-center' ><h5 className='text-xs font-semibold' >Password</h5><div className='flex w-full justify-end' ><NavLink to="/forgot-password" ><span className='text-xs hover:underline cursor-pointer font-semibold text-b3' >Forgot Password?</span></NavLink></div></div>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='youremail@mail.com' />
            </div>
            <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><span className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Login</span><BsArrowRightShort className='text-2xl' /></span></button>
            <div className='flex w-full justify-center' ><h5 className='text-sm' >New customer? <NavLink to="/register" ><span className='text-b3 hover:underline cursor-pointer' >Create an Account</span></NavLink></h5></div>
          </form>
        </div>
        <div className='flex items-center justify-center w-full text-xs font-normal ' ><div className='flex text-black/70 py-4 coxxl:w-5/12 xl:w-5/12 lg-to-xl:w-6/12  xs-to-sm:w-7/12 md:w-7/12 xss-to-xs:w-10/12 text-[9px]' ><h3 className='lg-to-xl:w-8/12 w-1/2 coxxl:w-8/12 xl:w-8/12' >© 2023 Neu Appliances</h3><h3 className='text-end' >Terms&nbsp;of&nbsp;Use&nbsp;•&nbsp;Privacy&nbsp;Policy&nbsp;•&nbsp;Help&nbsp;Center</h3></div></div>
      </MainLayout>
    </>
  )
}

export default Login