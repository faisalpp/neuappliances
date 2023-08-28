import React from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {BsArrowRightShort} from 'react-icons/bs'
import {FiChevronDown} from 'react-icons/fi'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {updateSection,getSectionById} from '../../api/admin'
import {useParams} from 'react-router-dom'

const UpdateSection = () => {

  const {id} = useParams()

    const [sectionId,setSectionId] = useState(id);
    const [title,setTitle] = useState('');
    const [type,setType] = useState('');
    const [slug,setSlug] = useState('');
    const [cardStyle,setCardStyle] = useState('');

    const navigate = useNavigate();

    useEffect(() => {      
        const GetSectionById = async () => {
        const data = {sectionId};
        const res = await getSectionById(data);
        if(res.status === 200){
            setTitle(res.data.section[0].title);
            setSlug(res.data.section[0].slug);
            setCardStyle(res.data.section[0].cardStyle);
            setType(res.data.section[0].type);
        }
    }
    GetSectionById()
  },[]);
  
    const UpdateSection = async (e) => {
      e.preventDefault();
      const data = {title,slug,cardStyle,sectionId,type}
      const res = await updateSection(data);
      if(res.status === 200){
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
          navigate(-1);
       }else{
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
         <form onSubmit={UpdateSection} encType='multipart/form-data' className='flex flex-col space-y-5 w-8/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
          <div className='flex flex-col space-y-1'>
           <h5 className='text-xs font-semibold' >Section Title</h5>
           <input type="text" value={title} onChange={handleTitle} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Refrigerators By Styles' />
          </div>
          <div className='flex flex-col space-y-1'>
           <h5 className='text-xs font-semibold' >Section Type</h5>
           <input type="text" value={type} onChange={e=>setType(e.target.value)} readOnly className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Refrigerators By Styles' />
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
          <div className='flex flex-col space-y-1'>
           <h5 className='text-xs font-semibold' >Url Slug</h5>
           <input type="text" value={slug} readOnly className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='refrigerators-by-styles' />
          </div>
          <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Update</span><BsArrowRightShort className='text-2xl' /></a></button>
          </form>
         </div>
        </AdminAccount>
        </>
    )
}

export default UpdateSection