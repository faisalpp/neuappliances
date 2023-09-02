import React,{useEffect,useState,useRef} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import BrandCard from '../../components/AdminDashboard/BrandCard'
import {createSectionItem,updateSectionItem} from '../../api/admin'
import { getSectionItems,updateSectionItemsIndex } from '../../api/admin';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from '../../components/AdminDashboard/Popup';
import {AiFillPlusCircle} from 'react-icons/ai'
import {BsPencil,BsArrowRightShort,BsFillArrowLeftCircleFill} from 'react-icons/bs'
import TextInput from '../../components/TextInput/TextInput';
import {toast} from 'react-toastify'
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'

const ManageSectionItem = () => {
    const { style,sectionId } = useParams();
    const [cardStyle,setCardStyle] = useState(style);
    const [sectionItems,setSectionItems] = useState([]);
    const data = {sectionId}
    const getSectionItem = async () => {
        const res = await getSectionItems(data);
        console.log(res)
        if(res.status === 200){
            setSectionItems(res.data.sectionItems);
        }
    }
    useEffect(() => {
        getSectionItem()
    }, [])

    const imgRef = useRef()
    const [errors,setErrors] = useState([])
    const [submit,setSubmit] = useState(false)
    const [popup,setPopup] = useState(false)
    const [image,setImage] = useState('')
    const [tempImg,setTempImg] = useState('')
    const navigate = useNavigate()

    const handleImage = (e) => {
        const file = e.target.files[0]
        if(file){
          setImage(file)
          setTempImg(window.URL.createObjectURL(file))
        }
    }

    const [title,setTitle] = useState('')
    const [rating,setRating] = useState('')

    const CreateSectionItem = async (e) => {
        e.preventDefault()
     setSubmit(true)
     const formData = new FormData();
     formData.set('title',title) 
     formData.set('image',image) 
     formData.set('sectionId',sectionId) 
     formData.set('rating',rating) 
     const res = await createSectionItem(formData);
     if(res.status === 200){
       setSubmit(false)
       getSectionItem()
       setPopup(false)
       imgRef.current.value = null;
       setTitle('');
       setRating('');
       setImage('');
       setTempImg('');
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
      }else{
       setSubmit(false)
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

    const uImgRef = useRef()
    const [uPopup,setUpopup] = useState(false)
    const [uImage,setUimage] = useState('')
    const [oldImg,setoldImg] = useState('')
    const [uTempImg,setUtempImg] = useState('')
    const [itemId,setItemId] = useState()

    const handleUpdateImage = (e) => {
        const file = e.target.files[0]
        if(file){
          setUimage(file)
          setUtempImg(window.URL.createObjectURL(file))
        }
    }

    const [uTitle,setUtitle] = useState('')
    const [uRating,setUrating] = useState('')

    const UpdateSectionItem = async (e) => {
        e.preventDefault()
     setSubmit(true)
     const formData = new FormData();
     formData.set('title',uTitle) 
     formData.set('image',uImage) 
     formData.set('tempImg',uTempImg) 
     formData.set('oldImg',oldImg) 
     formData.set('sectionItemId',itemId) 
     formData.set('rating',uRating) 
     const res = await updateSectionItem(formData);
     if(res.status === 200){
       setSubmit(false)
       getSectionItem()
       setUpopup(false)
       uImgRef.current.value = null;
       setUtitle('');
       setUimage('');
       setUrating('');
       setUtempImg('')
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
      }else{
       setSubmit(false)
       setUpopup(false)
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

    const handleUpdateStates = (e,img,title,rating,id) => {
      e.preventDefault()
      setoldImg(img)
      setUimage(img)
      setUtitle(title)
      setUrating(rating)
      setItemId(id)
      setUpopup(true)
    }


    const handleDragEnd = (result) => {
      console.log(result)
      const items = Array.from(sectionItems)
      const [recordedItem] = items.splice(result.source.index,1)
      items.splice(result.destination.index,0,recordedItem)
      const updatedItems = items.map((item, index) => ({
        ...item,
        index: index+1 // Add the index property
    }));
    // console.log(updatedItems)
    setSectionItems(updatedItems);
    }

    const [iLoading,setIloading] = useState(false)

    const UpdateSectionItemsIndex = async(e) => {
      e.preventDefault()
      setIloading(true)
      const res = await updateSectionItemsIndex({sectionItems:sectionItems});
      if(res.status === 200){
        setIloading(false)
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
        getSectionItem()
      }else{
        setIloading(false)
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
          {cardStyle === 'head-rating-card' || cardStyle === 'rating-card' ? null : <TextInput  width="full" name="title" title="Title" iscompulsory="true" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} error={errors && errors.includes('Title is required') ? true : false} errormessage="Title is Required" placeholder="Cool Master"  />}
          {cardStyle === 'head-rating-card' || cardStyle === 'rating-card' ? <TextInput  width="full" name="rating" title="Rating" iscompulsory="true" type="text" value={rating} onChange={(e)=>setRating(e.target.value)} error={errors && errors.includes('Name is required') ? true : false} errormessage="Title is Required" placeholder="3"  />:null}
          <button type="button" onClick={CreateSectionItem} className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> :<a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a>}</button>
         </form>
        </Popup>
        {/* Create Section Item End */}
        {/* Update Section Item Start */}
         <Popup state={uPopup} setState={setUpopup}>
         <form className='flex flex-col space-y-3' >
          <h1 className="font-semibold" >Update Section Item</h1>
          <div className='relative rounded-2xl border border-gray-300 p-3 h-fit w-[200px] flex justify-center items-center self-center ' >
            <div className='absolute flex bg-transparent rounded-full w-full h-full' >
             <span onClick={()=>{uImgRef.current.click();}} className='absolute -right-3 -bottom-2 flex items-center h-fit justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2' ><BsPencil className="text-base" /></span>
            </div>
            <img src={uTempImg !== '' ? uTempImg : uImage} alt="" />
            
            <input ref={uImgRef} type="file" name="image" onChange={e=>handleUpdateImage(e)} className='hidden' />
          </div>
          {cardStyle === 'head-rating-card' || cardStyle === 'rating-card' ? null : <TextInput  width="full" name="title" title="Title" iscompulsory="true" type="text" value={uTitle} onChange={(e)=>setUtitle(e.target.value)} error={errors && errors.includes('Name is required') ? true : false} errormessage="Title is Required" placeholder="Cool Master"  />}
          {cardStyle === 'head-rating-card' || cardStyle === 'rating-card' ? <TextInput  width="full" name="rating" title="Rating" iscompulsory="true" type="text" value={uRating} onChange={(e)=>setUrating(e.target.value)} error={errors && errors.includes('Name is required') ? true : false} errormessage="Title is Required" placeholder="Cool Master"  />:null}
          <button type="button" onClick={UpdateSectionItem} className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> :<a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a>}</button>
         </form>
        </Popup>
        {/* Update Section Item End */}

        <AdminAccount>
        <div className='flex mb-5 py-3 rounded-3xl px-10 w-full' >
        <   BsFillArrowLeftCircleFill onClick={()=>navigate(-1)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />
            <div className='flex w-full justify-end space-x-3' >
             <AiFillPlusCircle onClick={()=>setPopup(true)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />
            </div>
          </div>
         {/* Products Operations */}
         {sectionItems.length > 0 ?
         <>
         <DragDropContext onDragEnd={handleDragEnd} className='w-full 3xl:max-w-1680px mx-auto'>
         <Droppable droppableId='sectionItem' className='3xl:px-[60px] flex flex-wrap justify-center 3xl:justify-start gap-10 3xl:gap-20'>
         {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className='grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-3 gap-7 xl:gap-10'>
           {sectionItems.map((sectionItem,index)=> 
            <Draggable key={sectionItem._id} draggableId={sectionItem._id} index={index}>
              {(provided) => (
                <div className='w-fit h-fit' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} title="Draggable!" key={index} >
                 <BrandCard getSectionItem={getSectionItem} id={sectionItem._id} handleUpdateStates={handleUpdateStates} updateUrl='' key={index} brandname={sectionItem.title} brandimage={sectionItem.image} rating={sectionItem.rating} />
                </div>
              )}
            </Draggable>
           )}
           {provided.placeholder}
          </div>)}
         </Droppable>
         </DragDropContext>
         <div className='flex w-full justify-end' ><button type="button" onClick={e=>UpdateSectionItemsIndex(e)} className='flex mt-2 items-center cursor-pointer rounded-md py-1 w-fit bg-b3' >{iLoading ? <img src='/loader-bg.gif' className='w-8' /> :<a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Save</span></a>}</button></div>
         </>
          :<div className='flex justify-center w-full h-full' >
          <img src="/not-found.png" className='w-36 h-36' />
         </div>}
        </AdminAccount>
        </>
    )
}

export default ManageSectionItem