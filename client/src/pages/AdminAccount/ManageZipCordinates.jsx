import React, { useEffect, useState } from 'react'
import AdminAccount from '../../layout/AdminAccount'
import Popup from '../../components/AdminDashboard/Popup'
import TextAreaInput from '../../components/TextInput/TextAreaInput'
import {getAllZipCords,getSingleZipCords,updateZipCords,createZipCords} from '../../api/admin/zipCords'
import Table from '../../components/AdminDashboard/ZipCords/Table'
import TextInput from '../../components/TextInput/TextInput'
import Toast from '../../utils/Toast'
import {BiRefresh} from 'react-icons/bi'
import { Checkbox } from '@material-tailwind/react'

const ManageZipCordinates = () => {
 
  const [zipLoading,setZipLoading] = useState(false)
  const [zips,setZips] = useState([])

  const GetAllZipCords = async (e) => {
    setZipLoading(true)
    const res = await getAllZipCords();
    if(res.status === 200){
      setZips(res.data.zips)
      setZipLoading(false)
    }else{
      setZips([])
      setZipLoading(false)
    }
  }

  useEffect(()=>{
    GetAllZipCords()
  },[])

  const Refresh = async (e) => {
    e.preventDefault()
    GetAllZipCords()
  }

  const [uLoading,setUloading] = useState(null) 
  const [uPopup,setUpopup] = useState(false)
  const [data,setData] = useState({zipCode:'',country:'',city:'',state:'',raw:null,zoom:null,isRaw:false})

  const handleUpdatePopup = async (e,id) => {
    e.preventDefault()
    setUloading(id)
    const res = await getSingleZipCords({id:id});
    if(res.status === 200){
      setData({id:res.data._id,zipCode:res.data.zipCode,country:res.data.country,city:res.data.city,state:res.data.state,raw:res.data.raw,zoom:res.data.zoom})
      setUloading(null)
      setUpopup(true)
    }else{
      setUloading(null)
      Toast(res.data.message,'error',1000)
    }
  }

  const [updateLoading,setUpdateLoading] = useState(false)

  const UpdateZipCode = async (e) => {
    e.preventDefault()
    setUpdateLoading(true)
    const res = await updateZipCords(data)
    if(res.status === 200){
      GetAllZipCords()
      Toast(res.data.msg,'success',1000)
      setUpdateLoading(false)
      setUpopup(false)
    }else{
      setUpdateLoading(false)
      Toast(res.data.message,'error',1000)
    }

  }

  const [cPopup,setCpopup] = useState(false)
  const [createLoading,setCreateLoading] = useState(false)
  const [nZip,setNzip] = useState('')

  const CreateZipCode = async (e) => {
    e.preventDefault()
    setCreateLoading(true)
    const res = await createZipCords({zip:nZip})
    if(res.status === 200){
      Toast(res.data.msg,'success',1000)
      setNzip('')
    }else{
      Toast(res.data.message,'error',1000)
    }
  }

  return (
    <>
    <Popup width="w-11/12" zindex="z-[99]" state={uPopup} setState={setUpopup} >
     <form onSubmit={UpdateZipCode} className='flex flex-col w-11/12 space-y-5' >
     <h4 className='font-semibold text-xl text-center' >Upadte Zip Cordinates</h4>
     <div className='flex space-x-2 w-full' >
      <div className='flex flex-col items-center space-y-3 w-3/12 ' >
      <TextInput title="Zip Code" width="full" value={data.zipCode} onChange={(e)=>setData({...data,zipCode:e.target.value})} />
      <TextInput title="Country" width="full" value={data.country} onChange={(e)=>setData({...data,country:e.target.value})} />
      <TextInput title="State" width="full" value={data.state} onChange={(e)=>setData({...data,state:e.target.value})} />
      <TextInput title="City" width="full" value={data.city} onChange={(e)=>setData({...data,city:e.target.value})} />
      <TextInput title="City" type="number" width="full" value={data.zoom} onChange={(e)=>setData({...data,zoom:e.target.value})} />
      <div className='flex items-center' ><Checkbox ripple={false} checked={data.isRaw} onChange={(e)=>{e.target.checked ? setData({...data,isRaw:true}):null}} className='checked:bg-b3 checked:text-white' /><span className='flex text-sm w-max' >Is Coordinates Changed?</span></div>
      </div>
      <TextAreaInput title="Map Cordinates" height="h-72" width="full" value={data.raw} onChange={(e)=>setData({...data,raw:e.target.value})} />
     </div>
     <div className='flex justify-center w-full' ><button type="submit" className='flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3' >{updateLoading ? <img src='/loader-bg.gif' className='w-8' /> : <span className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Update</span></span>}</button></div>      
     </form>
    </Popup>
    <Popup state={cPopup} setState={setCpopup} >
    <form onSubmit={CreateZipCode} className='flex flex-col w-11/12 space-y-5' >
     <h4 className='font-semibold text-xl text-center' >Upadte Zip Cordinates</h4>
     <div className='flex justify-center space-x-2 w-full' >
      <TextInput title="Zip Code" value={nZip} onChange={(e)=>setNzip(e.target.value)} />
     </div>
     <div className='flex justify-center w-full' ><button type="submit" className='flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3' >{createLoading ? <img src='/loader-bg.gif' className='w-8' /> : <span className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span></span>}</button></div>      
     </form>
    </Popup>
    <AdminAccount>
    <div className='flex justify-end space-x-2 w-full' ><button onClick={()=>setCpopup(true)} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3' >{updateLoading ? <img src='/loader-bg.gif' className='w-8' /> : <span className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Add Zip Code</span></span>}</button><button onClick={Refresh} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3' >{updateLoading ? <img src='/loader-bg.gif' className='w-8' /> : <span className='flex items-center text-center  w-fit px-1 rounded-md text-white font-semibold' ><BiRefresh className={`text-xl ${zipLoading?'animate-spin':null}`} /></span>}</button></div>      
     {zipLoading ? <div className='flex justify-center items-center w-full h-52' ><img src='/loader-bg.gif' className='w-16 h-16' /></div> : zips.length > 0 ? <div className='h-screen overflow-x-hidden overflow-y-scroll' ><Table getZips={GetAllZipCords} handleUpdate={handleUpdatePopup} uState={uLoading} zips={zips} /></div> : <div className='flex w-full justify-center' ><img src="/not-found.webp" className='w-32 h-32' /></div>}
    <div className='flex justify-end space-x-2 w-full' ><button onClick={()=>setCpopup(true)} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3' >{updateLoading ? <img src='/loader-bg.gif' className='w-8' /> : <span className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Add Zip Code</span></span>}</button><button onClick={Refresh} type="button" className='flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3' >{updateLoading ? <img src='/loader-bg.gif' className='w-8' /> : <span className='flex items-center text-center  w-fit px-1 rounded-md text-white font-semibold' ><BiRefresh className={`text-xl ${zipLoading?'animate-spin':null}`} /></span>}</button></div>      
    </AdminAccount>
    </>
  )
}

export default ManageZipCordinates