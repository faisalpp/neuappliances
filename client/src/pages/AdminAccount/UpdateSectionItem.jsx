import React from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {BsArrowRightShort} from 'react-icons/bs'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {updateSectionItem,getSectionItemById} from '../../api/admin'
import {useParams} from 'react-router-dom'

const UpdateSectionItem = () => {

  const {id} = useParams()
    
    const [imagePrev,setImagePrev] = useState('')
    const [sectionItemId,setSectionItemId] = useState(id)
    const [image,setImage] = useState('')
    const [title,setTitle] = useState('');
    const [rating,setRating] = useState('');
    const [items,setItems] = useState([]);

    const navigate = useNavigate();

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
        const GetSectionItemById = async () => {
        const data = {sectionItemId};
        const res = await getSectionItemById(data);
        if(res.status === 200){
            setTitle(res.data.sectionItem[0].title);
            setRating(res.data.sectionItem[0].rating);
            const imgUrl = 'http://localhost:5000/storage/sectionItems/'+ res.data.sectionItem[0].image
            setImagePrev(imgUrl);
            console.log(res.data.sectionItem[0].rating)
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
    GetSectionItemById()
  },[]);
  
    const UpdateSectionItem = async (e) => {
      e.preventDefault();
      const data = {title,image,rating,sectionItemId:id}
      const res = await updateSectionItem(data);

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
         <form onSubmit={UpdateSectionItem} encType='multipart/form-data' className='flex flex-col space-y-5 w-8/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
          <div className='rounded-2xl border border-gray-300 px-3 py-5 h-[225px] w-fit flex justify-center items-center self-center'>
           {/* <img src='/generalelectronics.png' className='max-w-full h-[115px] object-contain' alt="example" /> */}
           <img src={imagePrev} className='max-w-fit h-[225px] object-contain' alt="example" />
          </div>
          <div className='flex flex-col space-y-1'>
           <h5 className='text-xs font-semibold' >Section Item Title</h5>
           <input type="text" value={title} onChange={e=>setTitle(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Refregerator' />
          </div> 
          {items ? <div className='flex flex-col space-y-1'>
           <h5 className='text-xs font-semibold' >Section Item Rating</h5>
           <input type="text" value={rating} onChange={e=>setRating(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Enter Section Item Rating 3-5' />
          </div>:null}
          <div className='flex flex-col space-y-1' >
           <h5 className='text-xs font-semibold' >Section Item Image</h5>
           <input type="file" accept="image/jpg, image/jpeg, image/png" onChange={onImageChange} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' />
          </div>
          <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Update</span><BsArrowRightShort className='text-2xl' /></a></button>
          </form>
         </div>
         <ToastContainer/>
        </AdminAccount>
        </>
    )
}

export default UpdateSectionItem