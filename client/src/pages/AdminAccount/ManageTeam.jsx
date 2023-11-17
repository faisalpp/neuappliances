import React, { useEffect, useRef, useState } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { AiFillPlusCircle } from 'react-icons/ai'
import Popup from '../../components/AdminDashboard/Popup';
import TextInput from '../../components/TextInput/TextInput';
import { BsArrowRightShort, BsPencil } from 'react-icons/bs'
import { createTeamMember, updateTeamMember, updateMemberIndex, deleteTeamMember } from '../../api/admin'
import { GetTeamMember } from '../../api/frontEnd'
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Link } from 'react-router-dom';

const ManageTeam = () => {

  const memberCreationValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    designation: Yup.string().required('Designation is required'),
    image: Yup.string().required('Image is required'),
  });
  const memberUpdateValidationSchema = Yup.object().shape({
    id: Yup.string().required('Id is required'),
    uName: Yup.string().required('Name is required'),
    uDesignation: Yup.string().required('Designation is required'),
    uImage: Yup.string().required('Image is required'),
    oldImg: Yup.string().required('Old Image is required'),
    uTempImg: Yup.string()
  });

  const imgRef = useRef()
  const uImgRef = useRef()
  const [members, setMembers] = useState([])
  const [designation, setDesignation] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const [id, setId] = useState()
  const [uName, setUname] = useState('')
  const [uDesignation, setUdesignation] = useState('')
  const [uImage, setUimage] = useState('')
  const [uTempImg, setUtempImg] = useState('')
  const [tempImg, setTempImg] = useState('/no-person.webp')
  const [oldImg, setOldImg] = useState('')

  const [submit, setSubmit] = useState(false)
  const [uSubmit, setUsubmit] = useState(false)
  const [loading, setLoading] = useState(false)
  const [iLoading, setIloading] = useState(false)


  const [uPopup, setUpopup] = useState(false)
  const [popup, setPopup] = useState(false)

  const [errors, setErrors] = useState([])

  const GetMembers = async () => {
    setLoading(true)
    const res = await GetTeamMember();
    if (res.status === 200) {
      setLoading(false)
      setMembers(res.data.members)
    } else {
      setLoading(false)
      setMembers([])
    }
  }

  useEffect(() => {
    GetMembers()
  }, [])

  const handleImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setTempImg(window.URL.createObjectURL(file))
    }
  }
  const handleUimage = (e) => {
    const file = e.target.files[0]
    if (file) {
      setUimage(file)
      setUtempImg(window.URL.createObjectURL(file))
    }
  }

  const CreateTeamMember = async (e) => {
    e.preventDefault()
    setSubmit(true)
    const formData = new FormData();
    formData.set('image', image);
    formData.set('name', name);
    formData.set('designation', designation);
    try {
      await memberCreationValidationSchema.validate(data, { abortEarly: false });
    } catch (error) {
      if (error) {
        setErrors(error.errors)
      } else {
        setErrors([])
      }
    }
    const res = await createTeamMember(formData);
    if (res.status === 200) {
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
      GetMembers()
      setPopup(false)
      setName('');
      setDesignation('');
      setImage('');
      setTempImg('');
    } else {
      setSubmit(false)
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

  const UpdateTeamMember = async (e) => {
    e.preventDefault()
    setUsubmit(true)
    const formData = new FormData();
    formData.set('id', id);
    formData.set('image', uImage);
    formData.set('oldImg', oldImg);
    formData.set('tempImg', uTempImg);
    formData.set('name', uName);
    formData.set('designation', uDesignation);
    try {
      await memberUpdateValidationSchema.validate(data, { abortEarly: false });
    } catch (error) {
      if (error) {
        setErrors(error.errors)
      } else {
        setErrors([])
      }
    }
    const res = await updateTeamMember(formData);
    if (res.status === 200) {
      setUsubmit(false)
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
      GetMembers()
      setId();
      setUpopup(false)
      setUname('');
      setUdesignation('');
      setUimage('');
      setUtempImg('');
    } else {
      setUsubmit(false)
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

  const updateSelection = (e, name, desg, img, id) => {
    e.preventDefault()
    
    setId(id)
    setUname(name)
    setUdesignation(desg)
    setUimage(img)
    setUtempImg(img)
    setOldImg(img)
    setUpopup(true)
  }

  const handleDragEnd = (result) => {
    
    const items = Array.from(members)
    const [recordedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, recordedItem)
    const updatedItems = items.map((item, index) => ({
      ...item,
      index: index + 1 // Add the index property
    }));
    
    setMembers(updatedItems);
  }

  const UpdateMemberIndex = async () => {
    const res = await updateMemberIndex(members);
    if (res.status === 200) {
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
      GetMembers()
    } else {
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

  const [delLoading, setDelLoading] = useState(null)

  const DeleteMember = async (e, id) => {
    e.preventDefault()
    setDelLoading(id)
    const res = await deleteTeamMember({ id: id });
    if (res.status === 200) {
      setDelLoading(null)
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
      GetMembers()
    } else {
      setDelLoading(null)
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
      <Popup state={popup} setState={setPopup}>
        <form className='flex flex-col space-y-3' >
          <h1 className="font-semibold" >Create Team Member</h1>
          <div className='relative w-40 h-40 ' >
            <div className='absolute flex bg-transparent rounded-full w-full h-full' >
              <span onClick={() => { imgRef.current.click(); }} className='absolute left-28 bottom-0 flex items-center h-fit justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2' ><BsPencil className="text-base" /></span>
            </div>
            <img className="rounded-full h-40 w-40 mx-auto" src={tempImg} alt="" />
            <input ref={imgRef} type="file" name="image" onChange={e => handleImage(e)} className='hidden' />
          </div>
          <TextInput width="full" name="name" title="Name" iscompulsory="true" type="text" value={name} onChange={(e) => setName(e.target.value)} error={errors && errors.includes('Name is required') ? true : false} errormessage="Title is Required" placeholder="Scott" />
          <TextInput width="full" name="designation" title="Designation" iscompulsory="true" type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} error={errors && errors.includes('Designation is required') ? true : false} errormessage="Title is Required" placeholder="CEO & Founder" />
          <button type="button" onClick={CreateTeamMember} className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{submit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a>}</button>
        </form>
      </Popup>
      <Popup state={uPopup} setState={setUpopup}>
        <form className='flex flex-col space-y-3' >
          <h1 className="font-semibold" >Update Team Member</h1>
          <div className='relative w-40 h-40 ' >
            <div className='absolute flex bg-transparent rounded-full w-full h-full' >
              <span onClick={() => { uImgRef.current.click(); }} className='absolute left-28 bottom-0 flex items-center h-fit justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2' ><BsPencil className="text-base" /></span>
            </div>
            <img className="rounded-full h-40 w-40 mx-auto" src={uTempImg} alt="" />
            <input ref={uImgRef} type="file" name="image" onChange={handleUimage} className='hidden' />
          </div>
          <TextInput width="full" name="name" title="Name" iscompulsory="true" type="text" value={uName} onChange={(e) => setUname(e.target.value)} error={errors && errors.includes('Name is required') ? true : false} errormessage="Title is Required" placeholder="Scott" />
          <TextInput width="full" name="designation" title="Designation" iscompulsory="true" type="text" value={uDesignation} onChange={(e) => setUdesignation(e.target.value)} error={errors && errors.includes('Designation is required') ? true : false} errormessage="Title is Required" placeholder="CEO & Founder" />
          <button type="button" onClick={UpdateTeamMember} className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' >{uSubmit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Update</span><BsArrowRightShort className='text-2xl' /></a>}</button>
        </form>
      </Popup>
      <AdminAccount>
        <div className='flex mb-5 py-3 rounded-3xl px-10 w-full' >
          <button type="button" onClick={UpdateMemberIndex} className='flex justify-center items-center cursor-pointer rounded-md py-1 w-fit bg-b3' >{iLoading ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Save</span></a>}</button>
          <div className='flex w-full justify-end space-x-3' >
            <AiFillPlusCircle onClick={() => setPopup(true)} className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' />
          </div>
        </div>
        {/* Meat Team Cards */}
        <DragDropContext onDragEnd={handleDragEnd} className='w-full 3xl:max-w-1680px mx-auto'>
          <Droppable droppableId='nnn' className='3xl:px-[60px] flex flex-wrap justify-center 3xl:justify-start gap-10 3xl:gap-20'>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="flex flex-wrap justify-center 3xl:justify-start gap-10 3xl:gap-20">
                {loading ? <div className='flex items-center justify-center w-full' ><img src="/loader-bg.gif" className='w-10 h-10' /></div> : members.length > 0 ? members.map((team, index) => (
                  <Draggable key={team._id} draggableId={team._id} index={index}>
                    {(provided) => (
                      <figure {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} title="Draggable!" key={index} className="flex flex-col border hover:border-b6 border-b20 rounded-[20px] hover:cursor-pointer hover:shadow-s1 duration-300 p-5 w-[200px]">
                        <img className="w-40 h-40 rounded-full mx-auto" src={team.image} alt={`${team.name} Image`} />
                        <div className="pt-[10px]">
                          <figcaption className="font-medium text-center">
                            <div className='font-bold text-[22px] text-b18 mb-3'>
                              {team.name}
                            </div>
                            <div className='text-b3'>
                              {team.designation}
                            </div>
                          </figcaption>
                        </div>
                        <div className='flex space-x-3' >
                          <button type="button" onClick={e => updateSelection(e, team.name, team.designation, team.image, team._id)} className='flex self-center justify-center items-center cursor-pointer rounded-md py-1 mt-2 w-fit bg-b3' >{uSubmit ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Update</span></a>}</button>
                          <Link onClick={e => DeleteMember(e, team._id)} className='flex self-center justify-center items-center cursor-pointer rounded-md py-1 mt-2 w-fit bg-red-500' >{delLoading === team._id ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Delete</span></a>}</Link>
                        </div>
                      </figure>
                    )}
                  </Draggable>
                )) : <div className='flex justify-center w-full h-full' >
                  <img src="/not-found.webp" className='w-36 h-36' />
                </div>}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </AdminAccount>
    </>
  )
}

export default ManageTeam