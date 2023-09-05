import React,{useEffect} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {BsArrowRightShort} from 'react-icons/bs'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCategoryBrands,getProductTypes,getProductFeatures,createProduct,getCategoryColors} from '../../api/admin'
import {GetCategories} from '../../api/admin/category'
import createProductSchema from '../../schemas/createProductSchema';
import Loader2 from '../../components/Loader/Loader2'
import TextInput from '../../components/TextInput/TextInput'

const CreateProduct = () => {

  const [submit,setSubmit] = useState(false)

  // Form States Start
   const [errors,setErrors] = useState([])
   const [title,setTitle] = useState('')
   const [slug,setSlug] = useState('')
   const [regPrice,setRegPrice] = useState('')
   const [salePrice,setSalePrice] = useState('')
   const [rating,setRating] = useState('')
   const [stock,setStock] = useState('')
  // Form States End

  return (
   <>
    <AdminAccount>
    <form onSubmit={CreateProduct} encType='multipart/form-data' className='flex flex-col justify-center space-y-5 w-full px-5 py-10' >
     
     <div className="flex items-center space-x-5 w-full" >
      <TextInput name="title" title="Title" iscompulsory="true" type="text" value={title} onChange={(e) => { setTitle(e.target.value); setSlug(e.target.value.toLowerCase().replace(/\s/g, '-').replace(/\./g, '')) }} error={errors && errors.includes('Product Title is Required!') ? true : false} errormessage="Product Title is Required!" placeholder="Enter Product Title" />
      <TextInput name="slug" readOnly title="Slug" iscompulsory="true" type="text" value={slug} error={errors && errors.includes('Product Slug is Required!') ? true : false} errormessage="Product Slug is Required!" placeholder="Enter Product Slug" />
     </div>
     <div className="flex items-center space-x-5 w-full" >
      <TextInput name="regPrice" title="Regular Price" iscompulsory="true" type="text" value={regPrice} onChange={(e) => setRegPrice(e.target.value)} error={errors && errors.includes('Regular Price is Required!') ? true : false} errormessage="Sale Price is Required!" placeholder="Enter Sale Price" />
      <TextInput name="salePrice" title="Sale Price" iscompulsory="true" type="text" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} error={errors && errors.includes('Sale Price is Required!') ? true : false} errormessage="Sale Price is Required!" placeholder="Enter Sale Price" />
     </div>
     <div className="flex items-center space-x-5 w-full" >
      <TextInput name="rating" title="Rating" iscompulsory="true" type="text" value={rating} onChange={(e) => setRating(e.target.value)} error={errors && errors.includes('Product Rating is Required!') ? true : false} errormessage="Product Rating is Required!" placeholder="Enter Cosmetic Rating : 3" />
      <TextInput name="stock" title="Stock" iscompulsory="true" type="text" value={stock} onChange={(e) => setStock(e.target.value)} error={errors && errors.includes('Product Stock is Required!') ? true : false} errormessage="Product Stock is Required!" placeholder="Enter Total Stock: 12" />
     </div>


    <button type="submit" className='flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a>}</button>
     </form>
    </AdminAccount>
   </>
  )
}

export default CreateProduct