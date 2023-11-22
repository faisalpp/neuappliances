import React, { useState } from 'react'
import TextInput from '../../TextInput/TextInput'
import SelectInput from '../../TextInput/SelectInput'
import Popup from '../Popup'

const Shipping = ({state,setState}) => {

  const [flat,setFlat] = useState(0)
  const [code,setCode] = useState('')

  return (
    <Popup state={state} setState={setState} zindex="z-[99]" >
     <div className=' w-full' >
      <h3 className='text-center font-semibold' >Add Shipping</h3>
      <div className='flex items-center space-x-5 w-full' >
       <div className='flex flex-col w-1/2 space-y-2 items-center justify-center space-x-2 mt-2' >
        <TextInput width="full" value={flat} onChange={(e)=>setFlat(e.target.value)} title="Flat Shipping Fee" iscompulsory="false" type="number" placeholder="0" /> 
        <button className='text-xs bg-b6 px-3 py-1 rounded-lg text-white' >Apply</button>
       </div>
       <div className='flex flex-col w-1/2 space-y-2 items-center justify-center space-x-2 mt-2' >
        <TextInput width="full" value={code} disabled title="Fetch From ZipCode" iscompulsory="false" type="number" placeholder="0" /> 
        <button className='text-xs bg-b6 px-3 py-1 rounded-lg text-white' >Apply</button>
       </div>
      </div>
     </div> 
    </Popup>
  )
}

export default Shipping