import React,{useEffect, useRef} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {BsArrowRightShort,BsFillTrashFill} from 'react-icons/bs'
import {AiOutlinePlusSquare,AiFillPlusCircle,AiFillCloseCircle} from 'react-icons/ai'
import {FaImage,FaPhotoVideo} from 'react-icons/fa'
import {GoVideo} from 'react-icons/go'
import {TiTick} from 'react-icons/ti'
import {Tb360View} from 'react-icons/tb'
import { useState } from 'react';
import Toast from '../../utils/Toast'
import { getCategoryData,updateProduct,uploadMedia,deleteMedia,getAllModelNos} from '../../api/admin'
import {GetCategories} from '../../api/admin/category'
import updateProductSchema from '../../schemas/updateProductSchema';
import TextInput from '../../components/TextInput/TextInput'
import TextInputSuggestion from '../../components/TextInput/TextInputSuggestion'
import SelectInput from '../../components/TextInput/SelectInput'
import TextArea from '../../components/TextInput/TextAreaInput'
import Iframe from '../../components/Reusable/Ifram'
import ContentEditor from '../../components/AdminDashboard/ContentEditor'
import Popup from '../../components/AdminDashboard/Popup'
import Accordion from '../../components/FaqAccordion2'
import { useNavigate,useParams } from 'react-router-dom';
import {GetAppliancesBySlug} from '../../api/frontEnd'
import TxtTransform from '../../utils/TextTransform'

