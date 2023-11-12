import React, { useState} from 'react'
import MainLayout from '../layout/MainLayout'
import { BsArrowRightShort } from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi';
import { Signup } from '../api/user/auth';
import Toast from '../utils/Toast'
import * as Yup from 'yup';
import BtnLoader from '../components/Loader/BtnLoader'

const Register = () => {
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,25}$/;

const registerSchema = Yup.object({
  firstName: Yup.string().max(30).required(),
  lastName: Yup.string().max(30).required(),
  email: Yup.string().email().required(),
  phone: Yup.string().required(),
  country: Yup.string().required(),
  password: Yup.string().matches(passwordPattern, 'Password must contain at least one lowercase letter, one uppercase letter, and one digit.').required(),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
});


  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);
  const [loader, setLoader] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('US');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [countryList, setCountryList] = useState(['US']);

  const Submit = async (e) => {
    e.preventDefault()
    setLoader(true)
    const data = { firstName:firstName, lastName:lastName, email:email, country:country, phone:phone, password:password, confirmPassword:confirmPassword }
    try{
      await registerSchema.validate(data, { abortEarly: false }); 
    }catch(error){ 
     setLoader(false)
     if (error) {
      let errors = error.errors;setErrors(errors)
      errors.forEach((item)=>{Toast(item,'error',2000)})
     } else {setErrors([])}
    }


    const res = await Signup(data);
    if (res.status === 200) {
      setLoader(false)
      Toast('Signup Successfull!','success',1000)
      navigate('/login')
    } else {
      setLoader(false)
      Toast(res.data.message,'error',1000)
    }

  }

  return (
    <>

      <MainLayout>
        <div className='flex flex-col space-y-10 items-center pt-20 py-32 w-full px-5' >
          <div><img src="login_logo.webp" alt="login_logo" /></div>
          <form onSubmit={e=>Submit(e)} className='flex flex-col space-y-8 xl:w-[512px] lg:w-[512px] md:w-7/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
            <h4 className='text-xl font-bold' >Register</h4>
            <div className='flex flex-col space-y-1' >
              <h5 className='text-xs font-semibold' >First Name</h5>
              <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Jhon' />
            </div>
            <div className='flex flex-col space-y-1' >
              <h5 className='text-xs font-semibold' >Last Name</h5>
              <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Doe' />
            </div>
            <div className='flex flex-col space-y-1' >
              <h5 className='text-xs font-semibold' >Email Address</h5>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='youremail@mail.com' />
            </div>
            <div className='flex flex-col space-y-1' >
              <div>
                <label className='text-b16 font-semibold text-xs block mb-2'>Country</label>
                <div className='relative'>
                  
                  <select value={country} onChange={e => setCountry(e.target.value)} className='border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none'>
                    {countryList.length > 0 ? countryList.map((country, index) => <option key={index} value={country} >{country}</option>) : <option>No Country Data Found!</option>}
                  </select>
                  <FiChevronDown className='absolute right-4 top-3' />
                </div>
              </div>
            </div>
            <div className='flex flex-col space-y-1' >
              <h5 className='text-xs font-semibold' >Phone</h5>
              <input type="number" value={phone} onChange={e => setPhone(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='+1 000-000-0000' />
            </div>
            <div className='flex flex-col space-y-1' >
              <h5 className='text-xs font-semibold' >Password</h5>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Password' />
            </div>
            <div className='flex flex-col space-y-1' >
              <h5 className='text-xs font-semibold' >Confirm Password</h5>
              <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Password' />
            </div>
            <button type={loader ? 'button' : 'submit'} className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{loader? <BtnLoader style="w-5 py-1" />:<span className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create Account</span><BsArrowRightShort className='text-2xl' /></span>}</button>
            <div className='flex w-full justify-center' ><h5 className='text-sm' >Have an Account? <NavLink to="/login" ><span className='text-b3 hover:underline cursor-pointer' >Login</span></NavLink></h5></div>
          </form>
        </div>
        <div className='flex items-center justify-center w-full text-xs font-normal ' ><div className='flex text-black/70 py-4 coxxl:w-5/12 xl:w-5/12 lg-to-xl:w-6/12  xs-to-sm:w-7/12 md:w-7/12 xss-to-xs:w-10/12 text-[9px]' ><h3 className='lg-to-xl:w-8/12 w-1/2 coxxl:w-8/12 xl:w-8/12' >© 2023 Neu Appliances</h3><h3 className='text-end' >Terms&nbsp;of&nbsp;Use&nbsp;•&nbsp;Privacy&nbsp;Policy&nbsp;•&nbsp;Help&nbsp;Center</h3></div></div>
      </MainLayout>

    </>
  )
}

export default Register