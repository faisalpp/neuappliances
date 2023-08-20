import React, { useEffect, useState } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { BsPencil } from 'react-icons/bs';
import {AiFillPlusCircle,AiFillEye } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Popup from '../../components/AdminDashboard/Popup';
import TextInput from '../../components/TextInput/TextInput';
import {BsArrowRightShort} from 'react-icons/bs'
import {createFaqTab,getFaqTab,updateFaqTab} from '../../api/admin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';

const ManageFaq = () => {

    const faqTabValidationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
    });
    const updateFaqTabValidationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        _id: Yup.string().required('Id is required')
    });

    const [faqPopup,setFaqPopup] = useState(false)
    const [updateFaqPopup,setUpdateFaqPopup] = useState(false)
    const [updatedFaqTabTitle,setUpdatedFaqTabTitle] = useState('')
    const [updatedFaqTabId,setUpdatedFaqTabId] = useState('')
    const [title,setTitle] = useState('')
    const [errors,setErrors] = useState([])

    const [faqTabs,setFaqTabs] = useState([])

    const GetFaqTabs = async () => {
        const res = await getFaqTab();
        if(res.status === 200){
            setFaqTabs(res.data.faqTabs)
        }else{
            console.log(res)
        }
    }
    useEffect(() => {
        GetFaqTabs()
    }, [])
    

    const CreateFaqTab = async (e) => {
        e.preventDefault()
       try{
        const data = {title}
        await faqTabValidationSchema.validate(data, { abortEarly: false });
        const res = await createFaqTab(data);
        if(res.status === 200){
            setFaqPopup(false)
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
        }else{
            setFaqPopup(false)
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
    } catch (error) {
        console.error('Validation errors:', error.errors);
        setErrors(error.errors)
      }
    }

    const UpdateFaqTab = async (e) => {
        e.preventDefault()
       try{
        const data = {title:updatedFaqTabTitle,_id:updatedFaqTabId}
        await updateFaqTabValidationSchema.validate(data, { abortEarly: false });
        console.log(data)
        const res = await updateFaqTab(data);
        if(res.status === 200){
            GetFaqTabs()
            setUpdateFaqPopup(false)
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
        }else{
            setUpdateFaqPopup(false)
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
    } catch (error) {
        console.log('Error message:', error);
      }
    }

    return (
        <>
             <Popup state={faqPopup} setState={setFaqPopup}>
                <form className='flex flex-col space-y-3' >
                 <h1 className="font-semibold" >Create FAQ Tab</h1>
                 <TextInput  width="full" name="title" title="Faq Tab Title" iscompulsory="true" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} error={errors.includes('Title is required') ? true : false} errormessage="Title is Required" placeholder="Enter Faq Tab Title"  />
                 <button onClick={CreateFaqTab} type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a></button>
                </form>
             </Popup>
             <Popup state={updateFaqPopup} setState={setUpdateFaqPopup}>
                <form className='flex flex-col space-y-3' >
                 <h1 className="font-semibold" >Update FAQ Tab</h1>
                 <TextInput  width="full" name="title" title="Faq Tab Title" iscompulsory="true" type="text" value={updatedFaqTabTitle} onChange={(e)=>setUpdatedFaqTabTitle(e.target.value)} error={errors.includes('Title is required') ? true : false} errormessage="Title is Required" placeholder="Enter Faq Tab Title"  />
                 <button onClick={UpdateFaqTab} type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Update</span><BsArrowRightShort className='text-2xl' /></a></button>
                </form>
             </Popup>
            <AdminAccount>
            <div className='flex mb-5 py-3 rounded-3xl px-10 w-full' >
              <div className='flex w-full justify-end space-x-3' >
               <AiFillPlusCircle onClick={()=>setFaqPopup(true)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />
               
              </div>
             </div>
                {/* Products Operations */}
               <div className="flex flex-wrap space-x-5" >
                
                {faqTabs.length > 0 ? faqTabs.map((tab,index)=><div key={index} className="tab-buttons maxlg:order-2 lg:w-[30%] flex flex-col gap-2 mb-2">
                 <div className='p-2 xl:p-3 xl:text-sm font-semibold flex justify-between items-center text-left border border-[rgba(0,0,0,0.15)] rounded-2xl text-b23'><span >{tab.title}</span>
                  <span className='p-2 bg-b6 hover:bg-white border-b3 border-2  rounded-full cursor-pointer group' ><BsPencil onClick={()=>{setUpdateFaqPopup(true);setUpdatedFaqTabTitle(tab.title);setUpdatedFaqTabId(tab._id)}} className='text-white group-hover:text-b3 text-lg shadow-xl' /></span>
                  <NavLink to={`/admin/create-faq/${tab.slug}`} className='p-2 bg-b6 hover:bg-white border-b3 border-2  rounded-full cursor-pointer group' ><AiFillEye className='text-white group-hover:text-b3 text-lg shadow-xl' /></NavLink>
                 </div>
                </div>)
                :
                <h1>No FAQ Tabs Found!</h1>
                }

               </div> 
            </AdminAccount>
        </>
    )
}

export default ManageFaq