const UpdateProduct = () => {
  const [categories,setCategories] = useState([])
  const [brands,setBrands] = useState([])
  const [features,setFeatures] = useState([])
  const [types,setTypes] = useState([])
  const [colors,setColors] = useState([])
  const [fuelTypes,setFuelTypes] = useState([])

  const [submit,setSubmit] = useState(false)
  const [loader,setLoader] = useState(false)
  const query = useParams()
  const [pSlug,setPslug] = useState(query.slug)
  const [values,setValues] = useState({productType:'parent',title:'',slug:'',category:'',feature:'',type:'',color:'',brand:'',fuelType:'',regPrice:'',salePrice:'',lowPrice:'',highPrice:'',rating:'3',stock:'',modelNo:'',itemId:'',keyFeatures:[],featureVideo:{type:'',data:''},threeSixty:{type:'',data:''},media:[],description:'',specification:'',deliveryInfo:'',metaTitle:'',metaDescription:'',metaKeywords:[],tags:''})
  
  const [productTypes,setProductTypes] = useState(['Parent','Variant'])

  // Form States Start
   const [errors,setErrors] = useState([])
   // Form States End

   const setData = (property, data,state,init) => {
    if (data.length > 0) {
      let filter = data[0].sectionItemsId.filter((item)=> item.title.toLowerCase().replace(/\s/g,'-') !== init )
      const updated = [{title:TxtTransform.capitalizeWords(init.replace(/\-/g,' '))},...filter]
      property(updated);
      let value = init.toLowerCase().replace(/\-/g,' ');
      setValues({...values,[state]:value})
    }
  };
  
   useEffect(()=>{
    const getProductBySlug = async () => {
      setLoader(true)  
      const res = await GetAppliancesBySlug({slug:pSlug})
      const res2 = await GetCategories();
      if(res2.status === 200 && res2.status === 200){
      const res3 = await getCategoryData({categorySlug:res.data.product.category})
      if(res3.status === 200){
        setData(setFeatures, res3.data.features,'feature',res.data.product.feature);
        setData(setTypes, res3.data.types,'type',res.data.product.type);
        setData(setColors, res3.data.colors,'color',res.data.product.color);
        setData(setBrands, res3.data.brands,'brand',res.data.product.brand);
        setData(setFuelTypes, res3.data.fuelTypes,'fuelType',res.data.product.fuelType);
      }
      
      const categoriesFilter = res2.data.categories.filter((item)=> item.slug !== res.data.product.category )
      const updatedCategories = [TxtTransform.Cap1Char(res.data.product.category),...categoriesFilter]
      setCategories(updatedCategories);

      const productTypesFilter = productTypes.filter((item)=> item.toLocaleLowerCase() !== res.data.product.productType )
      const updatedProductTypes = [TxtTransform.Cap1Char(res.data.product.productType),...productTypesFilter]
      setProductTypes(updatedProductTypes)
      
      const metaKeywordsArray = res.data.product.metaKeywords.split(', ').map(keyword => keyword.trim());
      const data = {productType:res.data.product.productType,title:res.data.product.title,slug:res.data.product.slug,category:res.data.product.category,feature:res.data.product.feature,type:res.data.product.type,color:res.data.product.color,brand:res.data.product.brand,fuelType:res.data.product.fuelType,regPrice:res.data.product.regPrice,salePrice:res.data.product.salePrice,lowPrice:res.data.product.lowPrice,highPrice:res.data.product.highPrice,rating:res.data.product.rating,stock:res.data.product.stock,modelNo:res.data.product.modelNo,itemId:res.data.product.itemId,keyFeatures:res.data.product.keyFeatures,featureVideo:res.data.product.featureVideo,threeSixty:res.data.product.threeSixty,media:res.data.product.media,description:res.data.product.description,specification:res.data.product.specification,deliveryInfo:res.data.product.deliveryInfo,metaTitle:res.data.product.metaTitle,metaDescription:res.data.product.metaDescription,metaKeywords:metaKeywordsArray,tags:res.data.product.tags}
      setValues(data);
      setLoader(false)
    }else{
      setLoader(false)
    }
   }
   getProductBySlug()
  },[])

   
   // Controller States Start
   
   const [featureVideoField,setFeatureVideoField] = useState('')
   const [featureVideoLoader,setFeatureVideoLoader] = useState(false)
   const [delFeatureVideoLoader,setDelFeatureVideoLoader] = useState(false)
   const [threeSixtyField,setThreeSixtyField] = useState('')
   const [imageField,setImageField] = useState('')
   const [videoMediaLoader,setVideoMediaLoader] = useState(false)
   const [imageMediaLoader,setImageMediaLoader] = useState(false)
   const [mediaDelLoader,setMediaDelLoader] = useState('')
   const [videoField,setVideoField] = useState('')
  const imageSelectRef = useRef(null)
  const videoSelectRef = useRef(null)
  const featureVideoRef = useRef(null)
  // Controller States End

  // Handle Single Image url
  const handleMedia = async (e,file,type) => {
    if(file === 'image'){
       if(type === 'upload'){
         const data = e.target.files[0]
         if(data){
          setImageMediaLoader(true)
          const formData = new FormData()
          formData.append('media',data);
          formData.append('location',`product/images/`);
          const res = await uploadMedia(formData)
          if(res.status === 200){
          setImageMediaLoader(false)
          setValues({...values,media:[...values.media,{file:file,type:type,data:res.data.url}]})
          setImageField('')
          imageSelectRef.current.value = '';
         }else{
          setImageMediaLoader(false)
          setImageField('')
          Toast(res.data.message,'error')
        }
       }
       }else{
        if(imageField !== ''){
          setValues({...values,media:[...values.media,{file:file,type:type,data:imageField,preview: imageField}]})
          setImageField('')
        }   
       }

     }else if(file === 'video'){
      if(type === 'url' && videoField !== ''){
        let id =  videoField.split('/').pop();
        const preview = `https://img.youtube.com/vi/${id}/mqdefault.jpg`
        setValues({...values,media:[...values.media,{file:file,type:type,data:videoField.replace('youtu.be/','youtube.com/embed/'),preview:preview}]})
        setVideoField('')
      }else{
        const data = e.target.files[0]
         if(data){
          setVideoMediaLoader(true)
          const formData = new FormData()
          formData.append('media',data);
          formData.append('location',`product/videos/`);
          const res = await uploadMedia(formData)
         if(res.status === 200){
          setVideoMediaLoader(false)
          setValues({...values,media:[...values.media,{file:file,type:type,data:res.data.url}]})
          setVideoField('')
          videoSelectRef.current.value = '';
         }else{
          setImageMediaLoader(false)
          setVideoField('')
          Toast(res.data.message,'error',1000)
        }
         }
      }
     }
  }
  
  const DeleteMedia = async (e,indx) => {
    const delMedia = values.media.filter((item,index)=> index === indx)
    const updatedMedia = values.media.filter((item,index)=> index !== indx)
    if(delMedia.length && delMedia[0].type === 'upload'){
      setMediaDelLoader(indx)
      const res = await deleteMedia({url:delMedia[0].data})
     if(res.status === 200){
      setValues({...values,media:[...updatedMedia]})
      setMediaDelLoader('')
      Toast(res.data.msg,'success',1000)
    }else{
      setMediaDelLoader('')
      Toast(res.data.message,'error',1000)
    }
   }else{
    setValues({...values,media:[...updatedMedia]})
   }
  }

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
    setValues({...values,tags:JSON.stringify(updatedArray)})
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

  const deleteFeatureVideo = async (e) => {
    let emptyObj = {type:'',data:''};
    if(values.featureVideo.type === 'url'){
      setValues({...values,featureVideo:emptyObj})
    }else{
      setDelFeatureVideoLoader(true)
    const res = await deleteMedia({url:values.featureVideo.data})
     if(res.status === 200){
      setValues({...values,featureVideo:emptyObj})
      setDelFeatureVideoLoader(false)
      Toast(res.data.msg,'success',1000)
    }else{
      setDelFeatureVideoLoader(false)
      Toast(res.data.message,'error',1000)
    }
  }
}

  const handleFeatureVideo = async (e,type) => {
    if(type === 'upload'){
      e.preventDefault()
      setFeatureVideoLoader(true)
      setFeatureVideoField('')
      const file = e.target.files[0]
      if(file){
        setKeyFeatureUpload(true)
        const formData = new FormData()
        formData.append('media',file);
        formData.append('location',`product/featureVideos/`);
        const res = await uploadMedia(formData)
        if(res.status === 200){
          setFeatureVideoLoader(false)
          setValues({...values,featureVideo:{type:'upload',data:res.data.url}})
          setFeatureVideoField('')
        }else{
          setFeatureVideoLoader(false)
          setFeatureVideoField('')
          Toast(res.data.message,'error',1000)
        }
      }
    }else if(type === 'url'){
      if(featureVideoField === ''){
        setValues({...values,featureVideo:{type:'',data:'',prevImg:''}})
      }else{
        let id =  featureVideoField.split('/').pop();
      const preview = `https://img.youtube.com/vi/${id}/mqdefault.jpg`
      setValues({...values,featureVideo:{type:'url',data:featureVideoField.replace('youtu.be/','youtube.com/embed/'),prevImg:preview}})
      setFeatureVideoField('')
    }
    }

  }

  const handleThreeSixty = (e,type) => {
    if(type === 'upload'){
      e.preventDefault()
      setThreeSixtyField('')
      const file = e.target.files[0]
      if(file){
      setValues({...values,threeSixty:{type:'upload',data:file}})
     }
    }else if(type === 'url'){
      if(threeSixtyField !== ''){
      let id =  threeSixtyField.split('/').pop();
      const preview = `https://img.youtube.com/vi/${id}/mqdefault.jpg`
      setValues({...values,threeSixty:{type:'url',data:threeSixtyField.replace('youtu.be/','youtube.com/embed/'),prevImg:preview}})
      setThreeSixtyField('')
    }
    }

  }


  // Product Highlighted Features Popup
  const [fPopup,setFpopup] = useState(false)
  const [fTitle,setFtitle] = useState('')
  const [fDescription,setFdescription] = useState('')
  const [fMedia,setFmedia] = useState({file:'',type:'',data:'',preview:''})
  const [fImageField,setFimageField] = useState('')
  const [fVideoField,setFvideoField] = useState('')
  const [keyFeatureUpload,setKeyFeatureUpload] = useState(false)
  const fVideoRef = useRef(null)
  const fImageRef = useRef(null)

  const hanldeKeyFeatures = async (e,type,media) => {
     if(media === 'image'){
       if(type === 'upload'){
         const file = e.target.files[0]
         if(file){
           setFmedia({file:media,type:type,data: file,preview:window.URL.createObjectURL(file)});
           setFimageField('')
         }
       }else{
        setFmedia({file:media,type:type,data:fImageField,preview:'' });
        setFimageField('')
       }

     }else if(media === 'video'){
      if(type === 'url'){
        let id =  fVideoField.split('/').pop();
        const preview = `https://img.youtube.com/vi/${id}/mqdefault.jpg`
        setFmedia({file:media,type:type,data:fVideoField.replace('youtu.be/','youtube.com/embed/'),prevImg:preview})
        setFvideoField('')
      }else{
        const file = e.target.files[0]
         if(file){
           setFmedia({file:media,type:type,data:file});
           setFvideoField('')
         }
      }
     }
    }

  const saveKeyFeature = async () => {
    
    if(fMedia.type === 'upload'){
      setKeyFeatureUpload(true)
      const formData = new FormData()
      formData.append('media',fMedia.data);
      formData.append('location',`product/${fMedia.file}s/`);
      const res = await uploadMedia(formData)
      if(res.status === 200){
        const data2 = {title:fTitle,description:fDescription,media:{...fMedia,data:res.data.url}}
        setValues({...values,keyFeatures:[...values.keyFeatures,data2]})
        setFmedia({file:'',type:'',data:'',preview:''})
        setFtitle('')
        setFdescription('')
        setKeyFeatureUpload(false)
        setFpopup(false)
      }else{
        setKeyFeatureUpload(false)
        setFpopup(false)
        Toast(res.data.message,'error',1000)
      }
    }else{
      const data = {title:fTitle,description:fDescription,media:{...fMedia}}
      setValues({...values,keyFeatures:[...values.keyFeatures,data]})
      setFmedia({file:'',type:'',data:'',preview:''})
      setFtitle('')
      setFdescription('')
      setFpopup(false)
    }
  }
  const [delFeatureCardLoader,setDelFeatureCardLoader] = useState(null)
  const deleteFeatureCard = async (e,index) => {
    e.preventDefault()
    const data = values.keyFeatures.filter((item,indx)=> indx !== index )
    const delData = values.keyFeatures.filter((item,indx)=> indx === index )
    if(delData[0].media.type !== 'upload'){
      setValues({...values,keyFeatures:[...data]})
    }else{
      setDelFeatureCardLoader(index)
      const res = await deleteMedia({url:delData[0].media.data})
      if(res.status === 200){
        setValues({...values,keyFeatures:[...data]})
        Toast(res.data.msg,'success',1000)
      }else{
        Toast(res.data.message,'error',1000)
      }
    }
  }

  // Product Seo
  const [keywordField,setKeywordField] = useState('')
  const keywordRef = useRef()

  const handleEnterKey = (e) => {
    if (e.key === ' ' && keywordField.length > 0) {
      setValues({...values,metaKeywords:[...values.metaKeywords,keywordField]})
      setTimeout(() => {
        setKeywordField('')
        keywordRef.current.focus();
        keywordRef.current.setSelectionRange(0, 0);
      }, 0);
    }
  }

  const deleteKeyword = (e,index) => {
    e.preventDefault()
     const updateMetaKeywords = values.metaKeywords.filter((item,indx)=> indx !== index)
     setValues({...values,metaKeywords:[...updateMetaKeywords]})
  }

  // Initial popup
  const [allModelNos,setAllModelNos] = useState([])

   const handleAllModelNos = async () => {
     const res = await getAllModelNos({category:values.category});
      if(res.status === 200){
        setAllModelNos(res.data.allModelNos)
      }
   }

   useEffect(()=>{
     if(values.category !== ''){
       handleAllModelNos()
      }
   },[values.category])

   const navigate = useNavigate();
  // Create Product
  const UpdateProduct = async (e) => {
    e.preventDefault()
    setSubmit(true)
    try{
     const data = {
      pSlug,
      productType:values.productType,
      title:values.title,
      slug:values.slug,
      category:values.category,
      feature:values.feature,
      type:values.type,
      color:values.color,
      brand:values.brand,
      fuelType:values.fuelType,
      regPrice:parseFloat(values.regPrice),
      salePrice:parseFloat(values.salePrice),
      lowPrice:parseFloat(values.lowPrice),
      highPrice:parseFloat(values.highPrice),
      rating:parseFloat(values.rating),
      stock:parseFloat(values.stock),
      modelNo:values.modelNo,
      itemId:values.itemId,
      metaKeywords:JSON.stringify(values.metaKeywords),
      keyFeatures:JSON.stringify(values.keyFeatures),
      featureVideo:JSON.stringify(values.featureVideo),
      threeSixty:JSON.stringify(values.threeSixty),
      media:JSON.stringify(values.media),
      tags:JSON.stringify(values.tags),
      description:values.description,
      specification:values.specification,
      deliveryInfo:values.deliveryInfo,
      metaTitle:values.metaTitle,
      metaDescription:values.metaDescription,
    }
     await updateProductSchema.validate(values, { abortEarly: false }); 
     const res = await updateProduct(data)
     if(res.status === 200){
      setSubmit(false)
      Toast(res.data.msg,'success',1000)
      navigate('/admin/manage-products')
     }else{
      setSubmit(false)
      Toast(res.data.message,'error',1000)
     }
    }catch(error){
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
 }



const handleInputChange = (e,name) => {
  const { value } = e.target;
    setValues({
      ...values,
      [name]: value, // Update the property based on the input's 'name' attribute
    });
};

const handleTitle = (e) => {
 setValues({
  ...values,
  title: e.target.value, // Update the property based on the input's 'name' attribute
  slug: e.target.value.toLowerCase().replace(/\s/g,'-')
});
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
              {fMedia.file === 'image' ? <img src={fMedia.preview !== '' ? fMedia.preview : fMedia.data} className='h-36 rounded-md' /> : <FaPhotoVideo className='text-7xl' />}
             </div>
             <div className='flex items-center justify-center pt-1 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]' >
             {fMedia.file === 'image' ? <button type='button' onClick={e=>setFmedia({file:'',type:'',data:'',preview:''})} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500' ><a className='flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold' ><BsFillTrashFill className='text-sm' /></a></button>    
              :
              <>
              <input type="text" value={fImageField} onChange={e=>setFimageField(e.target.value)} className='outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6' placeholder='Enter Image Url' />
              <button  onClick={e=>hanldeKeyFeatures(e,'url','image')} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><TiTick className='text-sm' /></a></button>    
              <input  type="file" accept='image/*' ref={fImageRef} onChange={e=>hanldeKeyFeatures(e,'upload','image')} className='hidden' />
              <button type='button' onClick={()=>fImageRef.current.click()} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><FaImage className='text-sm' /></a></button>
              </>}
             </div>
           </div>
           <div className='flex h-full justify-center items-center font-semibold' ><h5>OR</h5></div>
           <div className='flex flex-col items-center justify-center border-[1px] border-[0,0,0,0,0.15] w-1/2 h-52 px-2 py-2 rounded-md' >
             <div className='h-full flex items-center justify-center' >
             {fMedia.file !== 'video' ? <FaPhotoVideo className='text-7xl' />:null}
             {fMedia.file === 'video' && fMedia.type === 'url' ? <Iframe thumbnail={fMedia.prevImg} title={fMedia.data} divId={`media-video-wrapper-${fMedia.type}`} frameId={`media-video-${fMedia.type}`} src={fMedia.data} icon="text-5xl" style='h-36 w-11/12 rounded-md' />:null}
             {fMedia.file === 'video' && fMedia.type === 'upload' ? <div><h5>{fMedia.data.name}</h5></div>:null}
             </div>
             <div className='flex items-center justify-center pt-1 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]' >
              {fMedia.file === 'video' ? <button type='button' onClick={e=>setFmedia({file:'',type:'',data:'',preview:''})} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500' ><a className='flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold' ><BsFillTrashFill className='text-sm' /></a></button>    
              :
              <>
              <input type="text" value={fVideoField} onChange={e=>setFvideoField(e.target.value.replace('youtu.be/','youtube.com/embed/'))} className='outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6' placeholder='Enter Iframe Url' />
              <button  onClick={e=>hanldeKeyFeatures(e,'url','video')} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><TiTick className='text-sm' /></a></button>    
              <input  type="file" accept='video/*' ref={fVideoRef} onChange={e=>hanldeKeyFeatures(e,'upload','video')} className='hidden' />
              <button type='button' onClick={()=>fVideoRef.current.click()} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><GoVideo className='text-sm' /></a></button>    
              </>}
             </div>
           </div>
          {/* Media End */}
          </div>
          <div className='flex flex-col space-y-2 items-center px-2 mt-2 w-full' >
          <TextInput width="full" value={fTitle} onChange={e=>setFtitle(e.target.value)} placeholder="Enter Feature Title" />
          <TextArea value={fDescription} onChange={e=>setFdescription(e.target.value)} placeholder="Write Feature Description Here.." /> 
          {keyFeatureUpload?<button type='button' className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-3 py-2 rounded-md text-white font-semibold text-xs' ><img src='/loader-bg.gif' className='w-5' /></a></button>:<button type='button' onClick={saveKeyFeature} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-3 py-2 rounded-md text-white font-semibold text-xs' >Create</a></button>}    
          </div>
        </div>
    </Popup>
    {/* {loader ? <Loader2/> : */}
    <AdminAccount>
    <form onSubmit={UpdateProduct} encType='multipart/form-data' className='flex flex-col justify-center space-y-5 w-full py-10' >
     <h5 className="font-semibold text-center text-2xl" >{TxtTransform.Cap1Char(values.productType)} Product</h5>     
     <div className="flex items-center space-x-5 w-full" >
      <TextInput name="title" title="Title" iscompulsory="true" type="text" value={values.title} onChange={(e)=>handleTitle(e)} error={errors && errors.includes('Title is Required!') ? true : false} errormessage="Title is Required!" placeholder="Enter Product Title" />
      <TextInput name="slug" readOnly title="Slug" iscompulsory="true" type="text" value={values.slug} error={errors && errors.includes('Product Slug is Required!') ? true : false} errormessage="Slug is Required!" placeholder="Slug is Required!" />
     </div>
     <div className='flex space-x-5' >
      <SelectInput name="categor" title="Product Type" iscompulsory="true" onChange={e =>handleInputChange(e,'productType') } options={productTypes} />   
      <SelectInput name="categor" title="Product Category" iscompulsory="true" onChange={e =>handleInputChange(e,'category')} options={categories} />
     </div>
     <div className="flex space-x-5 items-center w-full" >
      {features.length > 0 ? <SelectInput name="categor" title="Product Feature" iscompulsory="true" onChange={e =>handleInputChange(e,'feature')} options={features} />:null}
      {types.length > 0 ? <SelectInput name="categor" title="Product Type" iscompulsory="true" onChange={e =>handleInputChange(e,'type')} options={types} />:null}
      {colors.length > 0 ? <SelectInput name="categor" title="Product Color" iscompulsory="true" onChange={e =>handleInputChange(e,'color')} options={colors} />:null}
      {fuelTypes.length > 0 ? <SelectInput name="categor" title="Product Fuel Type" iscompulsory="true" onChange={e =>handleInputChange(e,'fuelType')} options={fuelTypes} />:null}
      {brands.length > 0 ? <SelectInput name="categor" title="Product Brand" iscompulsory="true" onChange={e =>handleInputChange(e,'brand')} options={brands} />:null}
     </div>
     <div className="flex items-center space-x-5 w-full" >
      <TextInput name="regPrice" title="Regular Price" iscompulsory="true" type="text" value={values.regPrice} onChange={(e) =>handleInputChange(e,'regPrice')} error={errors && errors.includes('Regular Price is Required!') ? true : false} errormessage="Regular Price is Required!" placeholder="Regular Price is Required!" />
      <TextInput name="salePrice" title="Sale Price" iscompulsory="false" type="text" value={values.salePrice} onChange={(e) =>handleInputChange(e,'salePrice')} error={errors && errors.includes('Sale Price is Required!') ? true : false} errormessage="Sale Price is Required!" placeholder="Sale Price is Required!" />
      <TextInput name="lowPrice" title="Lower Installment" iscompulsory="true" type="text" value={values.lowPrice} onChange={(e) =>handleInputChange(e,'lowPrice')} error={errors && errors.includes('Lower Installment Price is Required!') ? true : false} errormessage="Lower Installment Price is Required!" placeholder="Enter Lower Installment" />
      <TextInput name="highPrice" title="Higher Installment" iscompulsory="true" type="text" value={values.highPrice} onChange={(e) =>handleInputChange(e,'highPrice')} error={errors && errors.includes('Higher Installment Price is Required!') ? true : false} errormessage="Higher Installment Price is Required!" placeholder="Enter Higher Installment" />
     </div>
     <div className="flex items-center space-x-5 w-full" >
      <SelectInput name="categor" title="Rating" iscompulsory="true" onChange={e =>handleInputChange(e,'rating')} options={['3','4','5']} />
      <TextInput name="stock" title="Stock" iscompulsory="true" type="text" value={values.stock} onChange={(e) =>handleInputChange(e,'stock')} error={errors && errors.includes('Stock is Required!') ? true : false} errormessage="Stock is Required!" placeholder="Total Stock: 12" />
      <TextInputSuggestion state={values.modelNo} setState={setValues} values={values} suggestionList={allModelNos} iscompulsory="true" title="Model No" placeholder="#12334" />
      <TextInput name="item-id" title="Item Id" iscompulsory="true" type="text" value={values.itemId} onChange={(e) =>handleInputChange(e,'itemId')} error={errors && errors.includes('Item Id is Required!') ? true : false} errormessage="Item Id is Required!" placeholder="Item Id: 234532455" />
     </div>

     {values.productType === 'parent' ? <Accordion title="Main Key Features" answer={
      <div className='flex flex-col border-[1px] border-[0,0,0,0,0.15] rounded-md h-96 overflow-x-hidden overflow-y-scroll w-full' >
      <div className='grid grid-cols-3 mt-2 gap-x-2 gap-y-2 justify-center w-full' >
       {/* Card Start */}
       {values.keyFeatures.length > 0 ? values.keyFeatures.map((item,index)=><div key={index} className='flex flex-col  py-2 items-center h-60  bg-b5 ml-2 rounded-md w-11/12' >
         <div className='flex items-center justify-center border-[1px] border-[0,0,0,0,0.15] w-11/12 h-32 px-2 py-2 rounded-md' >
         {/* {item.media.file} */}
           {item.media.file === 'image' ? <img src={item.media.data} className='h-28 rounded-md' />:null }
           {item.media.file === 'video' && item.media.type === 'url' ?  <Iframe thumbnail={item.media.prevImg} frameId={`${index}-wrapper-${item.media.data}`} divId={`${index}-${item.media.data}`} icon="text-5xl" src={item.media.data} style="w-40 h-28 rounded-md" /> :null  }
           {item.media.file === 'video' && item.media.type === 'upload' ? <video src={item.media.data} className="w-40 h-28 rounded-md " />:null  }
         </div> 
         <div className='flex space-x-2 items-center justify-center w-full s mt-2' >
          {delFeatureCardLoader === index?<button type='button' className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500' ><a className='flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold' ><img src='/loader-bg.gif' className='w-3' /></a></button>:<button type='button' onClick={e=>deleteFeatureCard(e,index)} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500' ><a className='flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold' ><BsFillTrashFill className='text-sm' /></a></button>}    
         </div>
         <div className='flex flex-col px-2 mt-2 w-full' >
         <h5 className='font-bold text-sm' >{item.title}</h5>
         <p className='h-16 overflow-hidden text-xs ' >{item.description}</p>
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
     } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child=' w-full [&>p]:text-sm !mt-0' />:null}

      <Accordion title="Product Media" answer={<div className="flex flex-col space-y-5" >
             <div className='flex items-center justify-center space-x-2' >
            <div className="flex flex-col justify-center items-center py-3 border-[1px] border-[0,0,0,0,0.15] rounded-md w-1/2" >
             <h5 className='text-center font-bold text-xs mb-2' >Upload Features Video</h5>
              {values.featureVideo.type === 'url' ? <Iframe thumbnail={values.featureVideo.prevImg} title={values.featureVideo.data} icon="text-5xl" frameId={`feature-video-wrapper-${values.featureVideo.type}`} divId={`feature-video-${values.featureVideo.type}`} src={values.featureVideo.data} style='h-52 w-11/12 rounded-md' />:null}
              {values.featureVideo.type === 'upload' ? <video src={values.featureVideo.data} controls className=' w-11/12 rounded-xl' /> :null}
              {values.featureVideo.type === '' && values.featureVideo.data === '' ? <div className='flex items-center justify-center w-11/12 h-52 border-2 border-black rounded-lg' >{featureVideoLoader ? <img src="/file-loader.gif" className='w-32' /> : <FaPhotoVideo className='text-7xl' />}</div>:null}
              <div className='flex items-center justify-center pt-3 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]' >
                  <input  type="file" accept='video/*' ref={featureVideoRef} onChange={e=>handleFeatureVideo(e,'upload')} className='hidden' />
                  {values.featureVideo.data !== '' ? <>{delFeatureVideoLoader?<button type='button' className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500' ><a className='flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold' ><img src='/loader-bg.gif' className='w-3' /></a></button>:<button type='button' onClick={e=>deleteFeatureVideo(e)} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500' ><a className='flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold' ><BsFillTrashFill className='text-sm' /></a></button>}</>
                  :<><input type="text" value={featureVideoField} onChange={e=>setFeatureVideoField(e.target.value)} className='outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6' placeholder='Enter Iframe Url' /><button  onClick={e=>handleFeatureVideo(e,'url')} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><TiTick className='text-sm' /></a></button>    
                     <>{featureVideoLoader?<button type='button' onClick={()=>featureVideoRef.current.click()} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><img src='/loader-bg.gif' className='w-3' /></a></button>:<button type='button' onClick={()=>featureVideoRef.current.click()} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><GoVideo className='text-sm' /></a></button>}</></>      
                     }
              </div>
            </div>
            <div className="flex flex-col justify-center items-center py-3 border-[1px] border-[0,0,0,0,0.15] rounded-md w-1/2" >
             <h5 className='text-center font-bold text-xs mb-2' >Insert 360 Iframe</h5>
              {values.threeSixty.type === 'url' ? <Iframe icon="text-5xl" thumbnail={values.threeSixty.prevImg} title={values.threeSixty.data} divId={`360-wrapper-${values.threeSixty.type}`} frameId={`360-video-${values.threeSixty.type}`} src={values.threeSixty.data} style='h-52 w-11/12 rounded-md' />:null}
              {values.threeSixty.type === '' && values.threeSixty.data === '' ? <div className='flex items-center justify-center w-11/12 h-52 border-2 border-black rounded-lg' ><Tb360View className='text-7xl' /></div>:null}
              <div className='flex items-center justify-center pt-3 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]' >
                  {values.threeSixty.data !== '' ? <><button type='button' onClick={()=> setValues({...values,threeSixty:{type:'',data:''}})} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500' ><a className='flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold' ><BsFillTrashFill className='text-sm' /></a></button></>
                  :<><input type="text" value={threeSixtyField} onChange={e=>setThreeSixtyField(e.target.value)} className='outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6' placeholder='Enter Iframe Url' /><button  onClick={e=>handleThreeSixty(e,'url')} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><TiTick className='text-sm' /></a></button></>      
                     }
              </div>
            </div>
       
            </div>
       <div className='flex flex-col border-[1px] border-[rgba(0,0,0,0.15)] rounded-lg h-52' >
       <div className='flex items-center space-x-2 justify-between px-2 border-b-[1px] border-b-[rgba(0,0,0,0.15)] h-10 w-full' >
        
        <div className='flex items-center space-x-1' >
          <h5 className='font-bold text-xs' >Upload Images</h5>
          <input type="text" value={imageField} onChange={e=>setImageField(e.target.value)} className='outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6' placeholder='Enter Image Url' />
          <button  onClick={e=>{imageMediaLoader ? null : handleMedia(e,'image','url')}} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><TiTick className='text-sm' /></a></button>    
          <input ref={imageSelectRef} onChange={e=>handleMedia(e,'image','upload')} type="file" accept='image/*' className='hidden' />
          {imageMediaLoader?<button type='button' className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b6' ><a className='flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold' ><img src='/loader-bg.gif' className='w-4' /></a></button>:<button type='button' onClick={()=>imageSelectRef.current.click()} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><FaImage className='text-sm' /></a></button>}    
        </div>
        
        <div className='flex items-center space-x-1 border-l-[1px] pl-2 border-[rgba(0,0,0,0.15)]' >
          <h5 className='font-bold text-xs' >Upload Video's</h5>
          <input type="text" value={videoField} onChange={e=>setVideoField(e.target.value)} className='outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6' placeholder='Enter Video Url' />
          <button onClick={e=>{videoMediaLoader ? null : handleMedia(e,'video','url')}} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><TiTick className='text-sm' /></a></button>    
          <input ref={videoSelectRef} onChange={e=>handleMedia(e,'video','upload')} type="file" accept='video/*' className='hidden' />
          {videoMediaLoader?<button type='button' className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b6' ><a className='flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold' ><img src='/loader-bg.gif' className='w-4' /></a></button>:<button type='button' onClick={()=>videoSelectRef.current.click()} className='flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3' ><a className='flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold' ><GoVideo className='text-sm' /></a></button>}
        </div>
       
       </div>
       {/* Media Data Placeholder Start */}
       <div className={`px-2 py-2 ${values.media.length > 0 ? 'flex flex-wrap gap-x-2 gap-y-2' : 'flex items-center justify-center'} h-full overflow-x-hidden overflow-y-scroll`} >
        {/* Image Container Start */}
        {values.media.length > 0 ? values.media.map((item,index)=> (<div key={index} className='relative px-1 py-1 rounded-lg h-fit w-fit border-[1px] border-[rgba(0,0,0,0.15)]' >
         {mediaDelLoader === index ? <div className='relative w-32 h-32' ><div className='absolute w-32 h-32 bg-black/40' ></div><img src="/del-loader.gif" /></div>:
         <>
         <div className='absolute -right-1 -top-2' ><div onClick={e=>DeleteMedia(e,index)} className='flex justify-end w-full bg-white rounded-full' ><AiFillPlusCircle className='text-red-500 text-lg shadow-xl rounded-full cursor-pointer' /></div></div>
         {item.file === 'image' ? <img src={item.data} className='w-32 h-32' />:null}
         {item.file === 'video' && item.type === 'url' ? <Iframe thumbnail={item.preview} icon="text-5xl" frameId={`frame-${index}-${item.data}`} divId={`${index}-wrapper-${item.data}`} src={item.data} title={item.data} style="w-32 h-32" />:null }
         {item.file === 'video' && item.type === 'upload' ? <video src={item.data} className="w-32 h-32" controls />:null }
         </>}
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
         {values.tags.length > 0 ? values.tags.map((item,index)=> <>{item.el ? <ExtendTag id={item.id} name={item.el} selected={item.selected} /> : <div key={index} onClick={e=>handleTagClick(e,item.id)} className={`flex items-center cursor-pointer hover:shadow-md space-x-1 border-[1px] ${item.selected ? 'border-[1px] border-b6 ' :'border-[1px] border-[rgba(0,0,0,0.15)]'} rounded-md px-3 py-2 w-fit h-fit`} >{item.icon !== '' ?<img src={`/tags/${item.icon}.png`} className='h-6 w-6' />:null}<span><h5 className='text-[10px] font-medium' >{item.name}</h5></span></div>}</>):<div className='flex w-full h-full justify-center items-center' ><img src="/not-found.webp" className='w-28 h-28' /></div>}       
       </div>
       </div>
      } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0' />
      {/* Product Tags End */}

      {/* Product Description Start */}
      <Accordion title="Description" answer={
       <ContentEditor state={values} setState={setValues} property="description" />
      } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0' />
      {/* Product Description End */}

      {/* Product Specification Start */}
      <Accordion title="Specification" answer={
       <ContentEditor state={values} setState={setValues} property="specification"/>
      } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0' />
      {/* Product Specification End */}

      {/* Product DeliveryInfo Start */}
      <Accordion title="Delivery Info" answer={
       <ContentEditor state={values} setState={setValues} property="deliveryInfo" />
      } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0' />
      {/* Product DeliveryInfo End */}

      {/* Seo Start */}
      <Accordion title="Product Seo" answer={
       <div className='flex flex-col space-y-2 w-full' > 
         <TextInput width="full" name="title" title="Meta Title" type="text" value={values.metaTitle} onChange={e =>handleInputChange(e,'metaTitle')} error={errors && errors.includes('Product Title is Required!') ? true : false} errormessage="Product Title is Required!" placeholder="Enter Meta Title" />
         <TextArea title="Meta Description" value={values.metaDescription} onChange={e =>handleInputChange(e,'metaDescription')} placeholder="Write Meta Description Here.." /> 
        {/* Seo Keyword */}
        <h5 className='text-xs font-semibold' >Meta Keywords</h5>
        <div className='flex flex-wrap w-full py-3 px-2 rounded-xl border-[1px] borders-[0,0,0,0,0.15]' >
        <div className="flex flex-wrap gap-y-2 items-center gap-x-2 w-full h-auto " >
         {values.metaKeywords.map((item,index)=><span key={index} className="flex items-center bg-b6 text-sm px-2 py-1 text-white rounded-2xl" >{item}<AiFillCloseCircle onClick={e=>deleteKeyword(e,index)} className='text-white bg-red-500 ml-1 text-xs cursor-pointer rounded-full' /></span>)}
        <div/>
        <input ref={keywordRef} placeholder='Hit Space To Insert' value={keywordField} onKeyDown={e => handleEnterKey(e)} onChange={e=>setKeywordField(e.target.value)} className='border-none outline-none mx-5 text-sm' />
       </div>
       </div>
      </div>
      } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0' />
      {/* Seo End */}
      
      <button type="submit" className='flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Update</span><BsArrowRightShort className='text-2xl' /></a>}</button>
     
     </form>
    </AdminAccount>
    {/* } */}
   </>
  )
}

export default UpdateProduct

