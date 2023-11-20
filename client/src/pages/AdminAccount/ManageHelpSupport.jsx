import React, { useState, useEffect } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination2 from '../../components/Pagination/Pagination2'
import { GetHelpByCateogry } from '../../api/admin/Help&Support/helpSupport'
import { searchBlog } from '../../api/admin'
import { createHelpTab, getHelpTabs,updateHelpTab } from '../../api/admin/Help&Support/helpSupportTab'
import SelectInput from '../../components/TextInput/SelectInput'
import { AiFillPlusCircle } from 'react-icons/ai'
import TextInput from '../../components/TextInput/TextInput';
import { BsArrowRightShort } from 'react-icons/bs'
import Popup from '../../components/AdminDashboard/Popup';
import * as Yup from 'yup';
import HelpTable from '../../components/AdminDashboard/HelpNsupport/HelpTable';
import Toast from '../../utils/Toast'
import { FaRegTrashCan } from "react-icons/fa6";
import HelpTabCreator from '../../components/AdminDashboard/HelpNsupport/HelpTabCreator';


const ManageHelpSupport = () => {

  const [blogs, setBlogs] = useState([])

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(4)
  const [totalCount, setTotalCount] = useState(1)

  const [loading, setLoading] = useState(false)

  const [category, setCategory] = useState('all-categories')
  const [search, setSearch] = useState('')

  const [categories, setCategories] = useState([])

  useEffect(() => {
    GetBlog()
  }, [category, page])

  const GetBlog = async (oldPage) => {
    setLoading(true)
    let params;
    if (oldPage) {
      setPage(oldPage)
      params = { page: oldPage, limit: limit }
    } else {
      params = { page: page, limit: limit }
    }
    const data = { category: category }
    const res = await GetHelpByCateogry(data, params)
    if (res.status === 200) {
      setLoading(false)
      setBlogs(res.data.helps)
      setTotalCount(Math.ceil(res.data.totalCount / limit))
    } else {
      setBlogs([])
      setLoading(false)
    }
  }


  const SearchBlog = async (e) => {
    e.preventDefault()
    const data = { title: search }
    const params = { page: 1, limit: limit }
    const res = await searchBlog(data, params)
    if (res.status === 200) {
      setLoading(false)
      setBlogs(res.data.blogs)
      setTotalCount(Math.ceil(res.data.totalCount / limit))
    } else {
      setBlogs([])
      setLoading(false)
    }
  }

  //  Tabs States
  const [helpTabs, setHelpTabs] = useState([])
  
  const [tabTitle, setTabTitle] = useState('')
  const [tabPopup, setTabPopup] = useState(false)
  const [submitTab, setSubmitTab] = useState(false)
  
  const [uTabId, setuTabId] = useState('')
  const [utabTitle, setuTabTitle] = useState('')
  const [utabPopup, setuTabPopup] = useState(false)
  const [usubmitTab, setuSubmitTab] = useState(false)


  const [tabLoading, setTabLoading] = useState(false)
  const [errors, setErrors] = useState([])

  
  const GetHelpTabs = async () => {
    setTabLoading(true)
    const res = await getHelpTabs()
    if (res.status === 200) {
      setTabLoading(false)
      setHelpTabs(res.data.helpTabs)
      setCategories([{ title: 'All Categories' }, ...res.data.helpTabs]);
    } else {
      setHelpTabs([])
      setTabLoading(false)
    }
  }

  useEffect(() => {
    GetHelpTabs()
  }, [])

     // Create Help Tab
     const CreateHelpTab = async (e) => {
      e.preventDefault()
      if(tabTitle.length === 0){
        Toast('Tab Title Required!','error',1000)
        setSubmitTab(false)
        return
      }
      setSubmitTab(true)
        const data = { title: tabTitle }
        const res = await createHelpTab(data);
        if (res.status === 200) {
          setSubmitTab(false)
          GetHelpTabs()
          Toast(res.data.msg,'success',1000)
          setTabTitle('');
          setTabPopup(false)
        } else {
          Toast(res.data.message,'error',1000)
          setSubmitTab(false)
          setTabTitle('');
          setTabPopup(false)
        }
    }
     // Create Help Tab
     const UpdateHelpTab = async (e) => {
      e.preventDefault()
      setuSubmitTab(true)
      if(utabTitle.length === 0){
        Toast('Tab Title Required!','error',1000)
        setuSubmitTab(false)
        return
      }
        const data = { title: utabTitle,id:uTabId }
        const res = await updateHelpTab(data);
        console.log(res)
        if (res.status === 200) {
          setuSubmitTab(false)
          GetHelpTabs()
          Toast(res.data.msg,'success',1000)
          setuTabTitle('');
          setuTabPopup(false)
        } else {
          Toast(res.data.message,'error',1000)
          setuSubmitTab(false)
          setuTabTitle('');
          setuTabPopup(false)
        }
    }

    const HandleUpdate = (e,id,title) => {
      e.preventDefault()
     setuTabTitle(title)
     setuTabId(id)
     setuTabPopup(true)
    }


  return (
    <>
     <Popup state={tabPopup} setState={setTabPopup} zindex="z-[99]">
      <form className='flex flex-col space-y-3' >
        <h1 className="font-semibold" >Create Help & Support Tab</h1>
        <TextInput width="full" name="title" title="Tab Title" iscompulsory="true" type="text" value={tabTitle} onChange={(e) => setTabTitle(e.target.value)}  placeholder="Enter Tab Name" />
        <button onClick={e=>{submitTab ?null:CreateHelpTab(e)}} type="button" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{submitTab ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a>}</button>
      </form>
      </Popup>
     <Popup state={utabPopup} setState={setuTabPopup} zindex="z-[99]">
      <form className='flex flex-col space-y-3' >
        <h1 className="font-semibold" >Update Help & Support Tab</h1>
        <TextInput width="full" name="title" title="Tab Title" iscompulsory="true" type="text" value={utabTitle} onChange={(e) => setuTabTitle(e.target.value)}  placeholder="Enter Tab Name" />
        <button onClick={e=>{usubmitTab ?null:UpdateHelpTab(e)}} type="button" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{usubmitTab ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Update</span><BsArrowRightShort className='text-2xl' /></a>}</button>
      </form>
      </Popup>


      {/* Popup End */}
       <AdminAccount>
       <div className='flex items-center space-x-2 my-2 bg-white py-3 px-5 w-full' >
          <NavLink to="/admin/create-help-support" className='bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold' >Create&nbsp;Help&nbsp;&&nbsp;Support</NavLink>
          <SelectInput onChange={e => setCategory(e.target.value)} options={categories} />
          <div className='flex w-full justify-end space-x-3' >
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Search Help & Support' className='text-xs px-2 outline-none border border-b3 rounded-md' />
            <button onClick={SearchBlog} className='border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1' >Search</button>
          </div>
        </div>
       <h3 className='font-semibold  mt-5 mb-2 text-center text-xl' >Help & Support Blogs</h3>
        {loading ? <div className='flex items-center justify-center w-full' ><img src="/loader-bg.gif" className='w-10 h-10' /></div> : blogs.length > 0 ? <><HelpTable setPage={setPage} getBlog={GetBlog} data={blogs} /><Pagination2 page={page} setPage={setPage} totalPages={totalCount} /></> : <div className='flex justify-center w-full h-full' >
          <img src="/not-found.webp" className='w-24 h-24' />
        </div>}

      
       <HelpTabCreator loadind={tabLoading} tabs={helpTabs} handleUpdate={HandleUpdate} setState={setTabPopup} refresh={GetHelpTabs} />


      </AdminAccount>
    </>
  )
}

export default ManageHelpSupport