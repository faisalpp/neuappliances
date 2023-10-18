import React, { useState } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import TextInput from '../../components/TextInput/TextInput';
import {ChangePassword} from '../../api/admin/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import CustomButton from '../../components/Reusable/CustomButton';
import Toast from '../../utils/Toast'

const AdminChangePassword = () => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,25}$/;
    const passUpdateSchema = Yup.object().shape({
        newPass: Yup.string()
          .matches(passwordPattern, 'Password must meet the required pattern')
          .required('New Password is required'),
        currentPass: Yup.string()
          .matches(passwordPattern, 'Password must meet the required pattern')
          .required('Current Password is required'),
        confNewPass: Yup.string()
          .oneOf([Yup.ref('newPass'), null], 'Passwords must match')
          .required('Confirm New Password is required'),
    });

    const [currentPass,setCurrentPass] = useState('');
    const [newPass,setNewPass] = useState('');
    const [confNewPass,setConfNewPass] = useState('');
    const [errors,setErrors] = useState([])

    const [loading,setLoading] = useState(false)

    const Submit = async (e) => {
        e.preventDefault()
        setLoading(true)
      try{
          const data = {currentPass,newPass,confNewPass}
          await passUpdateSchema.validate(data, { abortEarly: false });
        const res = await ChangePassword(data)
        if(res.status === 200){
          setLoading(false)
          Toast(res.data.msg,'success',1000)
        }else{
          setLoading(false)
          Toast(res.data.message,'error',1000)
        }
      }catch(error){
        if (error) {
          setLoading(false)
          let errors = error.errors;
          setErrors(errors)
          errors.forEach((item)=>{
            Toast(item,'error',1000)
          });
        } else {
          setLoading(false)
          setErrors([])
        }
       }
    }

    return (
        <>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
            <AdminAccount>
             <form onSubmit={Submit} className='w-full flex flex-col items-center gap-6 my-10'>
             <TextInput error={errors.length > 0 && errors.includes('Current Password is required') ? true : false} errormessage="Current Password is required" value={currentPass} onChange={e=>setCurrentPass(e.target.value)} name="currentPass" title="Current Password" iscompulsory="true" type="password" placeholder="Enter Current Password"  />
             <TextInput error={errors.length > 0 && errors.includes('New Password is required') ? true : false} errormessage="New Password is Required" value={newPass} onChange={e=>setNewPass(e.target.value)} name="newPass" title="New Password" iscompulsory="true" type="password" placeholder="Enter Current Password"  />
             <TextInput error={errors.length > 0 && errors.includes('Confirm Password is required') ? true : false} errormessage="Confirm Password is Required" value={confNewPass} onChange={e=>setConfNewPass(e.target.value)} name="confNewPass" title="Confirm New Password" iscompulsory="true" type="password" placeholder="Enter Current Password"  />
              <div className='flex justify-center space-x-2 w-full' >
                {loading ? <button type="submit" className='flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-20 bg-b3 px-2' >
                  <img src='/loader-bg.gif' className='w-5' />
                </button>:null}
                {!loading ? <button type="submit" className='flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3' >
                  <span className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' >
                    <span className='text-xs' >Submit</span>
                  </span>
                  </button>:null}
              </div>

              {errors.length > 0 ? <div className='border-[1px] border-red-500 px-8 rounded-xl py-2' >
                <ul className='list-disc text-orange-500' >
                <li>Contains at least one lowercase letter.</li>
                <li>Contains at least one uppercase letter.</li>
                <li>Contains at least one digit.</li>
                <li>Uses only a combination of lowercase letters,<br/> uppercase letters, and digits.</li>
                <li>Has a length between 6 and 25 characters.</li>
                </ul>
              </div>:null}

             </form>
            </AdminAccount>
            <ToastContainer/>
        </>
    )
}

export default AdminChangePassword