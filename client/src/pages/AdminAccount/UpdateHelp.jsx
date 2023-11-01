import React,{useEffect} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { BsArrowRightShort } from 'react-icons/bs'
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHelpTabs } from '../../api/admin/Help&Support/helpSupportTab'
import { getHelpBySlug,updateHelp } from '../../api/admin/Help&Support/helpSupport'
import BlogEditor from '../../components/AdminDashboard/BlogEditor';
import TextInput from '../../components/TextInput/TextInput'
import SelectInput from '../../components/TextInput/SelectInput';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import TextAreaInput from '../../components/TextInput/TextAreaInput';


const UpdateHelp = () => {

  // Validations
  const blogCreationValidationSchema = Yup.object().shape({
    id: Yup.string().required('Id is required'),
    title: Yup.string().required('Title is required'),
    slug: Yup.string().required('Slug is required'),
    category: Yup.string().required('Blog Category is required'),
    content: Yup.string().required('Blog Content is required'),
  });

  const query = useParams()


  const [errors,setErrors] = useState([]);
  const [categories,setCategories] = useState([])
  const [submit,setSubmit] = useState(false)
  
  const [id,setId] = useState();
  const [title,setTitle] = useState('');
  const [slug,setSlug] = useState('');
  const [shortDescription,setShortDescription] = useState('');
  const [category,setCategory] = useState('');
  const [content,setContent] = useState('');

  const GetBlogbySlug = async () => {
    const data = {slug:query.slug}
    const res = await getHelpBySlug(data)
    // console.log(res.data.help)
    setId(res.data.help[0]._id)
    setTitle(res.data.help[0].title)
    setSlug(res.data.help[0].slug)
    setContent(res.data.help[0].content)
    setCategory(res.data.help[0].category)
    setShortDescription(res.data.help[0].shortDescription)
  }

  useEffect(()=>{
     GetBlogbySlug()
  },[])


  const UpdateBlog = async (e) => {
    e.preventDefault()
    setSubmit(true)
    try{
    const data = {id,title,slug,category,shortDescription,content}
    await blogCreationValidationSchema.validate(data, { abortEarly: false });
    const res = await updateHelp(data);
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
    // console.log(error)
    setSubmit(false)
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
    const res = await getHelpTabs();
    // console.log(res.data.helpTabs)
    if(res.status === 200){
        const filteredCategories = res.data.helpTabs.filter(cat => cat.slug !== category)
        // console.log(filteredCategories)
        const catTitle = category[0].toUpperCase() + category.slice(1)
        const finalCategories = [{title:catTitle,slug:category}, ...filteredCategories];
        setCategories(finalCategories)
    }
  }

  return (
    <>
        <AdminAccount>
          <form onSubmit={UpdateBlog} className='flex flex-col space-y-5 w-full py-5 bg-white' >
          <div className='flex w-full' >
           <div className='flex flex-col space-y-10 w-1/2' >
            <TextInput width="full" name="title" title="Blog Title" iscompulsory="true" type="text" value={title} onChange={(e)=>{setTitle(e.target.value);setSlug(e.target.value.toLowerCase().replace(/\s/g,'-').replace(/\./g, ''))}} error={errors && errors.includes('Title is required') ? true : false} errormessage="Title is required" placeholder="Enter Blog Title" />
            <TextInput width="full" name="slug" title="Blog Slug" readOnly iscompulsory="true" type="text" value={slug} error={errors && errors.includes('Slug is required') ? true : false} errormessage="Slug is required" placeholder="Enter Blog Slug" />
           </div>
           <div className="flex flex-col space-y-8 items-center w-1/2" >
            <div className='flex flex-col items-center space-x-5 w-full' >
             <SelectInput name="categor" title="Select Category" iscompulsory="true" onChange={e=>setCategory(e.target.value)} options={categories} />
            </div>
            <div className='flex flex-col items-center space-x-5 w-72' >
             <TextAreaInput name="description" title="Description" iscompulsory="true" type="text" value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)} error={errors && errors.includes('Short Description is required') ? true : false} errormessage="Short Description is required" placeholder="Enter Product Description"  />
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

export default UpdateHelp