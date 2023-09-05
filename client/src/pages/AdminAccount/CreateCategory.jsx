import React from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { BsArrowRightShort } from 'react-icons/bs'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createCategory } from '../../api/admin/category'


const CreateCategory = () => {

  const [imagePrev, setImagePrev] = useState('https://placehold.co/600x400')
  const [image, setImage] = useState('/')
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [inMenu, setInMenu] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const onImageChange = (event) => {
    setImagePrev(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
  }

  const CreateCategory = async (e) => {
    e.preventDefault();
    setSubmit(true)
    const formData = new FormData();
    formData.set('title', title)
    formData.set('slug', slug)
    formData.set('image', image)
    formData.set('inMenu', inMenu)
    formData.set('description', description)

    const res = await createCategory(formData);

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
      navigate('/admin/categories');
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
    }


  }

  const handleTitle = (e) => {
    setTitle(e.target.value);
    const modSlug = e.target.value.toLowerCase().replace(/\s/g, "-")
    setSlug(modSlug);
  }

  return (
    <>
      <AdminAccount>
        <div className='flex justify-center w-full'>
          <form onSubmit={CreateCategory} encType='multipart/form-data' className='flex flex-col space-y-5 w-8/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
            <div className='rounded-2xl border border-gray-300 p-3 h-[225px] w-fit flex justify-center items-center self-center'>
              {/* <img src='/generalelectronics.webp' className='max-w-full h-[115px] object-contain' alt="example" /> */}
              <img src={imagePrev} className='max-w-fit h-[225px] object-contain' alt="example" />
            </div>
            <div className='flex flex-col space-y-1'>
              <h5 className='text-xs font-semibold' >Category Title</h5>
              <input type="text" value={title} onChange={handleTitle} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Refregerator' />
            </div>
            <div className='flex flex-col space-y-1' >
              <h5 className='text-xs font-semibold' >Category Image</h5>
              <input type="file" accept="image/*" onChange={onImageChange} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' />
            </div>
            <div className='flex flex-col space-y-1'>
              <h5 className='text-xs font-semibold' >Category Description</h5>
              <textarea placeholder='Enter Category Description' value={description} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' onChange={e => setDescription(e.target.value)} ></textarea>
            </div>
            <div className='flex justify-center space-x-5 w-full items-center' >
              <div className='flex flex-col space-y-1 w-full'>
                <h5 className='text-xs font-semibold' >Category Slug</h5>
                <input type="text" value={slug} readOnly className=' text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='refregerator' />
              </div>
              <div className='flex flex-col space-y-1' >
                <h5 className='text-xs font-semibold' >Show&nbsp;In&nbsp;Navbar</h5>
                <div className='flex w-fit space-x-1' >
                  <input type="checkbox" defaultValue={false} onChange={(e) => setInMenu(e.target.checked)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' />
                  <h5 className='text-xs font-semibold' >{inMenu ? 'Visible' : 'Hidden'}</h5>
                </div>
              </div>
            </div>
            <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a>}</button>
          </form>
        </div>
      </AdminAccount>
    </>
  )
}

export default CreateCategory