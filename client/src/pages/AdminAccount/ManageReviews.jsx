import React,{useState,useEffect} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from '../../components/AdminDashboard/Popup';
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillPlusCircle, AiFillStar} from 'react-icons/ai'
import {BsFillTrashFill,BsPencil} from 'react-icons/bs'
import {HiOutlineDocumentDuplicate} from 'react-icons/hi'
import SelectInput from '../../components/TextInput/SelectInput';
import TextArea from '../../components/TextInput/TextAreaInput';
import TextInput from '../../components/TextInput/TextInput';
import {createReview,getReviews,updateReview,deleteReview,duplicateReview} from '../../api/admin/reviews'
import Pagination2 from '../../components/Pagination/Pagination2';
import * as Yup from 'yup';


const ManageReviews = () => {
  const reviewValidationSchema = Yup.object().shape({
    author: Yup.string().required('Author Name is Required!'),
    pageType: Yup.string().required('PageType is Required!'),
    rating: Yup.string().required('Rating is Required!'),
    content: Yup.string().required('Content is Required!'),
  });
  const upateReviewValidationSchema = Yup.object().shape({
    uId: Yup.string().required('Review Id is Required!'),
    author: Yup.string().required('Author Name is Required!'),
    pageType: Yup.string().required('PageType is Required!'),
    rating: Yup.string().required('Rating is Required!'),
    content: Yup.string().required('Content is Required!'),
  });

  const [reviewPopup,setReviewPopup] = useState(false)

  const [reviews,setReviews] = useState([])
  const [errors,setErrors] = useState([])

  const [author,setAuthor] = useState('');
  const [pageType,setPageType] = useState('home-page-footer-review');
  const [selectedSection,setSelectedSection] = useState('home-page-footer-review');
  const [content,setContent] = useState('');
  const [rating,setRating] = useState('3');

  const [loading,setLoading] = useState(false)
  
  const [pageNames,setPageNames] = useState(['Home Page Footer Review','How It Works 1st Section Review (What We Sell Tab)','How It Works 2nd Section Review (Wat We Sell Tab)','How It Works Review (Ratings Tab)','How It Works Review (Tested Tab)','How It Works Review (Photo Tab)','How It Works Review (Delivered Tab)','How It Works 1st Section Review (Hassle Free Tab)','How It Works 2nd Section Review (Hassle Free Tab)','Faq Page Review','Our Story Page Review','Our Showroom Page Review','Our Companies Page Review','Appliance Repair Page Review','Measuring Guide Page Review','Helpfull Appliance Tips Page Review','Financing Page Review','Blog Page Review'])

  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(8);
  const [totalPages,setTotalPages] = useState(0);
  // Loader
  const [isLoading,setIsLoading] = useState(false)

  const GetLoopMedia = async () => {
      setIsLoading(true)
      const params = {page:page,limit:limit};
      const data = {pageType:selectedSection}
      console.log(selectedSection)
      const res = await getReviews(params,data);
      if(res.status === 200){
        setReviews(res.data.reviews)
        setTotalPages(Math.ceil(res.data.totalCount / limit))
        setIsLoading(false)
      }else{
          setIsLoading(false)
      }
  }
  useEffect(() => {
    GetLoopMedia()
}, [selectedSection,page])

  
  const Submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const err = await reviewValidationSchema.validate({author,pageType,content,rating}, { abortEarly: false });
      const data = {author:author,pageType,content:content,rating:rating}
      const res = await createReview(data);
      if(res.status === 200){
        GetLoopMedia()
        setLoading(false)
          setReviewPopup(false)
          toast.success(res.data.msg, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
      }else{
          setLoading(false)
          setReviewPopup(false)
          toast.error(res.data.message, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
      }
    } catch (error) {
      if (error) {
        setErrors(error.errors)
      } else {
        setErrors([])
      }
      setLoading(false)
    }
  }



const [delLoading,setDelLoading] = useState(false)
const [dupLoading,setDupLoading] = useState(false)
const [upLoading,setUpLoading] = useState(false)
const [reviewUPopup,setReviewUPopup] = useState(false)

// Update Popup States
const [uId,setUid] = useState();
const [uAuthor,setUauthor] = useState('');
const [uRating,setUrating] = useState('');
const [uContent,setUcontent] = useState('');
const [uPageType,setUpageType] = useState('')

const [uRatings,setUratings] = useState(['3','4','5'])
const [pageUnames,setPageUnames] = useState(['Home Page Footer Review','How It Works 1st Section Review (What We Sell Tab)','How It Works 2nd Section Review (Wat We Sell Tab)','How It Works Review (Ratings Tab)','How It Works Review (Tested Tab)','How It Works Review (Photo Tab)','How It Works Review (Delivered Tab)','How It Works 1st Section Review (Hassle Free Tab)','How It Works 2nd Section Review (Hassle Free Tab)','Faq Page Review','Our Story Page Review','Our Showroom Page Review','Our Companies Page Review','Appliance Repair Page Review','Measuring Guide Page Review','Helpfull Appliance Tips Page Review','Financing Page Review','Blog Page Review'])

const UpdateReview = async (e) => {
  e.preventDefault()
  setUpLoading(true)
  try {
    const err = await upateReviewValidationSchema.validate({uId,author:uAuthor,pageType:uPageType,content:uContent,rating:uRating}, { abortEarly: false });
    const data = {id:uId,author:uAuthor,pageType:uPageType,content:uContent,rating:uRating}
    console.log(data)
    const res = await updateReview(data);
    if(res.status === 200){
      setPage(1)
      GetLoopMedia()
      setUpLoading(false)
      setReviewUPopup(false)
      setUrating('3')
      setUauthor('')
      setUcontent('')
      toast.success(res.data.msg, {
       position: "top-right",
       autoClose: 2000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
      });
    }else{
      setPage(1)
        setUpLoading(false)
        setReviewUPopup(false)
        toast.error(res.data.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }
  } catch (error) {
    if (error) {
      setUpLoading(false)
      setErrors(error.errors)
    } else {
      setErrors([])
    }
    setLoading(false)
  }
}
const DeleteReview = async (e,dId) => {
  e.preventDefault()
  setDelLoading(true)
    const res = await deleteReview({id:dId});
    if(res.status === 200){
      setPage(1)
      GetLoopMedia()
      setDelLoading(false)
      toast.success(res.data.msg, {
       position: "top-right",
       autoClose: 2000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
      });
    }else{
      setPage(1)
      setDelLoading(false)
      toast.error(res.data.message, {
       position: "top-right",
       autoClose: 2000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
      });
    }
}
const DuplicateReview = async (e,dId) => {
  e.preventDefault()
  setDupLoading(true)
    const res = await duplicateReview({id:dId});
    if(res.status === 200){
      setPage(1)
      GetLoopMedia()
      setDupLoading(false)
      toast.success(res.data.msg, {
       position: "top-right",
       autoClose: 2000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
      });
    }else{
      setPage(1)
      setDupLoading(false)
      toast.error(res.data.message, {
       position: "top-right",
       autoClose: 2000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
      });
    }
}

const handleUpdatePopup = (e,uId,author,content,rating,uPage) => {
   e.preventDefault()
   const filt = pageUnames.filter((item)=> item.toLocaleLowerCase().replace(/\s/g,'-') !== uPage )
   const rFilt = uRatings.filter((it)=>it !== rating.toString())
   setPageUnames([uPage,...filt])
   setUratings([rating.toString(),...rFilt])
   setUpageType(uPage.toLocaleLowerCase().replace(/\s/g,'-'))
   setUrating(rating.toString())
   setUauthor(author)
   setUcontent(content)
   setUid(uId)
   setReviewUPopup(true)
}
  

const StarIconPrinter = ({ numberOfTimes }) => {
  const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
    <AiFillStar key={index} className='text-b7 text-sm' /> // Render the star icon component for each iteration
  ));

  return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
};
const StarIconPrinter2 = ({ numberOfTimes }) => {
  const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
    <AiFillStar key={index} className='text-gray-300 text-sm' /> // Render the star icon component for each iteration
  ));

  return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
};
  
  return (
    <>
        <Popup state={reviewPopup} setState={setReviewPopup}>
          <form onSubmit={Submit} className='flex flex-col space-y-3' >
           <h1 className="font-semibold text-center" >Create a Review</h1>
           <SelectInput widthFull="true" name="type" title="Select Page" iscompulsory="true" onChange={e=>setPageType(e.target.value)} options={pageNames} error={errors && errors.includes('PageType is Required!') ? true : false} errormessage="PageType is Required!"  />
           <TextInput  name="author" title="Author Name" iscompulsory="true" type="text" value={author} onChange={e=>setAuthor(e.target.value)} placeholder="Jhon Doe" error={errors && errors.includes('PageType is Required!') ? true : false} errormessage="PageType is Required!" />
           <SelectInput widthFull="true" name="rating" title="Review Rating" iscompulsory="true" onChange={e=>setRating(e.target.value)} options={['3','4','5']} error={errors && errors.includes('Rating is Required!') ? true : false} errormessage="Rating is Required!" />
           <TextArea   name="content" title="Review Content" iscompulsory="true" type="text" value={content} onChange={e=>setContent(e.target.value)} placeholder="Write Review Here..." error={errors && errors.includes('Content is Required!') ? true : false} errormessage="Content is Required!" />
           <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' >{loading ? <img src="/loader-bg.gif" className='w-4 h-4 ml-2' />:<><span className='text-xs' >Submit</span><BsArrowRightShort className='text-2xl' /></> }</a></button>
          </form>
        </Popup>
        <Popup state={reviewUPopup} setState={setReviewUPopup}>
          <form onSubmit={UpdateReview} className='flex flex-col space-y-3' >
           <h1 className="font-semibold text-center" >Update Review</h1>
           <SelectInput widthFull="true" name="type" title="Select Page" iscompulsory="true" onChange={e=>setUpageType(e.target.value)} options={pageUnames} error={errors && errors.includes('PageType is Required!') ? true : false} errormessage="PageType is Required!"  />
           <TextInput width="full" name="author" title="Author Name" iscompulsory="true" type="text" value={uAuthor} onChange={e=>setUauthor(e.target.value)} placeholder="Jhon Doe" error={errors && errors.includes('PageType is Required!') ? true : false} errormessage="PageType is Required!" />
           <SelectInput widthFull="true" name="rating" title="Review Rating" iscompulsory="true" onChange={e=>setUrating(e.target.value)} options={uRatings} error={errors && errors.includes('Rating is Required!') ? true : false} errormessage="Rating is Required!" />
           <TextArea  name="content" title="Review Content" iscompulsory="true" type="text" value={uContent} onChange={e=>setUcontent(e.target.value)} placeholder="Write Review Here..." error={errors && errors.includes('Content is Required!') ? true : false} errormessage="Content is Required!" />
           <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' >{upLoading ? <img src="/loader-bg.gif" className='w-4 h-4 ml-2' />:<><span className='text-xs' >Submit</span><BsArrowRightShort className='text-2xl' /></> }</a></button>
          </form>
        </Popup>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
        <AdminAccount>
          <div className='flex items-center mb-5 py-3 rounded-3xl px-10 w-full' >
          <SelectInput widthFull="true" name="sectionType" title="Filter Section Testimonials" iscompulsory="false" onChange={e=>setSelectedSection(e.target.value)} options={pageNames}  /> 
           <div className='flex w-full justify-end space-x-3' >
            <AiFillPlusCircle onClick={()=>setReviewPopup(true)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />   
           </div>
          </div>
           {isLoading ? <div className='flex mt-32 justify-center w-full h-full' >
             <img src="/loader-bg.gif" className='w-24 h-24' />
           </div> : reviews.length > 0 ? <><div className="grid grid-cols-2 gap-x-5 gap-y-5 w-full">
             
           {reviews.map((clientreview, index) => (
                    <div key={index}>
                     <div style={{ backgroundColor: '#F5F5F5' }} className="flex flex-col shadow-sm px-5 py-3 rounded-xl xl:max-h-[170px] sm:mx-2">
                      <div className='flex items-center' >
                       <div className="flex mt-2"><StarIconPrinter numberOfTimes={clientreview.rating} /><StarIconPrinter2 numberOfTimes={5 - clientreview.rating} /></div>
                       <div className='flex space-x-1 items-center w-full justify-end' >
                        <span title="Edite Review" onClick={e=>{handleUpdatePopup(e,clientreview._id,clientreview.author,clientreview.content,clientreview.rating,clientreview.pageType)}} className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-[6px] w-fit rounded-full cursor-pointer py-[6px]' ><BsPencil className="text-sm" /></span>
                        <span title="Duplicate Review" onClick={e=>DuplicateReview(e,clientreview._id)} className='flex items-center justify-center bg-b7 text-white hover:bg-white hover:text-b7 border-2 border-white hover:border-b7 text-sm px-[6px] w-fit rounded-full cursor-pointer py-[6px]' >{dupLoading ? <img src="/loader-bg.gif" className='w-4 h-4' />:<HiOutlineDocumentDuplicate className="text-[14px]" />}</span>
                        <span title="Delete Review" onClick={e=>DeleteReview(e,clientreview._id)} className='flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-[6px] w-fit rounded-full cursor-pointer py-[6px]' >{delLoading ? <img src="/loader-bg.gif" className='w-4 h-4' />: <BsFillTrashFill className="text-sm" />}</span>
                       </div>
                      </div>
                      
                      <p className="text-sm font-semibold mt-1">{clientreview.content && clientreview.content.length > 90 ? clientreview.content.substring(0,90) + '...': clientreview.content }</p>
                      <a href='' className="text-sm text-b6 mt-2">Read More</a>
                      <div className="flex items-center">
                        <h5 className="text-sm mt-2 w-10/12">{clientreview.author}</h5>
                      </div>
                     </div>
                    </div>
                ))}
             
           
           </div>
           <Pagination2 page={page} setPage={setPage} totalPages={totalPages} />
           </>
           :
           <div className='flex mt-32 justify-center w-full h-full' >
             <img src="/not-found.png" className='w-36 h-36' />
           </div>
           }
      </AdminAccount>
        <ToastContainer />
    </>
  )
}

export default ManageReviews