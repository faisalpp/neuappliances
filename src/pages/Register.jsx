import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import {BsArrowRightShort} from 'react-icons/bs'
import { NavLink, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

 const [firstName,setFirstName] = useState('faisal');
 const [lastName,setLastName] = useState('qayyum');
 const [email,setEmail] = useState('muhammadfaisal522@gmai;.com');
 const [country,setCountry] = useState('usa');
 const [phone,setPhone] = useState('03036542828');
 const [password,setPassword] = useState('Tenda522');
 const [confirmPassword,setConfirmPassword] = useState('Tenda522');
 
 
 const Submit = async (e) => {
   const data = {firstName,lastName,email,country,phone,password,confirmPassword}
    e.preventDefault();
     const res = await fetch('http://localhost:5000/api/register',{
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data),
     });

     const d = await res.json();
     console.log(d)

 }

  return (
    <>
    
    <MainLayout>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>


      <div className='flex flex-col space-y-10 items-center pt-20 py-32 w-full' >
        <div><img src="login_logo.png" /></div>
        <form onSubmit={Submit} className='flex flex-col space-y-5 w-5/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
          <h4 className='text-xl font-bold' >Register</h4>
          <div className='flex flex-col space-y-1' >
           <h5 className='text-xs font-semibold' >First Name</h5>
           <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Jhon' />
          </div>
          <div className='flex flex-col space-y-1' >
           <h5 className='text-xs font-semibold' >Last Name</h5>
           <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Doe' />
          </div>
          <div className='flex flex-col space-y-1' >
           <h5 className='text-xs font-semibold' >Email Address</h5>
           <input type="text" value={email} onChange={e=>setEmail(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='youremail@mail.com' />
          </div>
          <div className='flex flex-col space-y-1' >
           <h5 className='text-xs font-semibold' >Country</h5>
           <input type="text" value={country} onChange={e=>setCountry(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Austin' />
          </div>
          <div className='flex flex-col space-y-1' >
           <h5 className='text-xs font-semibold' >Phone</h5>
           <input type="text" value={phone} onChange={e=>setPhone(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='+1 000-000-0000' />
          </div>
          <div className='flex flex-col space-y-1' >
           <h5 className='text-xs font-semibold' >Password</h5>
           <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Password' />
          </div>
          <div className='flex flex-col space-y-1' >
           <h5 className='text-xs font-semibold' >Confirm Password</h5>
           <input type="password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Password' />
          </div>
          <button type='submit' className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create Account</span><BsArrowRightShort className='text-2xl' /></a></button>
          <div className='flex w-full justify-center' ><h5 className='text-sm' >Have an Account? <NavLink to="/login" ><span className='text-b3 hover:underline cursor-pointer' >Login</span></NavLink></h5></div>
        </form>
      </div>

     <ToastContainer />
    </MainLayout>
    
    </>
  )
}

export default Register