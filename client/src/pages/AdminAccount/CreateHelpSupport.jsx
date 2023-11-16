import React,{useEffect, useRef} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { BsArrowRightShort } from 'react-icons/bs'
import { useState } from 'react';
import BlogEditor from '../../components/AdminDashboard/BlogEditor';
import TextInput from '../../components/TextInput/TextInput';
import TextArea from '../../components/TextInput/TextAreaInput';
import SelectInput from '../../components/TextInput/SelectInput';
import * as Yup from 'yup';
import { createHelp } from '../../api/admin/Help&Support/helpSupport';
import { getHelpTabs } from '../../api/admin/Help&Support/helpSupportTab';
import Toast from '../../utils/Toast'
import { useNavigate } from 'react-router-dom';
import Accordion from '../../components/FaqAccordion2'
import {AiFillCloseCircle} from 'react-icons/ai'


const CreateHelpSupport = () => {

  // Validations
  const blogCreationValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    slug: Yup.string().required('Slug is required'),
    shortDescription: Yup.string().required('Short Description is required'),
    category: Yup.string().required('Blog Category is required'),
    content: Yup.string().required('Blog Content is required'),
  });

  const navigate = useNavigate()
  const [errors,setErrors] = useState([]);
  const [submit,setSubmit] = useState(false)
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [title,setTitle] = useState('');
  const [slug,setSlug] = useState('');
  const [shortDescription,setShortDescription] = useState('');
  const [category,setCategory] = useState('');
  const [content,setContent] = useState('');

    // Product Seo
    const [keywordField,setKeywordField] = useState('')
    const keywordRef = useRef()
  
    const handleEnterKey = (e) => {
      if (e.key === ' ' && keywordField.length > 0) {
        setKeywords([...keywords,keywordField])
        setTimeout(() => {
          setKeywordField('')
          keywordRef.current.focus();
          keywordRef.current.setSelectionRange(0, 0);
        }, 0);
      }
    }
  
    const deleteKeyword = (e,index) => {
      e.preventDefault()
       const updateMetaKeywords = keywords.filter((item,indx)=> indx !== index)
       setKeywords(updateMetaKeywords)
    }

  const CreateHelpSupport = async (e) => {
    e.preventDefault()
    setSubmit(true)
    try{
     const data = {title,slug,shortDescription,category,content}
     await blogCreationValidationSchema.validate(data, { abortEarly: false });
    } catch (error) {
      if (error) {
        let errors = error.errors;
        setErrors(errors)
        errors.forEach((item)=>{
          Toast(item,'error',1000)
        })
      }
    }
    const formData = new FormData()
    formData.set('title',title);
    formData.set('slug',slug);
    formData.set('shortDescription',shortDescription);
    formData.set('category',category);
    formData.set('content',content);
    const res = await createHelp(formData);
    if(res.status === 200){
      setSubmit(false)
      navigate('/admin/manage-help-support')
      Toast(res.data.msg,'success',1000)
    }else{
      setSubmit(false)
      Toast(res.data.message,'success',1000)
    }
  
  }

  const [helpTabs,setHelpTabs] = useState([])

  const GetHelpTabs = async () => {
    const res = await getHelpTabs()
    
    if(res.status === 200){
       setHelpTabs(res.data.helpTabs)
       setCategory(res.data.helpTabs[0]?.title.toLowerCase().replace(/\s/g,'-'))
     }else{
       setHelpTabs([])
    }
 }

 useEffect(() => {
   GetHelpTabs()
 }, [])

  return (
    <>
        <AdminAccount>
          <form onSubmit={CreateHelpSupport} className='flex flex-col space-y-5 w-full py-5 bg-white' >
          <div className='flex w-full' >
           <div className='flex flex-col space-y-10 w-1/2' >
            <TextInput width="full" name="title" title="Blog Title" iscompulsory="true" type="text" value={title} onChange={(e)=>{setTitle(e.target.value);setSlug(e.target.value.toLowerCase().replace(/\s/g,'-').replace(/\./g, ''))}} error={errors && errors.includes('Title is required') ? true : false} errormessage="Title is required" placeholder="Enter Blog Title" />
            <TextInput width="full" name="slug" title="Blog Slug" readOnly iscompulsory="true" type="text" value={slug} error={errors && errors.includes('Slug is required') ? true : false} errormessage="Slug is required" placeholder="Enter Blog Slug" />
           </div>
           <div className="flex flex-col space-y-8 items-center w-1/2" >
            <div className='flex flex-col items-center space-x-5 w-72' >
             <TextArea width="full" name="description" title="Description" iscompulsory="true" type="text" value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)} error={errors && errors.includes('Short Description is required') ? true : false} errormessage="Short Description is required" placeholder="Enter Product Description"  />
            </div>
            <div className='flex flex-col items-center space-x-5 w-full' >
             <SelectInput name="categor" title="Select Tab" iscompulsory="true" onChange={e=>setCategory(e.target.value)} options={helpTabs} />
            </div>
           </div> 
          </div>
            <BlogEditor state={content} setState={setContent} />

                            {/* Seo Start */}
      <Accordion title="Blog Seo" answer={
       <div className='flex flex-col space-y-2 w-full' > 
         <TextInput width="full" name="title" title="Meta Title" type="text" value={metaTitle} onChange={e =>setMetaTitle(e.target.value)} placeholder="Enter Meta Title" />
         <TextArea width="full" title="Meta Description" value={metaDescription} onChange={e =>setMetaDescription(e.target.value)} placeholder="Write Meta Description Here.." /> 
        {/* Seo Keyword */}
        <h5 className='text-xs font-semibold' >Meta Keywords</h5>
        <div className='flex flex-wrap w-full py-3 px-2 rounded-xl border-[1px] borders-[0,0,0,0,0.15]' >
        <div className="flex flex-wrap gap-y-2 items-center gap-x-2 w-full h-auto " >
         {keywords?.map((item,index)=><span key={index} className="flex items-center bg-b6 text-sm px-2 py-1 text-white rounded-2xl" >{item}<AiFillCloseCircle onClick={e=>deleteKeyword(e,index)} className='text-white bg-red-500 ml-1 text-xs cursor-pointer rounded-full' /></span>)}
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

export default CreateHelpSupport