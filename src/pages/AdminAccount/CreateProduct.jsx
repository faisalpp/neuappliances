import React from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {BsArrowRightShort} from 'react-icons/bs'
import {FiChevronDown} from 'react-icons/fi'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import {createCategory} from '../../api/admin'
import { resetUser } from '../../store/userSlice';
import { Listbox } from '@headlessui/react'
const CreateProduct = () => {
   
   const [title,setTitle] = useState('');
   const [slug,setSlug] = useState('');
   const [category,setCategory] = useState('');
   const [salePrice,setSalePrice] = useState('');
   const [regularPrice,setRegularPrice] = useState('');
   const [key1,setKey1] = useState('');
   const [key2,setKey2] = useState('');
   const [key3,setKey3] = useState('');
   const [key4,setKey4] = useState('');
   const [stock,setStock] = useState('');
   const [rating,setRating] = useState('');
   const [images,setImages] = useState([]);
   const [featuresVideo,setFeaturesVideo] = useState('');
   const [threeSixty,setThreeSixty] = useState('');
   const [modelNo,setModelNo] = useState('');
   const [itemId,setItemId] = useState('');
   const [brand,setBrand] = useState('');
   const [fuelTypes,setFuelTypes] = useState('');
   const [dryerOptions,setDryerOptions] = useState('');
   const [description,setDescription] = useState('');
   const [specification,setSpecification] = useState('');
   const [deliveryInfo,setDeliveryInfo] = useState('');
   const [installmentLow,setIntallmentLow] = useState('');


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onImageChange = (e) => {
     const files = Array.from(e.target.files);
     const images = files.map((file) => URL.createObjectURL(file));
     setImages(images);
    }
  
    const CreateCategory = async (e) => {
      e.preventDefault();
      const data = {title,images,slug,featuresVideo,salePrice,regularPrice,category,brand,stock,rating,images}
      const res = await createCategory(data);
      if(res.status === 200){
         toast.success(res.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          navigate('/admin/manage-categories');
       }
       if(res.code === 'ERR_BAD_REQUEST'){
         dispatch(resetUser());
         navigate('/nu-admin')
       }else{
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

    const handleTitle = (e) => {
       setTitle(e.target.value);
       const modSlug = e.target.value.toLowerCase().replace(/ /g, "_")
       setSlug(modSlug);
    }
    
    return (
        <>
        <AdminAccount>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
         <div className='flex justify-center w-full'>
         <form onSubmit={CreateCategory} encType='multipart/form-data' className='flex flex-col justify-center space-y-5 w-full px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
          <div className='grid grid-cols-6 gap-y-2 grid-flow-row' >
           {images.length > 0 ? images.map((image)=> (<div className='rounded-2xl border border-gray-300 p-3 h-fit w-fit'>
            <img src={image} className='w-fit h-[125px] object-contain' alt="example" />
           </div>))
            :<div className='rounded-2xl border border-gray-300 p-3 h-[130px] w-fit flex justify-center items-center self-center'>
            <img src='https://placehold.co/600x400' className='max-w-fit h-[115px] object-contain' alt="example" /></div>}
          </div> 
          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >Product Title <i className='text-red-500' >*</i></h5>
            <input type="text" value={title} onChange={handleTitle} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Refregerator' />
           </div>

           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >Product Slug <i className='text-red-500' >*</i></h5>
            <input type="text" value={slug} readOnly className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='refregerator' />
           </div>
          </div>
          {/* Input Group End*/}
    
          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
          {/* Select Brand */}
          <div className='w-1/2' >
           <label className='text-b16 font-semibold text-xs block mb-2'>Product Brand <i className='text-red-500' >*</i></label>
           <div className='relative'>
            <select onChange={e=>setBrand(e.target.value)} className='border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none'>
             <option value='general' >General Electronics</option>
             <option value='samsung' >Samsung Electronics</option>
             <option value='lg' >LG Electronics</option>
             <option value='frigidaire' >FRIGIDAIRE</option>
             <option value='whirlpool' >Whirlpool</option>
            </select>
            <FiChevronDown className='absolute right-4 top-3' />
           </div>
          </div>
          {/* Select Brand  End*/}
          {/* Select Category */}
          <div className='w-1/2' >
           <label className='text-b16 font-semibold text-xs block mb-2'>Product Category <i className='text-red-500' >*</i></label>
           <div className='relative'>
            <select onChange={e=>setCategory(e.target.value)} className='border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none'>
            <option value='refrigerator' >Refrigerators</option>
            <option value='refrigerator' >Ranges</option>
            <option value='refrigerator' >Washer & Dryer</option>
            <option value='refrigerator' >Wall Ovens</option>
            <option value='refrigerator' >Dishwashers</option>
            <option value='refrigerator' >Microwaves</option>
            </select>
            <FiChevronDown className='absolute right-4 top-3' />
           </div>
          </div>
          {/* Select Brand End*/}

          </div>
          {/* Input Group End*/}

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >Bullet Description 1 <i className='text-red-500' >*</i></h5>
            <input type="text" value={key1} onChange={e=>setKey1(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Refregerator' />
           </div>

           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >Bullet Description 2 <i className='text-red-500' >*</i></h5>
            <input type="text" value={key2} onChange={e=>setKey2(e.target.value)}  readOnly className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='refregerator' />
           </div>
          </div>
          {/* Input Group End*/}
          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >Bullet Description 3 <i className='text-red-500' >*</i></h5>
            <input type="text" value={key3} onChange={e=>setKey3(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Refregerator' />
           </div>

           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >Bullet Description 4<i className='text-red-500' >*</i></h5>
            <input type="text" value={key4} onChange={e=>setKey4(e.target.value)}  readOnly className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='refregerator' />
           </div>
          </div>
          {/* Input Group End*/}
          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >Product Sale Price</h5>
            <input type="text" value={salePrice} onChange={e=>setSalePrice(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Refregerator' />
           </div>

           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >Product Regular Price <i className='text-red-500' >*</i></h5>
            <input type="text" value={regularPrice} onChange={e=>setRegularPrice(e.target.value)}  readOnly className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='refregerator' />
           </div>
          </div>
          {/* Input Group End*/}
          
          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <div className='flex flex-col space-y-1 w-1/2' >
            <h5 className='text-xs font-semibold' >Product Images <i className='text-red-500' >*</i></h5>
            <input type="file" multiple accept="image/*" onChange={onImageChange} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' />
           </div>
           <div className='flex flex-col space-y-1 w-1/2' >
            <h5 className='text-xs font-semibold' >Features Video <i className='text-red-500' >*</i></h5>
            <input type="file" accept="image/*" onChange={e=>setFeaturesVideo(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' />
           </div>
          </div>
          {/* Input Group End*/}
           <div className='flex flex-col space-y-1 w-full' >
            <h5 className='text-xs font-semibold' >Three Sixty Product Images <i className='text-red-500' >* (Zip Format)</i></h5>
            <input type="file" accept="file" onChange={e=>setThreeSixty(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' />
           </div>

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >Model No <i className='text-red-500' >*</i></h5>
            <input type="text" value={modelNo} onChange={e=>setModelNo(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Refregerator' />
           </div>

           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >Item Id <i className='text-red-500' >*</i></h5>
            <input type="text" value={itemId} onChange={e=>setItemId(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='refregerator' />
           </div>
          </div>
          {/* Input Group End*/}

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >Total Stock <i className='text-red-500' >*</i></h5>
            <input type="text" value={stock} onChange={e=>setStock(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Refregerator' />
           </div>

           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >Product Rating (3 to 5) <i className='text-red-500' >*</i></h5>
            <input type="text" value={rating} onChange={e=>setRating(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='refregerator' />
           </div>
          </div>
          {/* Input Group End*/}

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >Regular Price <i className='text-red-500' >*</i></h5>
            <input type="text" value={regularPrice} onChange={e=>setRegularPrice(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Refregerator' />
           </div>

           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >Sale Price</h5>
            <input type="text" value={salePrice} onChange={e=>setSalePrice(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='refregerator' />
           </div>
          </div>
          {/* Input Group End*/}
          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >Lower Instalment Amount <i className='text-red-500' >*</i></h5>
            <input type="text" value={salePrice} onChange={e=>setSalePrice(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='refregerator' />
           </div>
           <div className='flex flex-col space-y-1 w-1/2'>
            <h5 className='text-xs font-semibold' >High Instalment Amount <i className='text-red-500' >*</i></h5>
            <input type="text" value={regularPrice} onChange={e=>setRegularPrice(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Refregerator' />
           </div>

          </div>
          {/* Input Group End*/}

          <div className='flex flex-col space-y-1 w-full'>
            <h5 className='text-xs font-semibold' >Product Description <i className='text-red-500' >*</i></h5>
            <textarea type="text" value={description} onChange={e=>setDescription(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md'  placeholder='Product Description'></textarea>
          </div>
          <div className='flex flex-col space-y-1 w-full'>
            <h5 className='text-xs font-semibold' >Product Specification <i className='text-red-500' >*</i></h5>
            <textarea type="text" value={specification} onChange={e=>setSpecification(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md'  placeholder='Product Specification'></textarea>
          </div>
          <div className='flex flex-col space-y-1 w-full'>
            <h5 className='text-xs font-semibold' >Product Delivery Info <i className='text-red-500' >*</i></h5>
            <textarea type="text" value={deliveryInfo} onChange={e=>setDeliveryInfo(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md'  placeholder='Product Delviery Info'></textarea>
          </div>
          <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a></button>
          </form>
         </div>
         <ToastContainer/>
        </AdminAccount>
        </>
    )
}

export default CreateProduct