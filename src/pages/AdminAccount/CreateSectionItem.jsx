import React from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {BsArrowRightShort} from 'react-icons/bs'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { resetUser } from '../../store/userSlice';
import {createSectionItem} from '../../api/admin'
import { useParams } from 'react-router-dom';

const CreateSectionItem = () => {
    const { style,id } = useParams();
    const [imagePrev,setImagePrev] = useState('https://placehold.co/600x400')
    
    const [cardStyle,setCardStyle] = useState(style);
    const [title,setTitle] = useState(cardStyle === 'head-rating-card' || cardStyle === 'rating-card' ? style : '');
    const [image,setImage] = useState('');
    const [sectionId,setSectionId] = useState(id);
    const [rating,setRating] = useState('');
    

    const navigate = useNavigate();
    const dispatch = useDispatch();

  const onImageChange = (event) => {
    setImagePrev(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
     setImage(reader.result);
    };
  }
  
    const CreateSectionItem = async (e) => {
      e.preventDefault();
      const data = {title,image,sectionId,rating}
      const res = await createSectionItem(data);
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
          navigate(`/admin/view-section-items/${id}`);
       }
       if(res.code === 'ERR_BAD_REQUEST'){
         dispatch(resetUser());
         navigate('/nu-admin')
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
  
    }
    
    return (
        <>
        <AdminAccount>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
         <div className='flex justify-center w-full'>
         <form onSubmit={CreateSectionItem} encType='multipart/form-data' className='flex flex-col space-y-5 w-8/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
         <div className='rounded-2xl border border-gray-300 p-3 h-fit w-[200px] flex justify-center items-center self-center'>
           {/* <img src='/generalelectronics.png' className='max-w-full h-[115px] object-contain' alt="example" /> */}
           <img src={imagePrev} className='object-contain' alt="example" />
          </div>
          {cardStyle === 'head-rating-card' || cardStyle === 'rating-card' ? null : <div className='flex flex-col space-y-1'>
           <h5 className='text-xs font-semibold' >Section Item Title</h5>
           <input type="text" value={title} onChange={e=>setTitle(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='French Door Refrigerator' />
          </div>
          }
          
          <div className='flex flex-col space-y-1' >
           <h5 className='text-xs font-semibold' >Section Item Image</h5>
           <input type="file" accept="image/jpg, image/jpeg, image/png" onChange={onImageChange} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' />
          </div>
          {cardStyle === 'head-rating-card' || cardStyle === 'rating-card' ? <div className='flex flex-col space-y-1'>
           <h5 className='text-xs font-semibold' >Rating</h5>
           <input type="text" value={rating} onChange={e=>setRating(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='3-5' />
          </div>:null}
          <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a></button>
          </form>
         </div>
         <ToastContainer/>
        </AdminAccount>
        </>
    )
}

export default CreateSectionItem