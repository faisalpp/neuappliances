import React,{useState,useEffect} from 'react'
import MainLayout from '../layout/MainLayout'
import { BsArrowRightShort } from 'react-icons/bs'
import {forgotPassword} from '../api/user/auth'
import Toast from '../utils/Toast'
import * as Yup from 'yup';
import TextInput from '../components/TextInput/TextInput'
import BtnLoader from '../components/Loader/BtnLoader'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ForgotPassword = () => {

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

  const [email,setEmail] = useState('')
  const [errors,setErrors] = useState([])
  const [loading,setLoading] = useState(false)

  const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string().required('Email is Required!'),
  });
  
  const HandleForgotPassword = async (e) => {
    e.preventDefault()
    setLoading(true)
    try{
      await forgotPasswordSchema.validate({email:email}, { abortEarly: false });
      const res = await forgotPassword({email:email})
      console.log(res)
      if(res.status === 200){
        setLoading(false)
        Toast(res.data.msg,'success',1000)
      }else{
        setLoading(false)
        Toast(res.data.message,'error',1000)
      }
    }catch(error){
      setLoading(false)
      if (error) {
        let errors = error.errors;
        setErrors(errors)
        errors.forEach((item)=>{
          Toast(item,'error',1000)
        })
      } else {
        setErrors([])
      }
    }

  }

  return (
    <>

      <MainLayout>

        <div className='flex flex-col space-y-10 items-center pt-20 py-32 w-full' >
          <div><img src="login_logo.webp" alt="login_logo" /></div>
          <form onSubmit={HandleForgotPassword} className='flex flex-col space-y-5 w-5/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
            <h4 className='text-xl font-bold' >Forgot Password</h4>
            <TextInput width="full" name="email" title="Email" type="text" value={email} onChange={e =>setEmail(e.target.value)} error={errors && errors.includes('Email is Required!') ? true : false} errormessage="Email is Required!" placeholder="youremail@gmail.com" />
            <button className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >
             {loading ? <BtnLoader style="w-7" />
             :<span className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Submit</span><BsArrowRightShort className='text-2xl' /></span>
              }
             </button>
          </form>
        </div>

      </MainLayout>

    </>
  )
}

export default ForgotPassword