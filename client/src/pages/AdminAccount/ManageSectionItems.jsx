import React,{useEffect,useState,useRef} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import BrandCard from '../../components/AdminDashboard/BrandCard'
import { useNavigate } from 'react-router-dom';
import { getSectionItems } from '../../api/admin';
import { useParams } from 'react-router-dom';
import Popup from '../../components/AdminDashboard/Popup';
import {AiFillPlusCircle} from 'react-icons/ai'
import {BsPencil,BsArrowRightShort} from 'react-icons/bs'

const ManageSectionItem = () => {
    const { sectionId } = useParams();
    const [sectionItems,setSectionItems] = useState([]);
    const data = {sectionId}
    useEffect(() => {
        const getSectionItem = async () => {
            const res = await getSectionItems(data);
            if(res.status === 200){
                setSectionItems(res.data.sectionItems);
            }
        }
        getSectionItem()
    }, [])

    const imgRef = useRef()
    const [submit,setSubmit] = useState(false)
    const [popup,setPopup] = useState(false)
    const [image,setImage] = useState('')
    const [tempImg,setTempImg] = useState('')

    const handleImage = (e) => {
        const file = e.target.files[0]
        if(file){
          setImage(file)
          setTempImg(window.URL.createObjectURL(file))
        }
    }


    const CreateSectionItem = async (e) => {
        e.preventDefault()
      setSubmit(true)
      const data = {title,Slug,cardStyle,slug,type}
     try{
      await sectionCreationValidationSchema.validate(data, { abortEarly: false });
     } catch (error) {
       if(error){
         setErrors(error.errors)
       }else{
         setErrors([])
       }
     }
     const res = await createSection(data);
      if(res.status === 200){
          setSubmit(false)
          toast.success(res.data.msg, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          Sections()
          setTitle('');
          setSlug('');
          setPopup(false)
        }else{
          setSubmit(false)
          setTitle('');
          setSlug('');
          setPopup(false)
          toast.error(res.data.message, {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
      }
    }
    
    return (
        <>
        {/* Create Section Item Start */}
         <Popup state={popup} setState={setPopup}>
         <form className='flex flex-col space-y-3' >
          <h1 className="font-semibold" >Create Section Item</h1>
          <div className='relative rounded-2xl border border-gray-300 p-3 h-fit w-[200px] flex justify-center items-center self-center ' >
            <div className='absolute flex bg-transparent rounded-full w-full h-full' >
             <span onClick={()=>{imgRef.current.click();}} className='absolute -right-3 -bottom-2 flex items-center h-fit justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2' ><BsPencil className="text-base" /></span>
            </div>
            <img src={tempImg != '' ? tempImg : '/no-image.jfif'} alt="" />
            
            <input ref={imgRef} type="file" name="image" onChange={e=>handleImage(e)} className='hidden' />
          </div>
          {/* <TextInput  width="full" name="name" title="Name" iscompulsory="true" type="text" value={name} onChange={(e)=>setName(e.target.value)} error={errors && errors.includes('Name is required') ? true : false} errormessage="Title is Required" placeholder="Scott"  /> */}
          {/* <TextInput  width="full" name="designation" title="Designation" iscompulsory="true" type="text" value={designation} onChange={(e)=>setDesignation(e.target.value)} error={errors && errors.includes('Designation is required') ? true : false} errormessage="Title is Required" placeholder="CEO & Founder"  /> */}
          <button type="button" onClick={CreateSectionItem} className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> :<a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a>}</button>
         </form>
        </Popup>
        {/* Create Section Item End */}

        <AdminAccount>
        <div className='flex mb-5 py-3 rounded-3xl px-10 w-full' >
            <div className='flex w-full justify-end space-x-3' >
             <AiFillPlusCircle onClick={()=>setPopup(true)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />
            </div>
          </div>
         {/* Products Operations */}
         {sectionItems.length > 0 ?
         <div className='grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-3 gap-7 xl:gap-10'>
          {sectionItems.map((sectionItem,index)=><BrandCard updateUrl={`/admin/update-section-item/${sectionItem._id}`} key={index} brandname={sectionItem.title} brandimage={sectionItem.image} rating={sectionItem.rating} />)}
         </div>
          :<div className='flex justify-center w-full h-full' >
          <img src="/not-found.png" className='w-36 h-36' />
         </div>}
        </AdminAccount>
        </>
    )
}

export default ManageSectionItem