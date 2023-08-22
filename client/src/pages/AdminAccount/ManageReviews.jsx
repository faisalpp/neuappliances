import React,{useState,useEffect} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from '../../components/AdminDashboard/Popup';
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillPlusCircle} from 'react-icons/ai'
import SelectInput from '../../components/TextInput/SelectInput';
import TextArea from '../../components/TextInput/TextAreaInput';
import TextInput from '../../components/TextInput/TextInput';
import {createReview} from '../../api/admin'
import axios from 'axios'
import Loader2 from '../../components/Loader/Loader2'
import Pagination from '../../components/Pagination/Pagination';
import * as Yup from 'yup';


const ManageReviews = () => {
  const reviewValidationSchema = Yup.object().shape({
    author: Yup.string().required('Author Name is Required!'),
    pageType: Yup.string().required('PageType is Required!'),
    rating: Yup.string().required('Rating is Required!'),
    content: Yup.string().required('Content is Required!'),
  });

  const [reviewPopup,setReviewPopup] = useState(false)
  const [selectedSection,setSelectedSection] = useState('')

  const [review,setReview] = useState([])
  const [errors,setErrors] = useState([])

  const [author,setAuthor] = useState('');
  const [pageType,setPageType] = useState('homePage-footer-review');
  const [content,setContent] = useState('');
  const [rating,setRating] = useState('3');

  const [loading,setLoading] = useState(false)
  
  const pageNames = ['HomePage Footer Review','How It Works 1st Section Review (What We Sell Tab)','How It Works 2nd Section Review (Wat We Sell Tab)','How It Works Review (Ratings Tab)','How It Works Review (Tested Tab)','How It Works Review (Photo Tab)','How It Works Review (Delivered Tab)','How It Works 1st Section Review (Hassle Free Tab)','How It Works 2nd Section Review (Hassle Free Tab)','Faq Page Review','Our Story Page Review','Our Showroom Page Review','Our Companies Page Review','Appliance Repair Page Review','Measuring Guide Page Review','Helpfull Appliance Tips Page Review','Financing Page Review','Blog Page Review']

  const Submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const err = await reviewValidationSchema.validate({author,pageType,content,rating}, { abortEarly: false });
      const data = {author:author,pageType,content:content,rating:rating}
      const res = await createReview(data);
      if(res.status === 200){
        setLoading(false)
          setReviewPopup(false)
          toast.success(res.data.msg, {
              position: "top-right",
              autoClose: 5000,
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
              autoClose: 5000,
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

  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(3);
  const [totalPages,setTotalPages] = useState(0);
  // Loader
  const [isLoading,setIsLoading] = useState(false)

//   useEffect(() => {
//     const GetLoopMedia = async () => {
//         setIsLoading(true)
//         const params = {page:page,limit:limit};
//         const data = {section:selectedSection}
//         const res = await getVideoMedia(params,data);
//         console.log(res)
//         if(res.status === 200){
//             setMedia(res.data.loops)
//             setTotalPages(Math.ceil(res.data.totalCount / limit))
//             setIsLoading(false)
//           }else{
//             setIsLoading(false)
//             console.log(res)
//         }
//     }
//     GetLoopMedia()
// }, [selectedSection])
  
  
  return (
    <>
        <Popup state={reviewPopup} setState={setReviewPopup}>
          <form onSubmit={Submit} className='flex flex-col space-y-3' >
           <h1 className="font-semibold" >Create a Review</h1>
           <SelectInput widthFull="true" name="type" title="Select Page" iscompulsory="true" onChange={e=>setPageType(e.target.value)} options={pageNames} error={errors && errors.includes('PageType is Required!') ? true : false} errormessage="PageType is Required!"  />
           <TextInput  name="author" title="Author Name" iscompulsory="true" type="text" value={author} onChange={e=>setAuthor(e.target.value)} placeholder="Jhon Doe" error={errors && errors.includes('PageType is Required!') ? true : false} errormessage="PageType is Required!" />
           <SelectInput widthFull="true" name="rating" title="Review Rating" iscompulsory="true" onChange={e=>setRating(e.target.value)} options={['3','4','5']} error={errors && errors.includes('Rating is Required!') ? true : false} errormessage="Rating is Required!" />
           <TextArea  name="content" title="Review Content" iscompulsory="true" type="text" value={content} onChange={e=>setContent(e.target.value)} placeholder="Write Review Here..." error={errors && errors.includes('Content is Required!') ? true : false} errormessage="Content is Required!" />
           <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' >{loading ? <img src="/loader-bg.gif" className='w-4 h-4 ml-2' />:<><span className='text-xs' >Submit</span><BsArrowRightShort className='text-2xl' /></> }</a></button>
          </form>
        </Popup>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
        <AdminAccount>
          <div className='flex items-center mb-5 py-3 rounded-3xl px-10 w-full' >
          <SelectInput widthFull="false" name="sectionType" title="Filter Section Videos" iscompulsory="false" onChange={e=>setSelectedSection(e.target.value)} options={pageNames}  /> 
           <div className='flex w-full justify-end space-x-3' >
            <AiFillPlusCircle onClick={()=>setReviewPopup(true)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />   
           </div>
          </div>
           {isLoading ? <div className='flex mt-32 justify-center w-full h-full' >
             <img src="/loader-bg.gif" className='w-24 h-24' />
           </div> : review.length > 0 ? <><div className="grid grid-cols-4 gap-x-5 gap-y-5 w-full">
             {review.map((item,index)=><video key={index} controls className='object-cover rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src={item.url} />)}
           </div>
           <Pagination page={page} setPage={setPage} totalPages={totalPages} />
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