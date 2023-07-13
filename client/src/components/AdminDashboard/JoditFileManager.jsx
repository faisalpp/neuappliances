import Popup from './Popup'
import React, { useRef,useEffect } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { FaTrash } from 'react-icons/fa'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadImage ,getMedia,deleteMedia} from '../../api/admin'

const JoditFileManager = ({state,setState,selectedItem,handleSelection}) => {

  const [tab,setTab] = useState('images')
  const fileInput = useRef(null);
  const [imageMedia,setImageMedia] = useState([]);

  const getImagesMedia = async () => {
    const data = {type:tab}
    const res = await getMedia(data)
    setImageMedia(res.data.files)
  }
  
  useEffect(() => {
    getImagesMedia()
  },[tab])

  
  const handleMedia = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file",e.target.files[0])
    formData.append("type",tab)

    const res = await uploadImage(formData);

    if(res.status === 200){
      getImagesMedia()
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

  const DeleteMedia = async (file) => {
    const data = {file:file,type:tab}
    const res = await deleteMedia(data)
    if(res.status === 200){
      getImagesMedia()
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
    <Popup state={state} setState={setState} >
     
     <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
         {/* Options */}
        <div className='flex flex-col' >

         <div className="flex items-center space-x-5 px-5 py-2 rounded-t-lg border-2 border-b-0 border-b3" >
          <div onClick={()=>setTab('images')} className={` ${tab === 'images' ? 'bg-b6 rounded-xl text-white border-2 border-b6':'text-b6 border-[2px] border-b6 rounded-xl'}  px-2 cursor-pointer `} ><h6>Images</h6></div>
          <div onClick={()=>setTab('videos')} className={` ${tab === 'videos' ? 'bg-b6 rounded-xl text-white border-2 border-b6':'text-b6 border-[2px] border-b6 rounded-xl'}  px-2 cursor-pointer `} ><h6>Videos</h6></div>
         </div>
         <div className="grid grid-cols-6 grid-flow-row-dense gap-x-10 px-5 py-2 rounded-b-lg border-2 border-b3 h-96 overflow-y-scroll" >
          {/* Image Thumbnail */}
          {imageMedia.length > 0 ? imageMedia.map((image)=> <div onClick={()=>handleSelection(image,tab)} key={image} className='relative w-24 h-24 my-5 cursor-pointer' >
           <img  src={tab === 'images' ? `${process.env.REACT_APP_INTERNAL_PATH}/storage/uploads/images/${image}`:`${process.env.REACT_APP_INTERNAL_PATH}/storage/uploads/videos/${image}`} alt={image} className='w-full h-full' />
           {selectedItem === image ?<div className='absolute flex items-center justify-center top-0 w-full h-full rounded-md py-2 px-2' ><span className="bg-green-300 p-[4px] rounded-full" ><IoIosCheckmarkCircle className='text-green-500 text-2xl' /></span></div>:null}
           <div className='absolute flex items-end justify-end top-0 w-full h-full rounded-md py-2 px-2' ><span className="bg-red-300 p-[6px] rounded-full" onClick={()=>DeleteMedia(image)} ><FaTrash className='text-red-500 text-sm' /></span></div>
          </div>):null}

          <div className='relative w-24 h-24 my-5 cursor-pointer' >
           <div className='w-24 h-24 bg-b5'></div>
           <input name="image" ref={fileInput} onChange={e=>handleMedia(e)} className='hidden' type="file" accept='image/*' />
           <div onClick={()=>fileInput.current.click()} className='absolute flex items-center justify-center top-0 w-full h-full border-2 border-b6 rounded-md' ><AiOutlinePlusCircle className='text-b6 text-3xl' /></div>
          </div>
         
         </div>
        
        </div>

        <ToastContainer />

    </Popup>
  )
}

export default JoditFileManager