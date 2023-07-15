import React, { useState } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import TextInput from '../../components/TextInput/TextInput';
import {ChangePassword} from '../../api/admin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import CustomButton from '../../components/Reusable/CustomButton';

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

    const Submit = async (e) => {
        e.preventDefault()
      try{

          const data = {currentPass,newPass,confNewPass}
          await passUpdateSchema.validate(data, { abortEarly: false });
        const res = await ChangePassword(data)
        if(res.status === 200){
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
        }else if(res.code ===  'ERR_BAD_RESPONSE'){
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
       }catch(error){
        console.error('Validation errors:', error.errors);
        setErrors(error.errors ? error.errors : [])
        if(errors.includes('Password must meet the required pattern')){
          let message = 'Password must be between 6 and 25 characters long and contain at least one lowercase letter, one uppercase letter, and one numeric digit.'
          toast.error(message, {
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
    }

    return (
        <>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
            <AdminAccount>
             <form onSubmit={Submit} className='max-w-[432px] w-full flex flex-col gap-6 my-10'>
             <TextInput error={errors.length > 0 && errors.includes('Current Password is required') ? true : false} errormessage="Current Password is required" value={currentPass} onChange={e=>setCurrentPass(e.target.value)} name="currentPass" title="Current Password" iscompulsory="true" type="password" placeholder="Enter Current Password"  />
             <TextInput error={errors.length > 0 && errors.includes('New Password is required') ? true : false} errormessage="New Password is Required" value={newPass} onChange={e=>setNewPass(e.target.value)} name="newPass" title="New Password" iscompulsory="true" type="password" placeholder="Enter Current Password"  />
             <TextInput error={errors.length > 0 && errors.includes('Confirm Password is required') ? true : false} errormessage="Confirm Password is Required" value={confNewPass} onChange={e=>setConfNewPass(e.target.value)} name="confNewPass" title="Confirm New Password" iscompulsory="true" type="password" placeholder="Enter Current Password"  />
              {/*Submit Button */}
              <CustomButton ButtonName="Change Password" />
             </form>
            </AdminAccount>
            <ToastContainer/>
        </>
    )
}

export default AdminChangePassword