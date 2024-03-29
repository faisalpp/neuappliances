import React from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {BsArrowRightShort} from 'react-icons/bs'
import {FiChevronDown} from 'react-icons/fi'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {createSection} from '../../api/admin'

import {useParams} from 'react-router-dom'

const CreateSection = () => {

    const {slug} = useParams()
    const [submit,setSubmit] = useState(false);
    const [title,setTitle] = useState('');
    const [Slug,setSlug] = useState('');
    const [type,setType] = useState('cosmatic-rating');
    const [cardStyle,setCardStyle] = useState('head-rating-card');

    const navigate = useNavigate();
  
    const CreateBrand = async (e) => {
      e.preventDefault();
      setSubmit(true)
      const data = {title,Slug,cardStyle,slug,type}
      const res = await createSection(data);
      if(res.status === 200){
         setSubmit(false) 
         toast.success(res.data.msg, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setTitle('');
          setSlug('')
          navigate(-1);
       }else{
         setSubmit(false)
        toast.error(res.data.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
       }
  
    }

    const handleTitle = (e) => {
       setTitle(e.target.value);
       const modSlug = e.target.value.toLowerCase().replace(/ /g, "-")
       setSlug(modSlug);
    }
    
    return (
        <>
        <AdminAccount>
         <div className='flex justify-center w-full'>
         <form onSubmit={CreateBrand} encType='multipart/form-data' className='flex flex-col space-y-5 w-8/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
          <div className='flex flex-col space-y-1'>
           <h5 className='text-xs font-semibold' >Section Title</h5>
           <input type="text" value={title} onChange={handleTitle} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Refrigerators By Styles' />
          </div>
          {/* Select Category */}
          <div>
           <label className='text-b16 font-semibold text-xs block mb-2'>Section Card Style<i className='text-red-500' >*</i></label>
           <div className='relative'>
            <select onChange={e=>setCardStyle(e.target.value)} className='border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none'>
             <option value='head-rating-card' >Head Rating Card (First Section)</option>
             <option value='rating-card' >Rating Card (Example: 5 Stars)</option>
             <option value='color-card' >Color Card (Example: Black)</option>
             <option value='brand-card' >Brand Card (Example:Samsung)</option>
             <option value='general-card' >General Card (Example: Product By Features)</option>
             <option value='2xn-card' >2xN Card (Example: Fuel Type)</option>
            </select>
            <FiChevronDown className='absolute right-4 top-3' />
           </div>
          </div>
          {/* Select Category  End*/}
          
          <div>
           <label className='text-b16 font-semibold text-xs block mb-2'>Section Type<i className='text-red-500' >*</i></label>
           <div className='relative'>
            <select onChange={e=>setType(e.target.value)} className='border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none'>
             <option value='cosmatic-rating' >Cosmatic Rating</option>
             <option value='features' >Product Features</option>
             <option value='types' >Product Types</option>
             <option value='colors' >Product Finishes & Colors</option>
             <option value='brands' >Product Brands</option>
             <option value='fuel-type' >Product Fuel Types</option>
            </select>
            <FiChevronDown className='absolute right-4 top-3' />
           </div>
          </div>
          <div className='flex flex-col space-y-1'>
           <h5 className='text-xs font-semibold' >Category</h5>
           <input type="text" value={slug} readOnly className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='refrigerators-by-styles' />
          </div>
          <div className='flex flex-col space-y-1'>
           <h5 className='text-xs font-semibold' >Url Slug</h5>
           <input type="text" value={Slug} readOnly className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='refrigerators-by-styles' />
          </div>
          <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a>}</button>
          </form>
         </div>
        </AdminAccount>
        </>
    )
}

export default CreateSection