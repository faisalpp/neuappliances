import React,{useEffect} from 'react'
import MainLayout from '../layout/MainLayout'
import {BsArrowRightShort} from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import {setUser} from '../store/userSlice'
import {Signin} from '../api/user'
import { loginUser } from '../store/userSlice'

const Login = () => {

  const navigate = useNavigate();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [callback,setCallback] = useState('')

  const dispatch = useDispatch();

  useEffect(() => {
    // Get the callback query from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const callbackQuery = urlParams.get('callback');
    console.log(callbackQuery)
    // Do something with the callback query
    setCallback(callbackQuery)
  }, []);


  const Login = async (e) => {
    e.preventDefault();
    const data = {email,password}

     const res = await Signin(data);
      if(res.status === 200){
       const user = {
        _id: res.data.user._id,
        email: res.data.user.email,
        firstName: res.data.user.firstName,
        lastName: res.data.user.lastName,
        auth: res.data.auth,
        isAdmin: res.data.user.isAdmin,
       }
       dispatch(setUser(user));

       toast.success(res.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        if(callback !== null){
          navigate(`${callback}`);
        }else{
          navigate('/my-account/profile');
        }
     }else{
      toast.error(res.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
     }

  }

  return (
    <>
    <MainLayout>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>

      <div className='flex flex-col space-y-10 items-center pt-20 py-32 w-full' >
        <div><img src="/login_logo.png" alt="login_logo" /></div>
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
          <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><span className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Login</span><BsArrowRightShort className='text-2xl' /></span></button>
          <div className='flex w-full justify-center' ><h5 className='text-sm' >New customer? <NavLink to="/register" ><span className='text-b3 hover:underline cursor-pointer' >Create an Account</span></NavLink></h5></div>
        </form>
      </div>
      <ToastContainer/>
    </MainLayout>
    </>
  )
}

export default Login