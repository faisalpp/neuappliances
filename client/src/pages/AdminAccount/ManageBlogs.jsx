import React, { useState, useEffect } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogTable from '../../components/AdminDashboard/Blog/BlogTable';
import Pagination2 from '../../components/Pagination/Pagination2'
import { GetBlogByCateogry } from '../../api/frontEnd'
import { searchBlog } from '../../api/admin'
import { GetCategories } from '../../api/admin/category'
import SelectInput from '../../components/TextInput/SelectInput'

const ManageBlogs = () => {

  const [blogs, setBlogs] = useState([])

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(8)
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
    const res = await GetBlogByCateogry(data, params)
    if (res.status === 200) {
      setLoading(false)
      setBlogs(res.data.blogs)
      setTotalCount(Math.ceil(res.data.totalCount / limit))
    } else {
      setBlogs([])
      setLoading(false)
    }
  }


  useEffect(() => {
    // Fetch data for the category field
    fetchDataForCategory();
  }, []);


  const fetchDataForCategory = async () => {
    const res = await GetCategories();
    if (res.status === 200) {
      setCategories([{ title: 'All Categories' }, ...res.data.categories]);
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

  return (
    <>
      <AdminAccount>
        <div className='flex items-center space-x-2 my-2 bg-white py-3 px-5 w-full' >
          <NavLink to="/admin/create-blog" className='bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold' >Create&nbsp;Blog</NavLink>
          <SelectInput onChange={e => setCategory(e.target.value)} options={categories} />
          <div className='flex w-full justify-end space-x-3' >
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Search Blog' className='text-xs px-2 outline-none border border-b3 rounded-md' />
            <button onClick={SearchBlog} className='border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1' >Search</button>
            {/* <NavLink to="/admin/create-product" className='bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold' >Create Blog</NavLink> */}
          </div>
        </div>
        {loading ? <div className='flex items-center justify-center w-full' ><img src="/loader-bg.gif" className='w-10 h-10' /></div> : blogs.length > 0 ? <BlogTable setPage={setPage} getBlog={GetBlog} data={blogs} /> : <div className='flex justify-center w-full h-full' >
          <img src="/not-found.webp" className='w-36 h-36' />
        </div>}
        {blogs.length > 0 ? <Pagination2 page={page} setPage={setPage} totalPages={totalCount} />:null}
      </AdminAccount>
    </>
  )
}

export default ManageBlogs