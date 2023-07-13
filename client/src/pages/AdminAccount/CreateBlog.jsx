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
import JoditFileManager from '../../components/AdminDashboard/JoditFileManager';
import { useRef } from 'react';
import SelectInput from '../../components/TextInput/SelectInput';
import * as Yup from 'yup';


const CreateBlog = () => {

  // Validations
  const blogCreationValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    slug: Yup.string().required('Slug is required'),
    thumbnail: Yup.string().required('Thumbnail is required'),
    shortDescription: Yup.string().required('Short Description is required'),
    type: Yup.string().required('Blog Type is required'),
    category: Yup.string().required('Blog Category is required'),
    content: Yup.string().required('Blog Content is required'),
  });

  const [popup,setPopup] = useState(false)
  const [popup2,setPopup2] = useState(false)
  const [errors,setErrors] = useState([]);
  const [categories,setCategories] = useState([])
  const [tempCat,setTempCat] = useState([])
  const editor = useRef(null)
  const [selectedImage,setSelectedImage] = useState('')
  
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
    console.log(data)
    // await blogCreationValidationSchema.validate(data, { abortEarly: false });
    // const res = await createBlog(data);
    // if(res.status === 200){
    //   toast.success(res.msg, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }else{
    //   toast.error(res.message, {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    // }
  } catch (error) {
    console.error('Validation errors:', error.errors);
    setErrors(error.errors)
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
          setCategory(res.data.categories[0])
          setTempCat(res.data.categories);
        }
  }

  const openImagePopup = () => {
    setPopup(true)
  }

  const handleImageSelection = (imagePath,tab) => {
    console.log(imagePath,tab)
    setSelectedImage(imagePath)
    // Insert the selected image into the editor at the current cursor position
    setPopup(false)

    if(tab === 'images'){
      const data = content + `<img src="${process.env.REACT_APP_INTERNAL_PATH}/storage/uploads/images/${imagePath}" alt="${imagePath}"/>`;
      setContent(data)
    }else{
      const data = content + `<img src="${process.env.REACT_APP_INTERNAL_PATH}/storage/uploads/videos/${imagePath}" alt="${imagePath}"/>`;
      setContent(data)
    }
  };

  const handleThumbnailSelection = (imagePath,tab) => {
    setThumbnail(`${process.env.REACT_APP_INTERNAL_PATH}/storage/uploads/images/${imagePath}`)
    // Insert the selected image into the editor at the current cursor position
    setPopup2(false)
  };

  const quillRef = useRef(null);

  const toolbarOptions = [
    ['image'],
  ];

  const config ={
      toolbar: {
    container: toolbarOptions,
    handlers: {
      image: openImagePopup,
    },
  },
  }

  return (
    <>
    <JoditFileManager key="thumbnail" state={popup2} setState={setPopup2} selectedItem={thumbnail} handleSelection={handleThumbnailSelection} />
    <JoditFileManager key="blogger" state={popup} setState={setPopup} selectedItem={selectedImage} handleSelection={handleImageSelection} />
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
        <div className='flex items-center px-8 sm:px-20 lg:px-32 xl:px-40 2xl:px-[240px] mx-auto'>
          <form onSubmit={CreateBlog} className='flex flex-col space-y-5 w-full py-5 bg-white' >
          <div className='flex w-full' >
           <div className='flex flex-col space-y-10 items-center w-8/12' >
            <TextInput name="title" title="Blog Title" iscompulsory="true" type="text" value={title} onChange={(e)=>{setTitle(e.target.value);setSlug(e.target.value.toLowerCase().replace(/\s/g,'-'))}} error={errors.includes('Title is required') ? true : false} errormessage="Title is required" placeholder="Enter Blog Title" />
            <TextInput name="slug" title="Blog Slug" readOnly iscompulsory="true" type="text" value={slug} error={errors.includes('Slug is required') ? true : false} errormessage="Slug is required" placeholder="Enter Blog Slug" />
           </div>
           <div className="flex flex-col w-4/12" >
            <img src={thumbnail != '' ? thumbnail : 'https://placehold.co/150x150'} className='self-center h-fit w-fit' />
            <button type="button" onClick={()=>setPopup2(true)} className='flex justify-center items-center self-center cursor-pointer rounded-md py-1 w-fit bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Select Thumbnail</span><BsArrowRightShort className='text-2xl' /></a></button>
           </div> 
          </div>
            
            <TextAreaInput name="shortDescription" title="Short Description" iscompulsory="true" type="text" value={shortDescription} onChange={e=>setShortDescription(e.target.value)} error={errors.includes('Short Description is required') ? true : false} errormessage="Short Description is required" placeholder="Enter Short Description"  />
            
            <div className='flex space-x-5' >
             <SelectInput name="type" title="Select Blog Type" iscompulsory="true" onLoad={()=>setType('blog')} onChange={handleType} options={['Blog','Appliance Tips','Help & Support']}  />
             <SelectInput name="type" title="Select Blog Category" iscompulsory="true" onChange={e=>setCategory(e.target.value.toLowerCase().replace(/\s/g,'-'))} options={categories} />
            </div>
            <BlogEditor quillRef={quillRef} config={config} state={content} setState={setContent} />
            <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a></button>
          {content}
          </form>
        </div>
        <ToastContainer  />
    </>
  )
}

export default CreateBlog