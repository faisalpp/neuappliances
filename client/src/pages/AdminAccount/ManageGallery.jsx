import React,{useState,useEffect,useRef} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiFillPlusCircle} from 'react-icons/ai'
import {uploadGalleryImage,deleteGalleryImage} from '../../api/admin'
import {getGalleryImages} from '../../api/frontEnd'
import Loader2 from '../../components/Loader/Loader2'
import Pagination from '../../components/Pagination/Pagination';
import {BsTrashFill} from 'react-icons/bs'


const ManageGallery = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const [media,setMedia] = useState([])

  // Uploading States
  const [isSubmit,setIsSubmit] = useState(false)

  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(3);
  const [totalPages,setTotalPages] = useState(0);
//   // Loader
  const [isLoading,setIsLoading] = useState(false)

  const UploadImage = async (e) => {
    e.preventDefault()
    console.log(e.target.files[0])
    const formData = new FormData();
    formData.set('image',e.target.files[0])
    setIsSubmit(true)
    const res = await uploadGalleryImage(formData)
    console.log(res)
    if(res.data.status === 200){
      GetLoopMedia()
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
      setIsSubmit(false)
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
          setIsSubmit(false)
      }
  }

  const GetLoopMedia = async () => {
    setIsLoading(true)
    const params = {page:page,limit:limit};
    const res = await getGalleryImages(params);
    console.log(res)
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
}, [])

const DeleteMedia = async (e,id) => {
  e.preventDefault()
  setIsLoading(true)
  const params = {publicId:id};
  const res = await deleteGalleryImage(params);
  console.log(res)
  if(res.status === 200){
      GetLoopMedia()
      setIsLoading(false)
    }else{
      setIsLoading(false)
  }
}
  
  return (
    <>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
        {isSubmit ? <Loader2/>:<AdminAccount>
          <div className='flex w-full justify-end space-x-3' >
            <AiFillPlusCircle onClick={handleClick} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />   
            <input type="file" ref={fileInputRef} onChange={e=>UploadImage(e)} style={{ display: 'none' }} />
           </div>
           {isLoading ? <div className='flex mt-32 justify-center w-full h-full' >
             <img src="/loader-bg.gif" className='w-24 h-24' />
           </div> : media.length > 0 ? <><div className="grid grid-cols-4 gap-x-5 gap-y-5 w-full">
             {media.map((item,index)=><div className="relative" ><div className='absolute bg-transparent object-cover rounded-2xl xl:h-[150px] xl:w-[175px] lg:w-[175px] lg:h-32 w-28 h-32 ' ><span onClick={e=>DeleteMedia(e,item.publicId)} className='flex bg-red-300 p-2 w-fit mt-2 ml-5 rounded-full cursor-pointer' ><BsTrashFill className='text-red-500 text-lg' /></span></div><img key={index} controls className='object-cover rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src={item.imageUrl} /></div>)}
           </div>
           <Pagination page={page} setPage={setPage} totalPages={totalPages} />
           </>
           :
           <div className='flex mt-32 justify-center w-full h-full' >
             <img src="/not-found.png" className='w-36 h-36' />
           </div>
           }
      </AdminAccount>}
        <ToastContainer />
    </>
  )
}

export default ManageGallery