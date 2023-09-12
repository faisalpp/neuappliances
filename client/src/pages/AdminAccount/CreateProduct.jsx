import React,{useEffect, useRef} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {BsArrowRightShort,BsFillTrashFill} from 'react-icons/bs'
import {AiOutlinePlusSquare,AiFillPlusCircle,AiFillCloseCircle} from 'react-icons/ai'
import {BiSolidVideos} from 'react-icons/bi'
import {FaImage,FaPhotoVideo,FaFileVideo} from 'react-icons/fa'
import {TiTick} from 'react-icons/ti'
import {Tb360View} from 'react-icons/tb'
import {HiPencil} from 'react-icons/hi'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCategoryData,createProduct} from '../../api/admin'
import {GetCategories} from '../../api/admin/category'
import createProductSchema from '../../schemas/createProductSchema';
import Loader2 from '../../components/Loader/Loader2'
import TextInput from '../../components/TextInput/TextInput'
import SelectInput from '../../components/TextInput/SelectInput'
import TextArea from '../../components/TextInput/TextAreaInput'
import Iframe from '../../components/Reusable/Ifram'
import BlogEditor from '../../components/AdminDashboard/BlogEditor'
import Popup from '../../components/AdminDashboard/Popup'
import Accordion from '../../components/FaqAccordion2'

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
   const [category,setCategory] = useState('')
   const [type,setType] = useState('')
   const [feature,setFeature] = useState('')
   const [color,setColor] = useState('')
   const [brand,setBrand] = useState('')
   const [fuelType,setFuelType] = useState('')
   const [keyFeatures,setKeyFeatures] = useState([])
   const [featureVideo,setFeatureVideo] = useState({type:'',data:''})
   const [description,setDescription] = useState('')
   const [specification,setSpecification] = useState('')
   const [deliveryInfo,setDeliveryInfo] = useState('')
   // Form States End
   
   // Controller States Start
   const [media,setMedia] = useState([])
   const [featureVideoField,setFeatureVideoField] = useState('')
   const [imageField,setImageField] = useState('')
   const [videoField,setVideoField] = useState('')
   const [categories,setCategories] = useState([])
   const [brands,setBrands] = useState([])
   const [features,setFeatures] = useState([])
   const [types,setTypes] = useState([])
   const [colors,setColors] = useState([])
   const [fuelTypes,setFuelTypes] = useState([])
  const imageSelectRef = useRef(null)
  const featureVideoRef = useRef(null)
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
       {name === "top-refrigerator-bottom-freezer" ? <div onClick={e=>handleTagClick(e,id)} className={`flex flex-col hover:shadow-md cursor-pointer items-center border-[1px] ${selected ? 'border-b6' :'border-[rgba(0,0,0,0.15)]'} rounded-md px-2 py-2 w-fit h-fit`} ><h5 className='text-[9px] font-medium' >TOP REFRIGERAOTR</h5><span className='flex h-[1px] w-full bg-[rgba(0,0,0,0.15)]' ></span><h5 className='text-[9px] font-medium' >BOTTOM FREEZER</h5></div>:null}
       {name === "top-freezer-bottom-refrigerator"?<div onClick={e=>handleTagClick(e,id)} className={`flex flex-col hover:shadow-md cursor-pointer items-center border-[1px] ${selected ? 'border-b6':'border-[rgba(0,0,0,0.15)]'} rounded-md px-2 py-2 w-fit h-fit`} ><h5 className='text-[9px] font-medium' >TOP FREEZER</h5><span className='flex h-[1px] w-full bg-[rgba(0,0,0,0.15)]' ></span><h5 className='text-[9px] font-medium' >BOTTOM REFRIGERAOTR</h5></div>:null}
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

  const handleFeatureVideo = (e,type) => {
    if(type === 'upload'){
      e.preventDefault()
      setFeatureVideoField('')
      const file = e.target.files[0]
      if(file){
        console.log(file)
      setFeatureVideo({type:'upload',data:file});
     }
    }else if(type === 'url'){
      if(featureVideoField === ''){
        setFeatureVideo({type:'',data:'',prevImg:''})  
      }else{
        let id =  featureVideoField.split('/').pop();
      const preview = `https://img.youtube.com/vi/${id}/mqdefault.jpg`
      console.log(preview)
      setFeatureVideo({type:'url',data:featureVideoField.replace('youtu.be/','youtube.com/embed/'),prevImg:preview})
      setFeatureVideoField('')
    }
    }
  }
  

  const CreateProduct = (e) => {
     e.preventDefault()
     console.log(tags)
  }


  const GetCategoriess = async () => {
    const res = await GetCategories();
    if(res.status === 200){
      setCategories(res.data.categories);
      setCategory(res.data.categories[0].slug)
    }else{
      setCategories([])
    }
  }

  useEffect(()=>{
    GetCategoriess()
  },[])

  const setData = (property, data,setState) => {
    if (data.length > 0) {
      property(data[0].sectionItemsId);
      setState(data[0].sectionItemsId[0].slug)
    } else {
      property([]);
    }
  };

  const GetCategoryData = async () => {
    const res = await getCategoryData({categorySlug:category})
    if(res.status === 200){
      setData(setFeatures, res.data.features,setFeature);
      setData(setTypes, res.data.types,setType);
      setData(setColors, res.data.colors,setColor);
      setData(setBrands, res.data.brands,setBrand);
      setData(setFuelTypes, res.data.fuelTypes,setFuelType);
    }
  }

  useEffect(()=>{
    GetCategoryData()
  },[category])


  // Product Highlighted Features Popup
  const [fPopup,setFpopup] = useState(false)
  const [fTitle,setFtitle] = useState('')
  const [fDescription,setFdescription] = useState('')
  const [fMedia,setFmedia] = useState({})
  const [fImageField,setFimageField] = useState('')
  const [fVideoField,setFvideoField] = useState('')
  const fVideoRef = useRef(null)
  const fImageRef = useRef(null)

  const hanldeKeyFeatures = (e,type,media) => {
    if(type === 'upload'){
      e.preventDefault()
      setFvideoField('')
      const file = e.target.files[0]
      if(file){
      setFmedia({file:media,type:'upload',data:file});
     }
    }else if(type === 'url'){
      if(featureVideoField === ''){
        setFmedia({file:media,type:'',data:''})  
      }else{
        if(media === 'video'){
          let id =  fVideoField.split('/').pop();
          const preview = `https://img.youtube.com/vi/${id}/mqdefault.jpg`
          setFmedia({file:media,type:'url',data:fVideoField.replace('youtu.be/','youtube.com/embed/'),prevImg:preview})
          setFvideoField('')
        }else{
          setFmedia({file:media,type:'url',data:fImageField})
          setFimageField('')
        }
    }
    }
  }

  const saveKeyFeature = () => {
    const data = {title:fTitle,description:fDescription,media:{file:fMedia.file,type:fMedia.type,data:fMedia.data}}
    setKeyFeatures([...keyFeatures,data])
    setFpopup(false)
  }

  // Product Seo
  const [metaTitle,setMetaTitle] = useState('')
  const [metaDescription,setDscription] = useState('')
  const [keywordField,setKeywordField] = useState('')
  const [keywords,setKeywords] = useState([])

  const handleEnterKey = async (e) => {
    if (e.key === 'Enter') {
      setKeywords([...keywords,keywordField])
      setKeywordField('')
    }
  }

  const deleteKeyword = (e,index) => {
    e.preventDefault()
     const data = keywords.filter((item,indx)=> indx !== index)
     setKeywords(data)
  }

  return (
   <>
    <Popup state={fPopup} setState={setFpopup} >
      <div className='flex flex-col items-center h-auto rounded-md w-11/12' >
         <h4 className='pb-4 font-bold' >Create Product Feature</h4>
          <div className='flex space-x-2' >
          {/* Media Start */}
           <div className='flex flex-col items-center justify-center border-[1px] border-[0,0,0,0,0.15] w-1/2 h-52 px-2 py-2 rounded-md' >
             <div className='relative h-full flex items-center justify-center' >
              {fImageField === '' ? <FaPhotoVideo className='text-7xl' />
              :fMedia.type === 'url' ? <img src={fImageField} /> : <img src={window.URL.createObjectURL(fImageField)} className='w-20 h-20' />}
             </div>
             <div className='flex items-center justify-center pt-1 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]' >
              <input type="text" value={fImageField} onChange={e=>setFimageField(e.target.value)} className='outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6' placeholder='Enter Image Url' />
              <button  onClick={e=>hanldeKeyFeatures(e,'url','image')} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><TiTick className='text-lg' /></a>}</button>    
              <input  type="file" accept='video/*' ref={fImageRef} onChange={e=>hanldeKeyFeatures(e,'upload','image')} className='hidden' />
              <button type='button' onClick={()=>fImageRef.current.click()} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><FaImage className='text-lg' /></a>}</button>    
             </div>
           </div>
           <div className='flex flex-col items-center justify-center border-[1px] border-[0,0,0,0,0.15] w-1/2 h-52 px-2 py-2 rounded-md' >
             <div className='h-full flex items-center justify-center' >
              {fVideoField === '' ?<BiSolidVideos className='text-7xl' />
              :fMedia.type === 'upload' ? <video src={fMedia.data} /> : <iframe src={fMedia.data} ></iframe>}
             </div>
             <div className='flex items-center justify-center pt-1 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]' >
              <input type="text" value={featureVideoField} onChange={e=>setFeatureVideoField(e.target.value.replace('youtu.be/','youtube.com/embed/'))} className='outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6' placeholder='Enter Iframe Url' />
              <button  onClick={e=>hanldeKeyFeatures(e,'url','video')} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><TiTick className='text-lg' /></a>}</button>    
              <input  type="file" accept='video/*' ref={fVideoRef} onChange={e=>hanldeKeyFeatures(e,'upload','video')} className='hidden' />
              <button type='button' onClick={()=>fVideoRef.current.click()} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><FaFileVideo className='text-lg' /></a>}</button>    
             </div>
           </div>
          {/* Media End */}
          </div>
          <div className='flex flex-col space-y-2 items-center px-2 mt-2 w-full' >
          <TextInput width="full" value={fTitle} onChange={e=>setFtitle(e.target.value)} placeholder="Enter Feature Title" />
          <TextArea value={fDescription} onChange={e=>setFdescription(e.target.value)} placeholder="Write Feature Description Here.." /> 
          <button type='button' onClick={saveKeyFeature} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-3 py-2 rounded-md text-white font-semibold text-xs' >Create</a></button>    
          </div>
        </div>
    </Popup>
    <AdminAccount>
    <form onSubmit={CreateProduct} encType='multipart/form-data' className='flex flex-col justify-center space-y-5 w-full py-10' >
     
     <div className="flex items-center space-x-5 w-full" >
      <TextInput name="title" title="Title" iscompulsory="true" type="text" value={title} onChange={(e) => { setTitle(e.target.value); setSlug(e.target.value.toLowerCase().replace(/\s/g, '-').replace(/\./g, '')) }} error={errors && errors.includes('Product Title is Required!') ? true : false} errormessage="Product Title is Required!" placeholder="Enter Product Title" />
      <TextInput name="slug" readOnly title="Slug" iscompulsory="true" type="text" value={slug} error={errors && errors.includes('Product Slug is Required!') ? true : false} errormessage="Product Slug is Required!" placeholder="Enter Product Slug" />
      <SelectInput name="categor" title="Product Category" iscompulsory="true" onChange={e => setCategory(e.target.value)} options={categories} />
     </div>
     <div className="flex space-x-5 items-center w-full" >
      {features.length > 0 ? <SelectInput name="categor" title="Product Feature" iscompulsory="true" onChange={e => setFeature(e.target.value)} options={features} />:null}
      {types.length > 0 ? <SelectInput name="categor" title="Product Type" iscompulsory="true" onChange={e => setType(e.target.value)} options={types} />:null}
      {colors.length > 0 ? <SelectInput name="categor" title="Product Color" iscompulsory="true" onChange={e => setColor(e.target.value)} options={colors} />:null}
      {fuelTypes.length > 0 ? <SelectInput name="categor" title="Product Fuel Type" iscompulsory="true" onChange={e => setFuelType(e.target.value)} options={fuelTypes} />:null}
      {brands.length > 0 ? <SelectInput name="categor" title="Product Brand" iscompulsory="true" onChange={e => setBrand(e.target.value)} options={brands} />:null}
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

     <Accordion title="Main Key Features" answer={
      <div className='flex flex-col border-[1px] border-[0,0,0,0,0.15] rounded-md h-96 overflow-x-hidden overflow-y-scroll w-full' >
      <div className='grid grid-cols-3 mt-2 gap-x-2 gap-y-2 justify-center w-full' >
       {/* Card Start */}
       {keyFeatures.length > 0 ? keyFeatures.map((item,index)=><div key={index} className='flex flex-col  py-2 items-center h-auto  bg-b5 ml-2 rounded-md w-11/12' >
         <div className='flex items-center justify-center border-[1px] border-[0,0,0,0,0.15] w-11/12 h-32 px-2 py-2 rounded-md' >
           {item.media.file === 'image' ? <img src={item.media.data} className='w-20 h-20' />:
           item.media.type === 'url' ? <iframe src={item.media.data} /> : <video src={item.media.data} />
           }
         </div> 
         <div className='flex space-x-2 items-center justify-center w-full s mt-2' >
          <button type='button' onClick={handleVideoClick} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><HiPencil className='text-lg' /></a></button>    
          <button type='button' onClick={handleVideoClick} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500' ><a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><BsFillTrashFill className='text-lg' /></a></button>    
         </div>
         <div className='flex flex-col px-2 mt-2 w-full' >
         <h5 className='font-bold text-sm' >{item.data}</h5>
         <p className='h-32 text-xs overflow-x-hidden overflow-y-scroll' >{item.description}</p>
         </div>
       </div>):null}
       {/* Card End */}
       {/* Add More Card Start */}
       <div className='flex flex-col  justify-center py-2 items-center h-72 ml-2 rounded-md w-11/12' >
         <div onClick={()=>setFpopup(true)} className='flex items-center hover:cursor-pointer shadow-xl justify-center border-[1px] border-b6 w-1/2 h-1/2 px-2 py-2 rounded-md' >
           <AiOutlinePlusSquare className='text-b6 text-4xl' />
         </div> 
       </div>
       {/* Add More Card End */}
      </div>
     </div>
     } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child=' w-full [&>p]:text-sm !mt-0' />

      <Accordion title="Product Media" answer={<div className="flex flex-col space-y-5" >
             <div className='flex items-center justify-center space-x-2' >
            <div className="flex flex-col justify-center items-center py-3 border-[1px] border-[0,0,0,0,0.15] rounded-md w-1/2" >
             <h5 className='text-center font-bold text-xs mb-2' >Upload Features Video</h5>
              {featureVideo.type === 'url' ? <iframe src={featureVideo.data} className='h-52 rounded-md' />:null}
              {featureVideo.type === 'upload' ? <div className="flex justify-center items-center h-52" ><h5>Video File: {featureVideo.data.name}</h5></div> :null}
              {featureVideo.type === '' && featureVideo.data === '' ? <div className='flex items-center justify-center w-11/12 h-52 border-2 border-black rounded-lg' ><FaPhotoVideo className='text-7xl' /></div>:null}
              <div className='flex items-center justify-center pt-3 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]' >
                  <input type="text" value={featureVideoField} onChange={e=>setFeatureVideoField(e.target.value.replace('youtu.be/','youtube.com/embed/'))} className='outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6' placeholder='Enter Image Url' />
                  <button  onClick={e=>handleFeatureVideo(e,'url')} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><TiTick className='text-lg' /></a>}</button>    
                  <input  type="file" accept='video/*' ref={featureVideoRef} onChange={e=>handleFeatureVideo(e,'upload')} className='hidden' />
                  <button type='button' onClick={()=>featureVideoRef.current.click()} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><FaFileVideo className='text-lg' /></a>}</button>    
              </div>
            </div>
            <div className="flex flex-col justify-center items-center py-3 border-[1px] border-[0,0,0,0,0.15] rounded-md w-1/2" >
             <h5 className='text-center font-bold text-xs mb-2' >Insert 360 Iframe</h5>
              {featureVideo.type === 'url' ? <iframe src={featureVideo.data} className='h-52 rounded-md' />:null}
              {featureVideo.type === '' && featureVideo.data === '' ? <div className='flex items-center justify-center w-11/12 h-52 border-2 border-black rounded-lg' ><Tb360View className='text-7xl' /></div>:null}
              <div className='flex items-center justify-center pt-3 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]' >
                  <input type="text" value={featureVideoField} onChange={e=>setFeatureVideoField(e.target.value.replace('youtu.be/','youtube.com/embed/'))} className='outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6' placeholder='Enter Iframe Url Only' />
                  <button  onClick={e=>handleFeatureVideo(e,'url')} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><TiTick className='text-lg' /></a>}</button>    
              </div>
            </div>
       
            </div>
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

      </div></div>
      } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0' />

     {/* Product Media End */}


      {/* Product Tags Start */}
      <Accordion title="Product Tags" answer={
       <div className='h-52 overflow-x-hidden overflow-y-scroll px-2 py-2  border-[1px] border-[rgba(0,0,0,0.15)] rounded-lg' >
       <div className='flex flex-wrap gap-y-2 gap-x-5 my-5 ' >
         {tags.length > 0 ? tags.map((item,index)=> <>{item.el ? <ExtendTag id={item.id} name={item.el} selected={item.selected} /> : <div key={index} onClick={e=>handleTagClick(e,item.id)} className={`flex items-center cursor-pointer hover:shadow-md space-x-1 border-[1px] ${item.selected ? 'border-[1px] border-b6 ' :'border-[1px] border-[rgba(0,0,0,0.15)]'} rounded-md px-3 py-2 w-fit h-fit`} >{item.icon !== '' ?<img src={`/tags/${item.icon}.png`} className='h-6 w-6' />:null}<span><h5 className='text-[10px] font-medium' >{item.name}</h5></span></div>}</>):<div className='flex w-full h-full justify-center items-center' ><img src="/not-found.webp" className='w-28 h-28' /></div>}       
       </div>
       </div>
      } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0' />
      {/* Product Tags End */}

      {/* Product Description Start */}
      <Accordion title="Description" answer={
       <BlogEditor state={description} setState={setDescription} />
      } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0' />
      {/* Product Description End */}

      {/* Product Specification Start */}
      <Accordion title="Specification" answer={
       <BlogEditor state={specification} setState={setSpecification} />
      } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0' />
      {/* Product Specification End */}

      {/* Product DeliveryInfo Start */}
      <Accordion title="Delivery Info" answer={
       <BlogEditor state={deliveryInfo} setState={setDeliveryInfo} />
      } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0' />
      {/* Product DeliveryInfo End */}

      {/* Seo Start */}
      <Accordion title="Product Seo" answer={
       <div className='flex flex-col space-y-2 w-full' > 
         <TextInput width="full" name="title" title="Meta Title" type="text" value={metaTitle} onChange={(e) =>setMetaTitle(e.target.value)} error={errors && errors.includes('Product Title is Required!') ? true : false} errormessage="Product Title is Required!" placeholder="Enter Meta Title" />
         <TextArea title="Meta Description" value={metaDescription} onChange={e=>setMetaDescription(e.target.value)} placeholder="Write Meta Description Here.." /> 
        {/* Seo Keyword */}
        <h5 className='text-xs font-semibold' >Meta Keywords</h5>
        <div className='flex flex-wrap w-full py-3 px-2 rounded-xl border-[1px] borders-[0,0,0,0,0.15]' >
        <div className="flex items-center space-x-2" >
         {keywords.map((item,index)=><span key={index} className="flex items-center bg-b6 text-sm px-2 py-1 text-white rounded-2xl" >{item}<AiFillCloseCircle onClick={e=>deleteKeyword(e,index)} className='text-white bg-red-500 ml-1 text-xs cursor-pointer rounded-full' /></span>)}
        <div/>
        <input placeholder='Enter Meta Keywords' value={keywordField} onKeyDown={e => handleEnterKey(e)} onChange={e=>setKeywordField(e.target.value)} className='border-none outline-none mx-5 text-sm' />
       </div>
       </div>
      </div>
      } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0' />
      {/* Seo End */}
      

      <button type="submit" className='flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a>}</button>
     </form>
    </AdminAccount>
   </>
  )
}

export default CreateProduct