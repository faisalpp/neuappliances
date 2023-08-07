import React, { useState,useEffect } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogTable from '../../components/AdminDashboard/Blog/BlogTable';
import Pagination2 from '../../components/Pagination/Pagination2'
import {GetBlogByCateogry} from '../../api/frontEnd'
import {GetCategories, deleteBlog} from '../../api/admin'
import SelectInput from '../../components/TextInput/SelectInput'

const ManageBlogs = () => {

  const [blogs,setBlogs] = useState([])

  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(16)

  const [category,setCategory] = useState('refrigerators')

  const [categories,setCategories] = useState([])

  useEffect(()=>{
    GetBlog()
  },[category])

  const GetBlog = async () => {
   const data = {category:category}
   const params = {page:page,limit:limit}
   const res = await GetBlogByCateogry(data,params);
   console.log(res)
   if(res.status === 200){
      setBlogs(res.data.blogs)
   }else{
      setBlogs([])
   }
}
 
const DeleteBlog = async (e,id) => {
  e.preventDefault()
   const data = {id:id}
   const res = await deleteBlog(data);
   if(res.status === 200){
    GetBlog();
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
  }
}
  
 useEffect(() => {
  // Fetch data for the category field
  fetchDataForCategory();
}, []);


const fetchDataForCategory = async () => {
  const res = await GetCategories();
  if(res.status === 200){
    console.log(res)
    setCategories(res.data.categories);
  }
}

    return (
        <>
            <AdminAccount>
             <div className='flex items-center space-x-2 my-2 bg-white py-3 px-5 w-full' >
              <NavLink to="/admin/create-blog" className='bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold' >Create&nbsp;Blog</NavLink>
              <SelectInput onChange={e=>setCategory(e.target.value)} options={categories} />
              <div className='flex w-full justify-end space-x-3' >
              <input placeholder='Search Blog' className='text-xs px-2 outline-none border border-b3 rounded-md' />
               <NavLink to="/admin/create-product" className='border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1' >Search</NavLink>
               {/* <NavLink to="/admin/create-product" className='bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold' >Create Blog</NavLink> */}
              </div>
             </div>
                 {blogs.length > 0 ? <BlogTable deleteBlog={DeleteBlog} data={blogs} />:<div className='flex justify-center w-full h-full' >
                <img src="/not-found.png" className='w-36 h-36' />
               </div>}
                 {blogs.length > 16 ? <Pagination2 page={page} setPage={setPage} totalPages={blogs ? blogs.length : 0} />:null}
            </AdminAccount>
        </>
    )
}

export default ManageBlogs