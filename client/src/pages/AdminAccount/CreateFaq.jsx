import React, { useEffect, useState } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {AiFillPlusCircle } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useParams,useNavigate } from 'react-router-dom';
import Popup from '../../components/AdminDashboard/Popup';
import TextInput from '../../components/TextInput/TextInput';
import {BsArrowRightShort} from 'react-icons/bs'
import {createFaq, getFaqs,updateFaq,deleteFaq} from '../../api/admin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import FaqAccordion from '../../components/AdminDashboard/FaqAccordion';
import TextAreaInput from '../../components/TextInput/TextAreaInput';
import Toast from '../../utils/Toast'
import BtnLoader from '../../components/Loader/BtnLoader'

const CreateFaq = () => {

    const faqValidationSchema = Yup.object().shape({
        question: Yup.string().required('Question is required'),
        answer: Yup.string().required('Answer is required'),
        slug: Yup.string().required('Slug is required'),
    });
    const faqUpdateValidationSchema = Yup.object().shape({
        question: Yup.string().required('Question is required'),
        answer: Yup.string().required('Answer is required'),
        _id: Yup.string().required('Slug is required'),
    });

    const {slug} = useParams()
    const navigate = useNavigate();
    const [errors,setErrors] = useState([]);

    const [faqs,setFaqs] = useState([])
    // Create Faq Popup
    const [faqPopup,setFaqPopup] = useState(false)
    // Create Faq
    const [question,setQuestion] = useState('')
    const [answer,setAnswer] = useState('')
    const [submit,setSubmit] = useState(false)
    // Update Faq Popup
    const [updateFaqPopup,setUpdateFaqPopup] = useState(false)
    const [uSubmit,setuSubmit] = useState(false)
    // Update Faq
    const [updatedQuestion,setUpdatedQuestion] = useState('')
    const [updatedAnswer,setUpdatedAnswer] = useState('')
    const [updatedFaqId,setUpdatedFaqId] = useState('')


    const [loading,setLoading] = useState(false)
    const GetFaqs = async () => {
     setLoading(true)
     const res = await getFaqs({slug:slug});
     if(res.status === 200){
      setLoading(false)
      setFaqs(res.data.faqs)
     }else{
      setLoading(false)
     }
    }
    useEffect(() => {
        GetFaqs()
    }, [])

    const CreateFaq = async (e) => {
        e.preventDefault()
        setSubmit(true)
       try{
        const data = {question,answer,slug:slug}
        await faqValidationSchema.validate(data, { abortEarly: false });
    } catch (error) {
        setSubmit(false)
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
        const res = await createFaq({question,answer,slug:slug});
        if(res.status === 200){
         setFaqPopup(false)
         setSubmit(false)
         setQuestion('')
         setAnswer('')
         GetFaqs()
         Toast(res.data.msg,'success',1000)
        }else{
         setSubmit(false)
         setFaqPopup(false)
         Toast(res.data.message,'error',1000)
        }
    }

    const UpdateFaq = async (e) => {
     e.preventDefault()
     setuSubmit(true)
     try{
      const data = {question:updatedQuestion,answer:updatedAnswer,_id:updatedFaqId}
      await faqUpdateValidationSchema.validate(data, { abortEarly: false });
     }catch(error){
      setSubmit(false)
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
      const res = await updateFaq({question:updatedQuestion,answer:updatedAnswer,_id:updatedFaqId});
      if(res.status === 200){
        setSubmit(false)
        GetFaqs()
        setUpdatedQuestion('')
        setUpdatedAnswer('')
        setUpdatedFaqId('')
        setUpdateFaqPopup(false)
        Toast(res.data.msg,'success',1000)
      }else{
        setSubmit(false)
        setUpdateFaqPopup(false)
        Toast(res.data.message,'error',1000)
      }
    }
    
    const [del,setDel] = useState('')

    const DeleteFaq = async (e,faqId) => {
     e.preventDefault()
     setDel(faqId)
     const data = {_id:faqId}
     const res = await deleteFaq(data);
     if(res.status === 200){
      setDel('')
      GetFaqs()
      Toast(res.data.msg,'success',1000)
     }else{
      setDel('')
      Toast(res.data.message,'error',1000)
     }
    }

    return (
        <>
          <Popup state={updateFaqPopup} setState={setUpdateFaqPopup}>
           <form className='flex flex-col space-y-3 w-10/12' >
            <h1 className="font-semibold" >Update FAQ</h1>
            <div className='flex flex-col items-center space-y-2' >
             <TextInput  width="full" name="question" title="Faq Question" iscompulsory="true" type="text" value={updatedQuestion} onChange={(e)=>setUpdatedQuestion(e.target.value)}  placeholder="Enter Faq Question"  />
             <TextAreaInput width="full" name="answer" title="Faq Answer" iscompulsory="true" type="text" value={updatedAnswer} onChange={(e)=>setUpdatedAnswer(e.target.value)} placeholder="Enter Faq Answer"  />
             <button onClick={UpdateFaq} type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-6/12 bg-b3' ><span className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' >{uSubmit?<BtnLoader style="w-5" />:<><span className='text-xs' >Update</span><BsArrowRightShort className='text-2xl' /></>}</span></button>
            </div>
           </form>
          </Popup>
          <Popup state={faqPopup} setState={setFaqPopup}>
           <form className='flex flex-col space-y-3 w-10/12' >
            <h1 className="font-semibold" >Create FAQ</h1>
            <div className='flex flex-col items-center space-y-2' >
            <TextInput  width="full" title="Faq Question" iscompulsory="true" type="text" value={question} onChange={(e)=>setQuestion(e.target.value)}  placeholder="Enter Faq Question"  />
            <TextAreaInput width="full" title="Faq Answer" iscompulsory="true" type="text" value={answer} onChange={(e)=>setAnswer(e.target.value)} placeholder="Enter Faq Answer"  />
            <button onClick={CreateFaq} type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-6/12 bg-b3' ><span className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' >{submit?<BtnLoader style="w-5" />:<><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></>}</span></button>
            </div>
           </form>
          </Popup>
            <AdminAccount>
             <div className='flex w-full items-center space-x-3 mb-5' >
             <BsFillArrowLeftCircleFill className='text-2xl text-b3 cursor-pointer' onClick={()=>navigate(-1)} />
              <div className='flex w-full justify-end space-x-3' >
               <AiFillPlusCircle onClick={()=>setFaqPopup(true)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />
              </div>
             </div>
              
              <div className='flex flex-col justify-center space-y-3' >
               {loading ? <BtnLoader style="w-10" /> : faqs.length > 0 ? faqs.map((faq,index)=> <FaqAccordion del={del} key={index} DeleteFaq={DeleteFaq} setUpdatedFaqId={setUpdatedFaqId} setUpdatePopup={setUpdateFaqPopup} setUpdateQuestion={setUpdatedQuestion} setUpdatedAnswer={setUpdatedAnswer} id={faq._id} title={faq.question} parent='gap-3 bg-[#F8FBFB] [&>div>h6]:maxmd:text-sm text-white p-4 md:px-8 md:py-6 rounded-xl border-none text-b18 h-auto' icon='text-xl text-black' textStyle='font-bold text-md text-b18' child='[&>p]:text-sm text-b18 font-normal' answer={faq.answer} />)
               :<h1>No FAQ's Found!</h1>}
              </div>
            </AdminAccount>
        </>
    )
}

export default CreateFaq