import React,{useEffect} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { BsArrowRightShort } from 'react-icons/bs'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetCategories,createBlog } from '../../api/admin'
import BlogEditor from '../../components/AdminDashboard/BlogEditor';
import TextInput from '../../components/TextInput/TextInput';
import TextAreaInput from '../../components/TextInput/TextAreaInput';
import { useRef } from 'react';
import SelectInput from '../../components/TextInput/SelectInput';
import * as Yup from 'yup';


const CreateApplianceTips = () => {

  // Validations
  const blogCreationValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    slug: Yup.string().required('Slug is required'),
    thumbnail: Yup.string().nullable(true),
    shortDescription: Yup.string().required('Short Description is required'),
    type: Yup.string().required('Blog Type is required'),
    category: Yup.string().required('Blog Category is required'),
    content: Yup.string().required('Blog Content is required'),
  });

  const [errors,setErrors] = useState([]);
  const [categories,setCategories] = useState([])
  const [tempCat,setTempCat] = useState([])
  const thumbnailRef = useRef()
  
  const [title,setTitle] = useState('');
  const [slug,setSlug] = useState('');
  const [thumbnail,setThumbnail] = useState('');
  const [shortDescription,setShortDescription] = useState('');
  const [type,setType] = useState('blog');
  const [category,setCategory] = useState('');
  const [content,setContent] = useState('');

  const handleType = (e) => {
   setType(e.target.value.toLowerCase().replace(/\s/g,'-'))
   if(e.target.value === 'help-&-support'){
    setCategories(['Delivery','Purchase','Return','Refund'])
    setCategory('delivery')
  }else{
    setCategories(tempCat)
    setCategory(tempCat[0].slug)
   }
  }

  const CreateBlog = async (e) => {
    e.preventDefault()
    try{
    const data = {title,slug,thumbnail,shortDescription,type,category,content}
    await blogCreationValidationSchema.validate(data, { abortEarly: false });
    const res = await createBlog(data);
    console.log(res)
    if(res.status === 200){
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
  } catch (error) {
    console.log(error)
    if(error){
      setErrors(error.errors)
    }else{
      setErrors([])
    }
  }
  }

  useEffect(() => {
    // Fetch data for the category field
    fetchDataForCategory();
  }, []);


  const fetchDataForCategory = async () => {
        const res = await GetCategories();
        if(res.status === 200){
          setCategories(res.data.categories);
          setCategory(res.data.categories[0].title)
          setTempCat(res.data.categories);
        }
  }

  const handleThumbnailSelection = (e) => {
    e.preventDefault()
    setThumbnail(e.target.files[0])
  };

  const handleThumbnailClick = () => {
    // Simulate a click event on the input file element
    thumbnailRef.current.click();
  };


  return (
    <>
        <AdminAccount>
          <form onSubmit={CreateBlog} className='flex flex-col space-y-5 w-full py-5 bg-white' >
          <div className='flex w-full' >
           <div className='flex flex-col space-y-10 w-1/2' >
            <TextInput width="full" name="title" title="Blog Title" iscompulsory="true" type="text" value={title} onChange={(e)=>{setTitle(e.target.value);setSlug(e.target.value.toLowerCase().replace(/\s/g,'-'))}} error={errors && errors.includes('Title is required') ? true : false} errormessage="Title is required" placeholder="Enter Blog Title" />
            <TextInput width="full" name="slug" title="Blog Slug" readOnly iscompulsory="true" type="text" value={slug} error={errors && errors.includes('Slug is required') ? true : false} errormessage="Slug is required" placeholder="Enter Blog Slug" />
            <TextAreaInput name="shortDescription" title="Short Description" iscompulsory="true" type="text" value={shortDescription} onChange={e=>setShortDescription(e.target.value)} error={errors && errors.includes('Short Description is required') ? true : false} errormessage="Short Description is required" placeholder="Enter Short Description"  />
           </div>
           <div className="flex flex-col space-y-8 items-center w-1/2" >
            <div className='flex flex-col space-y-2' >
             <img src={thumbnail != '' ? thumbnail : 'https://placehold.co/150x150'} className='self-center h-fit w-fit' />
             <button onClick={handleThumbnailClick} type="button" className='flex justify-center items-center self-center cursor-pointer rounded-md py-1 w-fit bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Select Thumbnail</span><BsArrowRightShort className='text-2xl' /></a></button>
             <input ref={thumbnailRef} name="thumbnail" type="file" className='hidden' onChange={e=>handleThumbnailSelection(e)} />
            </div>
            <div className='flex space-x-5' >
             <SelectInput name="type" title="Select Blog Type" iscompulsory="true" onLoad={()=>setType('blog')} onChange={handleType} options={['Blog','Appliance Tips','Help & Support']}  />
             <SelectInput name="category" title="Select Blog Category" iscompulsory="true" onChange={e=>setCategory(e.target.value.toLowerCase().replace(/\s/g,'-'))} options={categories} />
            </div>
           </div> 
          </div>
            <BlogEditor state={content} setState={setContent} />
            <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a></button>
          </form>
        </AdminAccount>
    </>
  )
}

export default CreateApplianceTips