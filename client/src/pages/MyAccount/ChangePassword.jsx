import React,{useState} from 'react';
import MyAccount from '../../layout/MyAccount';
import TextInput from '../../components/TextInput/TextInput'
import * as Yup from 'yup';
import Toast from '../../utils/Toast'
import {changePassword} from '../../api/user/profile'
import { useSelector,useDispatch } from 'react-redux';
import {resetUser} from '../../store/userSlice'
import { useNavigate } from 'react-router-dom';
import BtnLoader from '../../components/Loader/BtnLoader'

const ChangePassword = () => {

    return (
        <>
            <MyAccount>
                <ChangePasswordData />
            </MyAccount >
        </>
    )
}

export default ChangePassword


const ChangePasswordData = () => {

    const changePasswordSchema = Yup.object().shape({
        password: Yup.string().required('Password is Required!'),
        confirmPassword: Yup.string().required('Re-Type Password is Required!'),
      });

    const [errors,setErrors] = useState([])
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [loading,setLoading] = useState(false)

    const userId = useSelector((state)=>state.user._id)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const ChangePassword = async (e) => {
        e.preventDefault()
        setLoading(true)
     try{
     const data = {password,confirmPassword}
     await changePasswordSchema.validate(data, { abortEarly: false });
     const res = await changePassword({...data,userId:userId})
     console.log(res)
      if(res.status === 200){
       setLoading(false)
       Toast(res.data.msg,'success',1000)
       dispatch(resetUser())
       navigate('/login')
      }else{
       setLoading(false)
       Toast(res.data.message,'error',1000)
      }
     }catch(error){ 
       setLoading(false)
       if (error) {
        let errors = error.errors;
        setErrors(errors)
        errors.forEach((item)=>{Toast(item,'error',1000)})
       } else {
        setErrors([])
       }
      }
    }

    return (
        <>
         <form onSubmit={ChangePassword} className='lg:max-w-[432px] w-full flex flex-col gap-6'>
          <TextInput title="Password" type="password" width="full" value={password} onChange={(e)=>setPassword(e.target.value)} error={errors && errors.includes('Password is Required!') ? true : false} errormessage="Password is Required!" placeholder="••••••••••••••" />
          <TextInput title="Re-Type Password" type="password" width="full" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} error={errors && errors.includes('Re-Type Password is Required!') ? true : false} errormessage="Re-Type Password is Required!" placeholder="••••••••••••••" />
          <button type='submit'  className='flex justify-center items-center rounded-lg bg-b3 py-3 w-full text-white text-xs font-medium'>{loading ? <BtnLoader style="w-4" />:'Change Password'}</button>
         </form>
        </>
    )
}

export { ChangePasswordData };