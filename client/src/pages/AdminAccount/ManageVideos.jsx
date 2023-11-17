import React, { useState, useEffect } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from '../../components/AdminDashboard/Popup';
import { BsArrowRightShort, BsFillTrashFill } from 'react-icons/bs'
import { AiFillPlusCircle } from 'react-icons/ai'
import SelectInput from '../../components/TextInput/SelectInput';
import TextInput from '../../components/TextInput/TextInput';
import { uploadVideoMedia, getVideoMedia, deleteVideoMedia } from '../../api/admin/videoMedia'

import Pagination2 from '../../components/Pagination/Pagination2';


const ManageMedia = () => {

  const [mediaPopup, setMediaPopup] = useState(false)
  const [type, setType] = useState('upload');
  const [section, setSection] = useState('home-page-hero-section');
  const [selectedSection, setSelectedSection] = useState('home-page-hero-section');

  const [uploadMedia, setUploadMedia] = useState('');

  const [media, setMedia] = useState([])

  // Uploading States
  const [isSubmit, setIsSubmit] = useState(false)

  const Submit = async (e) => {
    e.preventDefault()
    setIsSubmit(true)
    const formData = new FormData()
    formData.set('uploadMedia', uploadMedia);
    formData.set('section', section);
    formData.set('type', type);
    const res = await uploadVideoMedia(formData)
    
    if (res.status === 200) {
      toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setUploadMedia(section)
      setSelectedSection()
      GetLoopMedia()
      setIsSubmit(false)
      setMediaPopup(false)
    } else {
      toast.error(res.data.amessage, {
        position: "top-right",
        autoClose: 2000,
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

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(16);
  const [totalPages, setTotalPages] = useState(0);
  // Loader
  const [isLoading, setIsLoading] = useState(false)

  const GetLoopMedia = async () => {
    setIsLoading(true)
    const params = { page: page, limit: limit };
    const data = { section: selectedSection }
    const res = await getVideoMedia(params, data);
    
    if (res.status === 200) {
      setMedia(res.data.media)
      setTotalPages(Math.ceil(res.data.totalCount / limit))
      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    GetLoopMedia()
  }, [selectedSection, page])

  const [delLoading, setDelLoading] = useState(false)

  const DeleteVideo = async (e, id, type, url) => {
    e.preventDefault()
    setDelLoading(true)
    const res = await deleteVideoMedia({ id, type, url })
    if (res.status === 200) {
      toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      GetLoopMedia()
      setDelLoading(false)
    } else {
      toast.error(res.data.message, {
        position: "top-right",
        autoClose: 2000,
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


  return (
    <>
      <Popup state={mediaPopup} setState={setMediaPopup}>
        <form onSubmit={Submit} className='flex flex-col space-y-3' >
          <h1 className="font-semibold" >Upload Loop Media</h1>
          <SelectInput widthFull="true" name="type" title="Upload Type" iscompulsory="true" onChange={e => setType(e.target.value)} options={['Upload', 'Link', 'Iframe']} />
          <SelectInput widthFull="true" name="section" title="Select Page Section" iscompulsory="true" onChange={e => setSection(e.target.value)} options={['Home Page Hero Section', 'Home Page Tour Section', 'Stay In Loop Videos', "Faq's Page Video", 'Our Story Page Video', 'Our Showroom Page Video', 'Our Compnies Page Video']} />
          {type === 'upload' ? <div className='flex items-end space-x-3'><TextInput name="uploadUrl" title="Video File" iscompulsory="true" type="file" accept="video/*" onChange={e => setUploadMedia(e.target.files[0])} /><a className='flex items-center justify-center text-center  w-14 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Upload</span> </a></div> : null}
          {type === 'link' || type === 'iframe' ? <TextInput width="full" name="mediaUrl" title="Media Link" iscompulsory="true" type="text" onChange={e => setUploadMedia(e.target.value)} placeholder="Enter Media Url" /> : null}
          {/* <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Submit</span><BsArrowRightShort className='text-2xl' /> </a></button> */}
          <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{isSubmit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a>}</button>
        </form>
      </Popup>
      <AdminAccount>
        <div className='flex items-center mb-5 py-3 rounded-3xl px-10 w-full' >
          <SelectInput widthFull="false" name="sectionType" title="Filter Section Videos" iscompulsory="false" onChange={e => setSelectedSection(e.target.value)} options={['Home Page Hero Section', 'Home Page Tour Section', 'Stay In Loop Videos', "Faq's Page Video", 'Our Story Page Video', 'Our Showroom Page Video', 'Our Compnies Page Video']} />
          <div className='flex w-full justify-end space-x-3' >
            <AiFillPlusCircle onClick={() => setMediaPopup(true)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />
          </div>
        </div>
        {isLoading ? <div className='flex mt-32 justify-center w-full h-full' >
          <img src="/loader-bg.gif" className='w-24 h-24' />
        </div> : media ? <><div className="grid grid-cols-4 gap-x-2 gap-y-5 w-full">
          {media.map((item, index) => <><div className="relative  w-full" >
            {item.section === 'stay-in-loop-videos' ? <div className="absolute right-2 bg-transparent h-10 w-10" ><div className="flex  justify-end  w-10 h-10 mt-1 " ><span title="Delete Video" onClick={e => DeleteVideo(e, item._id, item.type, item.url)} className='flex items-center justify-center bg-red-500 text-white hover:bg-white hover:text-red-500 hover:border-red-500 text-xs w-8 h-8 rounded-full cursor-pointer ' >{delLoading ? <img src="/loader-bg.gif" className='w-4 h-4' /> : <BsFillTrashFill className="text-sm" />}</span></div></div> : null}
            {item.type === "upload" || item.type === "link" ? <video key={index} controls className='object-cover rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src={item.url} /> : null}
            {item.type === 'iframe' ? <iframe onLoad={() => setVload(false)} className='object-cover rounded-2xl xl:h-[150px] xl:w-[180px] lg:w-[200px] lg:h-32 w-32 h-32 ' src={item.url} title="#885 Liquidation Half Truckload of 25 Scratch &amp; Dent Kitchen and Laundry Appliances South Carolina" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> : null}
          </div></>)}
        </div>
          <Pagination2 page={page} setPage={setPage} totalPages={totalPages} />
        </>
          :
          <div className='flex mt-32 justify-center w-full h-full' >
            <img src="/not-found.webp" className='w-36 h-36' />
          </div>
        }
      </AdminAccount>
    </>
  )
}

export default ManageMedia