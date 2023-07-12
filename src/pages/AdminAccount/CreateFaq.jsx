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
    // Update Faq Popup
    const [updateFaqPopup,setUpdateFaqPopup] = useState(false)
    // Update Faq
    const [updatedQuestion,setUpdatedQuestion] = useState('')
    const [updatedAnswer,setUpdatedAnswer] = useState('')
    const [updatedFaqId,setUpdatedFaqId] = useState('')



    const GetFaqs = async () => {
            const res = await getFaqs({slug:slug});
            console.log(res)
            if(res.status === 200){
                setFaqs(res.data.faqs)
            }
        }
    useEffect(() => {
        GetFaqs()
    }, [])

    const CreateFaq = async (e) => {
        e.preventDefault()
       try{
        const data = {question,answer,slug:slug}
        await faqValidationSchema.validate(data, { abortEarly: false });
        const res = await createFaq(data);
        if(res.status === 200){
            setFaqPopup(false)
            setQuestion('')
            setAnswer('')
            GetFaqs()
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
        }else{
            setFaqPopup(false)
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
    } catch (error) {
        console.error('Validation errors:', error.errors);
        setErrors(error.errors)
      }
    }

    const UpdateFaq = async (e) => {
        e.preventDefault()
       try{
        const data = {question:updatedQuestion,answer:updatedAnswer,_id:updatedFaqId}
        await faqUpdateValidationSchema.validate(data, { abortEarly: false });
        const res = await updateFaq(data);
        if(res.status === 200){
            GetFaqs()
            setUpdatedQuestion('')
            setUpdatedAnswer('')
            setUpdatedFaqId('')
            setUpdateFaqPopup(false)
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
        }else{
            setUpdateFaqPopup(false)
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
    } catch (error) {
        console.error('Validation errors:', error.errors);
        setErrors(error.errors)
      }
    }

    const DeleteFaq = async (e,faqId) => {
        e.preventDefault()
       try{
        const data = {_id:faqId}
        const res = await deleteFaq(data);
        if(res.status === 200){
            GetFaqs()
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
    } catch (error) {
        console.error('Validation errors:', error.errors);
      }
    }

    return (
        <>
          <Popup state={updateFaqPopup} setState={setUpdateFaqPopup}>
           <form className='flex flex-col space-y-3 w-10/12' >
            <h1 className="font-semibold" >Update FAQ</h1>
            <div className='flex flex-col items-center space-y-2' >
            <TextInput  width="full" name="question" title="Faq Question" iscompulsory="true" type="text" value={updatedQuestion} onChange={(e)=>setUpdatedQuestion(e.target.value)}  placeholder="Enter Faq Question"  />
            <TextAreaInput name="answer" title="Faq Answer" iscompulsory="true" type="text" value={updatedAnswer} change={(e)=>setUpdatedAnswer(e.target.value)} placeholder="Enter Faq Answer"  />
            <button onClick={UpdateFaq} type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-6/12 bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Update</span><BsArrowRightShort className='text-2xl' /></a></button>
            </div>
           </form>
          </Popup>
          <Popup state={faqPopup} setState={setFaqPopup}>
           <form className='flex flex-col space-y-3 w-10/12' >
            <h1 className="font-semibold" >Create FAQ</h1>
            <div className='flex flex-col items-center space-y-2' >
            <TextInput  width="full" name="question" title="Faq Question" iscompulsory="true" type="text" value={question} onChange={(e)=>setQuestion(e.target.value)}  placeholder="Enter Faq Question"  />
            <TextAreaInput name="answer" title="Faq Answer" iscompulsory="true" type="text" value={answer} change={(e)=>setAnswer(e.target.value)} placeholder="Enter Faq Answer"  />
            <button onClick={CreateFaq} type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-6/12 bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a></button>
            </div>
           </form>
          </Popup>
            <AdminAccount>
             <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
             <div className='flex w-full items-center space-x-3 mb-5' >
             <BsFillArrowLeftCircleFill className='text-2xl text-b3 cursor-pointer' onClick={()=>navigate(-1)} />
              <div className='flex w-full justify-end space-x-3' >
               <AiFillPlusCircle onClick={()=>setFaqPopup(true)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />
              </div>
             </div>
              
              <div className='flex flex-col justify-center space-y-3' >
               {faqs.length > 0 ? faqs.map((faq,index)=> <FaqAccordion key={index} DeleteFaq={DeleteFaq} setUpdatedFaqId={setUpdatedFaqId} setUpdatePopup={setUpdateFaqPopup} setUpdateQuestion={setUpdatedQuestion} setUpdatedAnswer={setUpdatedAnswer} id={faq._id} title={faq.question} parent='gap-3 bg-[#F8FBFB] [&>div>h6]:maxmd:text-sm text-white p-4 md:px-8 md:py-6 rounded-xl border-none text-b18 h-auto' icon='text-xl text-black' textStyle='font-bold text-md text-b18' child='[&>p]:text-sm text-b18 font-normal' answer={faq.answer} />)
               :<h1>No FAQ's Found!</h1>}
              </div>
             <ToastContainer />
            </AdminAccount>
        </>
    )
}

export default CreateFaq