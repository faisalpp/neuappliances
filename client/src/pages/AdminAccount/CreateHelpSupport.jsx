import React,{useEffect} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { BsArrowRightShort } from 'react-icons/bs'
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogEditor from '../../components/AdminDashboard/BlogEditor';
import TextInput from '../../components/TextInput/TextInput';
import SelectInput from '../../components/TextInput/SelectInput';
import * as Yup from 'yup';
import { createHelp } from '../../api/helpSupport';


const CreateHelpSupport = () => {

  // Validations
  const blogCreationValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    slug: Yup.string().required('Slug is required'),
    shortDescription: Yup.string().required('Short Description is required'),
    category: Yup.string().required('Blog Category is required'),
    content: Yup.string().required('Blog Content is required'),
  });

  const [errors,setErrors] = useState([]);
  const [categories,setCategories] = useState([])
  const [submit,setSubmit] = useState(false)
  
  const [title,setTitle] = useState('');
  const [slug,setSlug] = useState('');
  const [shortDescription,setShortDescription] = useState('');
  const [category,setCategory] = useState('');
  const [content,setContent] = useState('');

  const CreateHelpSupport = async (e) => {
    e.preventDefault()
    setSubmit(true)
    try{
    const data = {title,slug,shortDescription,category,content}
    const formData = new FormData()
    formData.set('title',title);
    formData.set('slug',slug);
    formData.set('shortDescription',shortDescription);
    formData.set('category',category);
    formData.set('content',content);
    await blogCreationValidationSchema.validate(data, { abortEarly: false });
    const res = await createHelp(formData);
    console.log(res)
    if(res.status === 200){
      setSubmit(false)
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
      setTitle('');
      setSlug('');
      setContent('');
    }else{
      setSubmit(false)
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
    setSubmit(false)
    if(error){
      setErrors(error.errors)
    }else{
      setErrors([])
    }
  }
  }

  return (
    <>
        <AdminAccount>
          <form onSubmit={CreateHelp} className='flex flex-col space-y-5 w-full py-5 bg-white' >
          <div className='flex w-full' >
           <div className='flex flex-col space-y-10 w-1/2' >
            <TextInput width="full" name="title" title="Blog Title" iscompulsory="true" type="text" value={title} onChange={(e)=>{setTitle(e.target.value);setSlug(e.target.value.toLowerCase().replace(/\s/g,'-').replace(/\./g, ''))}} error={errors && errors.includes('Title is required') ? true : false} errormessage="Title is required" placeholder="Enter Blog Title" />
            <TextInput width="full" name="slug" title="Blog Slug" readOnly iscompulsory="true" type="text" value={slug} error={errors && errors.includes('Slug is required') ? true : false} errormessage="Slug is required" placeholder="Enter Blog Slug" />
           </div>
           <div className="flex flex-col space-y-8 items-center w-1/2" >
            <div className='flex justify-center space-x-5 w-full' >
             <SelectInput name="categor" title="Select Blog Category" iscompulsory="true" onChange={e=>setCategory(e.target.value)} options={['Delivery','Purchase','Return','Refund']} />
            </div>
           </div> 
          </div>
            <BlogEditor state={content} setState={setContent} />
            <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> :<a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a>}</button>
          </form>
        </AdminAccount>
    </>
  )
}

export default CreateHelpSupport