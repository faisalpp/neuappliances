import React,{useState,useRef,useEffect} from 'react'
import TextAreaInput from '../../TextInput/TextAreaInput'
import Popup from '../../AdminDashboard/Popup'
import {AiFillCloseCircle} from 'react-icons/ai'
import Table from '../../AdminDashboard/ShippingMethod/Table';
import TextInput from '../../TextInput/TextInput'

const UpdateZone = ({popup,setPopup}) => {

    // Create Shipping Zone States
    const [pop,setPop] = useState(false)
    const [zoneName,setZoneName] = useState('')
    const [description,setDescription] = useState('')
  
    const [zipField,setZipField] = useState('')
    const [zipsData,setZipsData] = useState(['1234,5678,91011'])
    const [zips,setZips] = useState([])
    const zipRef = useRef()

    useEffect(()=>{
      if(popup.state){
          setPop(true)
       }else{
        setPop(false)
       }
    },[popup])
  
    const handleEnterKey = (e) => {
      if (e.key === ' ' && zipField.length > 0) {
        setZips(prev=>{return [...prev,zipField]})
        setTimeout(() => {
          setZipField('')
          zipRef.current.focus();
          zipRef.current.setSelectionRange(0, 0);
        }, 0);
      }
    }
  
    const deleteKeyword = (e,index) => {
      e.preventDefault()
       const updateMetaKeywords = zips.filter((_,indx)=> indx !== index)
       setZips([...updateMetaKeywords])
    }


  return (
    <>
    <Popup state={pop} setState={setPop} width="w-8/12" zindex="z-[99]" >
    <form className='flex flex-col space-y-3 w-full' >
     <h1 className="font-semibold text-center" >Create Shipping Zone</h1>
     <div className='flex space-x-5 w-full' >
      <div className='flex flex-col space-y-5 w-1/2' >
       <TextInput width="full" title="Zone Name" iscompulsory="true" type="text" value={zoneName} onChange={(e)=>setZoneName(e.target.value)}  placeholder="Enter Shipping Zone Name"  />
       <TextAreaInput width="full" title="Description" type="text" value={description} change={(e)=>setDescription(e.target.value)} placeholder="Enter Zone Description..."  />       
      </div>
      {/* Auto Suggest Multi Input Start */}
     <div className='flex flex-col w-1/2' >
     <h5 className='text-xs font-semibold mb-1' >Enter Zip Cods</h5>
     <div className='flex flex-wrap w-full py-3 px-2 rounded-md border-[1px] borders-[0,0,0,0,0.15]' >
      <input ref={zipRef} placeholder='Hit Space To Insert' value={zipField} onKeyDown={e => handleEnterKey(e)} onChange={e=>setZipField(e.target.value)} className='border-none outline-none text-xs' />
     </div>
     <h5 className='text-xs font-semibold my-1' >Selected Zip Cods</h5>
     <div className="flex flex-wrap mb-2 gap-y-2 gap-x-2 px-2 py-2 w-full rounded-md h-28 border-[1px] border-[0,0,0,0,0.15]" >
       {zips.length > 0 ? zips.map((item,index)=><span key={index} className="flex items-center bg-b6 text-xs px-2 py-1 text-white rounded-2xl" >{item}<AiFillCloseCircle onClick={e=>deleteKeyword(e,index)} className='text-white bg-red-500 ml-1 text-xs cursor-pointer rounded-full' /></span>):<h5 className='text-red-500 text-xs' >No Zip Codes Selected</h5>}
      </div>
     </div>
     {/* Auto Suggest Multi Input End */}
     </div>
     {/* Manage Shipping Methods Start */}
      <div className='flex flex-col' >
       <div className='flex items-center justify-end w-full ' >
        <button onClick={()=>setAddMethod(true)} type="button" className='cursor-pointer rounded-md py-1 w-42 bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Add Shipping Method</span></a></button>            
       </div>
       <Table/>
      </div> 
     {/* Manage Shipping Methods End */}
      <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-32 bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Save</span></a></button>      
    </form>
        </Popup>
        </>
  )
}

export default UpdateZone