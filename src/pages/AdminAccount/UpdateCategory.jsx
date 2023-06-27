import React,{useEffect} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {BsArrowRightShort} from 'react-icons/bs'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import {updateCategory,getCategoryById} from '../../api/admin'
import { resetUser } from '../../store/userSlice';

const UpdateCategory = () => {
    const {id} = useParams()
    const [imagePrev,setImagePrev] = useState('')
    const [image,setImage] = useState('')
    const [title,setTitle] = useState('');
    const [slug,setSlug] = useState('');
    const [description,setDescription] = useState('');

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

    useEffect(() => {      
        const GetSectionById = async () => {
        const data = {id};
        const res = await getCategoryById(data);
        if(res.status === 200){
            console.log(res)
            setTitle(res.data.category[0].title);
            setDescription(res.data.category[0].description);
            setSlug(res.data.category[0].slug);
            const imgUrl = 'http://localhost:5000/storage/categories/'+ res.data.category[0].image
            setImagePrev(imgUrl);
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
    GetSectionById()
  },[]);
  
    const UpdateCategory = async (e) => {
      e.preventDefault();
      const data = {title,image,slug,description,categoryId:id}
      const res = await updateCategory(data);

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
          navigate(-1);
       }
      
      if(res.code === 'ERR_BAD_REQUEST'){
        dispatch(resetUser());
        navigate('/nu-admin')
      }
  
    }

    const handleTitle = (e) => {
       setTitle(e.target.value);
       const modSlug = e.target.value.toLowerCase().replace(/ /g, "_")
       setSlug(modSlug);
    }
    
    return (
        <>
        <AdminAccount>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
         <div className='flex justify-center w-full'>
         <form onSubmit={UpdateCategory} encType='multipart/form-data' className='flex flex-col space-y-5 w-8/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
          <div className='rounded-2xl border border-gray-300 p-3 h-[225px] w-fit flex justify-center items-center self-center'>
           {/* <img src='/generalelectronics.png' className='max-w-full h-[115px] object-contain' alt="example" /> */}
           <img src={imagePrev} className='max-w-fit h-[225px] object-contain' alt="example" />
          </div>
          <div className='flex flex-col space-y-1'>
           <h5 className='text-xs font-semibold' >Category Title</h5>
           <input type="text" value={title} onChange={handleTitle} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Refregerator' />
          </div> 
          <div className='flex flex-col space-y-1' >
           <h5 className='text-xs font-semibold' >Category Image</h5>
           <input type="file" accept="image/jpg, image/jpeg, image/png" onChange={onImageChange} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' />
          </div>
          <div className='flex flex-col space-y-1'>
           <h5 className='text-xs font-semibold' >Category Description</h5>
           <textarea placeholder='Enter Category Description' value={description} className='text-sm h-32 outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' onChange={e=>setDescription(e.target.value)} ></textarea>
          </div>
          <div className='flex flex-col space-y-1'>
           <h5 className='text-xs font-semibold' >Url Slug</h5>
           <input type="text" value={slug} readOnly className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='refregerator' />
          </div>
          <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a></button>
          </form>
         </div>
         <ToastContainer/>
        </AdminAccount>
        </>
    )
}

export default UpdateCategory