import React, { useState, useEffect } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination2 from '../../components/Pagination/Pagination2'
import { GetHelpByCateogry } from '../../api/admin/Help&Support/helpSupport'
import { searchBlog } from '../../api/admin'
import { createHelpTab, getHelpTabs } from '../../api/admin/Help&Support/helpSupportTab'
import SelectInput from '../../components/TextInput/SelectInput'
import { AiFillPlusCircle } from 'react-icons/ai'
import TextInput from '../../components/TextInput/TextInput';
import { BsArrowRightShort, BsPencil } from 'react-icons/bs'
import Popup from '../../components/AdminDashboard/Popup';
import * as Yup from 'yup';
import HelpTable from '../../components/AdminDashboard/HelpNsupport/HelpTable';

const ManageHelpSupport = () => {

  const [blogs, setBlogs] = useState([])

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(4)
  const [totalCount, setTotalCount] = useState(0)

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
    // console.log(res)
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
  const [tabLoading, setTabLoading] = useState(false)
  const [errors, setErrors] = useState([])

  // Help Tab Validation
  const helpTabCreationValidationSchema = Yup.object().shape({
    title: Yup.string().required('Tab Title is required!'),
  });

  // Create Help Tab
  const CreateHelpTab = async (e) => {
    e.preventDefault()
    setSubmitTab(true)
    try {
      const data = { title: tabTitle }
      await helpTabCreationValidationSchema.validate(data, { abortEarly: false });
      const res = await createHelpTab(data);
      // console.log(res)
      if (res.status === 200) {
        setSubmitTab(false)
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
        setTabTitle('');
        setTabPopup(false)
      } else {
        toast.error(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setSubmitTab(false)
        setTabTitle('');
        setTabPopup(false)
      }
    } catch (error) {
      // console.log(error)
      if (error) {
        setSubmitTab(false)
        setTabTitle('');
        setTabPopup(false)
        setErrors(error.errors)
      } else {
        setErrors([])
      }
    }
  }

  const GetHelpTabs = async () => {
    setTabLoading(true)
    const res = await getHelpTabs()
    // console.log(res)
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





  return (
    <>
      {/* Popup Start */}
      <Popup state={tabPopup} setState={setTabPopup}>
        <form className='flex flex-col space-y-3' >
          <h1 className="font-semibold" >Create Help & Support Tab</h1>
          <TextInput width="full" name="title" title="Tab Title" iscompulsory="true" type="text" value={tabTitle} onChange={(e) => setTabTitle(e.target.value)} error={errors && errors.includes('Tab Title is required!') ? true : false} errormessage="Title is Required" placeholder="Enter Tab Name" />
          <button onClick={CreateHelpTab} type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{submitTab ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a>}</button>
        </form>
      </Popup>
      {/* Popup End */}
      <AdminAccount>
        <div className='flex items-center space-x-2 my-2 bg-white py-3 px-5 w-full' >
          <NavLink to="/admin/create-help-support" className='bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold' >Create&nbsp;Help&nbsp;&&nbsp;Support</NavLink>
          <SelectInput onChange={e => setCategory(e.target.value)} options={categories} />
          <div className='flex w-full justify-end space-x-3' >
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Search Blog' className='text-xs px-2 outline-none border border-b3 rounded-md' />
            <button onClick={SearchBlog} className='border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1' >Search</button>
          </div>
        </div>
        {loading ? <div className='flex items-center justify-center w-full' ><img src="/loader-bg.gif" className='w-10 h-10' /></div> : blogs ? <HelpTable setPage={setPage} getBlog={GetBlog} data={blogs} /> : <div className='flex justify-center w-full h-full' >
          <img src="/not-found.webp" className='w-36 h-36' />
        </div>}
        {totalCount >= limit ? <Pagination2 page={page} setPage={setPage} totalPages={totalCount} /> : null}



        {/* Help & Support Tabs */}


        <div className='flex w-full items-center space-x-3 mb-5' >
          <h2 className='text-lg font-medium mt-5' >Help&nbsp;&&nbsp;Support&nbsp;Tabs</h2>
          <div className='flex w-full justify-end space-x-3' >
            <AiFillPlusCircle onClick={() => setTabPopup(true)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />
          </div>
        </div>
        {tabLoading ? <div className='flex items-center justify-center w-full' ><img src="/loader-bg.gif" className='w-10 h-10' /></div> : helpTabs.length > 0 ? helpTabs.map((tab, index) => <div key={index} className="tab-buttons maxlg:order-2 lg:w-fit flex flex-col gap-2 mb-2">
          <div className='p-2 xl:p-2 xl:text-sm font-semibold flex space-x-5 justify-between items-center text-left border border-[rgba(0,0,0,0.15)] rounded-2xl text-b23'>
            <span >{tab.title}</span>
            <span className='p-2 bg-b6 hover:bg-white border-b3 border-2  rounded-full cursor-pointer group' ><BsPencil onClick={() => { setUpdateFaqPopup(true); setUpdatedFaqTabTitle(tab.title); setUpdatedFaqTabId(tab._id) }} className='text-white group-hover:text-b3 text-sm shadow-xl' /></span>
          </div>
        </div>)
          :
          <div className='flex justify-center w-full h-full' >
            <img src="/not-found.webp" className='w-36 h-36' />
          </div>
        }



      </AdminAccount>
    </>
  )
}

export default ManageHelpSupport