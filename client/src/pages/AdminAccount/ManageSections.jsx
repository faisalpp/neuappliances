import React,{useEffect,useRef,useState} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import Table from '../../components/AdminDashboard/Table'
import Popup from '../../components/AdminDashboard/Popup';
import {getSection,updateSectionsIndex} from '../../api/admin'
import {useNavigate, useParams} from 'react-router-dom';
import { toast } from 'react-toastify';
import {AiFillPlusCircle} from 'react-icons/ai'
import {BsArrowRightShort,BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {FiChevronDown} from 'react-icons/fi'
import TextInput from '../../components/TextInput/TextInput';
import {createSection,updateSection,deleteSection} from '../../api/admin'
import * as Yup from 'yup';
import SelectInput from '../../components/TextInput/SelectInput';

const ManageSections = () => {
  const sectionCreationValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    Slug: Yup.string().required('Slug is required'),
    slug: Yup.string().required('Image is required'),
    cardStyle: Yup.string().required('Card Style is required'),
    type: Yup.string().required('Type is required'),
  });
  const sectionUpdateValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    sectionId: Yup.string().required('Section id is required'),
    slug: Yup.string().required('Slug is required'),
    cardStyle: Yup.string().required('Card Style is required'),
    type: Yup.string().required('Type is required'),
  });

    const { slug } = useParams();
    const [sections,setSections] = useState([]);
    const [iLoading,setIloading] = useState(false);

    const navigate = useNavigate()


    const data = {slug};

    const GetSections = async () => {
        const res = await getSection(data);
        
        if(res.status === 200){
            setSections(res.data.categorySections);
        }else{
            setSections([])
        }
    }
    useEffect(() => {
        GetSections()
    }, [])

    const UpdateSectionsIndex = async(e) => {
        e.preventDefault()
        setIloading(true)
        const res = await updateSectionsIndex({sections:sections});
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
          GetSections()
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
        
      const [errors,setErrors] = useState([]);
      const [popup,setPopup] = useState(false);
      const [submit,setSubmit] = useState(false);
      const [title,setTitle] = useState('');
      const [Slug,setSlug] = useState('');
      const [cardStyle,setCardStyle] = useState('head-rating-card');
      const [type,setType] = useState('cosmetic-rating');

      const handleTitle = (e) => {
        setTitle(e.target.value);
        const modSlug = e.target.value.toLowerCase().replace(/ /g, "-")
        setSlug(modSlug);
     }


     const CreateCategorySection = async (e) => {
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
          GetSections()
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

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, function(match) {
        return match.toUpperCase()
    }).replace(/\-/g, ' ');
}


  const [uPopup,setUpopup] = useState();
  const [sectionId,setSectionId] = useState();
  const [uTitle,setUtitle] = useState('');
  const [uType,setUtype] = useState('');
  const [uTypes,setUtypes] = useState([]);
  const [uSlug,setUslug] = useState('');
  const [uCardStyle,setUcardStyle] = useState('');
  const [uCardStyles,setUcardStyles] = useState([]);
  const [uErrors,setUerrors] = useState([]);
  
  useEffect(()=>{
   setUcardStyles(['Head Rating Card','Rating Card','Color Card','Brand Card','General Card','2xN Card'])
   setUtypes(['Cosmetic Ratings','Features','Types','Finishes & Colors','Brands','Fuel Types'])
  },[])

  const handleUtitle = (e) => {
    setUtitle(e.target.value);
    const modSlug = e.target.value.toLowerCase().replace(/\s/g, "-")
    setUslug(modSlug);
 }

  const handleUpdateStates = (e,sectId,title,type,slug,cardStyle) => {
    e.preventDefault()
    setSectionId(sectId)
    setUtitle(title)
    setUtype(type)
    const filtTypes = uTypes.filter((item) =>  item !== type)
    const res = [capitalizeWords(type),...filtTypes]
    const uniqueTypes = res.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    setUtypes(uniqueTypes)
    setUslug(slug)
    const filtCardStyle = uCardStyles.filter((item) =>  item !== cardStyle)
    const result = [capitalizeWords(cardStyle),...filtCardStyle]
    const uniqueArray = result.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    setUcardStyles(uniqueArray)
    setUcardStyle(cardStyle)
    setUpopup(true)
  }

  const UpdateCategorySection = async (e) => {
    e.preventDefault()
    setSubmit(true)
    const data = {title:uTitle,sectionId,cardStyle:uCardStyle,slug:uSlug,type:uType}
     try{
    await sectionUpdateValidationSchema.validate(data, { abortEarly: false });
   } catch (error) {
     if(error){
       setUerrors(error.errors)
     }else{
       setUerrors([])
     }
   }
   const res = await updateSection(data);
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
        GetSections()
        setUtitle('');
        setUslug('');
        setUpopup(false)
      }else{
        setSubmit(false)
        setUtitle('');
        setUslug('');
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

    

    
    return (
        <>
        {/* Create Section Start */}
        <Popup state={popup} setState={setPopup}>
         <form className='flex flex-col space-y-3' >
          <h1 className="font-semibold" >Create Category Section</h1>
          <TextInput  width="full" name="title" title="Title" iscompulsory="true" type="text" value={title} onChange={handleTitle} error={errors && errors.includes('Name is required') ? true : false} errormessage="Title is Required" placeholder="Refrigerators By Styles"  />
          <TextInput readOnly  width="full" name="slug" title="Slug" iscompulsory="true" type="text" value={Slug} onChange={(e)=>setSlug(e.target.value)} error={errors && errors.includes('Slug is required') ? true : false} errormessage="Slug is Required" placeholder="refrigerators-by-styles"  />
          {/* Select Category */}
          <div>
           <label className='text-b16 font-semibold text-xs block mb-2'>Section Card Style<i className='text-red-500' >*</i></label>
           <div className='relative'>
            <select onChange={e=>setCardStyle(e.target.value)} className='border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none'>
             <option value='head-rating-card' >Head Rating Card</option>
             <option value='rating-card' >Rating Card</option>
             <option value='color-card' >Color Card</option>
             <option value='brand-card' >Brand Card</option>
             <option value='general-card' >General Card</option>
             <option value='2xn-card' >2xN Card</option>
            </select>
            <FiChevronDown className='absolute right-4 top-3' />
           </div>
          </div>
          {/* Select Category  End*/}
          <div>
           <label className='text-b16 font-semibold text-xs block mb-2'>Section Type<i className='text-red-500' >*</i></label>
           <div className='relative'>
            <select onChange={e=>setType(e.target.value)} className='border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none'>
             <option value='cosmetic-ratings' >Cosmetic Rating</option>
             <option value='features' >Product Features</option>
             <option value='types' >Product Types</option>
             <option value='finishes-&-colors' >Product Finishes & Colors</option>
             <option value='brands' >Product Brands</option>
             <option value='fuel-types' >Product Fuel Types</option>
            </select>
            <FiChevronDown className='absolute right-4 top-3' />
           </div>
          </div>

          <button type="button" onClick={CreateCategorySection} className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> :<a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a>}</button>
         </form>
        </Popup>
        {/* Create Section End */}

        {/* Update Section Start */}
        <Popup state={uPopup} setState={setUpopup}>
         <form className='flex flex-col space-y-3' >
          <h1 className="font-semibold" >Update Category Section</h1>
          <TextInput  width="full" name="title" title="Title" iscompulsory="true" type="text" value={uTitle} onChange={handleUtitle} error={uErrors && uErrors.includes('Title is required') ? true : false} errormessage="Title is Required" placeholder="Refrigerators By Styles"  />
          <TextInput readOnly  width="full" name="uslug" title="Slug" iscompulsory="true" type="text" value={uSlug} onChange={(e)=>setUslug(e.target.value)} error={uErrors && uErrors.includes('Slug is required') ? true : false} errormessage="Slug is Required" placeholder="refrigerators-by-styles"  />
          <SelectInput widthFull="true" onChange={e=>setUcardStyle(e.target.value)} options={uCardStyles} />
          <SelectInput widthFull="true" onChange={e=>setUtype(e.target.value)} options={uTypes} />
          <button type="button" onClick={UpdateCategorySection} className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> :<a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Update</span><BsArrowRightShort className='text-2xl' /></a>}</button>
         </form>
        </Popup>
        {/* Update Section End */}


        <AdminAccount>
         {/* Products Operations */}
         
         <div className='flex mb-5 py-3 rounded-3xl px-10 w-full' >
             <BsFillArrowLeftCircleFill onClick={()=>navigate(-1)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />
            <div className='flex w-full justify-end space-x-3' >
             <AiFillPlusCircle onClick={()=>setPopup(true)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />
            </div>
          </div>

         {sections.length > 0 ?
         <div className='flex flex-col justify-center'>
          <Table getSections={GetSections} sections={sections} setSections={setSections} pop={handleUpdateStates}  />
          <button type="button" onClick={e=>UpdateSectionsIndex(e)} className='flex self-end mt-2 items-center cursor-pointer rounded-md py-1 w-fit bg-b3' >{iLoading ? <img src='/loader-bg.gif' className='w-8' /> :<a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Save</span></a>}</button>
         </div>:<div className='flex justify-center w-full h-full' >
                <img src="/not-found.png" className='w-36 h-36' />
               </div>}
        </AdminAccount>
        </>
    )
}

export default ManageSections