import React, { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import { BsArrowRightShort } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom'
import {resetPassword,validatePasswordToken} from '../api/user/auth'
import TextInput from '../components/TextInput/TextInput'
import * as Yup from 'yup';
import Toast from '../utils/Toast'
import BtnLoader from '../components/Loader/btnLoader'

const resetPasswordSchema = Yup.object().shape({
  password: Yup.string().required('Password is Required!'),
  confirmPassword: Yup.string().required('Confirm Password is Required!'),
});

const ResetPassword = () => {

  const params = useParams()

  const navigate = useNavigate()

  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [errors,setErrors] = useState([])

  const [loading,setLoading] = useState(false)

  const ValidateResetPassToken = async () => {
    const res = await validatePasswordToken({token:params.token})
    if(res.status === 500){
      navigate('/forgot-password')
      Toast(res.data.message,'error',1000)
    }
  }

  useEffect(()=>{
    ValidateResetPassToken()
  })


  const HandleResetPassword = async (e) => {
    e.preventDefault()
    setLoading(true)
    try{
      await resetPasswordSchema.validate({password:password,confirmPassword:confirmPassword}, { abortEarly: false });
      const res = await resetPassword({token:params.token,password:password,confirmPassword:confirmPassword})
      if(res.status === 200){
        setLoading(false)
        Toast(res.data.msg,'success',1000)
        navigate('/login')
      }else{
        setLoading(false)
        Toast(res.data.msg,'error',1000)
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
          <div><img src="/login_logo.webp" /></div>
          <form onSubmit={HandleResetPassword} className='flex flex-col space-y-5 w-5/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
            <h4 className='text-xl font-bold' >Reset Password</h4>
            <TextInput width="full" name="password" title="Password" type="password" value={password} onChange={e =>setPassword(e.target.value)} error={errors && errors.includes('Email is Required!') ? true : false} errormessage="Email is Required!" placeholder="******" />
            <TextInput width="full" name="confirmPassword" title="Re-Type Password" type="password" value={confirmPassword} onChange={e =>setConfirmPassword(e.target.value)} error={errors && errors.includes('Confirm Password is Required!') ? true : false} errormessage="Confirm Password is Required!" placeholder="******" />
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

export default ResetPassword