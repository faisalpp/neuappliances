import React,{useState,useEffect,useRef} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiFillPlusCircle} from 'react-icons/ai'
import {uploadGalleryImage,deleteGalleryImage} from '../../api/admin/galleryMedia'
import {getGalleryImages} from '../../api/frontEnd'
import Pagination2 from '../../components/Pagination/Pagination2';
import {BsFillTrashFill} from 'react-icons/bs'
import Popup from '../../components/AdminDashboard/Popup';
import {BsArrowRightShort} from 'react-icons/bs'

const ManageGallery = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const [media,setMedia] = useState([])

  // Uploading State & Loader
  const [isSubmit,setIsSubmit] = useState(false)
  const [delLoading,setDelLoading] = useState(false)
  const [isLoading,setIsLoading] = useState(false)

  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(16);
  const [totalPages,setTotalPages] = useState(0);

  const [images,setImages] = useState([])
  const [popup,setPopup] = useState(false)

  const UploadImage = async (e) => {
    e.preventDefault()
    setIsSubmit(true)
    // console.log(images)
    const formData = new FormData();
    images.forEach((imageFile, index) => {
      formData.append(`image_${index}`, imageFile);
    });
    const res = await uploadGalleryImage(formData)
    // console.log(res)
    if(res.status === 200){
      GetLoopMedia()
      setIsSubmit(false)
      setImages([])
      setPopup(false)
      toast.success(res.data.msg, {
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
        setIsSubmit(false)
        setImages([])
        setPopup(false)
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

  const GetLoopMedia = async () => {
    setIsLoading(true)
    const params = {page:page,limit:limit};
    const res = await getGalleryImages(params);
    // console.log(res)
    if(res.status === 200){
        setMedia(res.data.gallery)
        setTotalPages(Math.ceil(res.data.totalCount / limit))
        setIsLoading(false)
      }else{
        setIsLoading(false)
        setMedia([])
    }
}

  useEffect(() => {
    GetLoopMedia()
}, [page])

const DeleteMedia = async (e,id) => {
  e.preventDefault()
  console.log(id)
  setDelLoading(true)
  const res = await deleteGalleryImage({id});
  console.log(res)
  if(res.status === 200){
    toast.success(res.data.msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
      GetLoopMedia()
      setDelLoading(false)
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
      setDelLoading(false)
  }
}

  const HandleImage = (e) => {
    console.log(e.target.files)
    setImages(prev=>[...prev,...e.target.files])
    console.log(images)
  }

  const deleteImg = (e,indx) =>{
    e.preventDefault()
    const newImages = [...images]; // Create a copy of the images array
    newImages.splice(indx, 1);    // Remove the image at the specified index
    setImages(newImages);     
  }
  
  return (
    <>
        <Popup state={popup} setState={setPopup}>
         <form className='flex flex-col items-center space-y-3 h-96 w-full' >
          
          <div className='grid grid-cols-4 mt-5 gap-x-5 gap-y-5 w-full h-full overflow-x-hidden overflow-y-auto' >
             
            { images.length > 0 ? images.map((img,index)=> (<div key={index} className='relative border-2 border-b6 rounded-lg h-fit' >
             <div className='absolute right-1 top-1' ><div onClick={e=>deleteImg(e,index)} className='flex justify-end w-full bg-white rounded-full' ><AiFillPlusCircle  className='text-red-500 text-xl shadow-xl rounded-full cursor-pointer' /></div></div>
             <img src={window.URL.createObjectURL(img)} className='w-full h-24' />
            </div>)):<div className='flex justify-center items-center h-full w-full' ><img src="/no-image.jfif" className='w-36 ' /></div>}
          
          </div>
          <button type="button" onClick={handleClick} className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Select Images</span><BsArrowRightShort className='text-2xl' /></a></button>    
          <button type="button" onClick={UploadImage} className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{isSubmit ? <img src='/loader-bg.gif' className='w-8' /> :<a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Upload</span><BsArrowRightShort className='text-2xl' /></a>}</button>    
          <input type="file" ref={fileInputRef} multiple onChange={e=>HandleImage(e)} style={{ display: 'none' }} />
         </form>
        </Popup>
        <AdminAccount>
          <div className='flex w-full justify-end space-x-3' >
            <AiFillPlusCircle onClick={()=>setPopup(true)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />   
           </div>
           {isLoading ? <div className='flex mt-32 justify-center  w-full h-full' >
             <img src="/loader-bg.gif" className='w-24 h-24' />
           </div> : media.length > 0 ? <><div className="grid grid-cols-4 mt-5 gap-x-5 gap-y-5 w-full">
             {media.map((item,index)=><div className="relative" ><div className='absolute mt-2 w-full bg-white ' ><span title="Delete Image" onClick={e=>{delLoading ? null : DeleteMedia(e,item._id)}} className='absolute right-1 flex items-center justify-center bg-red-500 text-white  text-sm px-2 w-fit rounded-full cursor-pointer py-2' >{delLoading ? <img src="/loader-bg.gif" className='w-4 h-4' />: <BsFillTrashFill className="text-base" />}</span></div><img key={index} controls className='object-cover rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src={item.url} /></div>)}
           </div>
           <Pagination2 page={page} setPage={setPage} totalPages={totalPages} />
           </>
           :
           <div className='flex mt-32 justify-center w-full h-full' >
             <img src="/not-found.png" className='w-36 h-36' />
           </div>
           }
      </AdminAccount>
    </>
  )
}

export default ManageGallery