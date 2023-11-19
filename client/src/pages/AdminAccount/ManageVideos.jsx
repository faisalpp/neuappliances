import React, { useState, useEffect } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import Popup from '../../components/AdminDashboard/Popup';
import { BsArrowRightShort, BsFillTrashFill } from 'react-icons/bs'
import { AiFillPlusCircle } from 'react-icons/ai'
import SelectInput from '../../components/TextInput/SelectInput';
import TextInput from '../../components/TextInput/TextInput';
import { uploadVideoMedia, getVideoMedia, deleteVideoMedia } from '../../api/admin/videoMedia'
import Iframe from '../../components/Reusable/Ifram'
import Pagination2 from '../../components/Pagination/Pagination2';
import Toast from '../../utils/Toast'
import { IoMdCloseCircle } from "react-icons/io";

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
      Toast(res.data.msg,'success',1000)
      setUploadMedia(section)
      setSelectedSection()
      GetLoopMedia()
      setIsSubmit(false)
      setMediaPopup(false)
    } else {
      Toast(res.data.message,'error',1000)
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

  const [delLoading, setDelLoading] = useState('')

  const DeleteVideo = async (e, id) => {
    e.preventDefault()
    setDelLoading(id)
    const res = await deleteVideoMedia({ id:id})
    if (res.status === 200) {
      Toast(res.data.msg,'success',1000)
      GetLoopMedia()
      setDelLoading('')
    } else {
      Toast(res.data.message)
      setDelLoading('')
    }
  }


  return (
    <>
      <Popup state={mediaPopup} setState={setMediaPopup} zindex="z-[99]">
        <form onSubmit={Submit} className='flex flex-col space-y-3' >
          <h1 className="font-semibold" >Upload Loop Media</h1>
          <SelectInput widthFull="true" name="type" title="Upload Type" iscompulsory="true" onChange={e => setType(e.target.value)} options={['Upload', 'Link', 'Iframe']} />
          <SelectInput widthFull="true" name="section" title="Select Page Section" iscompulsory="true" onChange={e => setSection(e.target.value)} options={['Home Page Hero Section', 'Home Page Tour Section', 'Stay In Loop Videos', "Faq's Page Video", 'Our Story Page Video', 'Our Showroom Page Video', 'Our Compnies Page Video']} />
          {type === 'upload' ? <div className='flex items-end space-x-3'><TextInput width="full" name="uploadUrl" title="Video File" iscompulsory="true" type="file" accept="video/*" onChange={e => setUploadMedia(e.target.files[0])} /><a className='flex items-center justify-center text-center  w-14 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Upload</span> </a></div> : null}
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
        {isLoading ? <div className='flex justify-center w-full h-full' >
          <img src="/loader-bg.gif" className='w-12' />
        </div> : media.length > 0 ? <><div className="grid grid-cols-4 gap-x-2 gap-y-5 w-full">
          {media.map((item, indx) => <><div className="relative  w-full" >
            {/* <span className='absolute right-0 -top-2 z-30 bg-white w-fit text-xs h-fit rounded-full ' ><IoMdCloseCircle className='text-xl text-red-500' /></span> */}
            {item.section === 'stay-in-loop-videos' ? <div className="absolute right-3 bg-transparent z-30 h-8 w-8" ><div className="flex  justify-end  w-10 h-10 mt-1 " ><span title="Delete Video" onClick={e => DeleteVideo(e, item._id)} className='flex items-center justify-center bg-red-500 text-white hover:bg-white hover:text-red-500 hover:border-red-500 text-xs w-7 h-7 rounded-full cursor-pointer ' >{delLoading === item._id ? <img src="/loader-bg.gif" className='w-4 h-4' /> : <BsFillTrashFill className="text-sm" />}</span></div></div> : null}
            {item.type === "upload" || item.type === "link" ? <video key={indx} controls className='object-cover rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src={item.url} /> : null}
            {item.type === 'iframe' ? <Iframe style="h-32 w-full rounded-2xl" src={item.url} divId={`videos-manage-ifram-div-${indx}`} frameId={`videos-manage-ifram-${indx}`} thumbnail={item.thumbnail} icon="text-5xl" /> : null}
          </div></>)}
        </div>
          <Pagination2 page={page} setPage={setPage} totalPages={totalPages} />
        </>
          :
          <div className='flex justify-center items-center w-full h-full' >
            <img src="/not-found.webp" className='w-36 h-36' />
          </div>
        }
      </AdminAccount>
    </>
  )
}

export default ManageMedia