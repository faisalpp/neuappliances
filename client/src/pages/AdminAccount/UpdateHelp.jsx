import React,{useEffect,useState,useRef} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { BsArrowRightShort } from 'react-icons/bs'
import { getHelpTabs } from '../../api/admin/Help&Support/helpSupportTab'
import { getHelpBySlug,updateHelp } from '../../api/admin/Help&Support/helpSupport'
import BlogEditor from '../../components/AdminDashboard/BlogEditor';
import TextInput from '../../components/TextInput/TextInput'
import TextArea from '../../components/TextInput/TextAreaInput'
import SelectInput from '../../components/TextInput/SelectInput';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import TextAreaInput from '../../components/TextInput/TextAreaInput';
import Toast from '../../utils/Toast'
import FaqAccordion2 from '../../components/FaqAccordion2';
import {AiFillCloseCircle} from 'react-icons/ai'

const UpdateHelp = () => {

  // Validations
  const blogCreationValidationSchema = Yup.object().shape({
    id: Yup.string().required('Id is required'),
    title: Yup.string().required('Title is required'),
    slug: Yup.string().required('Slug is required'),
    category: Yup.string().required('Category is required'),
    content: Yup.string().required('Content is required'),
    metaTitle: Yup.string(),
    metaDescription: Yup.string(),
    metaKeywords: Yup.string(),
  });

  const {id} = useParams()


  const [errors,setErrors] = useState([]);
  const [categories,setCategories] = useState([])
  const [submit,setSubmit] = useState(false)
  
  const [title,setTitle] = useState('');
  const [slug,setSlug] = useState('');
  const [shortDescription,setShortDescription] = useState('');
  const [category,setCategory] = useState('');
  const [content,setContent] = useState('');
  const [metaTitle,setMetaTitle] = useState('');
  const [metaDescription,setMetaDescription] = useState('');
  const [metaKeywords,setMetaKeywords] = useState([]);

  const [keywordField,setKeywordField] = useState('')
    const keywordRef = useRef()
    
  
    const handleEnterKey = (e) => {
      // e.preventDefault()
      if (e.key === ' ' && keywordField.length > 0) {
        if(metaKeywords?.length > 0){
          setMetaKeywords([...metaKeywords,keywordField])
        }else{
          setMetaKeywords([keywordField])
        }
        setTimeout(() => {
          setKeywordField('')
          keywordRef.current?.focus();
          keywordRef.current.setSelectionRange(0, 0);
        }, 0);
      }
    }
  
    const deleteKeyword = (e,index) => {
      e.preventDefault()
       const updateMetaKeywords = metaKeywords.filter((item,indx)=> indx !== index)
       setMetaKeywords(updateMetaKeywords)
    }

  const GetBlogbySlug = async () => {
    const res = await getHelpBySlug({id:id})
    if(res.status === 200){
      setTitle(res.data.help.title)
    setSlug(res.data.help.slug)
    setContent(res.data.help.content)
    setCategory(res.data.help.category)
    setShortDescription(res.data.help.shortDescription)
    setMetaTitle(res.data.help.metaTitle)
    setMetaDescription(res.data.help.metaDescription)
    setMetaKeywords(res.data.help.metaKeywords)
  }
  }

  useEffect(()=>{
     GetBlogbySlug()
  },[])

  const fetchDataForCategory = async () => {
    const res = await getHelpTabs();
    if(res.status === 200){
      const filteredCategories = res.data.helpTabs.filter(cat => cat.title.toLowerCase() !== category)
      const catTitle = category[0].toUpperCase() + category.slice(1)
        const finalCategories = [catTitle, ...filteredCategories];
        setCategories(finalCategories)
    }
  }
  useEffect(() => {
    if(category.length > 0){
      fetchDataForCategory();
    }
  }, [category]);

  const navigate = useNavigate()
  const UpdateBlog = async (e) => {
    e.preventDefault()
    setSubmit(true)
    const data = {id:id,title:title,slug:slug,category:category,shortDescription:shortDescription,content:content,metaTitle:metaTitle,metaDescription:metaDescription,metaKeywords:JSON.stringify(metaKeywords)}
    try{
    await blogCreationValidationSchema.validate(data, { abortEarly: false });
    } catch (error) {
      setSubmit(false)
      if (error) {
        let errors = error.errors;
        setErrors(errors)
        errors.forEach((item)=>{
          Toast(item,'error',1000)
        })
      } else {
        setErrors([])
      }
    }
    const res = await updateHelp(data);
    if(res.status === 200){
      setSubmit(false)
      Toast(res.data.msg,'success',1000)
      navigate('/admin/manage-help-support')
    }else{
      setSubmit(false)
      Toast(res.data.message,'error',1000)
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
             <TextAreaInput width="full" name="description" title="Description" iscompulsory="true" type="text" value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)} error={errors && errors.includes('Short Description is required') ? true : false} errormessage="Short Description is required" placeholder="Enter Product Description"  />
            </div>
           </div> 
          </div>{metaDescription}
            <BlogEditor state={content} setState={setContent} />
                      {/* Seo Start */}
      <FaqAccordion2 title="Blog Seo" answer={
       <div className='flex flex-col space-y-2 w-full' > 
         <TextInput width="full" name="title" title="Meta Title" type="text" value={metaTitle} onChange={e =>setMetaTitle(e.target.value)} placeholder="Enter Meta Title" />
         <TextArea width="full" title="Meta Description" value={metaDescription} onChange={e =>setMetaDescription(e.target.value)} placeholder="Write Meta Description Here.." /> 
        {/* Seo Keyword */}
        <h5 className='text-xs font-semibold' >Meta Keywords</h5>
        <div className='flex flex-wrap w-full py-3 px-2 rounded-xl border-[1px] borders-[0,0,0,0,0.15]' >
        <div className="flex flex-wrap gap-y-2 items-center gap-x-2 w-full h-auto " >
         {metaKeywords?.length > 0 ? metaKeywords?.map((item,index)=><span key={index} className="flex items-center bg-b6 text-sm px-2 py-1 text-white rounded-2xl" >{item}<AiFillCloseCircle onClick={e=>deleteKeyword(e,index)} className='text-white bg-red-500 ml-1 text-xs cursor-pointer rounded-full' /></span>):null}
        <div/>
        <input ref={keywordRef} placeholder='Hit Space To Insert' value={keywordField} onKeyDown={e => handleEnterKey(e)} onChange={e=>setKeywordField(e.target.value)} className='border-none outline-none mx-5 text-sm' />
       </div>
       </div>
      </div>
      } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0' />
      {/* Seo End */}
            
            <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> :<a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a>}</button>
          </form>
        </AdminAccount>
    </>
  )
}

export default UpdateHelp