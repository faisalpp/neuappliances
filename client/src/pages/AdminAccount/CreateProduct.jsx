import React,{useEffect, useRef} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillFolderAdd,AiFillPlusCircle} from 'react-icons/ai'
import {FaImage} from 'react-icons/fa'
import {PiVideoFill} from 'react-icons/pi'
import {TiTick} from 'react-icons/ti'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCategoryBrands,getProductTypes,getProductFeatures,createProduct,getCategoryColors} from '../../api/admin'
import {GetCategories} from '../../api/admin/category'
import createProductSchema from '../../schemas/createProductSchema';
import Loader2 from '../../components/Loader/Loader2'
import TextInput from '../../components/TextInput/TextInput'
import Iframe from '../../components/Reusable/Ifram'

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
   const [modelNo,setModelNo] = useState('')
   const [itemId,setItemId] = useState('')
  // Form States End

  // Controller States Start
  const [media,setMedia] = useState([])
  const [imageField,setImageField] = useState('')
  const [videoField,setVideoField] = useState('')
  const imageSelectRef = useRef(null)
  // Controller States End

  const handleTagClick = (e,id) => {
    e.preventDefault()
     // Create a new array with the updated object
     const updatedArray = tags.map((obj) => {
      if (obj.id === id) {
        return { ...obj,"selected": !obj.selected };
      }
      return obj;
    });

    // Update the state with the new array
    setTags(updatedArray);
  }

  // Tags Elements Extended Start
  const ExtendTag = ({id,name,selected}) => {
   return (
       <>
       {name === "top-refrigerator-bottom-freezer" ? <div onClick={e=>handleTagClick(e,id)} className={`flex flex-col cursor-pointer items-center border-[1px] ${selected ? 'border-b6' :'border-[rgba(0,0,0,0.15)]'} rounded-md px-2 py-2 w-fit h-fit`} ><h5 className='text-[9px] font-medium' >TOP REFRIGERAOTR</h5><span className='flex h-[1px] w-full bg-[rgba(0,0,0,0.15)]' ></span><h5 className='text-[9px] font-medium' >BOTTOM FREEZER</h5></div>:null}
       {name === "top-freezer-bottom-refrigerator"?<div onClick={e=>handleTagClick(e,id)} className={`flex flex-col cursor-pointer items-center border-[1px] ${selected ? 'border-b6':'border-[rgba(0,0,0,0.15)]'} rounded-md px-2 py-2 w-fit h-fit`} ><h5 className='text-[9px] font-medium' >TOP FREEZER</h5><span className='flex h-[1px] w-full bg-[rgba(0,0,0,0.15)]' ></span><h5 className='text-[9px] font-medium' >BOTTOM REFRIGERAOTR</h5></div>:null}
       </>
       )
  }
  // Tags Elements Extended End

  // Tags
  const [tags,setTags] = useState([
    {id:1,icon:'',name:'3 Door French Door',selected:false},
    {id:2,icon:'rack',name:'3rd Rack',selected:false},
    {id:3,icon:'',name:'4 DOOR FLEX QUATRO',selected:false},
    {id:4,icon:'',name:'4 DOOR FLEX',selected:false},
    {id:5,icon:'',name:'4 DOOR FRENCH DOOR',selected:false},
    {id:6,icon:'',name:'5 DOOR FRENCH DOOR',selected:false},
    {id:7,icon:'agitator',name:'AGITATOR',selected:false},
    {id:8,icon:'/all-refrigerators',name:'ALL REFRIGERATORS',selected:false},
    {id:9,icon:'/beer',name:'BEER TAPS AND KEGERATOR',selected:false},
    {id:10,el:"top-refrigerator-bottom-freezer",selected:false},
    {id:11,icon:'/chest',name:'CHEST FREEZER',selected:false},
    {id:12,icon:'/convection',name:'CONVECTION',selected:false},
    {id:13,icon:'/counter-depth',name:'COUNTER DEPTH',selected:false},
    {id:14,icon:'/built-in-1',name:'BUILT IN',selected:false},
    {id:15,icon:'/counter-top',name:'COUNTER TOP',selected:false},
    {id:16,icon:'/double-oven',name:'DOUBLE OVEN',selected:false},
    {id:17,icon:'/dual-ice-maker',name:'DUAL ICE MAKER',selected:false},
    {id:18,icon:'/energy-star',name:'ENERGY STAR',selected:false},
    {id:19,icon:'/front-load',name:'FRONT LOAD',selected:false},
    {id:20,icon:'/he',name:'H.E',selected:false},
    {id:21,icon:'/ice-maker',name:'ICE MAKER',selected:false},
    {id:22,icon:'/impeller',name:'IMPELLER',selected:false},
    {id:23,icon:'',name:'FIT MOST KING SIZE COMFORTERS',selected:false},
    {id:24,icon:'/manual-cleaning',name:'MANUAL CLEANING',selected:false},
    {id:25,icon:'/over-the-range',name:'OVER THE RANGE',selected:false},
    {id:26,icon:'/non-stackable',name:'NON STACKABLE',selected:false},
    {id:27,icon:'',name:'OUTDOOR REFRESHMENT CENTER',selected:false},
    {id:28,icon:'/plastic-tub',name:'PLASTIC TUB',selected:false},
    {id:29,icon:'/portable',name:'PORTABLE',selected:false},
    {id:30,icon:'',name:'FITS MOST QUEEN SIZE COMFORTERS',selected:false},
    {id:31,icon:'/self-cleaning',name:'SELF CLEANING',selected:false},
    {id:32,icon:'/side-by-side',name:'SIDE BY SIDE',selected:false},
    {id:33,icon:'/stackable',name:'STACKABLE',selected:false},
    {id:34,icon:'/stainless-tub',name:'STAINLESS TUB',selected:false},
    {id:35,icon:'/standup-freezer',name:'STANDUP FREEZER',selected:false},
    {id:36,icon:'/steam-cleaning',name:'STEAM CLEANING',selected:false},
    {id:37,icon:'/steam',name:'STEAM',selected:false},
    {id:38,icon:'/propane',name:'PROPANE',selected:false},
    {id:39,icon:'/gas',name:'GAS',selected:false},
    {id:40,icon:'/baverage-cooler',name:'BEVERAGE COOLER',selected:false},
    {id:41,icon:'/dual-fuel',name:'DUAL FUEL',selected:false},
    {id:42,icon:'/electric',name:'ELECTRIC',selected:false},
    {id:43,icon:'/tank',name:'TANK',selected:false},
    {id:44,icon:'/tankless',name:'TANKLESS',selected:false},
    {id:45,el:"top-freezer-bottom-refrigerator",selected:false},
    {id:46,icon:'/top-load',name:'TOP LOAD',selected:false},
    {id:47,icon:'/wine-cooler',name:'WINE COOLER',selected:false},
    {id:48,icon:'/water-dispanser',name:'WATER DISPANSER',selected:false},
  ])

  

  const handleVideoClick = () => {
    imageSelectRef.current.click();
  };

  const CreateProduct = (e) => {
     e.preventDefault()
     console.log(tags)
  }

  return (
   <>
    <AdminAccount>
    <form onSubmit={CreateProduct} encType='multipart/form-data' className='flex flex-col justify-center space-y-5 w-full py-10' >
     
     <div className="flex items-center space-x-5 w-full" >
      <TextInput name="title" title="Title" iscompulsory="true" type="text" value={title} onChange={(e) => { setTitle(e.target.value); setSlug(e.target.value.toLowerCase().replace(/\s/g, '-').replace(/\./g, '')) }} error={errors && errors.includes('Product Title is Required!') ? true : false} errormessage="Product Title is Required!" placeholder="Enter Product Title" />
      <TextInput name="slug" readOnly title="Slug" iscompulsory="true" type="text" value={slug} error={errors && errors.includes('Product Slug is Required!') ? true : false} errormessage="Product Slug is Required!" placeholder="Enter Product Slug" />
     </div>
     <div className="flex items-center space-x-5 w-full" >
      <TextInput name="regPrice" title="Regular Price" iscompulsory="true" type="text" value={regPrice} onChange={(e) => setRegPrice(e.target.value)} error={errors && errors.includes('Regular Price is Required!') ? true : false} errormessage="Sale Price is Required!" placeholder="Enter Sale Price" />
      <TextInput name="salePrice" title="Sale Price" iscompulsory="true" type="text" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} error={errors && errors.includes('Sale Price is Required!') ? true : false} errormessage="Sale Price is Required!" placeholder="Enter Sale Price" />
      <TextInput name="regPrice" title="Lower Installment" iscompulsory="true" type="text" value={regPrice} onChange={(e) => setRegPrice(e.target.value)} error={errors && errors.includes('Regular Price is Required!') ? true : false} errormessage="Sale Price is Required!" placeholder="Enter Sale Price" />
      <TextInput name="salePrice" title="Higher Installment" iscompulsory="true" type="text" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} error={errors && errors.includes('Sale Price is Required!') ? true : false} errormessage="Sale Price is Required!" placeholder="Enter Sale Price" />
     </div>
     <div className="flex items-center space-x-5 w-full" >
      <TextInput name="rating" title="Rating" iscompulsory="true" type="text" value={rating} onChange={(e) => setRating(e.target.value)} error={errors && errors.includes('Product Rating is Required!') ? true : false} errormessage="Product Rating is Required!" placeholder="Cosmetic Rating : 3" />
      <TextInput name="stock" title="Stock" iscompulsory="true" type="text" value={stock} onChange={(e) => setStock(e.target.value)} error={errors && errors.includes('Product Stock is Required!') ? true : false} errormessage="Product Stock is Required!" placeholder="Total Stock: 12" />
      <TextInput name="model-no" title="Model No" iscompulsory="true" type="text" value={modelNo} onChange={(e) => setModelNo(e.target.value)} error={errors && errors.includes('Model No is Required!') ? true : false} errormessage="Model No is Required!" placeholder="Model No : #9088324885" />
      <TextInput name="item-id" title="Item Id" iscompulsory="true" type="text" value={itemId} onChange={(e) => setItemId(e.target.value)} error={errors && errors.includes('Item Id is Required!') ? true : false} errormessage="Item Id is Required!" placeholder="Item Id: 234532455" />
     </div>
     <div className="flex flex-col justify-center items-center py-3 border-[1px] border-[0,0,0,0,0.15] rounded-md w-1/2" >
     <h5 className='text-center font-bold text-xs mb-2' >Upload Features Video</h5>
      <iframe src="https://www.youtube.com/embed/xplgjdpABvc" className="h-52 rounded-md" />
      <div className='flex items-center space-x-2 mt-2' >
          <input type="text" value={imageField} onChange={e=>setImageField(e.target.value)} className='outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6' placeholder='Enter Image Url' />
          <button  onClick={e=>{e.preventDefault();setMedia(prev=>[...prev,{type:'image',url:imageField}]);setImageField('');console.log([...media,{type:'image',url:imageField}])}} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><TiTick className='text-lg' /></a>}</button>    
          <input ref={imageSelectRef} onChange={e=>{e.preventDefault();setMedia(prev=>[...prev,{type:'image',url: window.URL.createObjectURL(e.target.files[0]) }]);setImageField('');}} type="file" accept='image/webp' className='hidden' />
          <button type='button' onClick={handleVideoClick} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><FaImage className='text-lg' /></a>}</button>    
        </div>
     </div>


     {/* Product Media Start */}
      <div className='flex flex-col border-[1px] border-[rgba(0,0,0,0.15)] rounded-lg h-52' >
       <div className='flex items-center justify-between px-2 border-b-[1px] border-b-[rgba(0,0,0,0.15)] h-10 w-full' >
        
        <div className='flex items-center space-x-2' >
          <h5 className='font-bold text-xs' >Upload Images</h5>
          <input type="text" value={imageField} onChange={e=>setImageField(e.target.value)} className='outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6' placeholder='Enter Image Url' />
          <button  onClick={e=>{e.preventDefault();setMedia(prev=>[...prev,{type:'image',url:imageField}]);setImageField('');console.log([...media,{type:'image',url:imageField}])}} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><TiTick className='text-lg' /></a>}</button>    
          <input ref={imageSelectRef} onChange={e=>{e.preventDefault();setMedia(prev=>[...prev,{type:'image',url: window.URL.createObjectURL(e.target.files[0]) }]);setImageField('');}} type="file" accept='image/webp' className='hidden' />
          <button type='button' onClick={handleVideoClick} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><FaImage className='text-lg' /></a>}</button>    
        </div>
        
        <div className='flex items-center space-x-2' >
          <h5 className='font-bold text-xs' >Upload Video's</h5>
          <input type="text" value={videoField} onChange={e=>setVideoField(e.target.value)} className='outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6' placeholder='Enter Video Url' />
          <button onClick={e=>{e.preventDefault();setMedia(prev=>[...prev,{type:'video',url:videoField.replace('youtu.be/','youtube.com/embed/')}]);setVideoField('');}} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><TiTick className='text-lg' /></a>}</button>    
        </div>
       
       </div>
       {/* Media Data Placeholder Start */}
       <div className={`px-2 py-2 ${media.length > 0 ? 'flex flex-wrap' : 'flex items-center justify-center'} h-full overflow-x-hidden overflow-y-scroll`} >
        {/* Image Container Start */}
        {media.length > 0 ? media.map((item,index)=> (<div key={index} className='relative px-1 py-1 rounded-lg h-fit w-fit border-[1px] border-[rgba(0,0,0,0.15)]' >
         <div className='absolute -right-1 -top-2' ><div onClick={e=>{e.preventDefault();const newMedia = [...media];newMedia.splice(index, 1);setMedia(newMedia);}} className='flex justify-end w-full bg-white rounded-full' ><AiFillPlusCircle className='text-red-500 text-lg shadow-xl rounded-full cursor-pointer' /></div></div>
         {item.type === 'image' ? <img src={item.url} className='w-28 h-28' />: <Iframe src={item.url} title={item.url} style="w-32 h-32" /> }
        </div>)):<div><img src="/not-found.webp" className='w-28 h-28' /></div>}
        {/* Image Container End */}
       
       </div>
       {/* Media Data Placeholder End */}

      </div>

     {/* Product Media End */}


      {/* Product Tags Start */}
      <h3 className='font-bold' >Select Product Tags</h3>
      <div className='h-52 overflow-x-hidden overflow-y-scroll px-2 py-2  border-[1px] border-[rgba(0,0,0,0.15)] rounded-lg' >
      <div className='flex flex-wrap gap-y-2 gap-x-5 my-5 ' >
       {/* Tags Start */}
        {tags.length > 0 ? tags.map((item,index)=> <>{item.el ? <ExtendTag id={item.id} name={item.el} selected={item.selected} /> : <div key={index} onClick={e=>handleTagClick(e,item.id)} className={`flex items-center cursor-pointer hover:shadow-md space-x-1 border-[1px] ${item.selected ? 'border-[1px] border-b6 ' :'border-[1px] border-[rgba(0,0,0,0.15)]'} rounded-md px-3 py-2 w-fit h-fit`} >{item.icon !== '' ?<img src={`/tags/${item.icon}.png`} className='h-6 w-6' />:null}<span><h5 className='text-[10px] font-medium' >{item.name}</h5></span></div>}</>):<div className='flex w-full h-full justify-center items-center' ><img src="/not-found.webp" className='w-28 h-28' /></div>}
       {/* Tags End */}       
      </div>
      </div>
      {/* Product Tags End */}

      <button type="submit" className='flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a>}</button>
     </form>
    </AdminAccount>
   </>
  )
}

export default CreateProduct