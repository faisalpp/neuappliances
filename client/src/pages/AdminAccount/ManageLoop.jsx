import React,{useState,useEffect} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from '../../components/AdminDashboard/Popup';
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillPlusCircle} from 'react-icons/ai'
import SelectInput from '../../components/TextInput/SelectInput';
import TextInput from '../../components/TextInput/TextInput';
import {uploadLoopMedia,getLoopMedia} from '../../api/admin'
import axios from 'axios'
import Loader2 from '../../components/Loader/Loader2'
import Pagination from '../../components/Pagination';


const ManageLoop = () => {
  // Cloudinary Config
  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
  const upload_preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
  const folder = 'LoopMedia';

  const [mediaPopup,setMediaPopup] = useState(false)
  const [type,setType] = useState('upload');

  const [mediaUrl,setMediaUrl] = useState('');
  const [uploadUrl,setUploadUrl] = useState('');

  const [media,setMedia] = useState([])
  const [uploadedMedia,setUploadedMedia] = useState('')

  // Uploading States
  const [isUpload,setIsUpload] = useState(false)
  const [isSubmit,setIsSubmit] = useState(false)

  const CloudinaryUpload = async () =>  {
    setIsUpload(true)
    const file = uploadUrl;
    const formData = new FormData()
    formData.append('file',file);
    formData.append('folder',folder);
    formData.append('upload_preset',upload_preset)
    axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/video/upload`,formData)
     .then(res=>{ 
       setUploadedMedia(res.data.secure_url);
       setIsUpload(false)
       toast.success('Media Upload Successfull!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      })
     .catch(err=>{
          setIsUpload(false)
          toast.error('Media Cloud Internal Error!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
     })
  }

  const HandleMedia = async (data) => {
    setIsSubmit(true)
    const res = await uploadLoopMedia(data)
    console.log(res)
    if(res.data.status === 200){
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
      setMediaPopup(false)
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
          setMediaPopup(false)
      }
  }

  const Submit = async (e) => {
    e.preventDefault()
    if(type === 'upload'){
      const data = {type:type,url:uploadedMedia}
      await HandleMedia(data)
    }else{
      const data = {type:type,url:mediaUrl}
      await HandleMedia(data)
    }
    
  }

  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(3);
  const [totalCount,setTotalCount] = useState(0);
  const [totalPages,setTotalPages] = useState(0);

  useEffect(() => {
    const GetLoopMedia = async () => {
        const params = {page:page,limit:limit};
        const res = await getLoopMedia(params);
        if(res.status === 200){
            setMedia(res.data.loops)
            setTotalCount(res.data.totalCount)
            setTotalPages(Math.ceil(res.data.totalCount / limit))
        }else{
            console.log(res)
        }
    }
    GetLoopMedia()
}, [page])
  
  
  return (
    <>
        <Popup state={mediaPopup} setState={setMediaPopup}>
          <form onSubmit={Submit} className='flex flex-col space-y-3' >
           <h1 className="font-semibold" >Upload Loop Media</h1>
           <SelectInput name="type" title="Upload Type" iscompulsory="true" onChange={e=>setType(e.target.value)} options={['Upload','Link']}  />
           {type === 'upload' ? <div className='flex items-end space-x-3'><TextInput  name="uploadUrl" title="Product Title" iscompulsory="true" type="file" accept="video/*" onChange={e=>setUploadUrl(e.target.files[0])} /><button type='button' onClick={CloudinaryUpload} className='flex justify-center items-center cursor-pointer rounded-md py-1 w-fit h-12 bg-b3' ><a className='flex items-center justify-center text-center  w-14 py-1 rounded-md text-white font-semibold' >{isUpload ? <img src='/loader-bg.gif' className='h-8' /> : <span className='text-xs' >Upload</span>} </a></button></div>:null}
           {type  === 'link' ? <TextInput  name="mediaUrl" title="Product Title" iscompulsory="true" type="text" onChange={e=>setMediaUrl(e.target.value)} placeholder="Enter Media Url" />:null}
           <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Submit</span><BsArrowRightShort className='text-2xl' /> </a></button>
          </form>
        </Popup>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
        {isSubmit ? <Loader2/>:<AdminAccount>
          <div className='flex mb-5 py-3 rounded-3xl px-10 w-full' >
           <div className='flex w-full justify-end space-x-3' >
            <AiFillPlusCircle onClick={()=>setMediaPopup(true)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />   
           </div>
          </div>
           {media.length > 0 ? <><div className="grid grid-cols-4 gap-x-5 gap-y-5 w-full">
             {media.map((item,index)=><video key={index} controls className='object-cover rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src={item.url} />)}
           </div>
           <Pagination page={page} setPage={setPage} totalPages={totalPages} />
           </>
           :
           <h1 className='text-center' >No Loop Media Found!</h1>}
      </AdminAccount>}
        <ToastContainer />
    </>
  )
}

export default ManageLoop