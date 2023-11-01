import React, { useEffect } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { BsArrowRightShort, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { updateCategory, getCategoryById } from '../../api/admin/category'

const UpdateCategory = () => {
  const { id } = useParams()
  const [imagePrev, setImagePrev] = useState('')
  const [image, setImage] = useState('')
  const [oldImage, setOldImage] = useState('')
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [inMenu, setInMenu] = useState(false);
  const [description, setDescription] = useState('');
  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();

  const onImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setOldImage(imagePrev)
      setImagePrev(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
  }

  useEffect(() => {
    const GetSectionById = async () => {
      const data = { id };
      const res = await getCategoryById(data);
      if (res.status === 200) {
        // console.log(res)
        setTitle(res.data.category[0].title);
        setDescription(res.data.category[0].description);
        setSlug(res.data.category[0].slug);
        setImagePrev(res.data.category[0].image);
        setInMenu(res.data.category[0].inMenu);
        // console.log(res.data.category[0].inMenu)
      } else {
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
    GetSectionById()
  }, []);

  const UpdateCategory = async (e) => {
    e.preventDefault();
    setSubmit(true)
    const formData = new FormData();
    formData.set('title', title)
    formData.set('image', image)
    formData.set('description', description)
    formData.set('oldImage', oldImage)
    formData.set('slug', slug)
    formData.set('id', id)
    formData.set('inMenu', inMenu)
    const res = await updateCategory(formData);

    if (res.status === 200) {
      setSubmit(false)
      toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate(-1);
    } else {
      setSubmit(false)
      toast.error(res.data.message, {
        position: "top-right",
        autoClose: 1000,
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
    const modSlug = e.target.value.toLowerCase().replace(/ /g, "_")
    setSlug(modSlug);
  }

  return (
    <>
      <AdminAccount>
        <div className='flex mb-5 py-3 rounded-3xl px-10 w-full' >
          <BsFillArrowLeftCircleFill onClick={() => navigate(-1)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />
        </div>

        <div className='flex justify-center w-full'>
          <form onSubmit={UpdateCategory} encType='multipart/form-data' className='flex flex-col space-y-5 w-8/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
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
              <textarea placeholder='Enter Category Description' value={description} className='text-sm h-32 outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' onChange={e => setDescription(e.target.value)} ></textarea>
            </div>
            <div className='flex justify-center space-x-5 w-full items-center' >
              <div className='flex flex-col space-y-1 w-full'>
                <h5 className='text-xs font-semibold' >Category Slug</h5>
                <input type="text" value={slug} readOnly className=' text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='refregerator' />
              </div>
              <div className='flex flex-col space-y-1' >
                <h5 className='text-xs font-semibold' >Show&nbsp;In&nbsp;Navbar</h5>
                <div className='flex w-fit space-x-1' >
                  <input type="checkbox" checked={inMenu ? true : false} onChange={(e) => setInMenu(e.target.checked)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' />
                  <h5 className='text-xs font-semibold' >{inMenu ? 'Visible' : 'Hidden'}</h5>
                </div>
              </div>
            </div>
            <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Update</span><BsArrowRightShort className='text-2xl' /></a>}</button>
          </form>
        </div>

      </AdminAccount>
    </>
  )
}

export default UpdateCategory